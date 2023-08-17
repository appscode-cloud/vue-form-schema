import{m as e,v as l}from"./entry-0b68e9c0.js";import{f as r}from"./fold-ab363a66.js";import{t as o}from"./tabs-1f3126a1.js";import{defineComponent as a,resolveComponent as t,openBlock as d,createElementBlock as s,normalizeClass as n,createElementVNode as i,withModifiers as m,createCommentVNode as f,createTextVNode as u,toDisplayString as c,createVNode as p,createBlock as y,withDirectives as b,vShow as v}from"vue";var V=a({name:"ObjectFormWrapper",mixins:[e,r,o,l],props:{schema:{type:Object,default:function(){return{}}},fieldName:{type:String,default:""},modelValue:{type:Object,default:function(){return{}}},isRoot:{type:Boolean,default:!1},errors:{type:Object,default:function(){return{}}},isLastChild:{type:Boolean,default:!1},onlyJson:{type:Boolean,default:!1},level:{type:Number,default:1}}}),h={class:"nested-header mb-5"},j=["disabled"];V.render=function(e,l,r,o,a,V){var D=t("component-errors"),k=t("tabs"),q=t("object-form"),F=t("yaml-form"),T=t("json-form");return d(),s("form",{class:n(["ac-nested-elements object-form-wrapper",{"stop-line":e.isLastChild,"is-collapsed":e.isFolded}])},[i("div",h,[i("h6",{class:"is-flex is-semi-normal",onClick:l[0]||(l[0]=m((function(l){return e.toggleFold()}),["prevent"]))},[e.isRoot?f("",!0):(d(),s("div",{key:0,class:"collaps-icon",disabled:"form"!==e.activeTab},[i("i",{class:n(["fa",e.isFolded?"fa-plus":"fa-minus"]),"aria-hidden":"true"},null,2)],8,j)),u(" "+c(e.schema.title||"Array Item Description")+" ",1),p(D,{errors:e.calcFormErrors(e.errors,e.fieldName)},null,8,["errors"])]),e.onlyJson?f("",!0):(d(),y(k,{key:0,modelValue:e.activeTab,"onUpdate:modelValue":l[1]||(l[1]=function(l){return e.activeTab=l})},null,8,["modelValue"]))]),b((d(),y(q,{key:"".concat(e.schema.title,"-form"),modelValue:e.modelData,"onUpdate:modelValue":l[2]||(l[2]=function(l){return e.modelData=l}),"field-name":e.fieldName,properties:e.schema.properties,title:e.schema.title,required:e.schema.required,"is-self-required":e.isSelfRequired,type:e.schema.type,level:e.level,"is-self-folded":e.isFolded,"reference-model":e.referenceModel||{},errors:e.errors},null,8,["modelValue","field-name","properties","title","required","is-self-required","type","level","is-self-folded","reference-model","errors"])),[[v,!e.onlyJson&&"form"===e.activeTab]]),"yaml"===e.activeTab?(d(),y(F,{key:0,modelValue:e.modelData,"onUpdate:modelValue":l[3]||(l[3]=function(l){return e.modelData=l}),"reference-model":e.referenceModel||{}},null,8,["modelValue","reference-model"])):"json"===e.activeTab?(d(),y(T,{key:1,modelValue:e.modelData,"onUpdate:modelValue":l[4]||(l[4]=function(l){return e.modelData=l}),"reference-model":e.referenceModel||{}},null,8,["modelValue","reference-model"])):f("",!0)],2)};export{V as default};