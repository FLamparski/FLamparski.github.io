---
layout: post
title: Rich Data Structures in HTML Forms
author:
  display: Filip Wieland
  itemref: person_me
masthead:
  heading: The no-JS not-quite-JSON Form
  description: Make browsers URL-encode rich data structures for you
  background: '##geopattern##'
masthead_manual: true
categories:
  - hacks
---

URL encoding is an under-appreciated format. It allows you to send much richer data than simple flat key-value pairs,
and is supported by all browsers - even if you disable JavaScript. Today I'll look at ways to use it to not have
to encode my form data as JSON, even for very complex forms.

## Lists

Say you have a bunch of checkboxes that let you choose your pizza toppings. Naively, you can represent them as:

~~~ html
<input type="checkbox" name="topping_feta" value="yes" />
<input type="checkbox" name="topping_pepperoni" value="yes" />
<input type="checkbox" name="topping_chicken" value="yes" />
~~~

This doesn't look pretty, and likely will require back-end code changes whenever you want to offer more toppings,
or solutions that scan for all keys that start with `topping_`. But we can do better.

The syntax for an URL-encoded list is `list[]=element0&list[]=element1&list[]=element2`. You can use `list[]` as a name field,
which browsers will gladly accept. With this in mind, let's rewrite our pizza toppings example:

~~~ html
<input type="checkbox" name="toppings[]" value="feta" />
<input type="checkbox" name="toppings[]" value="pepperoni" />
<input type="checkbox" name="toppings[]" value="chicken" />
~~~

Let's say you want a pizza with feta cheese and chicken. You tick the boxes and hit the order button.
After submitting this form, if you look at the request from the server, you'll see the following (it's pseudo-json):

~~~ javascript
{
  toppings: [
    'feta',
    'chicken'
  ]
}
~~~

Compare that with the following for the "traditional" method:

~~~ javascript
{
  topping_feta: 'yes',
  topping_chicken: 'yes'
}
~~~

## Objects

(Okay, hash maps of string => string / hash)

Note that in the lists example we did not put anything in
the square brackets. We can put stuff in there, though, to create hash maps
or sparse lists (implemented as numeric string keys, because I'm feeling a bit PHP today).

~~~ html
<input type="number" name="pizza[3][size]" value="10">
<input type="number" name="payment[card][cvc]" value="***">
~~~

This might be the case if our user opted for pizza with index 3 to be 10" in diameter,
and wants to pay for it by card. Again, pseudo-json:

~~~ javascript
{
  pizza: {
    3: {
      size: 10
    }
  },
  payment: {
    card: {
      cvc: '***'
    }
  }
}
~~~

This is starting to look a little like JSON requests you'd get from
your mobile app, right? All that without any JavaScript involved
to build a data structure, it's all part of the encoding. This
scheme will work out of the box in PHP and in Node's Express with body-parser.

Note that I'm not quite sure what happens if you want to use this
syntax to define a list of hashes, however since you can use numerical
keys, you should be able to work around that.
