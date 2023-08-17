"use strict";var e=require("./entry-2ab7bbe5.js"),t=require("vue"),n=t.defineComponent({name:"YamlForm",components:{Editor:t.defineAsyncComponent((function(){return Promise.resolve().then((function(){return require("./Editor-c743e26d.js")}))}))},mixins:[e.m],inject:["providedData"],props:{modelValue:{type:null,default:function(){return{}}}},emits:["code::model-data-updated"],computed:{originalValueString:function(){return JSON.stringify(this.referenceModel,null,2)},theme:function(){return this.providedData.theme||"light"},editorModel:{get:function(){return JSON.stringify(this.modelValue,null,2)},set:function(e){var t=null;try{t=JSON.parse(e)}catch(e){t=this.modelData}this.modelData=t,this.$emit("code::model-data-updated",t)}}}}),o={class:"ml-30"};n.render=function(e,n,r,i,l,a){var u=t.resolveComponent("editor");return t.openBlock(),t.createElementBlock("div",o,[(t.openBlock(),t.createBlock(u,{key:e.theme,modelValue:e.editorModel,"onUpdate:modelValue":n[0]||(n[0]=function(t){return e.editorModel=t}),"original-value":e.originalValueString,language:"json","editor-height":80},null,8,["modelValue","original-value"]))])},exports.default=n;