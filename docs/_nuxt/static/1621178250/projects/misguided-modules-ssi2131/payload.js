__NUXT_JSONP__("/projects/misguided-modules-ssi2131", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{doc:{slug:"misguided-modules-ssi2131",description:"An Eurorack VCO module based on the new Sound Semiconductor chip",title:"Misguided Modules: SSI2131 VCO",date:"2021-05-16T00:00:00.000Z",cardImage:"images\u002FSSI2131-cover.png",toc:[{id:r,depth:g,text:s},{id:t,depth:g,text:u},{id:v,depth:g,text:w},{id:x,depth:g,text:y},{id:z,depth:g,text:A}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:B,props:{},children:[{type:a,value:"Misguided Modules"}]},{type:a,value:" is the name of my project to learn more about electronics, especially in\r\nthe analogue domain, and in particular applied to music production, while making potentially\r\nmarketable Eurorack modules."}]},{type:a,value:c},{type:b,tag:C,props:{alt:"Photo of a SSI2131 VCO in my rack, next to a prototype JFET-based filter",asset:"misguided-ssi2131\u002Fphoto.jpg"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{id:r},children:[{type:b,tag:e,props:{href:"#demo",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This demo has 2 VCOs going into my "},{type:b,tag:B,props:{},children:[{type:a,value:"Mx JFET"}]},{type:a,value:" low-pass filter prototype, with some reverb\r\nand drums added in post:"}]},{type:a,value:c},{type:b,tag:"audio",props:{controls:true,src:D},children:[{type:a,value:"\n    "},{type:b,tag:e,props:{href:D},children:[{type:a,value:"Download audio"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Note that there isn't a VCA in there - note articulation is fully controlled by the filter.\r\nI'm using the 4 pole (24dB\u002Foctave) output for the demo."}]},{type:a,value:c},{type:b,tag:h,props:{id:t},children:[{type:b,tag:e,props:{href:"#the-module",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The module exposes all of the SSI2131 inputs and outputs:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"1V\u002Foct CV in"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Linear FM in"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Pulse Width Modulation in (for the pulse output)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Coarse & fine tuning controls"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Pulse width control"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Hard and soft sync inputs"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Saw out - what you heard in the demo"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Pulse out"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Triangle out"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All this in a skiff-friendly 6HP package. The panel and circuit board were manufactured by JLCPCB,\r\nwhile the components can be sourced from UK-based suppliers - I used "},{type:b,tag:e,props:{href:"https:\u002F\u002Fuk.farnell.com",rel:[n,o,p],target:q},children:[{type:a,value:"Farnell"}]},{type:a,value:" for most\r\nof the SMD parts and the power connector, "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.thonk.co.uk\u002F",rel:[n,o,p],target:q},children:[{type:a,value:"Thonk"}]},{type:a,value:" for the knobs, and "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.amazingsynth.com\u002F",rel:[n,o,p],target:q},children:[{type:a,value:"Amazing Synth"}]},{type:a,value:"\r\nfor the SSI2131 itself, as at the time I originally put this together it was not yet available\r\nfrom Thonk."}]},{type:a,value:c},{type:b,tag:h,props:{id:v},children:[{type:b,tag:e,props:{href:"#whats-an-ssi2131",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Analogue synthesisers are undergoing a bit of a renaissance, especially in the modular world.\r\nThey can also be fun DIY projects as parts are now easy to obtain, and there are vendors dedicated\r\nto serving the DIY market - from selling kits to individual ICs for music production. And of course,\r\nif people are buying musical ICs, there have to be companies making musical ICs. For instance,\r\nBehringer's sister company Coolaudio makes a number of chips originally designed by CEM and SSM.\r\nThese go into their synths, both new designs such as the Neutron or Crave, and the clones that made\r\nthem infamous among the gearhead community. There's the Latvian ALFA RPAR company which makes\r\na whole lot of ICs and matched transistor packages. And the American Sound Semiconductor, which\r\nmakes both improved designs of old chips, and completely new ones, such as the SSI213x family."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are currently two ICs in this family, the SSI2130 and SSI2131. Both share a common triangle\r\ncore, input stage, exponential converter, and other support circuits. The SSI2130 then exposes\r\na number of different types of outputs, as well as a pin allowing for through-zero FM - this in\r\nitself is pretty cool as it lets you use the 2130 as an analogue operator in a Yamaha-esque FM\r\nsynthesis engine. The downside is that it's not the cheapest part and it comes in a tiny QFN package\r\nwhich could be pretty awkward to solder."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The 2131 has a subset of the features of its older sibling, and also comes in a SO package which\r\nmakes it easy to solder, even with just a regular iron - all you need is some tweezers. It's also\r\na fair bit cheaper."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fsoundsemiconductor.com\u002Fdownloads\u002Fssi2131datasheet.pdf",rel:[n,o,p],target:q},children:[{type:a,value:"SSI2131 Datasheet"}]}]},{type:a,value:c},{type:b,tag:h,props:{id:x},children:[{type:b,tag:e,props:{href:"#making-it-work-with-eurorack",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The chip is well designed and requires few external components: a timing cap, some passives, and\r\npotentiometers for trimming and user control. However, it also requires a +5V power rail and a\r\nstable +2.5V reference, and the output signals need to have DC offset removed and then be\r\namplified to Eurorackish levels (typically 5Vpp)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In this design I went for a fairly naive setup of using large capacitors to block the DC and\r\nsome non-inverting opamp stages to boost the signal."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In addition to the reference design, I added a straight Linear FM input (in the datasheet this\r\nis only illustrated as a vibrato circuit), and a third trimmer pot for coarse tuning. The idea is\r\nthat the user would perform their tuning with the control pots set to their centre position, which\r\nwould then allow them to use these controls in a slightly more intuitive way."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I also decided that I want this module to be relatively small, both in terms of HP width and\r\nalso depth, to allow it to be used with slimmer cases and skiffs. That, and the desire to reduce the\r\nnumber of circuit boards needed - the front panel is manufactured using the same process - meant\r\nmaking the design use surface mount components for the core logic. Connectors and potentiometers\r\nare still through-hole, though."}]},{type:a,value:c},{type:b,tag:C,props:{alt:"Schematic drawing of the Misguided Modules SSI2131 VCO",asset:"misguided-ssi2131\u002Fschematic.png"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{id:z},children:[{type:b,tag:e,props:{href:"#design-for-manufacture",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Right now I have two versions of this module. One uses all the components and values suggested in\r\nthe reference design, while the other was an early attempt at making this module easy to manufacture\r\nby using parts from the JLCPCB SMT library. That design, however, was made before the relatively recent\r\n(as of writing) improvements to the service. Since I have half an eye on selling this module as\r\na partially assembled kit in the future, I may do another revision which is optimised for JLC\r\nassembly, as a way to reduce my own involvement in placing the SMD parts. Or, since the current\r\nversion works reasonably well, I may try to use another PCB company's assembly service - I think\r\nboth SeeedStudio and PCBWay allow you to supply your own BOM. It would be interesting to see if\r\nthey are able to source the SSI2131 chip themselves, or if I'd need to ship it to them myself;\r\nin either case, I'm happy to leave it out of the automated assembly and solder it in as a final\r\nstep before kitting the board up with the required through-hole components and hardware."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I hope this was somewhat informative or at least interesting, and if I ever get this project to\r\na state that can be sold, I'll update this site with build instructions and a link to buy a kit.\r\nI will not be selling fully assembled modules, though."}]}]},dir:"\u002Fprojects",path:"\u002Fprojects\u002Fmisguided-modules-ssi2131",extension:".md",createdAt:"2021-05-16T13:53:48.852Z",updatedAt:"2021-05-16T15:15:25.823Z"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","li",2,"h2","true",-1,"span","icon","icon-link","nofollow","noopener","noreferrer","_blank","demo","Demo","the-module","The module","whats-an-ssi2131","What's an SSI2131?","making-it-work-with-eurorack","Making it work with Eurorack","design-for-manufacture","Design for manufacture","strong","body-image","https:\u002F\u002Fftw-random-bucket.s3.eu-west-2.amazonaws.com\u002Fmisguided-modular-samples\u002FMisguided+Modules+Demo_session_2021-05-16.wav")));