(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{283:function(t,e,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("74425d62",content,!0,{sourceMap:!1})},284:function(t,e,r){"use strict";r.r(e);var d=r(1).a.extend({props:{cardImage:{type:String,default:null},cardImageAlt:{type:String,default:null}}}),o=(r(286),r(8)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[t.cardImage?r("img",{staticClass:"card-image",attrs:{src:t.cardImage,alt:t.cardImageAlt}}):t._e(),t._v(" "),r("div",{staticClass:"card-body"},[t._t("body")],2),t._v(" "),r("div",{staticClass:"card-footer"},[t._t("footer")],2)])}),[],!1,null,"5e674884",null);e.default=component.exports},285:function(t,e,r){var content=r(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("50db4cd0",content,!0,{sourceMap:!1})},286:function(t,e,r){"use strict";r(283)},287:function(t,e,r){var d=r(26)(!1);d.push([t.i,".card[data-v-5e674884]{display:flex;flex-direction:column;background-color:#fafafa;border-radius:4px;padding:8px;box-shadow:0 2px 5px rgba(0,0,0,.2)}.card>.card-image[data-v-5e674884]{margin:-8px -8px 8px;border-top-left-radius:4px;border-top-right-radius:4px;display:block;width:calc(100% + 16px);height:100%;max-height:220px;-o-object-fit:cover;object-fit:cover}.card>.card-footer[data-v-5e674884]{margin-top:auto}",""]),t.exports=d},288:function(t,e,r){"use strict";r(285)},289:function(t,e,r){var d=r(26)(!1);d.push([t.i,".index-grid[data-v-32aeba5a]{margin-top:16px;display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:8px;-moz-column-gap:8px;column-gap:8px;grid-row-gap:8px;row-gap:8px}@media screen and (max-width:400px){.index-grid[data-v-32aeba5a]{grid-template-columns:1fr}}.index-grid .page-link>.card[data-v-32aeba5a]{height:100%}",""]),t.exports=d},290:function(t,e,r){"use strict";r.r(e);r(55),r(124);var d=r(1),o=r(284),n=d.a.extend({components:{Card:o.default},props:{pages:{type:Array,required:!0}},methods:{formatDate:function(t){return t?t.split("T")[0]:""}}}),c=(r(288),r(8)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-grid"},t._l(t.pages,(function(e){return r("nuxt-link",{key:e.slug,staticClass:"page-link",attrs:{to:e.path}},[r("card",{attrs:{"card-image":e.cardImage,"card-image-alt":"Card image for "+e.title},scopedSlots:t._u([{key:"body",fn:function(){return[r("h2",{staticClass:"page-link-title"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"page-description"},[t._v(t._s(e.description))])]},proxy:!0},{key:"footer",fn:function(){return[r("p",{staticClass:"text-grey date"},[t._v(t._s(t.formatDate(e.date)))])]},proxy:!0}],null,!0)})],1)})),1)}),[],!1,null,"32aeba5a",null);e.default=component.exports;installComponents(component,{Card:r(284).default})}}]);