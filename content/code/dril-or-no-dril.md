---
title: Dril Or No Dril? Building a text classifier in TensorFlow
description: In which I go through the process of building and deploying a text classifier that tries to determine if a tweet could be from @dril or not.
cardImage: https://pbs.twimg.com/profile_banners/16298441/1394248006/1500x500
date: 2019-01-29
---

**This post originally appeared on [dev.to][devpost]**

<!-- 1. Overview
2. Briefly mention installing tensorflow
3. One: downloading the tweets
4. Two: building and training the classifier
5. Three: exporting to tensorflow.js and deploying on glitch
6. Four: discussion -->

There is a ton of different tensorflow posts on the web already, and many of them are actually good. This is not that. This is me, writing a crappy little classifier for what's essentially an elaborate shitpost.

In this post, I will walk you through how I built [DRIL OR NO DRIL](https://dril-or-no-dril.glitch.me/).

![An example of the application in action. A tweet of "no" yields 93.8% dril.](https://thepracticaldev.s3.amazonaws.com/i/ijy45dvi3szdtqy9ie2p.png)

## Overview

If you don't know who or what dril is, [have a look](https://twitter.com/dril). If you already do, great. If you're just coming back - isn't that one of the weirdest twitter accounts you've seen in a while? Anyway - the style is quite distinctive, so I thought I might have a stab at creating a classifier that tries to pick up on what makes dril _dril_.

To do that, I first need tweets. Lots of tweets, both from dril and other accounts. I ended up using myself, a few of my friends who agreed to be included in the model, and the Prime Minister (at the time of writing this paragraph, lol) Theresa May.

I also need a model. I ended up using a modified version of the IMDB review classifier from [tensorfow docs](https://www.tensorflow.org/tutorials/keras/basic_text_classification).

Finally, to put it online without having to pay for anything, I needed a way to ship my model to the browser with glitch. This also has a bonus of keeping all the text you enter in that box on your machine. I achieved that through tensorflow.js, a browser-based subset of tensorflow which runs on WebGL producing loads of warnings because, really, WebGL wasn't designed to be used this way.

## Getting some tweets

The first thing to do is get some tweets. This requires a Twitter API account so you can authenticate. It's that or doing some screen-scraping hacks but for convenience I stuck with the API - perhaps to my detriment. I wrote a Python script to download all these tweets which was pretty easy thanks to [tweepy](https://www.tweepy.org/). It downloads tweets and saves them into a sqlite3 database. It even supports resuming from the earliest downloaded tweet (important in case it crashes). Tweepy's cursor API is also really neat - you can iterate over tweets and it'll handle pagination for you:

```python
cursor = tweepy.Cursor(api.user_timeline, id=args.account, max_id=max_id, include_rts=False)

for status in cursor.items():
    tweet = status_to_tuple(status)
    save_tweet(db, tweet)
```

It's also great that you can tell tweepy to automatically wait in case of a rate-limit response - though I don't think I ran into that issue yet:

```python
def get_twitter_api():
    auth = tweepy.OAuthHandler(secrets.TW_API_KEY, secrets.TW_API_SECRET)
    auth.set_access_token(secrets.TW_TOKEN, secrets.TW_SECRET)
    return tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)
```

I then ran the script on some Twitter timelines. I used dril, obviously, as well as some examples of non-dril content. Then I looked at the amount of tweets I downloaded and saw a discrepancy:

![dril's tweet count: 8690 tweets](https://thepracticaldev.s3.amazonaws.com/i/iab6wss3n0h9ozifu4f8.png) ![my dril tweet count in the database: 2930](https://thepracticaldev.s3.amazonaws.com/i/j1562o3x0uc03flg9oe1.png)

Turns out that as per [Twitter API docs](https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline), the endpoint used only returns up to 3200 most recent tweets. So I guess if you really needed that archival content, you'd have to implement those screen-scraping hacks after all. I chose to not bother.

## Installing TensorFlow

Because this is the real hard problem in computer science (citation needed), I'm now going to spend 5 paragraphs talking about how to install TensorFlow.

j/k, get anaconda and go here: https://www.anaconda.com/blog/developer-blog/tensorflow-in-anaconda/ - works even on exotic platforms such as Windows.

## The classifier

To create the classifier you will first need to load the data into a format that tensorflow accepts, and there is only one such format - numpy arrays. This is also the first step you will need to make a decision as to how you want to represent the text you put in because you can't simply throw strings at a neural network.

There are a number of ways you could represent a piece of text in a compact way, for instance by using the [bag-of-words approach](https://en.wikipedia.org/wiki/Bag-of-words_model) which only preserves word frequencies, or by encoding each word as a number as is the case of the TF/Keras IMDB example dataset. You can also try to do fancy things like discarding the most popular words like "a", "the", and "hyperloop is a good idea". In my example I'm not doing any of that and instead I take the raw bytes of each character and shove them into a 240-element numpy array, padding out the remaining space with zeros. The idea is that any other preprocessing could remove nuance about the style of these tweets. Also I'm lazy.

```python
def to_padded_bytes(tweet):
    bts = np.array([ord(c) for c in tweet])
    return np.pad(bts, (0, 240 - bts.shape[0]), mode='constant')
```

This still meant that I needed to have an embedding layer in my network that extracted features from the byte values, but it was a little bit different than in the example.

Finally, the labels are represented as 2-dimensional vectors. A dril tweet is labelled as `[1, 0]`, whereas a non-dril tweet is `[0, 1]`. This is so that at the end of the process I can get the confidence value from the network - it will usually reply with a vector like `[0.98, 0.02]` which means "I am 90% confident that this is a dril tweet and only 2% confident that it's not". Or the inverse. Or somewhere in between.

The model itself is as follows:

```python
model = keras.Sequential([
    keras.layers.Embedding(255, 16, input_length=240),
    keras.layers.Conv1D(140, 3, padding='valid', activation='relu', strides=1),
    keras.layers.GlobalAveragePooling1D(),
    keras.layers.Dense(512, activation='relu'),
    keras.layers.Dense(2, activation='softmax')
])
```

I threw in the convolutional stage because I'm hoping it's able to pick up on the stylistic differences between types of tweeter, but so far it's mostly learned that shorter tweets are more likely to be dril, and that he doesn't use emoji very often. Nonetheless, at ~89% validation accuracy, I decided that it's good enough for a joke.

If I were doing this properly I might look at existing text classification architectures and try to actually learn something from them. Then maybe I'd achieve that 99% accuracy.

## Onwards to JavaScript

tensorflow.js is a little limited. From the [docs](https://js.tensorflow.org/tutorials/import-keras.html):

> TensorFlow.js Layers currently only supports Keras models using standard Keras constructs. Models using unsupported ops or layers—e.g. custom layers, Lambda layers, custom losses, or custom metrics—cannot be automatically imported, because they depend on Python code that cannot be reliably translated into JavaScript.

That's fine though, as my model _is_ only using standard constructs. The first step is to save it to a h5 file, then you can run the tensorflowjs converter on it. To get the converter, you can run `pip install tensorflowjs` in your conda environment. Note, though, that some of the installed packages might get downgraded as the dependencies are a little out of sync - this shouldn't be too worrying as they are all within requirements of each other. The converter will generate a directory with two or more files: a `model.json` file which describes the structure of the model, and some `groupK-shardNofM` files which contain the learned attributes of your model (the weights, in the ML lingo). You can then serve these files from a web server and load them on the client side like so:

```javascript
// This assumes that model.json is in the same directory as the current document
const model = await tf.loadModel('model.json');
```

If you don't know what the `await` does, read this: https://ponyfoo.com/articles/understanding-javascript-async-await. If you do and are positive you can't use it, it's still a promise so you can work with that instead. If you need to support Internet Explorer, ask your doctor if tensorflow.js is right for you. In my case I decided that being compatible with popular browsers is for losers and just use async/await as they are.

The glitch project itself is also very simple - the main issue is getting the text from a `<textarea>` into the same format as I used in training, namely a 1x240 tensor. The code is pretty similar to the python version:

```javascript
function tweetToTensor(tweet) {
  const array = new Uint8Array(240);
  for (let i = 0; i < tweet.length && i < array.length; i++) {
    array[i] = tweet.charCodeAt(i);
  }
  return tf.tensor1d(array);
}

// later...

const batch = tweetToTensor(text).reshape([1, 240]);
const prediction = model.predict(batch);
const result = prediction.reshape([2]);
```

It's nice that I don't have to explicitly pad out my arrays here because allocating a `Uint8Array` automatically gives me a zero'd-out array so I only need to copy in the relevant byte values.

There is one issue with hosting everything on glitch though - since the `group-shard-piece-whatever` files are binary, glitch uploads them to a cdn and gives you a long link to the file in its bucket. This is fine for images, but tensorflow.js expects that it'll be able to get the weights files from the same base URL as the model.json file (eg. if the model file is at `https://example.com/models/model.json`, it'll look for files like `https://example.com/models/group1-shard1of1` etc). However, since the library uses `fetch()`, it also follows redirects, and it's easy to set up your server script to catch requests for the weights files and point it to the right place.

Well, easy if you've got one or two files; if you need more than that, again ask your doctor if tensorflow.js and glitch are right for you.

## Where's the code?

The classifier etc: https://github.com/FLamparski/dril-or-no-dril/blob/master/Dril%20Or%20No%20Dril.ipynb - the same repo also contains the tweet download scripts, but you'll need to provide your own `secrets.py` file.

The glitch site: https://glitch.com/edit/#!/dril-or-no-dril

## Learnings

From what's essentially an elaborate joke, I learned a thing or two about conducting machine learning experiments on data that wasn't delivered to you in a neatly wrapped package with instructions. It's a harsh world out there and most data will be messy and in the wrong format. About 2/3 (or more, haven't checked) of the code I wrote deals with acquiring the data and preparing it for the model. If I was to do this again _properly_, I might also look into ways of getting past that Twitter API tweet limit, and gathered up much more non-dril material. As it stands, the classifier is biased towards saying the input is dril-like. I would definitely look at different text processing models, both in terms of how the neural network is actually designed, and how to encode the data going into it. The vector-of-bytes idea is not terribly efficient and would not scale well to longer documents. I might even be tempted to try and serve this model from an actual server instead of dumping it into the user's browser in hopes that it'll work (those weights files can get awfully large sometimes...). I hear that Google has an offering for production machine learning apps. Or something.

## Discussion

I'd like to hear from you if you have an idea of what you'd do for an application like that, especially if what you'd do is different and actually works. I'd also like to know what's the silliest machine learning thing you've made, and whether you went through the trouble of putting it online.

Right, until next time!

[devpost]: https://dev.to/minkovsky/dril-or-no-dril-building-a-text-classifier-in-tensorflow-208k