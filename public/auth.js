(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{AZpr:function(e,t,s){"use strict";s.r(t);var r={name:"AccountSettings",beforeCreate:function(){this.$bind.mapActions("Auth",{isLoading:"isLoading",update:"update"}),this.$bind.mapState("Auth",{$errors:"$errors"}),this.$bind.mapGetters("Auth",{entity:"entity"})},beforeDestroy:function(){this.$errors.clear()}},a=s("KHd+"),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"layout-centered"},[e.entity?s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n            Account Settings\n        ")]),e._v(" "),s("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.update(e.entity)}}},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item w-full md:w-1/2"},[s("v-input",{attrs:{type:"text",label:"Name",name:"name",required:!0,autocomplete:"name",invalid:e.$errors.has("name"),help:e.$errors.first("name","Enter your name.")},on:{change:function(t){return e.$errors.forget("name")}},model:{value:e.entity.name,callback:function(t){e.$set(e.entity,"name",t)},expression:"entity.name"}})],1),e._v(" "),s("div",{staticClass:"grid-item w-full md:w-1/2"},[s("v-input",{attrs:{type:"text",name:"email",label:"Email Address",required:!0,autocomplete:"email",invalid:e.$errors.has("email"),help:e.$errors.first("email","Enter your email.")},on:{change:function(t){return e.$errors.forget("email")}},model:{value:e.entity.email,callback:function(t){e.$set(e.entity,"email",t)},expression:"entity.email"}})],1),e._v(" "),s("div",{staticClass:"grid-item w-full md:w-1/2"},[s("v-input",{attrs:{type:"password",label:"Password",name:"password",autocomplete:"new-password",invalid:e.$errors.has("password"),help:e.$errors.first("password","Enter your secure password.")},on:{change:function(t){return e.$errors.forget("password")}},model:{value:e.entity.password,callback:function(t){e.$set(e.entity,"password",t)},expression:"entity.password"}})],1),e._v(" "),s("div",{staticClass:"grid-item w-full md:w-1/2"},[s("v-input",{attrs:{type:"password",label:"Password Confirmation",name:"password_confirmation",autocomplete:"new-password",invalid:e.$errors.has("password_confirmation"),help:e.$errors.first("password_confirmation","Confirm your secure password.")},on:{change:function(t){return e.$errors.forget("password_confirmation")}},model:{value:e.entity.password_confirmation,callback:function(t){e.$set(e.entity,"password_confirmation",t)},expression:"entity.password_confirmation"}})],1)])]),e._v(" "),s("div",{staticClass:"card-actions"},[s("v-action",{staticClass:"btn-lg btn-green",attrs:{type:"submit",dusk:"action-submit",loading:e.isLoading("account.update")}},[e._v("\n                    Save\n                ")])],1)])]):e._e()])}),[],!1,null,null,null);t.default=i.exports},"Fcz/":function(e,t,s){"use strict";s.r(t);var r={name:"Login",data:function(){return{user:{email:"test@devdashboard.app",password:"testDev2020",remember_me:!0}}},beforeCreate:function(){this.$bind.mapActions("Auth",{isLoading:"isLoading",login:"login"}),this.$bind.mapState("Auth",{$errors:"$errors"})},beforeDestroy:function(){this.$errors.clear()}},a=s("KHd+"),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"layout-centered md:max-w-xl"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n            Login\n        ")]),e._v(" "),s("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.login(e.user)}}},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"alert info mb-4"},[e._v("Demo Mode Enabled!")]),e._v(" "),s("v-form-message",{attrs:{dusk:"alert"},model:{value:e.$errors.message,callback:function(t){e.$set(e.$errors,"message",t)},expression:"$errors.message"}}),e._v(" "),s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item w-full"},[s("v-input",{attrs:{type:"text",name:"email",label:"Email Address",required:!0,autocomplete:"email-address",invalid:e.$errors.has("email"),help:e.$errors.first("email","Enter your email.")},on:{change:function(t){return e.$errors.forget("email")}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),s("div",{staticClass:"grid-item w-full"},[s("v-input",{attrs:{name:"password",type:"password",label:"Password",required:!0,autocomplete:"current-password",invalid:e.$errors.has("password"),help:e.$errors.first("password","Enter your secure password.")},on:{change:function(t){return e.$errors.forget("password")}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)]),e._v(" "),s("v-input-switch",{attrs:{dusk:"remember_me",name:"remember_me",label:"Remember Me.",invalid:e.$errors.has("remember_me"),help:e.$errors.first("remember_me","Remember Me.")},on:{change:function(t){return e.$errors.forget("remember_me")}},model:{value:e.user.remember_me,callback:function(t){e.$set(e.user,"remember_me",t)},expression:"user.remember_me"}})],1),e._v(" "),s("div",{staticClass:"card-actions flex"},[s("v-action",{staticClass:"btn-blue btn-lg",attrs:{type:"submit",dusk:"action-login",loading:e.isLoading("login")}},[s("i",{staticClass:"fa fa-unlock"}),e._v(" Login\n                ")]),e._v(" "),s("div",{staticClass:"flex-grow"}),e._v(" "),s("router-link",{staticClass:"self-center text-sm mx-4",attrs:{dusk:"link-forgot",to:e.$link("auth.forgot")}},[e._v("\n                    Reset Password\n                ")]),e._v(" "),s("router-link",{staticClass:"self-center text-sm",attrs:{dusk:"link-register",to:e.$link("auth.register")}},[e._v("\n                    Register\n                ")])],1)])])])}),[],!1,null,null,null);t.default=i.exports},Zqow:function(e,t,s){"use strict";s.r(t);var r={name:"PasswordReset",data:function(){return{entity:{email:"",password:"",password_confirmation:""}}},beforeCreate:function(){this.$bind.mapActions("Auth",{submit:"reset"}),this.$bind.mapState("Auth",{$errors:"$errors"})},created:function(){this.entity.email=this.$route.query.email||null,this.entity.token=this.$route.query.token||null},beforeRouteEnter:function(e,t,s){var r=this;s((function(e){e.$route.query.token||s(r.$link("auth.forgot"))}))}},a=s("KHd+"),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"layout-centered md:max-w-xl"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n            Reset Password\n        ")]),e._v(" "),s("form",{ref:"form",on:{submit:function(e){e.preventDefault()}}},[s("div",{staticClass:"card-content"},[s("v-form-message",{model:{value:e.$errors.message,callback:function(t){e.$set(e.$errors,"message",t)},expression:"$errors.message"}}),e._v(" "),s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item w-full"},[s("v-input",{attrs:{type:"text",name:"email",label:"Email Address",invalid:e.$errors.has("email"),help:e.$errors.first("email","Enter your email.")},on:{change:function(t){return e.$errors.forget("email")}},model:{value:e.entity.email,callback:function(t){e.$set(e.entity,"email",t)},expression:"entity.email"}})],1),e._v(" "),s("div",{staticClass:"grid-item w-full md:w-1/2"},[s("v-input",{attrs:{type:"password",label:"Password",name:"password",invalid:e.$errors.has("password"),help:e.$errors.first("password","Enter your secure password.")},on:{change:function(t){return e.$errors.forget("password")}},model:{value:e.entity.password,callback:function(t){e.$set(e.entity,"password",t)},expression:"entity.password"}})],1),e._v(" "),s("div",{staticClass:"grid-item w-full md:w-1/2"},[s("v-input",{attrs:{type:"password",label:"Password Confirmation",name:"password_confirmation",invalid:e.$errors.has("password_confirmation"),help:e.$errors.first("password_confirmation","Confirm your secure password.")},on:{change:function(t){return e.$errors.forget("password_confirmation")}},model:{value:e.entity.password_confirmation,callback:function(t){e.$set(e.entity,"password_confirmation",t)},expression:"entity.password_confirmation"}})],1)])],1),e._v(" "),s("div",{staticClass:"card-actions"},[s("v-action",{staticClass:"btn btn-blue btn-lg",attrs:{dusk:"submit"},on:{click:function(t){return e.submit(e.entity)}}},[e._v("\n                    Reset Password\n                ")])],1)])])])}),[],!1,null,null,null);t.default=i.exports},edMb:function(e,t,s){"use strict";s.r(t);var r={name:"PasswordForgot",data:function(){return{sent:!1,entity:{email:null,password:null,remember_me:null}}},beforeCreate:function(){this.$bind.mapActions("Auth",{isLoading:"isLoading",submit:"forgot"}),this.$bind.mapState("Auth",{$errors:"$errors"}),this.$bind.mapGetters("Auth",{sent:"sent"})},created:function(){this.$errors.clear()},beforeDestroy:function(){this.$errors.clear()}},a=s("KHd+"),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"layout-centered md:max-w-xl"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n            Forgot Password\n        ")]),e._v(" "),e.sent?s("div",{staticClass:"card-content"},[e._m(0),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Please check your email for further instructions.")])]):s("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit(e.entity)}}},[s("div",{staticClass:"card-content"},[s("v-form-message",{model:{value:e.$errors.message,callback:function(t){e.$set(e.$errors,"message",t)},expression:"$errors.message"}}),e._v(" "),s("v-input",{attrs:{type:"text",name:"email",required:!0,label:"Email Address",invalid:e.$errors.has("email"),help:e.$errors.first("email","Enter your email.")},on:{change:function(t){return e.$errors.forget("email")}},model:{value:e.entity.email,callback:function(t){e.$set(e.entity,"email",t)},expression:"entity.email"}})],1),e._v(" "),s("div",{staticClass:"card-actions flex"},[s("v-action",{staticClass:"btn-blue",attrs:{type:"submit",dusk:"action-submit",loading:e.isLoading("auth.forgot")}},[e._v("\n                    Send Reset Link\n                ")]),e._v(" "),s("div",{staticClass:"flex-grow"}),e._v(" "),s("router-link",{staticClass:"self-center text-sm",attrs:{dusk:"link-register",to:e.$link("auth.login")}},[e._v("\n                    Login\n                ")])],1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"alert success font-bold"},[t("i",{staticClass:"fa fa-check-circle mr-2"}),this._v(" Sent Successfully.\n            ")])}],!1,null,null,null);t.default=i.exports},oXFm:function(e,t,s){"use strict";s.r(t);var r={name:"Register",data:function(){return{entity:{name:null,email:null,password:null,password_confirmation:null}}},beforeCreate:function(){this.$bind.mapActions("Auth",{isLoading:"isLoading",submit:"register"}),this.$bind.mapState("Auth",{$errors:"$errors"})},beforeDestroy:function(){this.$errors.clear()}},a=s("KHd+"),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"layout-centered md:max-w-xl"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n            Register\n        ")]),e._v(" "),s("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit(e.entity)}}},[s("div",{staticClass:"card-content"},[s("v-form-message",{model:{value:e.$errors.message,callback:function(t){e.$set(e.$errors,"message",t)},expression:"$errors.message"}}),e._v(" "),s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item w-full md:w-1/2"},[s("v-input",{attrs:{type:"text",name:"name",label:"Name",invalid:e.$errors.has("name"),help:e.$errors.first("name","Enter your name."),autocomplete:"name",required:!0},on:{change:function(t){return e.$errors.forget("name")}},model:{value:e.entity.name,callback:function(t){e.$set(e.entity,"name",t)},expression:"entity.name"}})],1),e._v(" "),s("div",{staticClass:"grid-item w-full md:w-1/2"},[s("v-input",{attrs:{type:"text",name:"email",label:"Email Address",invalid:e.$errors.has("email"),help:e.$errors.first("email","Enter your email."),autocomplete:"email-address",required:!0},on:{change:function(t){return e.$errors.forget("email")}},model:{value:e.entity.email,callback:function(t){e.$set(e.entity,"email",t)},expression:"entity.email"}})],1),e._v(" "),s("div",{staticClass:"grid-item w-full md:w-1/2"},[s("v-input",{attrs:{type:"password",name:"password",label:"Password",invalid:e.$errors.has("password"),help:e.$errors.first("password","Enter your secure password."),autocomplete:"new-password",required:!0},on:{change:function(t){return e.$errors.forget("password")}},model:{value:e.entity.password,callback:function(t){e.$set(e.entity,"password",t)},expression:"entity.password"}})],1),e._v(" "),s("div",{staticClass:"grid-item w-full md:w-1/2"},[s("v-input",{attrs:{type:"password",label:"Password Confirmation",name:"password_confirmation",invalid:e.$errors.has("password_confirmation"),help:e.$errors.first("password_confirmation","Confirm your secure password."),autocomplete:"new-password",required:!0},on:{change:function(t){return e.$errors.forget("password_confirmation")}},model:{value:e.entity.password_confirmation,callback:function(t){e.$set(e.entity,"password_confirmation",t)},expression:"entity.password_confirmation"}})],1)])],1),e._v(" "),s("div",{staticClass:"card-actions flex"},[s("v-action",{staticClass:"btn btn-blue btn-lg",attrs:{type:"submit",dusk:"action-register",loading:e.isLoading("auth.register")}},[e._v("\n                    Register\n                ")]),e._v(" "),s("div",{staticClass:"flex-grow"}),e._v(" "),s("router-link",{staticClass:"self-center text-sm",attrs:{dusk:"link-login",to:e.$link("auth.login")}},[e._v("\n                    Login\n                ")])],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);