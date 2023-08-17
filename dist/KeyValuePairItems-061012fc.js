import{m as e,v as a,_ as l}from"./entry-0b68e9c0.js";import{defineComponent as t,resolveComponent as n,openBlock as o,createElementBlock as r,createVNode as d,withCtx as i,createBlock as c,createElementVNode as u,withModifiers as m}from"vue";var s=t({name:"KeyValuePairItems",mixins:[e,a],props:{modelValue:{type:Object,default:function(){return{}}},fieldName:{type:String,default:""},errors:{type:Object,default:function(){return{}}},index:{type:Number,default:0},schema:{type:Object,default:function(){return{}}},additionalProperties:{type:Object,default:function(){return{}}}},emits:["delete-key-value"],methods:{deleteProp:function(e){this.$emit("delete-key-value",e)}}}),p={class:"key-value-save"},v=[u("span",{class:"icon is-small"},[u("span",{class:"icon"},[u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})])])],-1)];s.render=function(e,a,t,s,f,y){var h=n("simple-input"),b=n("v-field"),V=n("object-form-wrapper"),x=n("key-value-pairs"),k=n("array-input");return o(),r("div",p,[d(b,{id:"".concat(e.schema.title.replace(/ /g,"-"),"-key-").concat(e.index+1,"-provider"),modelValue:e.modelData.key,"onUpdate:modelValue":a[0]||(a[0]=function(a){return e.modelData.key=a}),rules:"required",name:"".concat(e.fieldName,"/key/").concat(e.index+1),label:"".concat(e.schema.title," key ").concat(e.index+1),as:"div"},{default:i((function(a){var t=a.field,n=a.handleChange,o=a.errors,r=a.meta;return[d(h,{"model-value":t.value,schema:{title:"Key",type:"string",ui:{tag:"input",type:"text"}},type:"string","validation-ob":l({errors:o},r),"reference-model":e.referenceModel.key||"","onUpdate:modelValue":n},null,8,["model-value","validation-ob","reference-model","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","name","label"]),"object"===e.additionalProperties.type?(o(),c(b,{key:0,id:"".concat(e.schema.title.replace(/ /g,"-"),"-value-").concat(e.index+1,"-provider"),modelValue:e.modelData.value,"onUpdate:modelValue":a[1]||(a[1]=function(a){return e.modelData.value=a}),rules:e.ruleObject(!0),name:"".concat(e.fieldName,"/value/").concat(e.index+1),label:"".concat(e.schema.title," value ").concat(e.index+1),as:""},{default:i((function(a){var l=a.field,t=a.handleChange;return[d(V,{"field-name":"".concat(e.fieldName,"/value/").concat(e.index+1),"model-value":l.value,schema:e.additionalProperties,"is-self-required":!0,type:e.additionalProperties.type,errors:e.errors,"reference-model":e.referenceModel.value||{},"onUpdate:modelValue":t},null,8,["field-name","model-value","schema","type","errors","reference-model","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","rules","name","label"])):"key-value-pairs"===e.additionalProperties.type?(o(),c(b,{key:1,id:"".concat(e.schema.title.replace(/ /g,"-"),"-value-").concat(e.index+1,"-provider"),modelValue:e.modelData.value,"onUpdate:modelValue":a[2]||(a[2]=function(a){return e.modelData.value=a}),rules:e.ruleObject(!0),name:"".concat(e.fieldName,"/value/").concat(e.index+1),label:"".concat(e.schema.title," value ").concat(e.index+1),as:""},{default:i((function(a){var l=a.field,t=a.handleChange;return[d(x,{"field-name":"".concat(e.fieldName,"/value/").concat(e.index+1),"model-value":l.value,schema:e.additionalProperties,type:e.additionalProperties.type,errors:e.errors,"reference-model":e.referenceModel.value||{},"onUpdate:modelValue":t},null,8,["field-name","model-value","schema","type","errors","reference-model","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","rules","name","label"])):"array"===e.additionalProperties.type?(o(),c(b,{key:2,id:"".concat(e.schema.title.replace(/ /g,"-"),"-value-").concat(e.index+1,"-provider"),modelValue:e.modelData.value,"onUpdate:modelValue":a[3]||(a[3]=function(a){return e.modelData.value=a}),rules:e.ruleArray(!0),name:"".concat(e.fieldName,"/value/").concat(e.index+1),label:"".concat(e.schema.title," value ").concat(e.index+1),as:""},{default:i((function(a){var l=a.field,t=a.handleChange;return[d(k,{"field-name":"".concat(e.fieldName,"/value/").concat(e.index+1),"model-value":l.value,schema:e.additionalProperties,type:e.additionalProperties.type,errors:e.errors,"reference-model":e.referenceModel.value||[],"onUpdate:modelValue":t},null,8,["field-name","model-value","schema","type","errors","reference-model","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","rules","name","label"])):(o(),c(b,{key:3,id:"".concat(e.schema.title.replace(/ /g,"-"),"-value-").concat(e.index+1,"-provider"),modelValue:e.modelData.value,"onUpdate:modelValue":a[4]||(a[4]=function(a){return e.modelData.value=a}),rules:e.ruleString(!0),name:"".concat(e.fieldName,"/value/").concat(e.index+1),label:"".concat(e.schema.title," value ").concat(e.index+1),as:""},{default:i((function(a){var t=a.field,n=a.handleChange,o=a.errors,r=a.meta;return[d(h,{"model-value":t.value,schema:e.additionalProperties,type:e.additionalProperties.type,"validation-ob":l({errors:o},r),"reference-model":e.referenceModel.value||"","onUpdate:modelValue":n},null,8,["model-value","schema","type","validation-ob","reference-model","onUpdate:modelValue"])]})),_:1},8,["id","modelValue","rules","name","label"])),u("button",{class:"button ac-button is-medium is-danger is-outlined",onClick:a[5]||(a[5]=m((function(a){return e.deleteProp(e.index)}),["prevent"]))},v)])};export{s as default};