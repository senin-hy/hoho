(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-data-data"],{"45ad":function(n,i,e){"use strict";e.r(i);var a=function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("v-uni-view",[e("v-uni-picker",{attrs:{value:n.index,range:n.array},on:{change:function(i){i=n.$handleEvent(i),n.bindPickerChange(i)}}},[e("v-uni-view",{staticClass:"picker"},[n._v("\n        当前选择："+n._s(n.array[n.index])+"\n      ")])],1),e("v-uni-view",{attrs:{"data-id":"0"},on:{click:function(i){i=n.$handleEvent(i),n.bindThis(i)}}},[n._v(n._s(n.id))])],1)},t=[],o={data:function(){return{id:"",index:0,array:["A","B","C"]}},methods:{bindPickerChange:function(n){console.log(n)},bindThis:function(n){console.log(n)}},onLoad:function(n){console.log(n),this.id=n.id}},c=o,d=e("2877"),s=Object(d["a"])(c,a,t,!1,null,null,null);s.options.__file="data.vue";i["default"]=s.exports}}]);