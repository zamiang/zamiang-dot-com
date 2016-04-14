---
layout: post
title: "How we beat the Shopify 100 variant limit"
description: ""
category: post
tags: []
---

_…without going *completely* crazy in the process._

This post outlines a responsible way for developers to get around the Shopify 100 variant limit, and to understand the tradeoffs enough to sell the feature to clients.

As many, many people have noticed. You can only have 100 variants for any given product on Shopify. For probably 99.999% of shops, this is totally fine. While I don’t fully understand the rational for the limit, it exists and Shopify does a good job communicating the limit.

So what can we do if a client wants more than 100 variants for a product, but doesn’t have the money for a large Magento / Spree / Solidus build?

> Enter us, the few, the proud, the 100 variant limit breakers.

# The 100+ variant client

We have a client that wants to create a nice experience for buying custom sofas and chairs. There are three basic ways to customize the product: Fabric (8), Wood finish (4), and Size (5). In total, that gives us 160 variants per sofa or chair. Sadly, that puts us above the 100 variant limit. But, we may be able to get that number down.

## The hope: Line item properties

Shopify recommends using ‘line item properties’ to get around the 100 variant limit. Line item properties are a way for you to add { key: value } pairs to a line item. But, line item properties cannot change the price. Also, there is no UI in Shopify admin for managing images that correspond to a line item property — like you might for a variant. This would be useful if the ‘Color’ property changes the image but not the price.

To help us see if we can use line item properties, I made a little chart for our client. Can we decrease the number of variants by using line item properties?

```
                  Fabric    |    Finish    |    Size  
Changes image:     yes            yes            no  
Changes price:     yes            no             yes
```

Sadly, each of our properties needs a variant.

> Interestingly, we accepted this project because we misunderstood line item properties — thinking they could change the price. We basically went ‘OH SHIT’ and came up with our solution.

# The Million Variant Solution

> The solution is to break the product up into logical ‘sub-products’ that are less than 100 variants each and then group the ‘sub-products’ into collections.

For us, that meant breaking the product up by fabric material. We had 2 different materials, so that gives us ~80 variants per product. Below is how that might look in the Shopify Admin/products page for 2 sofas and a chair:

![](https://cdn-images-1.medium.com/max/800/1*W7MwTi75n1aql8mN_4BnSg.png)

## Individual products (‘sub-products’)

The most important part of setting up each ‘sub-product’, is that each option for each variant needs to be in EXACTLY the same order across each product. In our case, the order is: Size, Color, Finish.

If the values of a property are the same across ‘sub-products’, we need to make sure the values are EXACTLY the same. This allows us to de-dupe when we display them. For us, Size is always 80, 85, 90, 95, 100\. The downside is that adding or changing a size now requires changing it across all ‘sub-products’.

Finally, we tag the products (“The Ludlow”) so that we can can easily group them later.

![](https://cdn-images-1.medium.com/max/800/1*ugDRIIkneFYo3yYw6OZuQQ.png)

## Product collections (products)

Using the tag we added above (“The Ludlow”), we create a new collection of products where the tag is equal to “The Ludlow”. For our site, this product collection will be our actual product. We can now create many different products that exceed the variant limit and easily display them on the site under this collection. Here we can control the public title, description and image for the product. People will never see pages for the individual ‘products’ — only this collection.

![](https://cdn-images-1.medium.com/max/800/1*cfhx3_V8OamxcZn12cS1TQ.png)


# Displaying products with 100+ variants

Now that we have the backend setup, we need to display these ‘collection products’.


![](https://cdn-images-1.medium.com/max/600/1*klaGJvHqDwDWWtTmI8BYvQ.png)


‘Collection products’ are our own invention and are really just regular collections that render using the template `collection.liquid`. We will be making some significant changes to the collections template but we want to continue to render other collections normally. Shopify has a nice way to change the template a collection uses under ‘Theme template’ on the collection page. Here we create a new template called `collection.{type}.liquid` and then change each ‘collection product’ to use this new template.

In this new template, we render all variants of all products in the ‘collection product’ in javascript. Note that options are accessed by index like option0 (size), option1 (color), option2 (finish). Sadly this is the only way to access options and is why keeping the option order consistent is so important.

```javascript
 var allVariants = [  
   {% for product in collection.products %}  
     {% for variant in product.variants %}  
       {  
         id: “{{ variant.id }}”,   
         sku: “{{ variant.sku }}”,  
         size: “{{ variant.option0 }}”,  
         color: “{{ variant.option1 }}”,  
         finish: “{{ variant.option2 }}”,  
         price: “{{ variant.price | money }}”,  
         type: “{{ product.type }}”,  
         image: "{{ variant.image.src }}"  
       },  
      {% endfor %}  
   {% endfor %}  
 ];  
```

For us, our UI was a bit more complex than merely select boxes so we could not use [Shopify’s option_selection.js](/r/?url=http%3A%2F%2Ffreakdesign.com.au%2Fblogs%2Fnews%2F105830151-make-a-product-in-shopify-with-more-than-the-100-variant-limit). I wrote a small backbone app to handle changes. You can check that [backbone app out here](/r/?url=https%3A%2F%2Fgist.github.com%2Fzamiang%2Ff8b9f8e1bf396d375d7569f00fb0e2dc). If you are familiar with Backbone, you should be able to easily modify it to suit your app.

# The Tradeoffs

Weirdly, the most difficult part here isn’t the actual solution, but dealing with the repercussions. The reality is that Shopify is not designed for these ‘collection products’. Some big tradeoffs are:

## Sorting

Creating a page for a ‘collection products’ with 100+ variants is only part of the problem. The next part of the problem is when you want to display these ‘collection products’ across the site in sortable groups. For example, we want to display products on the homepage in a certain order. Since our ‘products’ are really collections, this is very difficult. We need to hardcode this in the template. Adding or removing a sofa or chair now requires an engineer to update that custom code on the homepage. You can get around this with other hacky solutions using [metafields](/r/?url=https%3A%2F%2Fdocs.shopify.com%2Fthemes%2Fliquid%2Fobjects%2Fmetafield), but metafields only work on products, not collections.

## Brittleness

Additionally, option order and property names need to be consistent across each product in a product collection. This makes the site more brittle and difficult to edit for the client.

I hope it gives some examples of the tradeoffs to support products with 100+ variants. So, in short, it definitely is possible — and not that difficult really — it just complicates things a bit more.