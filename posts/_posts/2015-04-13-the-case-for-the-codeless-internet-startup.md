---
layout: post
title: "No flex zone: The case for the codeless internet startup"
description: ""
category: post
tags: []
---

Hell is building fancy stuff that nobody uses.

Since going freelance, I’ve talked to a lot of startup founders who are in search of the elusive 'technical cofounder'. Instead of coding, I’ve tried to help them brainstorm how to get their product in front of people without writing any code. The people you hire don't care about your ruby gems. Your users don't care about your github profile. No one cares about your code. They care about what value you create.

Building things that people use and love is incredibly challenging. As engineers, it can be hard to realize that making something more technologically impressive doesn't make it any more useful. It is even harder to realize that code is an expensive liability. Just like the elements of your business or the features of your product, your code needs to justify its existence. Luckily, with the variety of small third party services, we can think, prototype and understand a problem before we 'go to code'.

## Case study: Kollecto

My goto example of a codeless business is Kollecto. Tara Reed, the founder, previously did Business Strategy at Microsoft. While familiar with technology, she isn't an engineer. Yet, in a couple months, she built a website that sends personalized art recommendations and facilitates purchasing the art. In addition to those user facing features, there is a backend for Tara to manage a staff of art advisors as they add new art and track sales. She created this by tying spreadsheets together with purpose-built web applications like [Typeform](http://www.typeform.com) and [Campaign Monitor](https://www.campaignmonitor.com). For more detail, she wrote up the process at ['building Kollecto'](http://buildingkollecto.com/).

In its first few months, Kollecto generated over [12k in revenue](http://buildingkollecto.com/post/105930836083/building-without-an-ounce-of-code-part-2) and is now off to join [500 Startups](http://500.co/accelerator). Not bad! While she will eventually need to build her own tools to scale the product further, Tara got to her minimum viable product by iterating rapidly on her core product without spending a cent on engineers.

## Excel as accelerator

Among engineers, there is tremendous animosity towards spreadsheets as a fragile faux-programming environment for 'muggles'. While spreadsheets are fragile, they are also structured, easy to edit and highly portable. In some sense, a spreadsheet is a data format and a CMS rolled into one. Today, with their ability to integrate with almost any third party service, spreadsheets are one of our most powerful prototyping tools. Why build a complex onboarding flow when you can just use Typeform? Why make an email system when you can send the Typeform spreadsheet export to Campaign Monitor for conditional "personalized" emails?

One of the biggest mistakes of engineer-driven companies is writing code before you understand the problem. At Artsy, we recorded subscription billing events in a spreadsheet and had someone manually process those charges based on that spreadsheet. While painful, it allowed us to understand the wide spectrum of billing states unique to subscription billing. We handled these transactions in a high touch way to understand them. By the time we go to code, the problem is well-understood. Even in a tech company with ample engineers, spreadsheets helped us move fast, learn and not break that many things.

## No flex zone

<img src="/assets/images/mouse.jpg" style="width: 360px" />

Does your website look like this? Most startup websites are a mess of hastily written features after a few years of brutal, startup-speed iterations. Your startup is not about ‘flexing’ all the awesome code you wrote. When it comes to robustness, a fragile spreadsheet is actually a diamond compared to a hastily written backend that you change 100x as you iterate on your product.

While we have more incredible web frameworks than ever, we also have an astounding number of small, purpose-built web applications. We can use these to prototype our apps. They allow us to only code when we need to, and only code problems we understand well. Building products is a no flex zone. Don’t let flexing your coding skills get in the way of the building a great product that people use.

Many thanks to [Christina Xu](https://twitter.com/xuhulk) for her awesome editing help.
