(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-verified_ok"],{"0320":function(A,t,n){"use strict";var e;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return e}));var a=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"head"},[e("v-uni-view",{staticClass:"head_1"},[e("v-uni-image",{staticClass:"head_1_1",attrs:{src:n("e171")},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goBack.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"head_2"},[A._v("实名认证")]),e("v-uni-view",{staticClass:"head_3"})],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-image",{staticClass:"content_1",attrs:{src:n("cc69")}}),e("v-uni-view",{staticClass:"content_2"},[A._v("您已通过实名认证")]),e("v-uni-view",{staticClass:"content_3"},[e("v-uni-view",{staticClass:"content_3_1"},[A._v("真实姓名")]),e("v-uni-view",{staticClass:"content_3_1"},[A._v(A._s(A.name))])],1),e("v-uni-view",{staticClass:"content_3"},[e("v-uni-view",{staticClass:"content_3_1"},[A._v("身份证号")]),e("v-uni-view",{staticClass:"content_3_1"},[A._v(A._s(A.card))])],1)],1)],1)},i=[]},"16db":function(A,t,n){"use strict";var e=n("4c65"),a=n.n(e);a.a},"4c65":function(A,t,n){var e=n("9f39");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[A.i,e,""]]),e.locals&&(A.exports=e.locals);var a=n("4f06").default;a("f1d2e29c",e,!0,{sourceMap:!1,shadowMode:!1})},"9f39":function(A,t,n){var e=n("24fb");t=e(!1),t.push([A.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-d0dfb858]{padding:0 %?35?%;padding-top:calc(%?92?% + %?195?%)}.content .content_1[data-v-d0dfb858]{display:block;margin:0 auto;width:%?213?%;height:%?184?%;margin-bottom:%?31?%}.content .content_2[data-v-d0dfb858]{text-align:center;margin-top:%?31?%;margin-bottom:%?27?%;font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#000;line-height:1}.content .content_3[data-v-d0dfb858]{height:%?129?%;display:flex;justify-content:space-between;align-items:center;border-bottom:%?1?% solid #ededed}.content .content_3 .content_3_1[data-v-d0dfb858]{font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#000;line-height:1}.content .content_4[data-v-d0dfb858]{font-size:%?24?%;font-family:PingFang SC;font-weight:400;color:#1f73f1;line-height:1;margin-top:%?120?%;text-align:center}.head[data-v-d0dfb858]{display:flex;justify-content:space-between;align-items:center;height:%?195?%;box-sizing:border-box;padding:0 %?26?%;padding-top:%?120?%;position:fixed;width:100%;background:#fff;z-index:5}.head .head_1[data-v-d0dfb858],\n.head .head_2[data-v-d0dfb858],\n.head .head_3[data-v-d0dfb858]{flex:1}.head .head_1 .head_1_1[data-v-d0dfb858]{width:%?16?%;height:%?28?%}.head .head_2[data-v-d0dfb858]{text-align:center;font-size:%?34?%;font-family:PingFang SC;font-weight:700;color:#000;line-height:1}',""]),A.exports=t},ae41:function(A,t,n){"use strict";n.r(t);var e=n("0320"),a=n("f4d2");for(var i in a)["default"].indexOf(i)<0&&function(A){n.d(t,A,(function(){return a[A]}))}(i);n("16db");var d,c=n("f0c5"),o=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"d0dfb858",null,!1,e["a"],d);t["default"]=o.exports},cc69:function(A,t,n){A.exports=n.p+"static/img/wanchen.bf62c84d.webp"},d493:function(A,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("5319");var e={data:function(){return{name:"",card:""}},methods:{goBack:function(){uni.navigateBack({delta:2})}},onLoad:function(A){this.name=A.name.substring(0,1)+A.name.substring(1).replace(/[^x00-xff]/g,"*"),this.card=A.card.substring(0,A.card.length-4).replace(/[x00-xff]/g,"*")+A.card.substring(A.card.length-4)}};t.default=e},e171:function(A,t){A.exports="data:image/webp;base64,UklGRiIDAABXRUJQVlA4WAoAAAAwAAAADwAAGwAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEzjAAAALw/ABhBnEhEM27ZxnHvJKfctLlB0UnqAJvwhvtW1iEn5CcnpD4u0vKmOK0cAaiSAGMm2aWs/27a+bduY/AP6++8VQ0T/Fblt2wQSkFOHnmFmZmZmZtZ550Q6/QGUWwCXccseume5YPHG3Y17/RH4XUR7n8BHNzr7BR6q0W0/46oQtsyRe5AKJi7cDfH7JfA1VDVu4aUpY33BXLd8g/OEnGOvlVXT+Aau84qR174vK/pfwFNN0XoGXtqKyqPHGChKd8DPRJG/8nprivSps/NH7Lv/L3dSLZvOnky2At500/Hr7zoA"},f4d2:function(A,t,n){"use strict";n.r(t);var e=n("d493"),a=n.n(e);for(var i in e)["default"].indexOf(i)<0&&function(A){n.d(t,A,(function(){return e[A]}))}(i);t["default"]=a.a}}]);