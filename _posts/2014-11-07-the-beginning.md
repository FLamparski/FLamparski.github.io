---
layout: post
title: The Beginning
author:
  display: Filip Wieland
  itemref: person_me
masthead:
  heading: The Blog of Filip Wieland
  description: Post Zero
  background: '##geopattern##'
masthead_manual: true
categories:
  - misc
---

I've been genuinely trying to come up with a reason why I might want to start
publishing a blog. Indeed, it may seem unnecessary. So why do I bother?

There are some aspects to it. First, this setup allows me to basically have any
content I like, including custom scripts, styles, and so on. It does not
limit me to the extent a third-party platform would. I have previously used
Blogger, and trying to do anything but the most basic text posts is nigh impossible.

Second, as an effort to organise my writing into one coherent set. I have some
loose documents laying around that I'd like to tie together. Changelogs for my
projects. Short stories I never finished. Media critiques. That sort of stuff.

And third, to create an archive of the weird and interesting stuff I come
across as a developer. In a way, being a 'full(ish)-stack' web developer
at the age of 18 is still kind of rare. This is very much an exciting
adventure for me, and I hope to document it here.

I will be adding more to the blog as I go along.

## Site tech

I'm currently using Jekyll to generate static HTML pages hosted on GitHub. I have a
Grunt task which wrangles Sass, Jekyll, and some basic JavaScript tasks to aid
development (but GitHub should pick up on everything anyway).

Header images are generated using the [geopattern](https://github.com/btmills/geopattern)
package based on the page title. I've written some JS to fade in the header as you
scroll down on blog pages. You can see it all in [the repo](https://github.com/FLamparski/FLamparski.github.io).
