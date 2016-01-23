---
layout: post
title: "Tools for people who make things on the internet"
description: ""
category: post
tags: []
published: false
---

This list is a reference of tools to help you make good things on the internet quickly. It is for regular people, designers and developers. The audience is broad because the responsibilities of people make things on the web is broad. You may be a designer making a website or a business person who wants to mockup some ideas for how to improve retention on your site. The tools in this list should help you make those leaps without feeling like an imposter.

The list is broken up into three sections.

1. **Tools for anyone**<br />
These are all useable by people who can’t code or design, but still want to make things on the internet.

2. **Tools for designers**<br />
Web specific tools for prototyping design and interaction.

3. **Tools for engineers**<br />
While you can code, these are tools to help you build user facing products more quickly.

#### Before you start: [The tiny content framework](https://gist.github.com/nicoleslaw/2155621)

This is a great example of questions you should ask yourself and your team before you start working on something. It gets the team aligned on what you are making and who you are making it for. I use this for almost every project I work on. I usually copy it into a google doc, answer all of the questions and then turn each question/answer into a statement about what we are doing.

#### Before you launch: [Launch checklist](https://stayintech.com/info/UX)

This is a helpful list of common problems you should check for before launching a website. Covers everything from usability and accessibility to search and form inputs.

### Tools for anyone

#### Tools for handling data

