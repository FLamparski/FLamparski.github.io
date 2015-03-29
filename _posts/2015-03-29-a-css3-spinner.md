---
layout: post
title: A CSS3 Spinner
author:
  display: Filip Wieland
  itemref: person_me
masthead:
  heading: You Spin Me Right Round
  description: A Material-like Spinner in CSS3
  background: '##geopattern##'
masthead_manual: true
categories:
  - misc
---

I've made a thing. It may not be cross-browser or indeed usable this year, but
it looks cool. It's a CSS3 loading spinner that looks a bit like it might be
Material Design, though I don't think it quite fits the visual language,
as it looks too much like the floating action button. Nevertheless, I think it
looks cool.

The idea is simple: this is a circle that pops up at you when an asynchronous
action starts, and has a bit along the border that spins until the action is
done, whereupon the loader would hide again. I was aiming for short and snappy
animations and interesting easing curves, as well as the Disney Animation
principles - notice how the show/hide effect has a little bounce to it? I think
it makes the whole animation look more organic.

See it in action below:

<iframe style="width: 100%; height: 200px"
  src="{{url}}/frame-contents/2015-03-29-loader.html"></iframe>

Code available as a gist:

<script src="https://gist.github.com/FLamparski/27f16d73974e6547f786.js">
</script>

If you want to use this in your project, go ahead! I will be releasing this as
a more browser-compatible jQuery plugin some time soon, but for now you can take
this and adapt it to your needs (it's MIT licensed).
