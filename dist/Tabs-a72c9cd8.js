"use strict";var s={name:"tabs",data:function(){return{activeTab:"form"}},methods:{showForm:function(){this.activeTab="form",this.$emit("input","form")},showJson:function(){this.activeTab="json",this.$emit("input","json")},showYaml:function(){this.activeTab="yaml",this.$emit("input","yaml")}}},a=require("./entry-6a42d11b.js").n({render:function(){var s=this.$createElement;return(this._self._c||s)("div",{staticClass:"tabs ac-tabs is-line"},[this._ssrNode("<ul><li"+this._ssrClass(null,{"is-active":"form"===this.activeTab})+'><a><span class="icon is-small"><i aria-hidden="true" class="fa fa-file-text fa-flip-horizontal"></i></span> <span>Form</span></a></li> <li'+this._ssrClass(null,{"is-active":"yaml"===this.activeTab})+'><a><span class="icon is-small"><i aria-hidden="true" class="fa fa-code"></i></span> <span>YAML</span></a></li> <li'+this._ssrClass(null,{"is-active":"json"===this.activeTab})+'><a><span class="icon is-small"><i aria-hidden="true" class="fa fa-code"></i></span> <span>JSON</span></a></li></ul>')])},staticRenderFns:[]},void 0,s,void 0,!1,"data-v-38fb9568",!1,void 0,void 0,void 0);exports.default=a;