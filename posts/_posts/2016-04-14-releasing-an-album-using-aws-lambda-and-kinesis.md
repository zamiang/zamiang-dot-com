---
layout: post
title: "Lessons from releasing an album using AWS Lambda and Kinesis"
description: ""
category: post
tags: []
---

> Some of the most capable engineers I know are scared of AWS systems like Lambda and Kinesis. They are ‘magical’, use GUIs and are difficult to debug. I hope that this post-mortem, which runs through the challenges, can help people feel more comfortable using these tools when needed.

# Isn’t releasing an album a solved problem?

It’s 2016\. You may think music labels have a way to deliver you digital music. But, outside of iTunes, Spotify and Amazon, you can’t really buy an album by a major artist and get a bunch of audio files. What if an artist wants another option?

A few weeks ago, I was tasked with building an integrations system that could support delivering an email with link to a zip file to customers who buy an album online. Scale was a big concern but a 5 minute wait time for the email was not an issue. That said, there was a complex set of requirements:

*   Each purchase (“Order”) should translate into exactly one email for the user. (Note: The email system can dedupe these using an ID)
*   Music is delivered via a link to a zip file. The zip file is generated in an external system.
*   The system will only receive ‘valid’ orders that will not error in the zip file or email system due to invalid data.
*   During times of high traffic, the system should not fall down but slowing down is OK.
*   The system should not require ongoing maintenance.
*   The system should use Node/Javascript since the team has no familiarity with Ruby or Python.
*   The system must be built in under **5 working days**. (LOL music industry)

# Principals of an event driven AWS integrations system

Using AWS is truly another universe. Systems like Lambda, SNS and Kinesis are similar to systems you may have built or encountered as an engineer. Sadly, experience with similar systems is not enough. Being an ‘ecosystem’, AWS requires a lot of specific ecosystem knowledge. An example of ecosystem knowledge that has no real basis in logic is that SNS and Kinesis can trigger Lambda workers but SQS cannot. 

I can’t list all that specific knowledge here, but I’ve found that keeping a few high level principals in mind helps when fumbling around with the miraiad of AWS services.

## 1\. Events should be replay-able

Replayability is key for a new system that could encounter unanticipated errors in production. Early on we knew this would be a requirement and so we wrote all code with replayablitly in mind. 

For our album delivery system, ‘replayability’ means that we can execute a ‘cleanup’ script to re-run a selection of “Orders” through the system. The actual code for each worker is designed to handle a ‘rerun’ event. As the system runs, it updates a record in DynamoDb. That allows us to replay an order that has a Zip URL but errored sending the email —  it won’t generate a Zip URL, but will try to send the email again.

## 2\. Be a team player

With the power of an infinitely scaleable AWS system in your hands, it is easy to forget about your less powerful friends. Part of the job of a good integrations system is to make sure all systems stay up (and if they go down, that you can recover). If your system puts unanticipated traffic on another system — and that system goes down — you fail.

For this system, we rely on two external APIs with unknown traffic constraints. We need to understand those constraints and build a system that can throttle to ensure they stay up.

## 3\. Log all the things

Integration systems are very, VERY hard to understand. If you aren’t getting the result you expect, did you misconfigure something in the UI or did a worker error? If something is slow, what part of the system slow? 

I highly recommend spending some time creating a CloudWatch dashboard for your project. Below is a screenshot of the one for this project. Note that each column corresponds to an individual service. The columns are ordered to match how order the data moves through the system (Ingester -> Kinesis…)