1. [Google Sheets](https://www.google.com/sheets/about/)<br />
Sheets, a spreadsheet in the cloud, is probably the number one prototyping tool. It is accessible to your whole team and the data integrates with virtually any other service. One of the most simple uses is to create a spreadsheet of email addresses, and to add columns for things to send to those email address. Mailchimp, listed below, can pull from the spreadsheet to send fully customized emails to individual users. If you edit the spreadsheet every week, you have a weekly personalized email service with no engineering work.

2. [Zapier](https://zapier.com/)<br />
Zapier allows you to integrate two different apps together using ‘Triggers’ and ‘Actions’. For example, a Trigger might be ‘when someone buys something from my [Shopify](http://shopify.com) store’, and the Action might be ‘add them to my Mailchimp mailing list’. The use cases here are truly endless.

3. [Crowdsource](http://www.crowdsource.com/)<br />
If you can’t figure out how to get data from one place to another, you can always pay someone to do it. Crowdsource makes this very easy and affordable. It is also good tool for translation and some copywriting.

#### Tools for sending things to people

1. [Mailchimp](http://mailchimp.com/)<br />
The source of the [‘email first startup’](http://ryanhoover.me/post/43986871442/email-first-startups). In conjunction with other services, Mailchimp allows you to send nice customized emails to people. Almost any businesses can be simplified into sending personalized emails and seeing what people click on.

2. [Twilio](http://www.twilio.com)<br />
Twilio is an SMS service. In conjunction with Zapier, Twilio allows you to send personalized texts to people. In the above example, you could use Twilio to text someone when they order something from your store.

#### Tools for creating a website

1. [Squarespace](http://www.squarespace.com/)<br />
Quick way to get a reasonable website up quickly. Allows you to easily get a holding page up that gives a good amount of information about your site with a click through to signup for a mailing list. Also good for prototyping a site that you plan to build since you can see how text and images work on a real website.

2. [Typeform](http://www.typeform.com)<br />
The best way to create pretty forms and surveys. Say you want to send a quick survey to your users or ask them a few questions after they sign up for your mailing list? Typeform lets you do that easily. I often use this to prototype onboarding flows. This allows us to easily see the onboarding questions on an actual webpage and see if the flow makes sense.

3. [Shopify](http://shopify.com)<br />
Like Squarespace but for online stores.  You can sell tangible goods as well as memberships or subscriptions easily.

4. [Bubble](https://bubble.is/welcome)<br />
Programming for non-programmers. People have built a full Twitter clone with the service. It handles user accounts and allows you to easily edit the website. There are even bubble [consultants](http://airdev.co/) that have emerged focusing on prototyping using bubble.

#### Community administration, discussion boards and comments

1. [Disqus](https://disqus.com/)<br />
Probably the most popular tool for adding comments to a website

2. [Muut](https://muut.com/)<br />
Allows you to have discussion boards and comments

3. [Discourse](https://www.discourse.org/)<br />
Free and open source BBS/Forum tool.

4. [Hellobox](http://www.hellobox.co/)<br />
Newer tool for community management.

### Tools for designers

Beyond the basics of Photoshop, Illustrator and Sketch, there are a few new tools for designers that help prototype things people interact with on screens.

#### Interaction and animation prototyping

1. [Principle](http://principleformac.com/)<br />
Principle makes it easy to create animated and interactive user interface designs. Useful for designing multi-screen apps, or simple interactions and animations.

2. [Origami](https://facebook.github.io/origami/)<br />
Created by Facebook. Origami focuses on helping you mock up how small elements of the design will animate or respond to interaction.

#### Prototyping with a little bit of code

1. [Framer](http://framerjs.com/)<br />
Great if you know basically how to code. Allows you to build near pixel perfect prototypes of apps across platforms.

2. [Paintcode](http://www.paintcodeapp.com/)<br />
Allows you to turn your drawings into code for use in iOS apps

3. [Macaw](http://macaw.co/)<br />
A bit like a modern version of Dreamweaver, this allows you to build a website by drawing it. Helpful to have a basic understanding of html and css to get the most out of the tool.

### Tools for developers

Most of these tools focus on getting a backend up and running quickly. There are two general approaches: services that help you create your models quickly and services that help you do integrations quickly. They are not mutually exclusive. For example, you could use Firebase (in the first group) for authenticating users, Contentful (also in the first group) to manage the text in the onboarding flow and Dexter (in the latter group) to handle emailing someone after an account is created.

#### Services that help you create your database models and handle user authentication

1. [Firebase](https://www.firebase.com) / [Parse](https://parse.com/): API as a service.
Supports user authentication and allows you to easily build cross platform server-less apps and websites. Parse is a bit more mobile app targeted and Firebase is a bit more website targeted.

2. [Contentful](https://www.contentful.com/) - API + CMS as a service
Literally a CMS built on top of firebase. Contentful gets you a nice CMS for use by non-engineers.

3. [Webhook](https://webhook.com) - API + CMS + Static-site deployment as a service
A further layer on top of Contentful, this has a nice CMS and handles deployment of static sites based on the data.

#### Services that help you do integrations quickly ("[API Glue](https://medium.com/dexter-blog/api-glue-9bdf327e0d48)")

1. [Dexter](https://rundexter.com/)
A bit like a modern Yahoo Pipes or a developer focused Zapier. It lets you create modules to abstract APIs, and chain together these modules as if they were lego blocks, arranging them into service-based apps (like SMS or email services) that may have no UI at all.

2. [Stamplay](https://stamplay.com/)
Lets you quickly create new complex websites using other APIs such as Stripe and Facebook login as building blocks.

3. [Treeline](https://treeline.io/)
Treeline is a web UI that lets you quickly build backends. Lets you create endpoints and quickly write code.

4. [Hoist](http://hoist.io/)
Maybe the most non-engineer friendly of the bunch.

### Real-world Examples

Some start as "[email first](http://ryanhoover.me/post/43986871442/email-first-startups)" companies and others by blogging or using tools like Instagram and Twitter rather than relying on forms and spreadsheets. Below are a couple of examples of other routes for starting a company without engineers.

**Calfresh**

Code for America worked with the state of California to tackle an ambitious project without code when it[ improved California’s food-stamp website](https://www.youtube.com/watch?v=lqTFi2U2Ebc). The onboarding process to join the food-stamp program was incredibly time consuming, encompassing 30 screens and over 200 questions. It was also error prone — missing one phone call could restart the whole process. This led to a system where people who qualified for help often wouldn’t get it. The Code for America team sought to address these problems not by building a new website, but by prototyping. They created a Typeform that included fewer questions and screens, and used Google Ads to gather users. (Because this wasn’t a very competitive advertising space, the ads were also relatively affordable.) These basic tools allowed them to test and iterate the survey quickly without engineers, and to direct real users to an important service. They supplemented Typeform’s free analytics with phone interviews for people who went through the process. They learned exactly what they wanted to build and were able to prove success before they built the final product.

**Kollecto**

My go-to example of a codeless business is [Kollecto](http://kollecto.com/). Its founder, [Tara Reed](https://twitter.com/TaraReed_), previously worked in business strategy at Microsoft. While familiar with technology, she isn’t an engineer. Yet she took only a few months to build a website that facilitates art collection through personalized recommendations. In addition to those user-facing features, the site’s back end allows Tara to manage a staff of art advisors as they add new pieces and track sales. She built Kollecto by tying spreadsheets together with Typeform and [Campaign Monitor](https://www.campaignmonitor.com/b/). (She describes the process in more detail at another website, [Building Kollecto](http://buildingkollecto.com).) In its first few months, Kollecto generated over [$12,000 in revenue](http://buildingkollecto.com/post/105930836083/building-without-an-ounce-of-code-part-2) and is now off to join [500 Startups](http://500.co/accelerator/). Not bad! While she will eventually need to build her own tools to scale the product further, Tara got to her minimum viable product by iterating rapidly with real users — and without spending a cent on engineers.
