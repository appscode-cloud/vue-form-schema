"use strict";var e=require("./entry-a12af53b.js"),a=require("vue"),l=a.defineComponent({name:"KeyValuePairItems",mixins:[e.m,e.v],props:{modelValue:{type:Object,default:function(){return{}}},fieldName:{type:String,default:""},errors:{type:Object,default:function(){return{}}},index:{type:Number,default:0},schema:{type:Object,default:function(){return{}}},additionalProperties:{type:Object,default:function(){return{}}}},emits:["delete-key-value"],methods:{deleteProp:function(e){this.$emit("delete-key-value",e)}}}),t={class:"key-value-save"},o=[a.createElementVNode("span",{class:"icon is-small"},[a.createElementVNode("span",{class:"icon"},[a.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[a.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})])])],-1)];l.render=function(l,n,r,d,c,i){var u=a.resolveComponent("simple-input"),m=a.resolveComponent("v-field"),s=a.resolveComponent("object-form-wrapper"),p=a.resolveComponent("key-value-pairs"),v=a.resolveComponent("array-input");return a.openBlock(),a.createElementBlock("div",t,[a.createVNode(m,{id:"".concat(l.schema.title.replace(/ /g,"-"),"-key-").concat(l.index+1,"-provider"),modelValue:l.modelData.key,"onUpdate:modelValue":n[0]||(n[0]=function(e){return l.modelData.key=e}),rules:"required",name:"".concat(l.fieldName,"/key/").concat(l.index+1),label:"".concat(l.schema.title," key ").concat(l.index+1),as:"div"},{default:a.withCtx((function(t){var o=t.field,n=t.handleChange,r=t.errors,d=t.meta;return[a.createVNode(u,{"model-value":o.value,schema:{title:"Key",type:"string",ui:{tag:"input",type:"text"}},type:"string","validation-ob":e._({errors:r},d),"reference-model":l.referenceModel.key||"","onUpdate:modelValue":n},null,8,["model-value","validation-ob","reference-model","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","name","label"]),"object"===l.additionalProperties.type?(a.openBlock(),a.createBlock(m,{key:0,id:"".concat(l.schema.title.replace(/ /g,"-"),"-value-").concat(l.index+1,"-provider"),modelValue:l.modelData.value,"onUpdate:modelValue":n[1]||(n[1]=function(e){return l.modelData.value=e}),rules:l.ruleObject(!0),name:"".concat(l.fieldName,"/value/").concat(l.index+1),label:"".concat(l.schema.title," value ").concat(l.index+1),as:""},{default:a.withCtx((function(e){var t=e.field,o=e.handleChange;return[a.createVNode(s,{"field-name":"".concat(l.fieldName,"/value/").concat(l.index+1),"model-value":t.value,schema:l.additionalProperties,"is-self-required":!0,type:l.additionalProperties.type,errors:l.errors,"reference-model":l.referenceModel.value||{},"onUpdate:modelValue":o},null,8,["field-name","model-value","schema","type","errors","reference-model","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","rules","name","label"])):"key-value-pairs"===l.additionalProperties.type?(a.openBlock(),a.createBlock(m,{key:1,id:"".concat(l.schema.title.replace(/ /g,"-"),"-value-").concat(l.index+1,"-provider"),modelValue:l.modelData.value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return l.modelData.value=e}),rules:l.ruleObject(!0),name:"".concat(l.fieldName,"/value/").concat(l.index+1),label:"".concat(l.schema.title," value ").concat(l.index+1),as:""},{default:a.withCtx((function(e){var t=e.field,o=e.handleChange;return[a.createVNode(p,{"field-name":"".concat(l.fieldName,"/value/").concat(l.index+1),"model-value":t.value,schema:l.additionalProperties,type:l.additionalProperties.type,errors:l.errors,"reference-model":l.referenceModel.value||{},"onUpdate:modelValue":o},null,8,["field-name","model-value","schema","type","errors","reference-model","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","rules","name","label"])):"array"===l.additionalProperties.type?(a.openBlock(),a.createBlock(m,{key:2,id:"".concat(l.schema.title.replace(/ /g,"-"),"-value-").concat(l.index+1,"-provider"),modelValue:l.modelData.value,"onUpdate:modelValue":n[3]||(n[3]=function(e){return l.modelData.value=e}),rules:l.ruleArray(!0),name:"".concat(l.fieldName,"/value/").concat(l.index+1),label:"".concat(l.schema.title," value ").concat(l.index+1),as:""},{default:a.withCtx((function(e){var t=e.field,o=e.handleChange;return[a.createVNode(v,{"field-name":"".concat(l.fieldName,"/value/").concat(l.index+1),"model-value":t.value,schema:l.additionalProperties,type:l.additionalProperties.type,errors:l.errors,"reference-model":l.referenceModel.value||[],"onUpdate:modelValue":o},null,8,["field-name","model-value","schema","type","errors","reference-model","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","rules","name","label"])):(a.openBlock(),a.createBlock(m,{key:3,id:"".concat(l.schema.title.replace(/ /g,"-"),"-value-").concat(l.index+1,"-provider"),modelValue:l.modelData.value,"onUpdate:modelValue":n[4]||(n[4]=function(e){return l.modelData.value=e}),rules:l.ruleString(!0),name:"".concat(l.fieldName,"/value/").concat(l.index+1),label:"".concat(l.schema.title," value ").concat(l.index+1),as:""},{default:a.withCtx((function(t){var o=t.field,n=t.handleChange,r=t.errors,d=t.meta;return[a.createVNode(u,{"model-value":o.value,schema:l.additionalProperties,type:l.additionalProperties.type,"validation-ob":e._({errors:r},d),"reference-model":l.referenceModel.value||"","onUpdate:modelValue":n},null,8,["model-value","schema","type","validation-ob","reference-model","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","rules","name","label"])),a.createElementVNode("button",{class:"button ac-button is-medium is-danger is-outlined",onClick:n[5]||(n[5]=a.withModifiers((function(e){return l.deleteProp(l.index)}),["prevent"]))},o)])},exports.default=l;