webpackJsonp([0],{"/TYz":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("ucYw"),a=r("iA8U"),i=!1;var n=function(t){i||r("NaAJ")},s=r("VU/8")(o.a,a.a,!1,n,null,null);s.options.__file="pages\\index.vue",e.default=s.exports},"0MJc":function(t,e,r){"use strict";var o=r("6aV8"),a=!1;var i=function(t){a||r("5afX")},n=r("VU/8")(null,o.a,!1,i,null,null);n.options.__file="components\\AppLogo.vue",e.a=n.exports},"5afX":function(t,e,r){var o=r("sqFd");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("5f1c19eb",o,!1,{sourceMap:!1})},"6aV8":function(t,e,r){"use strict";var o=function(){var t=this.$createElement;this._self._c;return this._m(0)};o._withStripped=!0;var a={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),e("div",{staticClass:"Triangle Triangle--one"}),e("div",{staticClass:"Triangle Triangle--three"}),e("div",{staticClass:"Triangle Triangle--four"})])}]};e.a=a},NaAJ:function(t,e,r){var o=r("QLNd");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("2cbfecc8",o,!1,{sourceMap:!1})},QLNd:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},XZCf:function(t,e,r){"use strict";e.a={name:"chat-board",head:{script:[{src:"https://nctuyoung.disqus.com/embed.js"}]},mounted:function(){window.DISQUS&&window.DISQUS.reset({reload:!0})}}},XhV7:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".chatboard[data-v-4fa9bcd4]{width:100%}",""])},hJGx:function(t,e,r){"use strict";var o=r("XZCf"),a=r("vZK4"),i=!1;var n=function(t){i||r("vDuE")},s=r("VU/8")(o.a,a.a,!1,n,"data-v-4fa9bcd4",null);s.options.__file="components\\ChatBoard.vue",e.a=s.exports},iA8U:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-toolbar",[r("v-toolbar-title",[t._v("Title")]),r("v-spacer"),r("v-toolbar-side-icon",{staticClass:"hidden-md-and-up"}),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[r("v-btn",{attrs:{flat:""},on:{click:function(e){t.jump(1)}}},[t._v("about")]),r("v-btn",{attrs:{flat:""}},[t._v("Link Two")]),r("v-btn",{attrs:{flat:""}},[t._v("Link Three")])],1)],1),r("v-container",[r("chat-board")],1)],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},sqFd:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear forwards 1s;animation:turn 2s linear forwards 1s;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear forwards 3.5s;animation:goright .5s linear forwards 3.5s}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear forwards 3s;animation:godown .5s linear forwards 3s;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},ucYw:function(t,e,r){"use strict";var o=r("0MJc"),a=r("hJGx");e.a={components:{AppLogo:o.a,ChatBoard:a.a},methods:{jump:function(t){switch(t){case 1:this.$router.push("/about")}}}}},vDuE:function(t,e,r){var o=r("XhV7");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("1149d811",o,!1,{sourceMap:!1})},vZK4:function(t,e,r){"use strict";var o=function(){var t=this.$createElement;this._self._c;return this._m(0)};o._withStripped=!0;var a={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chatboard"},[e("div",{attrs:{id:"disqus_thread"}})])}]};e.a=a}});