![](https://cdn-images-1.medium.com/max/1200/1*0yxLWdDSnUT3HdGly_UgIA.png)

# v0.1: Lambda + SNS

The first version of the system was based on one I had worked on at Citi Bike. We built a high throughput system for processing events from the Citi Bike system. The AWS setup went something like this:

> [Queue] > [ElasticBeanstalk app inside VPC] > SNS > Lambda [fork] Multiple SNS > Multiple Lambda (storage, tracking, sending to other systems)

This setup works great if you are going into Amazon infrastructure — but not out. If one system exceeds their provisioned load, the others will either throttle (dynamoDb) or scale up (Lambda, SNS) to meet demand.

For this music project. We did not need to be in a VPC, were not handling as many events and did not need to do as many things with each event. We could be a bit more lightweight:

> [Database of orders] > [Lambda fetching at 5 min interval] > SNS > Lambda that fetches Zip URL + sends email.

SNS ensures ‘at least once’ delivery but we unique in our external systems (noted above). The lambda workers can error gracefully when encountering duplicate events from SNS. No need to double check since the external systems provide those guarantees.

**Sounds like this will work! But lets try to break it.**

First lets check the exact throughput of all our systems. For inbound, the client believed that they could get 1,000 orders a minute or more during initial launch. Earlier, we had been informed that scale was not a problem for the email and zip url system. But, we decide to contact them directly to get exact numbers. The email system is fine but, we are informed that the zip url system can handle a maximum of 10 concurrent requests. 

Generating each Zip url takes 3 consecutive API calls per url generated. In our initial tests, those consecutive calls take about 2 seconds total. That gives us a safe maximum of 5 concurrent lambda workers. Given that 2 second execution time, 1,000 orders a minute would translate into ~33 concurrent workers. UH OH!

SNS messages cannot be throttled and missed messages are dropped so, how can we throttle this system so that the Zip URL system does not go down?

# v0.2 Lambda + Kinesis

Throttling SNS is sadly, impossible. We could throttle the number of notifications we send in the first place, but then we would be building a queue. We need to look at other solutions and potentially rebuild the system.

My initial plan was to create system like Resque (where we could have a queue with a fixed number of workers) but using Amazon SQS. While investigating SQS, I stumbled on [a stack overflow post](/r/?url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F34678691%2Fhow-to-process-sqs-queue-with-lambda-function-not-via-scheduled-events) by Eric Hammond. Since SQS cannot drive lambda functions, he suggested using Kinesis to get the same result.

Unlike SQS, Kinesis streams can drive AWS Lambda functions. Kinesis streams let you specify how many AWS Lambda functions can be run in parallel (we used one worker per partition). So, we created a Kinesis with 5 partitions and that gave us 5 max concurrent lambda workers. But, there were some other issues we need to deal with.

For our purposes, the key difference between Kinesis-to-Lambda and SNS-to-Lambda is how the system handles errors.

*   SNS sends a notification to Lambda and does not retry if the lambda worker fails
*   Kinesis will retry failures as long as the data is still in Kinesis
*   Kinesis will [throttle if there are lots of failures](/r/?url=https%3A%2F%2Fforums.aws.amazon.com%2Fthread.jspa%3FmessageID%3D685885).

Our solution to those problems was to simply make sure that the lambda workers never errored, but instead saved everything to DynamoDb along the way. This way, we could have a separate worker that would find all ‘errored’ orders and retry them in a separate process.

## Launch Problems

Two interesting errors collaborated to make for a rocky launch. We received valid orders in countries that, due to music rights issues, we could not actually send a zip url. Earlier in the process, we had encountered and handled errors in the Zip URL system. The system would catch the error, flag the order as ‘errored’ and move on to the next order. However, the node library we used for interacting with the Zip URL generation service did not call the error callback. Instead threw a parse error which caused the lambda worker to error, and then caused Kinesis to retry the order infinitely. Then, since it continued to error, caused throttling across our whole system.

We were able to see these events in our metrics and had clear logs from our Lambda workers. The fix was quite simple once we directed our attention to solving it. We deployed the fix and then re-ran previous orders to ensure nothing was missed.

# ideas for v0.3

One of the most exciting technologies out right now is definitely API Gateway. That said, it isn’t something I felt I could learn and use within the time frame of this project. However, it does meet many of the requirements for the project such as replayability and throttling so might be an interesting exploration.

