"use strict";var e=require("vue"),a=e.defineComponent({__name:"Editor",props:{modelValue:{default:""},originalValue:{default:""},readOnly:{type:Boolean,default:!1},language:{default:""},showMinimap:{type:Boolean,default:!1},editorHeight:{default:40},editorTheme:{default:""},wordWrap:{default:"on"},validation:{default:()=>({uri:""})}},emits:["update:modelValue"],setup(a,{emit:t}){const o=a,n=t,l=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./EditorTabs-d3112cc4.js")})))),i=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./Preloader-46710ac3.js")})))),r=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./Banner-a2991050.js")})))),d=e.defineAsyncComponent({loader:()=>Promise.resolve().then((function(){return require("./MonacoEditor-50a0f8ab.js")})),loadingComponent:i,delay:200,errorComponent:r,timeout:1e5}),u=e.ref("edit"),s=e.ref(""),c=e.ref(""),m=e.computed((()=>{const e=s.value.split("\n").length;return o.showMinimap&&e>25})),v=e.computed((()=>o.editorTheme||(document.documentElement.classList.contains("is-dark-theme")?"vs-dark":"vs"))),p=e=>{"string"==typeof e&&(s.value=e)},f=e=>{e.onDidBlurEditorText instanceof Function&&e.onDidBlurEditorText((()=>{n("update:modelValue",s.value)}))},g=e.computed((()=>"number"==typeof o.editorHeight?`vh-${o.editorHeight}`:"")),y=e.computed((()=>"string"==typeof o.editorHeight?{height:o.editorHeight}:{}));return e.watch((()=>o.modelValue),(e=>{s.value!==e&&(s.value=e)}),{immediate:!0}),e.watch((()=>o.originalValue),(e=>{c.value!==e&&(c.value=e)}),{immediate:!0}),(a,t)=>(e.openBlock(),e.createElementBlock("div",null,[a.readOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.unref(l),{key:0,onTabchange:t[0]||(t[0]=e=>u.value=e),"active-tab":u.value},null,8,["active-tab"])),"edit"===u.value?(e.openBlock(),e.createBlock(e.unref(d),{onEditorDidMount:f,key:"edit",class:e.normalizeClass(["is-clipped",g.value]),style:e.normalizeStyle(y.value),value:s.value,onChange:p,language:a.language,options:{minimap:{enabled:m.value},theme:v.value,readOnly:a.readOnly,wordWrap:a.wordWrap,scrollBeyondLastLine:!1},validation:a.validation,"data-testid":"monaco-editor-edit-section"},null,8,["class","style","value","language","options","validation"])):e.createCommentVNode("",!0),"preview"===u.value?(e.openBlock(),e.createBlock(e.unref(d),{key:"preview",class:e.normalizeClass(["is-clipped",g.value]),style:e.normalizeStyle(y.value),value:s.value,language:a.language,options:{minimap:{enabled:m.value},theme:v.value,readOnly:!0,wordWrap:a.wordWrap,scrollBeyondLastLine:!1},original:c.value,"diff-editor":!0,validation:a.validation,"data-testid":"monaco-editor-preview-section"},null,8,["class","style","value","language","options","original","validation"])):e.createCommentVNode("",!0)]))}});exports.default=a;