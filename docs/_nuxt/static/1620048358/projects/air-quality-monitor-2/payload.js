__NUXT_JSONP__("/projects/air-quality-monitor-2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){return {data:[{doc:{slug:"air-quality-monitor-2",description:"Continuing work on my air quality monitoring device",title:"An Air Quality Update",published:true,tags:"arduino, hardware, iot, environment",cover_image:"https:\u002F\u002Fthepracticaldev.s3.amazonaws.com\u002Fi\u002F3bmgyx4dkjyngzb1dwx3.jpg",date:"2019-06-21T00:00:00.000Z",toc:[{id:s,depth:f,text:t},{id:u,depth:f,text:v},{id:w,depth:f,text:x},{id:y,depth:f,text:z},{id:A,depth:f,text:B},{id:C,depth:f,text:D},{id:E,depth:f,text:F}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"A few weeks back I showed you "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdev.to\u002Fminkovsky\u002Fworking-on-my-iot-air-quality-monitoring-setup-40a5",rel:[n,o,p],target:q},children:[{type:a,value:"my air quality monitoring device"}]},{type:a,value:". I've since tweaked it, ran into problems and fixed them, and added some functionality. I also gathered some interesting data using the sensor itself - and it might be a little surprising."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Finally, I posted the source code for the program running on the ESP32 as a "},{type:b,tag:e,props:{href:G,rel:[n,o,p],target:q},children:[{type:a,value:"GitHub Gist"}]},{type:a,value:" - there's more on it below."}]},{type:a,value:c},{type:b,tag:g,props:{id:s},children:[{type:b,tag:e,props:{href:"#adding-some-stability-of-the-mechanical-kind",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To prevent the components from rattling around too much inside the enclosure, I designed a backing board in Fusion 360 and used the laser cutter at the South London Makerspace. This is just a piece of plywood with some holes, allowing me to secure the SDS-011 sensor and the ESP32 breakout board with some nylon screws. I went through a couple of design iterations of these backing boards, trying to fit everything inside the enclosure I had. The final one (highlighted in the screenshot below) packs the components in about 2\u002F3rd of the enclosure, allowing the battery holder to stand on its side as was the case when everything was wibble-wobbling around in the box."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{alt:"Fusion 360 screenshot",src:"https:\u002F\u002Fthepracticaldev.s3.amazonaws.com\u002Fi\u002Fsauohsmzudnuoyh9agni.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Needless to say, the wibble-wobbling was reduced and the pieces are now much easier to work with if I ever need to take them out of the box."}]},{type:a,value:c},{type:b,tag:g,props:{id:u},children:[{type:b,tag:e,props:{href:"#batteries-included",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ah yes, the battery compartment - which I previously used as just a power supply - is now occupied by actual batteries. I sourced those from Poundland power banks, at about £2 per ~2000mAh cells. They are pretty easy to get hold of, although I'm pretty sure one of these came pre-shorted - it started getting a bit smoky whenever I put any load on it. PSA: "},{type:b,tag:"strong",props:{},children:[{type:a,value:"If your batteries get smoky, don't use them!"}]},{type:a,value:" Lithium batteries are usually quite safe, but if you short them out, they can catch fire and\u002For explode, so it's best to not mess about with them."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I also wanted to be able to measure the level of charge in the batteries. The problem I needed to overcome was that, at full charge, a Li-ion battery (or a couple of them in parallel) has a potential of up to 4.3V - which is a full volt higher than the 3.3V level that the ESP32 operates at. I needed to get the battery voltage coming into an analogue pin of the ESP32 to top out at or below 3.3v in order to measure it without damaging the microcontroller. I can drop the voltage by using a voltage divider. I built an example of the circuit "},{type:b,tag:e,props:{href:"http:\u002F\u002Ftinyurl.com\u002Fyxp8ku24",rel:[n,o,p],target:q},children:[{type:a,value:"here"}]},{type:a,value:" in a simulator where you can play around with the battery voltage and see how the divider circuit:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{alt:"",src:"https:\u002F\u002Fthepracticaldev.s3.amazonaws.com\u002Fi\u002Ffl0thmsepdqddn7gvsf6.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the code, I define one of the pins as an analogue pin, and configure the ADC using some ESP32\u002FArduino functions. I can then read from this pin using the normal "},{type:b,tag:r,props:{},children:[{type:a,value:"analogRead"}]},{type:a,value:" function. However, when measuring an analogue value, noise and error creeps in pretty fast - so I decided to measure the battery level several times and average the results:"}]},{type:a,value:c},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"\u002F\u002F setup:\n  adcAttachPin(BATTERY_PIN);\n  analogSetPinAttenuation(BATTERY_PIN, ADC_11db);\n\n\u002F\u002F measure:\nfloat get_battery(int n_samples) {\n  float sum_reading = 0.0;\n  for (int n = 0; n \u003C n_samples; n++) {\n    int batteryAdcCount = analogRead(BATTERY_PIN);\n    \u002F\u002F Battery voltage is given by the ADC as x\u002F4096 * 3.3 for the voltage divider\n    \u002F\u002F and * 2 for the full voltage.\n    sum_reading += ((float) batteryAdcCount) \u002F 4096.0 * 3.3 * 2;\n  }\n\n  return sum_reading \u002F ((float) n_samples);\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There is a certain dialectic when it comes to measuring battery levels. The ADC is not magic, and it requires some current to flow while the measurement is taking place. However, you don't want that current to be too high, otherwise you'd be draining the battery rather quickly. This is where the choice of resistor value in your voltage divider is important - too low and you'll burn through the battery, too high and you might not be able to measure it accurately. I picked 36kOhm for mine at pretty much random, but it's high enough that the total current flowing through the divider is about 60uA. Compared to the SDS-011 and ESP32 running at full tilt (peaking at 270mA), it's not very much. If I was crazy about power efficiency, I would experiment more with higher resistor values, and possibly add a transistor to the circuit, so that I can turn off the current if I'm not currently measuring voltage."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the end, the battery measurement works pretty well, and the battery itself seems to last at least two full days:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{alt:"Voltage graph showing the battery discharging",src:"https:\u002F\u002Fthepracticaldev.s3.amazonaws.com\u002Fi\u002F11lrqcaz5yuh8aknr4mh.png"},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{id:w},children:[{type:b,tag:e,props:{href:"#on-plugging-in-stuff-wrong",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I semi-broke an ESP32 board during the development of this by accidentally plugging it with one pin shifted down in the socket, causing 5V to be applied to its ground pin. Somehow it survived that, but not unscathed - that particular board will no longer wake up from any form of CPU sleep without an external reset, but does otherwise work. Oops. Luckily, I had a spare that worked."}]},{type:a,value:c},{type:b,tag:g,props:{id:y},children:[{type:b,tag:e,props:{href:"#how-to-sleep-right",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Turns out I was using the sleep modes of the ESP32 wrong. Initially I thought of ESP's light sleep as a special case of the Arduino "},{type:b,tag:r,props:{},children:[{type:a,value:"delay()"}]},{type:a,value:" function, except where the processor core powers down for the duration of the delay. It's kind of like that, but with one caveat: this also suspends handling of the WiFi connection, causing some instability."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Furthermore, the ESP also has a deep sleep mode which saves more power, but it actually resets the microcontroller when waking up. I decided that I should use this mode, though - I don't need WiFi between measurements, so I might as well turn everything off. It also simplified the code slightly - I could put everything in "},{type:b,tag:r,props:{},children:[{type:a,value:"setup()"}]},{type:a,value:" and rely on the wakeup resets."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This also made the whole system more stable, and allowed me to more easily add retry features - in the version of the gist current at the time of writing ("},{type:b,tag:e,props:{href:"https:\u002F\u002Fgist.github.com\u002FFLamparski\u002F93af1ac4f49c2fde550a36f14a0d9446\u002F43b1ba31f619c24c3319f1d5bf3f93049d5d6633",rel:[n,o,p],target:q},children:[{type:a,value:"permalink"}]},{type:a,value:"), if I can't connect to WiFi within a few seconds, I turn everything off and sleep for another 15 seconds. Now, this is still a bit buggy - there can be long stretches when the ESP can't connect at all - so I will need to look at the timeout and other causes of connectivity issues. However, the device will "},{type:b,tag:"em",props:{},children:[{type:a,value:"eventually"}]},{type:a,value:" reconnect without me having to go and reset it."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{alt:"Nope, didn't need that data today...",src:"https:\u002F\u002Fthepracticaldev.s3.amazonaws.com\u002Fi\u002Fcfvsj91nirc2j9hh152x.png"},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{id:A},children:[{type:b,tag:e,props:{href:"#some-actual-observations",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"PM2.5 of the carbon species usually comes from burning stuff, right? Well, how about toast? Or indeed, just cooking lunch?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{alt:"Lunchtime spike",src:"https:\u002F\u002Fthepracticaldev.s3.amazonaws.com\u002Fi\u002Fip1t8u9ve5wugi0z0rmm.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Most nights I see a significant increase in presence of PM2.5 species over the night, even though traffic outside my apartment is very light - could this be due to some scattered light affecting the SDS-011 sensor? Or temperatures going down causing dust kicked up high into the atmosphere during the day to settle down?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{alt:"High measurements overnight",src:"https:\u002F\u002Fthepracticaldev.s3.amazonaws.com\u002Fi\u002Fdyf08orhdvr3xc3mwpzw.png"},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{id:C},children:[{type:b,tag:e,props:{href:"#for-those-playing-along",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The "},{type:b,tag:e,props:{href:G,rel:[n,o,p],target:q},children:[{type:a,value:"gist"}]},{type:a,value:" contains the Arduino sketch running on the ESP32 inside the device. If you want to run it on your own network, you will need to change the WiFi credentials near the top of the file:"}]},{type:a,value:c},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"#define WIFI_SSID \"CHANGE ME\"\n#define WIFI_PASS \"CHANGE ME\"\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{id:E},children:[{type:b,tag:e,props:{href:"#as-always-theres-more",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The most obvious next step will be to figure out why the ESP is not connecting to WiFi - maybe it's the internal antenna not being very good, or the timeout being too short."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Further next steps would be figuring out how to control my measurements for things like cooking - if I am going to use this device to nag my local authority, I should be reasonably sure that the data I get out of it is down to actual traffic related pollution, and not me burning toast. Finally, I should write up that IoT server setup, shouldn't I..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"See you then - and as always, let me know what you think about this project. I'm still liking it a lot."}]}]},dir:"\u002Fprojects",path:"\u002Fprojects\u002Fair-quality-monitor-2",extension:".md",createdAt:"2021-05-03T12:33:11.073Z",updatedAt:"2021-05-03T13:15:25.029Z"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a",2,"h2","true",-1,"span","icon","icon-link","img","nofollow","noopener","noreferrer","_blank","code","adding-some-stability-of-the-mechanical-kind","Adding some stability, of the mechanical kind","batteries-included","Batteries included","on-plugging-in-stuff-wrong","On plugging in stuff wrong","how-to-sleep-right","How to sleep right","some-actual-observations","Some actual observations","for-those-playing-along","For those playing along","as-always-theres-more","As always, there's more","https:\u002F\u002Fgist.github.com\u002FFLamparski\u002F93af1ac4f49c2fde550a36f14a0d9446","div","nuxt-content-highlight","pre","language-text","line-numbers")));