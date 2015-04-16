---
layout: post
title: Instance-Dependent Prototype Patching
author:
  display: Filip Wieland
  itemref: person_me
masthead:
  heading: (Patch) All Bar One
  description: Monkey-patching methods in JS classes based on instance attributes
  background: '##geopattern##'
masthead_manual: true
categories:
  - hacks
---

Sometimes you want to patch a prototype but also let some instances use the original
methods. Or maybe you want to mess with people using your code (please don't).

Here's a method for selectively patching methods of JavaScript classes. It uses
`Object.defineProperty` so it may not work in all browsers:

<iframe style="width: 100%; height: 60px"
  src="{{url}}/frame-contents/2015-04-16-brian-blessed.html"></iframe>

1. Choose your target and save a reference to it somewhere (line 30).
2. Use `Object.defineProperty` to define a getter on the class prototype (line 31).
3. Based your condition (line 33), return either the patched method (line 35) or the original
method (line 38).

Of course, once you have a getter like that, you can return all kinds of methods or properties.
Bottom line is, you totally can define getter properties on a class prototype and JS will be
totally okay with them.

The gist of it, including an ES6 edition that works in Babel.

<script src="https://gist.github.com/FLamparski/07f0561c9d9d6994a265.js"></script>
