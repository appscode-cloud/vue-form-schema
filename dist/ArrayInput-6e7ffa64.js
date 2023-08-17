"use strict";var e=require("./entry-0e7bf811.js"),t=require("./tabs-a523ab5e.js"),a=require("./size-27a9a503.js"),l=require("vue"),n=l.defineComponent({name:"ArrayInput",components:{ArrayInputItems:l.defineAsyncComponent((function(){return Promise.resolve().then((function(){return require("./ArrayInputItems-4e807227.js")})).then((function(e){return e.default}))}))},mixins:[e.m,t.t,e.v,a.s],props:{schema:{type:Object,default:function(){return{}}},fieldName:{type:String,default:""},modelValue:{type:null,default:function(){return[]}},errors:{type:Object,default:function(){return{}}},isLastChild:{type:Boolean,default:!1}},data:function(){return{newData:null,updatePass:0}},computed:{items:function(){return this.schema.items||{}}},methods:{swapElems:function(e,t){var a=this.modelData[e];this.modelData[e]=this.modelData[t],this.modelData[t]=a,this.updatePass+=1},addNewValue:function(t){var a=this;return e.a(e.b().mark((function l(){var n;return e.b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n=e.sent,n.valid&&(a.modelData.push(a.newData),a.newData=null,a.updatePass+=1);case 5:case"end":return e.stop()}}),l)})))()},deleteValue:function(e){this.modelData.splice(e,1),this.updatePass+=1}}}),o={class:"nested-header mb-5"},r={class:"is-flex is-semi-normal"},s=l.createElementVNode("div",{class:"collaps-icon is-disabled"},[l.createElementVNode("i",{class:"fa fa-minus"})],-1),i={class:"is-flex gap-16 is-flex-direction-column"},c={class:"form-right-item"},m={class:"buttons",style:{gap:"4px"}},d=["disabled","onClick"],u=[l.createElementVNode("span",{class:"icon is-small"},[l.createElementVNode("i",{class:"fa fa-angle-up"})],-1)],p=["disabled","onClick"],f=[l.createElementVNode("span",{class:"icon is-small"},[l.createElementVNode("i",{class:"fa fa-angle-down"})],-1)],v=["onClick"],h=[l.createElementVNode("span",{class:"icon"},[l.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[l.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})])],-1)],w={class:"value-list-save"},V=["onClick"],y=[l.createElementVNode("div",{class:"icon"},[l.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[l.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])],-1)];n.render=function(t,a,n,b,k,C){var N=l.resolveComponent("component-errors"),D=l.resolveComponent("tabs"),E=l.resolveComponent("array-input-items"),B=l.resolveComponent("object-form-wrapper"),g=l.resolveComponent("v-field"),x=l.resolveComponent("key-value-pairs"),U=l.resolveComponent("array-input",!0),j=l.resolveComponent("simple-input"),_=l.resolveComponent("v-form"),I=l.resolveComponent("yaml-form"),M=l.resolveComponent("json-form"),q=l.resolveDirective("tooltip");return l.openBlock(),l.createElementBlock("div",{key:t.updatePass,as:"div",class:l.normalizeClass(["ac-nested-elements vue-schema-form-array array-input",{"stop-line":t.isLastChild}])},[l.createElementVNode("div",o,[l.createElementVNode("h6",r,[s,l.createTextVNode(" "+l.toDisplayString(t.schema.title||"Array Item Description")+" ",1),l.createVNode(N,{errors:t.calcFormErrors(t.errors,t.fieldName)},null,8,["errors"])]),l.createVNode(D,{modelValue:t.activeTab,"onUpdate:modelValue":a[0]||(a[0]=function(e){return t.activeTab=e})},null,8,["modelValue"])]),l.withDirectives(l.createElementVNode("div",i,[(l.openBlock(!0),l.createElementBlock(l.Fragment,null,l.renderList(t.modelData,(function(e,a){return l.openBlock(),l.createElementBlock("div",{key:"".concat(a,"-").concat(t.schema.title,"-form"),class:"nested-body"},[l.createVNode(E,{"field-name":t.fieldName,items:t.items,schema:t.schema,index:a,"model-value":t.modelData,errors:t.errors,"reference-model":t.referenceModel||[]},null,8,["field-name","items","schema","index","model-value","errors","reference-model"]),l.createElementVNode("div",c,[l.createElementVNode("div",m,[l.createElementVNode("div",{class:l.normalizeClass(["buttons up-down-buttons",{"is-small":!t.isMedium}])},[l.withDirectives((l.openBlock(),l.createElementBlock("button",{class:l.normalizeClass(["up-down-button",{"is-primary":0!==a}]),disabled:0===a,onClick:l.withModifiers((function(e){return t.swapElems(a-1,a)}),["prevent"])},u,10,d)),[[q,{content:"move up",placement:"top",classes:["is-primary"],targetClasses:["up-down-button"]}]]),l.withDirectives((l.openBlock(),l.createElementBlock("button",{class:l.normalizeClass(["up-down-button",{"is-primary":a!==t.modelData.length-1}]),disabled:a===t.modelData.length-1,onClick:l.withModifiers((function(e){return t.swapElems(a,a+1)}),["prevent"])},f,10,p)),[[q,{content:"move down",placement:"bottom",classes:["is-primary"],targetClasses:["up-down-button"]}]])],2),l.createElementVNode("button",{class:"button ac-button is-medium is-danger is-outlined mb-0",onClick:l.withModifiers((function(e){return t.deleteValue(a)}),["prevent"])},h,8,v)])])])})),128)),l.createVNode(_,{as:""},{default:l.withCtx((function(n){var o=n.validate,r=n.errors;return[l.createElementVNode("div",w,["object"===t.items.type?(l.openBlock(),l.createBlock(g,{key:0,modelValue:t.newData,"onUpdate:modelValue":a[1]||(a[1]=function(e){return t.newData=e}),rules:t.ruleObject(!0),name:"newItem",label:"".concat(t.schema.title," new value"),as:""},{default:l.withCtx((function(a){var n=a.field,o=a.handleChange;return[l.createVNode(B,{"field-name":"newItem","model-value":n.value,"is-last-child":!0,"expand-form":!0,"is-self-required":!0,schema:e._(e._({},t.items),{title:"".concat(t.schema.title," new value")}),type:t.items.type,errors:r,"reference-model":{},"onUpdate:modelValue":o},null,8,["model-value","schema","type","errors","onUpdate:modelValue"])]})),_:2},1032,["modelValue","rules","label"])):"key-value-pairs"===t.items.type?(l.openBlock(),l.createBlock(g,{key:1,modelValue:t.newData,"onUpdate:modelValue":a[2]||(a[2]=function(e){return t.newData=e}),rules:t.ruleObject(!0),name:"newItem",label:"".concat(t.schema.title," new value"),as:""},{default:l.withCtx((function(a){var n=a.field,o=a.handleChange;return[l.createVNode(x,{"field-name":"newItem","model-value":n.value,"is-last-child":!0,schema:e._(e._({},t.items),{title:"".concat(t.schema.title," new value")}),errors:r,type:t.items.type,"reference-model":{},"onUpdate:modelValue":o},null,8,["model-value","schema","errors","type","onUpdate:modelValue"])]})),_:2},1032,["modelValue","rules","label"])):"array"===t.items.type?(l.openBlock(),l.createBlock(g,{key:2,modelValue:t.newData,"onUpdate:modelValue":a[3]||(a[3]=function(e){return t.newData=e}),rules:t.ruleArray(!0),name:"newItem",label:"".concat(t.schema.title," new value"),as:""},{default:l.withCtx((function(a){var n=a.field,o=a.handleChange;return[l.createVNode(U,{"field-name":"newItem","model-value":n.value,"is-last-child":!0,schema:e._(e._({},t.items),{title:"".concat(t.schema.title," new value")}),errors:r,type:t.items.type,"reference-model":[],"onUpdate:modelValue":o},null,8,["model-value","schema","errors","type","onUpdate:modelValue"])]})),_:2},1032,["modelValue","rules","label"])):(l.openBlock(),l.createBlock(g,{key:3,modelValue:t.newData,"onUpdate:modelValue":a[4]||(a[4]=function(e){return t.newData=e}),rules:t.ruleString(!0),name:"newItem",label:"".concat(t.schema.title," new value"),as:""},{default:l.withCtx((function(a){var n=a.field,o=a.handleChange,r=a.errors,s=a.meta;return[l.createVNode(j,{"model-value":n.value,schema:e._(e._({},t.items),{title:"".concat(t.schema.title," new value")}),required:!0,type:t.items.type,"validation-ob":e._({errors:r},s),"reference-model":"","onUpdate:modelValue":o},null,8,["model-value","schema","type","validation-ob","onUpdate:modelValue"])]})),_:1},8,["modelValue","rules","label"])),l.createElementVNode("button",{class:"button ac-button is-medium is-primary is-outlined",onClick:l.withModifiers((function(e){return t.addNewValue(o)}),["prevent"])},y,8,V)])]})),_:1})],512),[[l.vShow,"form"===t.activeTab]]),"yaml"===t.activeTab?(l.openBlock(),l.createBlock(I,{key:0,modelValue:t.modelData,"onUpdate:modelValue":a[5]||(a[5]=function(e){return t.modelData=e}),"reference-model":t.referenceModel||[]},null,8,["modelValue","reference-model"])):"json"===t.activeTab?(l.openBlock(),l.createBlock(M,{key:1,modelValue:t.modelData,"onUpdate:modelValue":a[6]||(a[6]=function(e){return t.modelData=e}),"reference-model":t.referenceModel||[]},null,8,["modelValue","reference-model"])):l.createCommentVNode("",!0)],2)},exports.default=n;