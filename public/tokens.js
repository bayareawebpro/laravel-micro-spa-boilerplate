(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{TEXc:function(t,e,s){"use strict";s.r(e);var i={name:"TokenLayout",props:["title","subtitle"],beforeCreate:function(){this.$bind.mapActions("TokenResource",{destroy:"destroy"}),this.$bind.mapGetters("TokenResource",{destroying:"destroying"})}},n=s("KHd+"),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col h-full"},[s("div",{staticClass:"bg-gray-800 py-3 px-6"},[s("router-link",{staticClass:"page-title block",attrs:{to:{name:"tokens.index"}}},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),s("small",{staticClass:"page-lead"},[t._v(t._s(t.subtitle))])],1),t._v(" "),s("div",{staticClass:"layout p-4"},[s("transition",{attrs:{name:"fadeInLeft",mode:"out-in",duration:90}},[s("router-view",{key:t.$route.name})],1)],1),t._v(" "),s("v-modal",{attrs:{dusk:"modal-destroy"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            Destroy Token?\n        ")]},proxy:!0},{key:"content",fn:function(){return[t.destroying.tokenable?s("p",[s("strong",[t._v("Username:")]),t._v(" "+t._s(t.destroying.tokenable.name))]):t._e(),t._v(" "),s("p",[s("strong",[t._v("Tokenable:")]),t._v(" "+t._s(t.destroying.tokenable_type)+" ("+t._s(t.destroying.tokenable_id)+")")]),t._v(" "),s("p",[s("strong",[t._v("Abilities:")]),t._v(" "+t._s(t.destroying.abilities.join(", ")))])]},proxy:!0},{key:"actions",fn:function(){return[s("v-action",{staticClass:"btn-green",attrs:{focused:!0,dusk:"destroy-confirm"},on:{click:function(e){return t.destroy(t.destroying)}}},[s("i",{staticClass:"fa fa-check-circle"}),t._v(" Destroy\n            ")]),t._v(" "),s("v-action",{staticClass:"btn-red ml-auto",attrs:{dusk:"destroy-cancel"},on:{click:function(e){t.destroying=null}}},[s("i",{staticClass:"fa fa-close"}),t._v(" Cancel\n            ")])]},proxy:!0}]),model:{value:t.destroying,callback:function(e){t.destroying=e},expression:"destroying"}})],1)}),[],!1,null,null,null);e.default=a.exports},VAI3:function(t,e,s){"use strict";s.r(e);var i={name:"TokenEdit",beforeCreate:function(){this.$bind.mapGetters("TokenResource",{destroying:"destroying",abilities:"abilities",entity:"entity"}),this.$bind.mapActions("TokenResource",{update:"update",create:"create",store:"store"}),this.$bind.mapState("TokenResource",{$errors:"$errors",grants:"grants"})},created:function(){this.entity.abilities.length||this.entity.abilities.push({})},beforeDestroy:function(){}},n=s("KHd+"),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.entity?s("div",{staticClass:"lg:max-w-4xl mx-auto"},[s("form",{ref:"form",on:{submit:function(e){e.preventDefault(),t.entity.id?t.update(t.entity):t.store(t.entity,!1)}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("\n                "+t._s(t.entity.name||"New Token")+"\n            ")]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item flex-grow"},[s("v-input",{attrs:{type:"text",name:"name",label:"Name",required:!0,invalid:t.$errors.has("name"),help:t.$errors.first("name","Enter your name.")},on:{change:function(e){return t.$errors.forget("name")}},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1),t._v(" "),s("div",{staticClass:"grid-item flex-shrink pb-3"},[s("v-action",{staticClass:"btn-blue",attrs:{dusk:"action-add"},on:{click:function(e){return t.entity.abilities.push("*")}}},[t._v("\n                            Add Ability\n                        ")])],1)]),t._v(" "),s("v-form-message",{staticClass:"alert-warn",attrs:{dismissible:!1,value:t.$errors.has("abilities")}},[t._v("\n                    "+t._s(t.$errors.first("abilities"))+"\n                ")]),t._v(" "),t._l(t.entity.abilities,(function(e,i){return s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item flex-grow"},[s("v-input-select",{attrs:{type:"text",label:"Ability",name:"ability",options:t.grants,required:!0,invalid:t.$errors.has("abilities."+i),help:t.$errors.first("abilities."+i,"Enter ability name.")},on:{change:function(e){return t.$errors.forget("abilities."+i)}},model:{value:t.entity.abilities[i],callback:function(e){t.$set(t.entity.abilities,i,e)},expression:"entity.abilities[index]"}})],1),t._v(" "),s("div",{staticClass:"grid-item flex-shrink pb-3"},[s("v-action",{staticClass:"btn-red self-start",attrs:{dusk:"action-remove"},on:{click:function(e){return t.entity.abilities.splice(i,1)}}},[s("i",{staticClass:"fa fa-times"})])],1)])}))],2),t._v(" "),s("div",{staticClass:"card-actions"},[s("v-action",{staticClass:"btn-lg btn-green",attrs:{type:"submit",dusk:"action-save"}},[t._v("\n                    "+t._s(t.entity.id?"Update":"Create")+"\n                ")]),t._v(" "),t.entity.id?s("v-action",{staticClass:"btn-lg btn-red",attrs:{type:"button",dusk:"action-destroy"},on:{click:function(e){t.destroying=t.entity}}},[t._v("\n                    Destroy\n                ")]):t._e()],1)])]),t._v(" "),s("v-modal",{attrs:{dusk:"modal-token"},on:{closed:function(e){t.$router.push(t.$link("tokens.index").withQuery({page:1}))}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            Token Created\n        ")]},proxy:!0},{key:"content",fn:function(){return[s("p",[t._v("This token will not be shown again, please copy it for your records.")]),t._v(" "),s("v-input",{ref:"token",attrs:{type:"text",name:"token",label:"Token",help:"Authentication Token.",value:t.entity.token,"aria-readonly":!0}}),t._v(" "),s("v-action",{staticClass:"btn-green btn-xl",attrs:{focused:!0},on:{click:function(e){return t.$refs.token.clipboard()}}},[s("i",{staticClass:"fa fa-clipboard"}),t._v(" Copy\n            ")])]},proxy:!0},{key:"actions",fn:function(){return[s("v-action",{staticClass:"btn-green",attrs:{dusk:"modal-done"},on:{click:function(e){t.entity.token=null}}},[s("i",{staticClass:"fa fa-check-circle"}),t._v(" Done\n            ")])]},proxy:!0}],null,!1,2658052243),model:{value:t.entity.token,callback:function(e){t.$set(t.entity,"token",e)},expression:"entity.token"}})],1):t._e()}),[],!1,null,null,null);e.default=a.exports},sJ2K:function(t,e,s){"use strict";s.r(e);var i={name:"TokenShow",beforeCreate:function(){this.$bind.mapGetters("TokenResource",{entity:"entity"}),this.$bind.mapState("TokenResource",{$errors:"$errors"})},created:function(){this.$errors.clear()},beforeDestroy:function(){this.$errors.clear()}},n=s("KHd+"),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.entity?s("div",{staticClass:"lg:max-w-4xl mx-auto"},[s("form",{ref:"form",on:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("\n                "+t._s(t.entity.name)+"\n            ")]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"grid mb-4"},[s("div",{staticClass:"grid-item w-full sm:w-1/3"},[s("strong",[t._v("Tokenable")]),s("br"),t._v(" "),s("router-link",{staticClass:"block text-sm",attrs:{dusk:"entry-user-show",to:{name:"users.show",params:{id:t.entity.tokenable_id}}}},[s("i",{staticClass:"fa fa-user"}),t._v("\n                            "+t._s(t.entity.tokenable_type)+" ("+t._s(t.entity.tokenable_id)+")\n                        ")])],1),t._v(" "),s("div",{staticClass:"grid-item w-full sm:w-2/3"},[s("strong",[t._v("Abilities")]),s("br"),t._v(" "),s("i",{staticClass:"fa fa-lock-open text-blue-500"}),t._v("\n                        "+t._s(t.entity.abilities.join(", "))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item w-full sm:w-1/3"},[s("strong",[t._v("Last Used")]),s("br"),t._v(" "),s("i",{staticClass:"fa fa-clock text-blue-500"}),t._v("\n                        "+t._s(t.entity.last_used_at||"-")+"\n                    ")]),t._v(" "),s("div",{staticClass:"grid-item w-full sm:w-1/3"},[s("strong",[t._v("Created")]),s("br"),t._v(" "),s("i",{staticClass:"fa fa-clock text-blue-500"}),t._v("\n                        "+t._s(t.entity.created_at)+"\n                    ")]),t._v(" "),s("div",{staticClass:"grid-item w-full sm:w-1/3"},[s("strong",[t._v("Updated")]),s("br"),t._v(" "),s("i",{staticClass:"fa fa-clock text-blue-500"}),t._v("\n                        "+t._s(t.entity.updated_at)+"\n                    ")])])]),t._v(" "),s("div",{staticClass:"card-actions"},[s("router-link",{staticClass:"btn btn-blue",attrs:{dusk:"entry-show",to:t.$link("tokens.edit").withParams({id:t.entity.id})}},[s("i",{staticClass:"fa fa-edit"}),t._v(" Edit\n                ")])],1)])])]):t._e()}),[],!1,null,null,null);e.default=a.exports},ukrq:function(t,e,s){"use strict";s.r(e);var i={name:"UserResource",beforeCreate:function(){this.$bind.mapWatchers("TokenResource",{"$route.query":{immediate:!0,handler:"index"}}),this.$bind.mapGetters("TokenResource",{destroying:"destroying",resource:"resource"})}},n=s("KHd+"),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-resource",{attrs:{searchable:!0},scopedSlots:t._u([{key:"title",fn:function(){return[s("i",{staticClass:"fa fa-key"}),t._v(" Tokens\n        ")]},proxy:!0},{key:"actions",fn:function(){return[s("router-link",{staticClass:"btn btn-blue",attrs:{dusk:"action-create",to:{name:"tokens.create"}}},[s("i",{staticClass:"fa fa-key"}),t._v(" "),s("span",{staticClass:"hidden sm:inline"},[t._v("Add")])])]},proxy:!0},{key:"entries",fn:function(e){var i=e.entries;return t._l(i,(function(e){return s("div",{staticClass:"card my-4 text-sm",attrs:{dusk:"entry"}},[s("div",{staticClass:"card-header p-2 flex"},[s("router-link",{staticClass:"block",attrs:{dusk:"entry-show",to:t.$link("tokens.show").withParams({id:e.id})}},[s("i",{staticClass:"fa fa-key text-blue-500"}),t._v(" "),s("strong",[t._v(t._s(e.name))])]),t._v(" "),s("v-action",{staticClass:"btn-red btn-xs ml-auto",attrs:{dusk:"entry-destroy"},on:{click:function(s){t.destroying=e}}},[s("i",{staticClass:"fa fa-trash"}),t._v(" Destroy\n                    ")])],1),t._v(" "),s("div",{staticClass:"card-content hidden sm:block"},[s("div",{staticClass:"grid mb-4"},[s("div",{staticClass:"grid-item w-1/2 sm:w-1/3"},[s("strong",[t._v("Tokenable")]),s("br"),t._v(" "),s("i",{staticClass:"fa fa-cubes text-blue-500"}),t._v("\n                            "+t._s(e.tokenable_type)+" ("+t._s(e.tokenable_id)+")\n                        ")]),t._v(" "),s("div",{staticClass:"grid-item w-1/2  sm:w-1/3"},[s("strong",[t._v("Abilities")]),s("br"),t._v(" "),s("i",{staticClass:"fa fa-lock-open text-blue-500"}),t._v("\n                            "+t._s(e.abilities.join(", "))+"\n                        ")])]),t._v(" "),s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item w-1/2  sm:w-1/3"},[s("strong",[t._v("Last Used")]),s("br"),t._v(" "),s("i",{staticClass:"fa fa-clock text-blue-500"}),t._v("\n                            "+t._s(e.last_used_at||"-")+"\n                        ")]),t._v(" "),s("div",{staticClass:"grid-item w-1/2  sm:w-1/3"},[s("strong",[t._v("Created")]),s("br"),t._v(" "),s("i",{staticClass:"fa fa-clock text-blue-500"}),t._v("\n                            "+t._s(e.created_at)+"\n                        ")])])])])}))}}]),model:{value:t.resource,callback:function(e){t.resource=e},expression:"resource"}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);