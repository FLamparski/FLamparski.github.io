---
title: Working on my IoT air quality monitoring setup
published: true
description: I am making an air quality monitoring station. Here I walk you through my basic setup.
tags: environment, arduino, monitoring, hardware
cover_image: https://thepracticaldev.s3.amazonaws.com/i/hpdc73eh88xd8xlfpyho.jpg
date: 2019-06-05
---

**This post originally appeared on [dev.to][devpost]**

Air quality - much has been said about it in the recent years. Research is coming out saying that breathing polluted air [contributes to risk of asthma attacks, allergies, and other health issues](https://www.who.int/airpollution/ambient/health-impacts/en/). One of the most common pollutants is particulate matter - very fine carbon dust emitted from diesel and some petrol engines. If you live near a high traffic road, you are likely breathing some in right now - and it might be giving you black lung in slow motion.

On an unrelated note, here's a view from my window:

![Look at all those lorries](https://thepracticaldev.s3.amazonaws.com/i/ktdzv38r0c5runm29ghc.jpg)

I would like to know how much of this dust - more technically, particulate matter, is in the air outside my window throughout the day. The end goal is to use this information to set up alerts if and when pollution levels exceed government targets, and use this to keep my local authority accountable.

So, how do I start?

# The SDS-011 Sensor

![Product shot of the SDS-011, showing the included USB adapter](https://thepracticaldev.s3.amazonaws.com/i/8ckn52lit1sl3gw5yzys.jpg)

The heart of the operation is the nova SDS-011 sensor. It works by blowing air past a laser beam and looking for scattered reflections. It can then isolate scattering caused by specific types of particulate matter - PM2.5 and PM10 - and measure how much of it is in the air, giving its reading in micrograms per cubic metre.

The sensors are pretty cheap - less than £20 on [AliExpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20190605020754&SearchText=sds011), with roughly similar prices on Banggood and eBay if shipped from China. Some also throw in a USB adapter for the sensor's serial (UART) interface. Neat! What's not neat is the up to 3 week shipping time, but that's just par for the course when ordering from China.

By default, the sensor will output its measurements continuously every second. This can be useful if you want to test that it is working with the USB adapter. In fact, I wrote some Python programs that rely on this mode to display the sensor's readings. The simplest one is here in its entirety:

{% gist https://gist.github.com/FLamparski/6e5e673b165f19d3e9c5f4b88f0d1ab2 %}

If you also want to plot this data immediately, here's one with matplotlib: https://gist.github.com/FLamparski/c9d09153183f77c69f8c8ca7ca22e7ab#file-plot-py

Great, now I have some data coming in! But I don't want the sensor to be connected to my computer, I'd like to connect it to an ESP32 microcontroller (I have some of these around which I might as well use).

# The ESP32

![Close-up shot of an ESP32 development board](https://thepracticaldev.s3.amazonaws.com/i/9dbl0ko0gekb516jw8p5.jpg)

The ESP32 is a crazy powerful Wi-Fi microcontroller - with the most common variant boasting a dual-core 240MHz CPU, 2 or 4 MiB of flash memory, and 520 KiB of RAM. It's also largely Arduino compatible - and the board library is developed by Espressif as a first-party product.

It's also really cheap for all that power: you can get it for under £7 with Amazon Prime delivery (or look at the [amazon search](https://smile.amazon.co.uk/s?k=esp32) for variants with OLED displays, camera attachments, LiPo chargers, etc on board).

# The one where I almost burn myself with a soldering iron

To connect the SDS-011 to the ESP32, I am using a perfboard - a PCB with a grid of holes in it, allowing you to quickly assemble your circuit without having to design and make a dedicated PCB. I also needed a 5-pin JST connector to take in the cable supplied with the USB adapter, and I also decided to make a socket for my ESP32 from two pieces of female dupont pin headers. This makes the ESP board stand off from the perfboard, giving me some space to work with underneath it, and also allows me to easily recover the ESP if I ever tear this project down.

I then soldered some jumper wires on the back side of the board for power and to connect the TX pin of the SDS-011 to the RX2 pin of the ESP, and RX of the SDS-011 to the TX2 pin of the ESP. I made an image in gimp to help me route the wires correctly:

![Perfboard routing guide](https://thepracticaldev.s3.amazonaws.com/i/71g5na42p14bagihv7cp.jpg)

TX2 and RX2 on the ESP board are available as Serial2 in Arduino sketches. The observant among you may have noticed an extra JST connector exposing the I2C bus - this is for later.

# Lol embedded programming

This is not strictly speaking a tutorial, so I'll gloss over how to actually set up ESP32 boards in Arduino - this is documented in the [arduino-esp32 project itself](https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md). The one thing you should note is that this only works with the **desktop** Arduino IDE, and only if you install the IDE through the MSI installer and **not from Windows Store**.

A very simple sketch, which simply formats the incoming data as text and outputs it to the debug serial connection, is also quite short:

{% gist https://gist.github.com/FLamparski/25a39a8f5a1c4b3535fe67d7ca39b0ea %}

So after verifying that this works, I wanted to hunt down some more complete documentation of the SDS-011. The reason for that is that you are not supposed to run the sensor continuously for a long period of time, as it will allow dust of all kinds to accumulate inside, causing it to lose accuracy over time. The manufacturer states that the expected useful lifetime is 8000 hours of operation - so if you don't operate it all the time, you'll get more chooch for your cash. The other reason is that I'd like to run the thing off of lithium batteries at some point, and the SDS-011 uses about a Watt of power when it's running, what with its laser and fan.

There is a good Arduino library for the SDS family of sensors, which supports the complete protocol they use and presents a nice API for it: https://github.com/lewapek/sds-dust-sensors-arduino-library. The protocol documentation is _an absolute pig_ to find though, and I ended up emailing the manufacturer for it. The v1.5 spec is here: https://drive.google.com/open?id=0B11dfFBNOar5NHNTUVlvcFJPWUctMWZzYWRZU0RiMWxheG04. If you're implementing your own interface to the sensor, make sure to get the checksum right, otherwise it won't process your commands, and it won't tell you why either. I wrote this before I became aware of that library:

{% gist https://gist.github.com/FLamparski/c11a2817351ede4b6c3f2f81d0cd99ca %}

When it's mostly wired up, it looks like this:

![Photo of the assembled setup in an enclosure box](https://thepracticaldev.s3.amazonaws.com/i/fe0v65vu9fmric2x62ux.jpg)

I'm powering it through a charge port I hot glued onto the battery compartment.

At this point, I can start sending all this data to a server. I decided to use an old laptop that I had in my cupboard.

There is a big gotcha when using the SDS library with the ESP32: It will fail to compile due to `SoftwareSerial` not being available in the ESP32 Arduino board package. To remedy that, I downloaded the master branch of the library and put it in my Arduino libraries folder, and then deleted all the code that relied on `SoftwareSerial`.

# Can't spell idiot without IoT

The server is running [InfluxDB](https://www.influxdata.com/), [Node-RED](https://nodered.org/), and [Grafana](https://grafana.com/) inside Docker. It's also running [Mosquitto](https://mosquitto.org/) as the MQTT broker, and [Portainer](https://github.com/portainer/portainer) to give me a nice GUI to the Docker host. And of course, I'm also monitoring the server itself with [Telegraf](https://www.influxdata.com/time-series-platform/telegraf/) running directly on the host. This setup is largely based on [Andreas Speiss](https://www.youtube.com/channel/UCu7_D0o48KbfhpEohoP7YSQ)'s Raspberry Pi configuration from his videos, however you can mix and match different components - for instance, a friend of mine is using Prometheus instead to monitor her [sourdough cultures](https://slides.com/daisyt/observability-kitchen) on a RPi.

This took a while to set up, not least because I was following several different sources at the same time, many of them written for the RPi and not an x86 machine. However it is mostly working now - and when I'm done tweaking the setup, I will release it on github as a docker-compose application.

But finally, I was able to connect to the MQTT broker from my ESP32 and start sending data...

Haha, no. The PubSubClient library I use to connect to the server has a default timeout of 15 seconds, which is way too low for my use case - given that I take about 15 seconds to wake up the sensor and then gather measurement data to average out, and spend another 15 with the CPU sleeping to reduce power use. So I just went into the library and changed the keepalive interval to something more reasonable, like 3 minutes. Afterwards, I started getting data in much more reliably, however the MQTT connection is still kinda patchy and I want to fix that before I move on to adding more sensors to the thing.

In the end though, I get a good amount of data through, which I can see on my Grafana dashboard:

![Dashboard showing that a lot of emissions happen at night](https://thepracticaldev.s3.amazonaws.com/i/97zdi60t3dochty0u7fk.png)

For completeness, here's the Node-RED flow:

![](https://thepracticaldev.s3.amazonaws.com/i/dts5hkztljo5x6347nv9.png)

And a photo of the setup sucking in air from outside my window to analyse:

![](https://thepracticaldev.s3.amazonaws.com/i/s86ag0q1pn5ho69tajqm.jpg)

# More stuff?

For further development, I will definitely need to fix the MQTT connection. I don't know what's going on, but sometimes the ESP just plain can't connect to the server, or data gets eaten somewhere in the process. It might be a slightly too aggressive application of sleep modes, or maybe I need to tweak my WiFi settings. This is the challenge of debugging distributed systems - you just plain don't know where the problem actually is, and more often than not, it's actually many problems in many places.

I also want to actually power the thing off of batteries. I have some 18650 lithium cells I bought at very reasonable prices as Poundland powerbanks (£2 per ~2000mAh cell at a brick and mortar store in the UK? And you get some charge circuitry with it? That's super cheap for hobbyists!), and a holder with appropriate charge circuitry.

Once I assemble all of that, the box can be made mostly safe against rain water ingress with an O-ring seal along the top and some shrouding of the air inlet and outlet ports. Then I can put it outside and actually close my window.

Finally, I can also add some I2C sensors for general weather stuff - such as the ever popular BME280. I also thought about adding a display and some sort of touch sensitive pad stuck to the underside of the enclosure cover (which is transparent) to read data directly from the thing, but I think the Grafana interface is nicer.

And perhaps one day I'll design a cost reduced solution for all of this with a dedicated circuit board and put it up online for people to buy. If I can get the whole thing down to less than £30 I'd be quite happy. Yes, I will add better security if I ever sell this design, don't worry!

# Closing thoughts for now

I like this project. I want to know how much crap I'm breathing in and I now can. I like how this is a nice practical way to consolidate knowledge I learned at uni in two or three separate modules. And I like how quickly I can prototype all of this. I think you should try something like this too - dev hardware is super cheap these days and software is free and relatively straightforward to put together. Electronics knowledge is also easy to obtain on the internet, and proper tools are reasonably priced. Go do the thing!

[devpost]: https://dev.to/minkovsky/working-on-my-iot-air-quality-monitoring-setup-40a5