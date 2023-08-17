"use strict";var e=require("./entry-1f9921ff.js"),o=require("./fold-e405c002.js"),l=require("./tabs-b1a12502.js"),r=require("vue"),t=r.defineComponent({name:"ObjectFormWrapper",mixins:[e.m,o.f,l.t,e.v],props:{schema:{type:Object,default:function(){return{}}},fieldName:{type:String,default:""},modelValue:{type:Object,default:function(){return{}}},isRoot:{type:Boolean,default:!1},errors:{type:Object,default:function(){return{}}},isLastChild:{type:Boolean,default:!1},onlyJson:{type:Boolean,default:!1},level:{type:Number,default:1}}}),a={class:"nested-header mb-5"},n=["disabled"];t.render=function(e,o,l,t,d,s){var i=r.resolveComponent("component-errors"),c=r.resolveComponent("tabs"),m=r.resolveComponent("object-form"),u=r.resolveComponent("yaml-form"),f=r.resolveComponent("json-form");return r.openBlock(),r.createElementBlock("form",{class:r.normalizeClass(["ac-nested-elements object-form-wrapper",{"stop-line":e.isLastChild,"is-collapsed":e.isFolded}])},[r.createElementVNode("div",a,[r.createElementVNode("h6",{class:"is-flex is-semi-normal",onClick:o[0]||(o[0]=r.withModifiers((function(o){return e.toggleFold()}),["prevent"]))},[e.isRoot?r.createCommentVNode("",!0):(r.openBlock(),r.createElementBlock("div",{key:0,class:"collaps-icon",disabled:"form"!==e.activeTab},[r.createElementVNode("i",{class:r.normalizeClass(["fa",e.isFolded?"fa-plus":"fa-minus"]),"aria-hidden":"true"},null,2)],8,n)),r.createTextVNode(" "+r.toDisplayString(e.schema.title||"Array Item Description")+" ",1),r.createVNode(i,{errors:e.calcFormErrors(e.errors,e.fieldName)},null,8,["errors"])]),e.onlyJson?r.createCommentVNode("",!0):(r.openBlock(),r.createBlock(c,{key:0,modelValue:e.activeTab,"onUpdate:modelValue":o[1]||(o[1]=function(o){return e.activeTab=o})},null,8,["modelValue"]))]),r.withDirectives((r.openBlock(),r.createBlock(m,{key:"".concat(e.schema.title,"-form"),modelValue:e.modelData,"onUpdate:modelValue":o[2]||(o[2]=function(o){return e.modelData=o}),"field-name":e.fieldName,properties:e.schema.properties,title:e.schema.title,required:e.schema.required,"is-self-required":e.isSelfRequired,type:e.schema.type,level:e.level,"is-self-folded":e.isFolded,"reference-model":e.referenceModel||{},errors:e.errors},null,8,["modelValue","field-name","properties","title","required","is-self-required","type","level","is-self-folded","reference-model","errors"])),[[r.vShow,!e.onlyJson&&"form"===e.activeTab]]),"yaml"===e.activeTab?(r.openBlock(),r.createBlock(u,{key:0,modelValue:e.modelData,"onUpdate:modelValue":o[3]||(o[3]=function(o){return e.modelData=o}),"reference-model":e.referenceModel||{}},null,8,["modelValue","reference-model"])):"json"===e.activeTab?(r.openBlock(),r.createBlock(f,{key:1,modelValue:e.modelData,"onUpdate:modelValue":o[4]||(o[4]=function(o){return e.modelData=o}),"reference-model":e.referenceModel||{}},null,8,["modelValue","reference-model"])):r.createCommentVNode("",!0)],2)},exports.default=t;