---
title: "Misguided Modules: SSI2131 VCO"
description: An Eurorack VCO module based on the new Sound Semiconductor chip
date: 2021-05-16
cardImage: images/SSI2131-cover.png
---

**Misguided Modules** is the name of my project to learn more about electronics, especially in
the analogue domain, and in particular applied to music production, while making potentially
marketable Eurorack modules.

<body-image
    alt="Photo of a SSI2131 VCO in my rack, next to a prototype JFET-based filter"
    asset="misguided-ssi2131/photo.jpg"></body-image>

## Demo

This demo has 2 VCOs going into my **Mx JFET** low-pass filter prototype, with some reverb
and drums added in post:

<audio controls src="https://ftw-random-bucket.s3.eu-west-2.amazonaws.com/misguided-modular-samples/Misguided+Modules+Demo_session_2021-05-16.wav">
    <a href="https://ftw-random-bucket.s3.eu-west-2.amazonaws.com/misguided-modular-samples/Misguided+Modules+Demo_session_2021-05-16.wav">Download audio</a>
</audio>

Note that there isn't a VCA in there - note articulation is fully controlled by the filter.
I'm using the 4 pole (24dB/octave) output for the demo.

## The module

The module exposes all of the SSI2131 inputs and outputs:

* 1V/oct CV in
* Linear FM in
* Pulse Width Modulation in (for the pulse output)
* Coarse & fine tuning controls
* Pulse width control
* Hard and soft sync inputs
* Saw out - what you heard in the demo
* Pulse out
* Triangle out

All this in a skiff-friendly 6HP package. The panel and circuit board were manufactured by JLCPCB,
while the components can be sourced from UK-based suppliers - I used [Farnell][farnell] for most
of the SMD parts and the power connector, [Thonk][thonk] for the knobs, and [Amazing Synth][asynth]
for the SSI2131 itself, as at the time I originally put this together it was not yet available
from Thonk.

[farnell]: https://uk.farnell.com
[thonk]: https://www.thonk.co.uk/
[asynth]: https://www.amazingsynth.com/

## What's an SSI2131?

Analogue synthesisers are undergoing a bit of a renaissance, especially in the modular world.
They can also be fun DIY projects as parts are now easy to obtain, and there are vendors dedicated
to serving the DIY market - from selling kits to individual ICs for music production. And of course,
if people are buying musical ICs, there have to be companies making musical ICs. For instance,
Behringer's sister company Coolaudio makes a number of chips originally designed by CEM and SSM.
These go into their synths, both new designs such as the Neutron or Crave, and the clones that made
them infamous among the gearhead community. There's the Latvian ALFA RPAR company which makes
a whole lot of ICs and matched transistor packages. And the American Sound Semiconductor, which
makes both improved designs of old chips, and completely new ones, such as the SSI213x family.

There are currently two ICs in this family, the SSI2130 and SSI2131. Both share a common triangle
core, input stage, exponential converter, and other support circuits. The SSI2130 then exposes
a number of different types of outputs, as well as a pin allowing for through-zero FM - this in
itself is pretty cool as it lets you use the 2130 as an analogue operator in a Yamaha-esque FM
synthesis engine. The downside is that it's not the cheapest part and it comes in a tiny QFN package
which could be pretty awkward to solder.

The 2131 has a subset of the features of its older sibling, and also comes in a SO package which
makes it easy to solder, even with just a regular iron - all you need is some tweezers. It's also
a fair bit cheaper.

[SSI2131 Datasheet](http://soundsemiconductor.com/downloads/ssi2131datasheet.pdf)

## Making it work with Eurorack

The chip is well designed and requires few external components: a timing cap, some passives, and
potentiometers for trimming and user control. However, it also requires a +5V power rail and a
stable +2.5V reference, and the output signals need to have DC offset removed and then be
amplified to Eurorackish levels (typically 5Vpp).

In this design I went for a fairly naive setup of using large capacitors to block the DC and
some non-inverting opamp stages to boost the signal.

In addition to the reference design, I added a straight Linear FM input (in the datasheet this
is only illustrated as a vibrato circuit), and a third trimmer pot for coarse tuning. The idea is
that the user would perform their tuning with the control pots set to their centre position, which
would then allow them to use these controls in a slightly more intuitive way.

I also decided that I want this module to be relatively small, both in terms of HP width and
also depth, to allow it to be used with slimmer cases and skiffs. That, and the desire to reduce the
number of circuit boards needed - the front panel is manufactured using the same process - meant
making the design use surface mount components for the core logic. Connectors and potentiometers
are still through-hole, though.

<body-image
    alt="Schematic drawing of the Misguided Modules SSI2131 VCO"
    asset="misguided-ssi2131/schematic.png"></body-image>

## Design for manufacture

Right now I have two versions of this module. One uses all the components and values suggested in
the reference design, while the other was an early attempt at making this module easy to manufacture
by using parts from the JLCPCB SMT library. That design, however, was made before the relatively recent
(as of writing) improvements to the service. Since I have half an eye on selling this module as
a partially assembled kit in the future, I may do another revision which is optimised for JLC
assembly, as a way to reduce my own involvement in placing the SMD parts. Or, since the current
version works reasonably well, I may try to use another PCB company's assembly service - I think
both SeeedStudio and PCBWay allow you to supply your own BOM. It would be interesting to see if
they are able to source the SSI2131 chip themselves, or if I'd need to ship it to them myself;
in either case, I'm happy to leave it out of the automated assembly and solder it in as a final
step before kitting the board up with the required through-hole components and hardware.

I hope this was somewhat informative or at least interesting, and if I ever get this project to
a state that can be sold, I'll update this site with build instructions and a link to buy a kit.
I will not be selling fully assembled modules, though.