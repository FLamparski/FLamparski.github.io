(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{283:function(e,t,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("74425d62",content,!0,{sourceMap:!1})},284:function(e,t,r){"use strict";r.r(t);var n=r(1).a.extend({props:{cardImage:{type:String,default:null},cardImageAlt:{type:String,default:null}}}),o=(r(286),r(8)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[e.cardImage?r("img",{staticClass:"card-image",attrs:{src:e.cardImage,alt:e.cardImageAlt}}):e._e(),e._v(" "),r("div",{staticClass:"card-body"},[e._t("body")],2),e._v(" "),r("div",{staticClass:"card-footer"},[e._t("footer")],2)])}),[],!1,null,"5e674884",null);t.default=component.exports},285:function(e,t,r){var content=r(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("50db4cd0",content,!0,{sourceMap:!1})},286:function(e,t,r){"use strict";r(283)},287:function(e,t,r){var n=r(26)(!1);n.push([e.i,".card[data-v-5e674884]{display:flex;flex-direction:column;background-color:#fafafa;border-radius:4px;padding:8px;box-shadow:0 2px 5px rgba(0,0,0,.2)}.card>.card-image[data-v-5e674884]{margin:-8px -8px 8px;border-top-left-radius:4px;border-top-right-radius:4px;display:block;width:calc(100% + 16px);height:100%;max-height:220px;-o-object-fit:cover;object-fit:cover}.card>.card-footer[data-v-5e674884]{margin-top:auto}",""]),e.exports=n},288:function(e,t,r){"use strict";r(285)},289:function(e,t,r){var n=r(26)(!1);n.push([e.i,".index-grid[data-v-32aeba5a]{margin-top:16px;display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:8px;-moz-column-gap:8px;column-gap:8px;grid-row-gap:8px;row-gap:8px}@media screen and (max-width:400px){.index-grid[data-v-32aeba5a]{grid-template-columns:1fr}}.index-grid .page-link>.card[data-v-32aeba5a]{height:100%}",""]),e.exports=n},290:function(e,t,r){"use strict";r.r(t);r(55),r(124);var n=r(1),o=r(284),d=n.a.extend({components:{Card:o.default},props:{pages:{type:Array,required:!0}},methods:{formatDate:function(e){return e?e.split("T")[0]:""}}}),l=(r(288),r(8)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"index-grid"},e._l(e.pages,(function(t){return r("nuxt-link",{key:t.slug,staticClass:"page-link",attrs:{to:t.path}},[r("card",{attrs:{"card-image":t.cardImage,"card-image-alt":"Card image for "+t.title},scopedSlots:e._u([{key:"body",fn:function(){return[r("h2",{staticClass:"page-link-title"},[e._v(e._s(t.title))]),e._v(" "),r("p",{staticClass:"page-description"},[e._v(e._s(t.description))])]},proxy:!0},{key:"footer",fn:function(){return[r("p",{staticClass:"text-grey date"},[e._v(e._s(e.formatDate(t.date)))])]},proxy:!0}],null,!0)})],1)})),1)}),[],!1,null,"32aeba5a",null);t.default=component.exports;installComponents(component,{Card:r(284).default})},317:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(34),r(1).a.extend({layout:"theme-code",head:{title:"Code - Filip Wieland"},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("code").sortBy("date","desc").fetch();case 3:return n=t.sent,t.abrupt("return",{pages:n});case 5:case"end":return t.stop()}}),t)})))()}})),d=r(8),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"index"},[r("h1",[e._v("Code")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),r("index-grid",{attrs:{pages:e.pages}})],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("Hey!")]),e._v(" I work for ThousandEyes (part of Cisco) as a software engineer,\n        primarily on frontend development. I also occasionally do some software side projects,\n        and even less frequently write about software. Below you may be able to find some of\n        these things.\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("a",{attrs:{href:"https://github.com/FLamparski/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Find me on GitHub")]),e._v(" "),r("span",{staticClass:"text-grey"},[e._v("—")]),e._v(" "),r("a",{attrs:{href:"https://www.linkedin.com/in/ftwieland",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spam me on LinkedIn")]),e._v(" "),r("span",{staticClass:"text-grey"},[e._v("—")]),e._v(" "),r("a",{attrs:{href:"https://dev.to/minkovsky",target:"_blank",rel:"noopener noreferrer"}},[e._v("See some of the same stuff on dev.to")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{IndexGrid:r(290).default})}}]);