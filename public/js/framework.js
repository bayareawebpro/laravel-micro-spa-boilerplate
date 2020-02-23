(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/GQH":function(t,e,s){"use strict";s.r(e);var a={name:"Providers",data:function(){return{pagination:{descending:!1,page:1,rowsPerPage:25,sortBy:"order",totalItems:0}}},computed:{items:function(){var t=this,e=[];return Object.keys(this.$app.providers).forEach((function(s){var a=t.$app.providers[s],i={name:s,provides:a.provides.join(", "),status:a.isDeferred&&!a.isBooted?"Deferred":"Booted",deferred:a.isDeferred,booted:a.isBooted};e.push(i)})),e}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout p-4 text-white"},[s("div",{staticClass:"card w-full text-sm mb-4"},[s("div",{staticClass:"card-header flex"},[t._v("\n            Service Providers\n        ")]),t._v(" "),s("div",{staticClass:"card-content px-2 text-xs"},[s("table",{staticClass:"text-left"},[t._m(0),t._v(" "),s("tbody",t._l(t.items,(function(e){return s("tr",[s("td",[s("i",{staticClass:"fa fa-cube text-blue-500"}),t._v(" "+t._s(e.name))]),t._v(" "),s("td",[s("i",{staticClass:"fa fa-cubes text-blue-500"}),t._v(" "+t._s(e.provides)+"\n                    ")]),t._v(" "),s("td",[e.booted?s("i",{staticClass:"fa fa-microchip text-green-500"}):s("i",{staticClass:"fa fa-user-clock blue-text-grey-500"}),t._v("\n                        "+t._s(e.status)+"\n                    ")])])})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Provides")]),this._v(" "),e("th",[this._v("State")])])])}],!1,null,null,null);e.default=n.exports},CU0U:function(t,e,s){"use strict";s.r(e);var a={name:"Bindings",computed:{items:function(){var t=this,e=[];return Object.keys(this.$app.bindings).forEach((function(s){var a=t.$app.isResolved(s),i=t.$app.canShare(s),n=t.$app.isConcrete(s),r=t.$app.isClass(s),c={alias:s,status:a?"Resolved":"UnInstantiated",type:n?"Concrete":r?"Class":"Callback",shared:i?"Shared":"Unique",isConcrete:n,isResolved:a,canShare:i,isClass:r};e.push(c)})),e}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout p-4 text-white"},[s("div",{staticClass:"card w-full text-sm"},[s("div",{staticClass:"card-header"},[t._v("\n            Bindings\n        ")]),t._v(" "),s("div",{staticClass:"card-content"},[s("table",{staticClass:"text-left"},[t._m(0),t._v(" "),s("tbody",t._l(t.items,(function(e){return s("tr",[s("td",[s("i",{staticClass:"fa fa-cube text-blue-500"}),t._v(" "+t._s(e.alias))]),t._v(" "),s("td",[e.isResolved?s("i",{staticClass:"fa fa-microchip text-green-500"}):s("i",{staticClass:"fa fa-user-clock text-orange-500"}),t._v("\n                        "+t._s(e.status)+"\n                    ")]),t._v(" "),s("td",[e.isConcrete?s("i",{staticClass:"fa fa-microchip text-blue-500"}):e.isClass?s("i",{staticClass:"fa fa-clone text-red-500"}):s("i",{staticClass:"fa fa-code text-orange-500"}),t._v("\n                        "+t._s(e.type)+"\n                    ")]),t._v(" "),s("td",[e.canShare?[s("i",{staticClass:"fa fa-code-branch green-500"}),t._v(" "+t._s(e.shared)+"\n                        ")]:[s("i",{staticClass:"fa fa-bullseye red-500"}),t._v(" "+t._s(e.shared)+"\n                        ")]],2)])})),0)])])]),t._v(" "),s("div",{staticClass:"card w-full text-sm mt-4"},[s("div",{staticClass:"card-header"},[t._v("\n            Reserved Words\n        ")]),t._v(" "),s("div",{staticClass:"card-content"},[s("v-console-output",{model:{value:t.$app.reservedWords,callback:function(e){t.$set(t.$app,"reservedWords",e)},expression:"$app.reservedWords"}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Alias")]),this._v(" "),e("th",[this._v("State")]),this._v(" "),e("th",[this._v("Type")]),this._v(" "),e("th",[this._v("Instance")])])])}],!1,null,null,null);e.default=n.exports},UO7m:function(t,e,s){"use strict";s.r(e);var a={name:"Sharing",data:function(){return{pagination:{descending:!1,page:1,rowsPerPage:25,sortBy:"order",totalItems:0}}},computed:{sharing:function(){return{sharedWith:this.$app.sharedWith,sharable:this.$app.sharable}},items:{cache:!1,get:function(){return this.$app.sharable}}},methods:{getRealName:function(t){var e=this.$app.getName(t);return"Window"===e?e.toLowerCase():e},share:function(t){this.$app.share(t).withOthers(window),this.$forceUpdate()},unShare:function(t){this.$app.unShare(t),this.$forceUpdate()}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout p-4 text-white"},[s("div",{staticClass:"card w-full"},[s("div",{staticClass:"card-header"},[t._v("\n            Sharing\n        ")]),t._v(" "),s("div",{staticClass:"card-content px-2 text-xs"},[s("table",{staticClass:"text-left"},[t._m(0),t._v(" "),s("tbody",t._l(t.items,(function(e){return s("tr",[s("td",[s("i",{staticClass:"fa fa-cube text-blue-500"}),t._v(" "+t._s(e))]),t._v(" "),s("td",[t.$app.sharedWith[e]?t._l(t.$app.sharedWith[e],(function(a){return[s("code",{staticClass:"text-xs"},[t._v(t._s(t.getRealName(a))+"."+t._s(t.$app.getSharedAliasName(e))+"()")]),s("br")]})):[t._v("\n                            -\n                        ")]],2),t._v(" "),s("td",[t.$app.isShared(e)?s("v-action",{staticClass:"btn-xs",on:{click:function(s){return t.unShare(e)}}},[t._v("Revoke")]):s("v-action",{staticClass:"btn-xs",on:{click:function(s){return t.share(e)}}},[t._v("Share")])],1)])})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Alias")]),this._v(" "),e("th",[this._v("Shared")])])])}],!1,null,null,null);e.default=n.exports},zDST:function(t,e,s){"use strict";s.r(e);var a={name:"Logs",data:function(){return{entries:[]}},watch:{"$app.logOutput":{deep:!0,immediate:!0,handler:function(t){this.entries=t}}},computed:{debugging:{get:function(){return this.$app._debug},set:function(){this.$app._debug=!this.$app._debug}}},methods:{flush:function(){this.$app.logOutput=[],this.entries=[]}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout p-4 text-white"},[s("div",{staticClass:"card w-full text-sm mb-4"},[s("div",{staticClass:"card-header flex"},[t._v("\n            Framework Logs\n            "),s("v-action",{staticClass:"btn-sm ml-auto",on:{click:t.flush}},[t._v("\n                Flush\n            ")]),t._v(" "),s("v-action",{staticClass:"btn-sm ml-auto",on:{click:function(e){t.debugging=!t.debugging}}},[t._v("\n                "+t._s(t.debugging?"Disable":"Enable")+"\n            ")])],1),t._v(" "),s("div",{staticClass:"card-content"},[s("v-console-output",{attrs:{height:400},model:{value:t.entries,callback:function(e){t.entries=e},expression:"entries"}})],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=framework.js.map