(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-make_list"],{"077a":function(A,t,n){"use strict";var e=n("25f9"),a=n.n(e);a.a},1844:function(A,t,n){"use strict";n.r(t);var e=n("269e"),a=n("52bd");for(var o in a)["default"].indexOf(o)<0&&function(A){n.d(t,A,(function(){return a[A]}))}(o);n("077a");var i,c=n("f0c5"),s=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"96946922",null,!1,e["a"],i);t["default"]=s.exports},"25f9":function(A,t,n){var e=n("9d01");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[A.i,e,""]]),e.locals&&(A.exports=e.locals);var a=n("4f06").default;a("2606d814",e,!0,{sourceMap:!1,shadowMode:!1})},"269e":function(A,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return e}));var e={uModal:n("078c").default},a=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"head"},[e("v-uni-view",{staticClass:"head_1",on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goBack.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"head_1_1",attrs:{src:n("e171")}})],1),e("v-uni-view",{staticClass:"head_2"},[A._v("做单列表("+A._s(A.teamJobList.length)+")")]),e("v-uni-view",{staticClass:"head_3",on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.relieveShow=!0}}},[A._v("解除关系")])],1),e("v-uni-view",{staticClass:"content"},A._l(A.teamJobList,(function(t,n){return e("v-uni-view",{key:n,staticClass:"content_1"},[e("v-uni-image",{staticClass:"content_1_1",attrs:{src:t.cooperate}}),e("v-uni-view",{staticClass:"content_1_2"},[e("v-uni-view",{staticClass:"content_1_2_1"},[e("v-uni-view",{staticClass:"content_1_2_1_1"},[A._v(A._s(t.name))]),e("v-uni-view",{staticClass:"content_1_2_1_2"},[A._v("￥"+A._s(t.award_number))])],1),e("v-uni-view",{staticClass:"content_1_2_2"},[e("v-uni-view",{staticClass:"content_1_2_2_1"},[A._v(A._s(t.category))])],1),e("v-uni-view",{staticClass:"content_1_2_3"},[A._v("做单时间："+A._s(t.confirm_time))])],1)],1)})),1),e("u-modal",{attrs:{show:A.relieveShow,content:"此操作不可逆,确定要取消下级吗?",showCancelButton:!0},on:{cancel:function(t){arguments[0]=t=A.$handleEvent(t),A.relieveShow=!1},confirm:function(t){arguments[0]=t=A.$handleEvent(t),A.relieve.apply(void 0,arguments)}}}),e("u-modal",{attrs:{show:A.okShow,title:"系统提示",content:"解除关系成功"},on:{confirm:function(t){arguments[0]=t=A.$handleEvent(t),A._pageBack.apply(void 0,arguments)}}})],1)},o=[]},"52bd":function(A,t,n){"use strict";n.r(t);var e=n("fb9e"),a=n.n(e);for(var o in e)["default"].indexOf(o)<0&&function(A){n.d(t,A,(function(){return e[A]}))}(o);t["default"]=a.a},"9d01":function(A,t,n){var e=n("24fb");t=e(!1),t.push([A.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.head[data-v-96946922]{width:%?750?%;background:#fff;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:%?120?% %?28?% %?42?% %?26?%;border-bottom:%?1?% solid #f6f6f6}.head .head_1[data-v-96946922],\n.head .head_2[data-v-96946922],\n.head .head_3[data-v-96946922]{flex:1}.head .head_1 .head_1_1[data-v-96946922],\n.head .head_2 .head_1_1[data-v-96946922],\n.head .head_3 .head_1_1[data-v-96946922]{width:%?16?%;height:%?28?%}.head .head_2[data-v-96946922]{text-align:center;font-size:%?34?%;font-family:PingFang SC;font-weight:700;color:#000;line-height:1}.head .head_3[data-v-96946922]{font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#e5040f;text-align:end}.content .content_1[data-v-96946922]{display:flex;justify-content:space-between;box-sizing:border-box;padding:%?35?% %?26?% %?24?% %?26?%;border-bottom:%?1?% solid #f6f6f6}.content .content_1 .content_1_1[data-v-96946922]{width:%?78?%;height:%?78?%;border-radius:%?15?%;margin-right:%?24?%}.content .content_1 .content_1_2[data-v-96946922]{flex:1}.content .content_1 .content_1_2 .content_1_2_1[data-v-96946922]{display:flex;justify-content:space-between;align-items:center;margin-bottom:%?25?%}.content .content_1 .content_1_2 .content_1_2_1 .content_1_2_1_1[data-v-96946922]{font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#1a1a1a}.content .content_1 .content_1_2 .content_1_2_1 .content_1_2_1_2[data-v-96946922]{font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#ff3f22;line-height:1}.content .content_1 .content_1_2 .content_1_2_2[data-v-96946922]{display:flex;margin-bottom:%?20?%}.content .content_1 .content_1_2 .content_1_2_2 .content_1_2_2_1[data-v-96946922]{height:%?32?%;background:#f2f2f2;border-radius:%?5?%;line-height:%?32?%;font-size:%?20?%;font-family:PingFang SC;font-weight:400;color:#727270;padding:0 %?13?%;box-sizing:border-box}.content .content_1 .content_1_2 .content_1_2_3[data-v-96946922]{font-size:%?22?%;font-family:PingFang SC;font-weight:500;color:#9b9b9b;line-height:1}',""]),A.exports=t},e171:function(A,t){A.exports="data:image/webp;base64,UklGRiIDAABXRUJQVlA4WAoAAAAwAAAADwAAGwAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEzjAAAALw/ABhBnEhEM27ZxnHvJKfctLlB0UnqAJvwhvtW1iEn5CcnpD4u0vKmOK0cAaiSAGMm2aWs/27a+bduY/AP6++8VQ0T/Fblt2wQSkFOHnmFmZmZmZtZ550Q6/QGUWwCXccseume5YPHG3Y17/RH4XUR7n8BHNzr7BR6q0W0/46oQtsyRe5AKJi7cDfH7JfA1VDVu4aUpY33BXLd8g/OEnGOvlVXT+Aau84qR174vK/pfwFNN0XoGXtqKyqPHGChKd8DPRJG/8nprivSps/NH7Lv/L3dSLZvOnky2At500/Hr7zoA"},fb9e:function(A,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n("7c15"),a={data:function(){return{teamJobList:[],relieveShow:!1,op:{},okShow:!1}},methods:{goBack:function(){uni.navigateBack()},teamJob:function(A){var t=this;(0,e.teamJob)({uid:A}).then((function(A){t.teamJobList=A.data.list}))},relieve:function(){var A=this;(0,e.relieve)({son_id:this.op.id}).then((function(t){if(-1==t.code)return A.$u.toast(t.msg);A.okShow=!0}))}},onLoad:function(A){this.teamJob(A.uid),this.op.id=A.son_id}};t.default=a}}]);