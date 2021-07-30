---
title: "Misguided Modules: Mx JFET"
description: A distorting, switchable-feedback filter using JFETs
date: 2021-07-30
cardImage: images/MXJFET-cover.png
---

**Misguided Modules** is the name of my project to learn more about electronics, especially in
the analogue domain, and in particular applied to music production, while making potentially
marketable Eurorack modules.

<body-image
    alt="Mx JFET mounted in my modular system"
    asset="misguided-mxjfet/insitu.jpg"></body-image>

## Demo

* [**Demo 1** (TikTok)][demo1] - using a sequence from [Abyss][abyss], in a fairly tame configuration
* [**Demo 2** (YouTube)][demo2] - using the bassline from Hysteria by Muse, with the resonance
  turned way past what's reasonable

In both patches, I'm using Maths as the envelope generator and two [Misguided VCO][ssi2131]
going through Mx JFET. Unlike the demos for that module, I am also using a proper VCA for
articulation this time. The Hysteria demo also runs the output through a digital delay effect.

[abyss]: /music/ABYSS
[demo1]: https://www.tiktok.com/@filipwieland/video/6990437999586626821
[demo2]: https://youtu.be/O_m5g9EF4lQ
[ssi2131]: /projects/misguided-modules-ssi2131

## The module

**Mx JFET** is a low-pass filter with 2- and 4-pole outputs that uses the MMBFJ310L JFET as its
variable gain element. It implements both the classic Moog-style inverting feedback path,
as well as a more spicy MS20-style Sallen-Key configuration. These can be switched on the fly
through the front panel toggle.

There's also an attenuverter on the CV input for, well, attenuating and inverting the control
signal. This is useful if you're running this off the same envelope generator but want to
attenuate the filter envelope.

The inverting feedback mode is fine - it suffers from the usual problem of high resonance swamping
out the input signal, but at more sensible settings it sounds good especially on the 4 pole output.

Where the fun starts is when you flick the switch to the SKB mode, for Sallen-Key-Bach. Much higher
resonance levels become practical, and the sound gets much dirtier and in my opinion more
interesting. I, uh, got inspired by [Aaron Lanterman's lectures][lanterman2021-0] on filter design
in general and when I saw the [lecture on Sallen-Key filters][lanterman2021-1], I decided to
incorporate it into Mx JFET immediately. And it turns out that it's fairly easy to switch between
SKB mode and Inverting mode:

<body-image
    alt="Schematic fragment showing how Mx JFET switches between inverting and SKB feedback modes"
    asset="misguided-mxjfet/switch.png"></body-image>

It's just a double pole, double throw switch. In the inverting position, the first capacitor (C1) is
grounded, while the feedback is routed to the inverting input of U2A. In the SKB position, feedback
is disconnected from U2A and instead it's connected to the normally grounded side of C1.

I think some of the distorted nature of this filter comes from driving the JFETs in a weird way.
The particular transistors I'm using are not meant for audio use and I need to use some oddball
gate voltages to give them the right behaviour. What I imagine is happening is that it's easy for
the cutoff knob to go "past" fully open and into a state where the JFETs saturate more easily,
especially if the input is quite hot. To control this behaviour a bit, the module has two tuning
pots, which together control the effective range of the cutoff knob.

[lanterman2021-0]: https://www.youtube.com/playlist?list=PLOunECWxELQS5bMdWo9VhmZtsCjhjYNcV
[lanterman2021-1]: https://www.youtube.com/watch?v=beQLUA0BQP4

## Design for manufacture

<body-image
    alt="Mx JFET boards close-up shot"
    asset="misguided-mxjfet/boardscloseup.jpg"></body-image>

Mx JFET is heavy on SMD components, but all SMD components are populated by my PCB supplier, JLCPCB.
There is a handful of components that you need to hand solder yourself (see the BOM below).
The panel is made using the same process as the PCB and so overall the design is pretty cheap:
I could sell a PCB and panel set for £20 and get a fair margin.

Assembly will take about 40 minutes of soldering/build and maybe 5-10 minutes of tuning.

Most components have fairly obvious placement and orientation. Where you'll need to take care is
the trim pots - make sure the screws are towards the sockets and away from the control pots. This is
so that they poke through the holes in the panel.
I will try to come up with a better build document ahead of a larger scale production run.

## BOM

<table>
    <tr>
        <th scope=col>#</th>
        <th scope=col>Item</th>
        <th scope=col>Qty</th>
        <th scope=col>Source</th>
    </tr>
    <tr>
        <td>RV1</td>
        <td>Linear 100k centre detent pot</td>
        <td>1</td>
        <td><a href="https://www.thonk.co.uk/shop/ttpots/" target=_blank>Thonk</a></td>
    </tr>
    <tr>
        <td>RV2, RV3</td>
        <td>Linear 100k pot</td>
        <td>2</td>
        <td><a href="https://www.thonk.co.uk/shop/ttpots/" target=_blank>Thonk</a></td>
    </tr>
    <tr>
        <td>RV4, RV5</td>
        <td>20k/25k trimmer</td>
        <td>2</td>
        <td><a href="https://www.thonk.co.uk/shop/25-turn-trimmer-potentiometer/" target=_blank>Thonk</a> | <a href="https://www.rapidonline.com/suntan-tsr-3296w-203r-20k-wr3296w-10-3-8-cermet-trimmer-pot-68-1947" target=_blank>Rapid</a></td>
    </tr>
    <tr>
        <td>C6, C7</td>
        <td>470nF film capacitor</td>
        <td>2</td>
        <td><a href="https://www.rapidonline.com/kemet-r82dc3470aa60k-470nf-10-63v-5mm-polyester-box-capacitor-10-3268" target=_blank>Rapid</a> | <a href="https://www.ebay.co.uk/itm/263756115737" target=_blank>Ebay</a></td>
    </tr>
    <tr>
        <td>C1, C2, C3, C4</td>
        <td>220nF film capacitor</td>
        <td>4</td>
        <td><a href="https://www.rapidonline.com/kemet-r82dc3220aa60k-220nf-10-63v-5mm-polyester-box-capacitor-10-3264" target=_blank>Rapid</a> | <a href="https://www.ebay.co.uk/itm/263756115737" target=_blank>Ebay</a></td>
    </tr>
    <tr>
        <td>J1, J2, J4, J5</td>
        <td>Thonkiconn 3.5mm socket (PJ398SM) + nut (hex or knurled; washer not required)</td>
        <td>4</td>
        <td><a href="https://www.thonk.co.uk/shop/3-5mm-jacks/" target=_blank>Thonk</a></td>
    </tr>
    <tr>
        <td>J3</td>
        <td>Power connector - <em>design assumes a keyed connector so no polarity protection!</em></td>
        <td>1</td>
        <td><a href="https://www.rapidonline.com/bkl-10120554-straight-pin-header-2-x-5-for-pcb-mounting-2-54-without-ejector-50-9968" target=_blank>Rapid</a></td>
    </tr>
    <tr>
        <td>SW1</td>
        <td>DPDT ON-ON Switch</td>
        <td>1</td>
        <td><a href="https://www.thonk.co.uk/shop/sub-mini-toggle-switches/" target=_blank>Thonk</a></td>
    </tr>
    <tr>
        <td></td>
        <td>M2x10 standoff, M2 nut, M2 screw</td>
        <td>2</td>
        <td><a href="https://www.ebay.co.uk/itm/302809868773" target=_blank>Ebay</a> - I recommend just getting a kit like this one</td>
    </tr>
</table>

## Schematic

<body-image
    alt="Full schematic"
    asset="misguided-mxjfet/schematic.png"></body-image>
