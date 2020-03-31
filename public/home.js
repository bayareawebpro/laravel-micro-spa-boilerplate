(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/home/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/Home.vue?vue&type=template&id=560f72a0&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/home/Home.vue?vue&type=template&id=560f72a0& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "m-0 p-0 h-full text-center bg-gray-900" },
    [
      _c("v-animated", { attrs: { name: "zoomInOut", delay: 10 } }, [
        _c(
          "section",
          { staticClass: "bg-gray-1000 shadow-xl shadow-inner p-6" },
          [
            _c(
              "div",
              { staticClass: "grid flex-col justify-center content-center" },
              [
                _c("div", { staticClass: "grid-item" }, [
                  _c("img", {
                    staticClass: "mx-auto",
                    staticStyle: { width: "256px" },
                    attrs: { src: "/images/logo.svg" }
                  }),
                  _vm._v(" "),
                  _c("h1", { staticClass: "brand text-xl" }, [
                    _c("span", [_vm._v("Laravel")]),
                    _c("em", [_vm._v("Micro")]),
                    _c("small", [_vm._v(".js")])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-gray-600" }, [
                    _vm._v("Advanced Single Page Application Boilerplate")
                  ]),
                  _vm._v(" "),
                  _c("p")
                ])
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "p-8 text-center" }, [
        _c("div", { staticClass: "grid justify-center" }, [
          _c(
            "div",
            { staticClass: "grid-item md:w-1/2 mb-12" },
            [
              _c("v-animated", { attrs: { name: "fadeInUp", delay: 180 } }, [
                _c("div", [
                  _c("img", {
                    staticClass: "mx-auto mb-3",
                    staticStyle: { width: "64px" },
                    attrs: { src: "/images/gem.svg" }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("IOC Container")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v(
                      "\n                            Advanced Laravel-style object-oriented dependency injection with Container and Service Providers.\n                            Extendable controllers and an easy-to-use Reactive Store System.\n                        "
                    )
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "grid-item md:w-1/2 mb-12" },
            [
              _c("v-animated", { attrs: { name: "fadeInUp", delay: 260 } }, [
                _c("div", [
                  _c("img", {
                    staticClass: "mx-auto mb-3",
                    staticStyle: { width: "64px" },
                    attrs: { src: "/images/process.svg" }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Middleware Pipeline")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v(
                      "\n                            The LaravelMicro Middleware Pipeline adapted for VueRouter provides a dependable front-end request\n                            lifecycle. Clean and easy to read Laravel-style middleware classes can be applied to Vue\n                            Routes for interacting with application services.\n                        "
                    )
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "grid-item md:w-1/2 mb-12" },
            [
              _c("v-animated", { attrs: { name: "fadeInUp", delay: 340 } }, [
                _c("div", [
                  _c("img", {
                    staticClass: "mx-auto mb-3",
                    staticStyle: { width: "64px" },
                    attrs: { src: "/images/interpolate.svg" }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("API Controller Sync")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v(
                      "\n                            Easily specify @ controller actions that should be called to synchronize\n                            back-end api routes as users navigate front-end Vue routes. Validation\n                            and server errors are captured by pre-configured services.\n                        "
                    )
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "grid-item md:w-1/2 mb-12" },
            [
              _c("v-animated", { attrs: { name: "fadeInUp", delay: 430 } }, [
                _c("div", [
                  _c("img", {
                    staticClass: "mx-auto mb-3",
                    staticStyle: { width: "64px" },
                    attrs: { src: "/images/numbers.svg" }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Custom Component Library")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v(
                      "\n                            Over 40 different custom designed UI Components built with Vue.js & Tailwind CSS ready for rapid prototyping.\n                            Including Forms, Charts, Panels, Modals and more.\n                        "
                    )
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "grid-item md:w-1/2 mb-12" },
            [
              _c("v-animated", { attrs: { name: "fadeInUp", delay: 520 } }, [
                _c("div", [
                  _c("img", {
                    staticClass: "mx-auto mb-3",
                    staticStyle: { width: "64px" },
                    attrs: { src: "/images/script.svg" }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("API Driven Development")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v(
                      "\n                            API & SPA Authentication with Laravel Sanctum.\n                            Scaffolding for Account and API Token management allows simple out-of-the-box usage.\n                        "
                    )
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "grid-item md:w-1/2 mb-12" },
            [
              _c("v-animated", { attrs: { name: "fadeInUp", delay: 610 } }, [
                _c("div", [
                  _c("img", {
                    staticClass: "mx-auto mb-3",
                    staticStyle: { width: "64px" },
                    attrs: { src: "/images/compile.svg" }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Rapid Resources")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v(
                      '\n                            Bulletproof Resources with "Searchable Resource Builder" Package,\n                            and pre-written Frontend Controllers and UI Scaffolding.\n                        '
                    )
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "grid-item md:w-1/2 mb-12" },
            [
              _c("v-animated", { attrs: { name: "fadeInUp", delay: 700 } }, [
                _c("div", [
                  _c("img", {
                    staticClass: "mx-auto mb-3",
                    staticStyle: { width: "64px" },
                    attrs: { src: "/images/request.svg" }
                  }),
                  _vm._v(" "),
                  _c("h4", [_vm._v("100% Page Speed Performance")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v(
                      "\n                            PWA Manifest and Service Worker ready to cache routes and assets from the Laravel Mix Manifest.\n                        "
                    )
                  ])
                ])
              ])
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Views/home/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/Views/home/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_560f72a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=560f72a0& */ "./resources/js/Views/home/Home.vue?vue&type=template&id=560f72a0&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Views/home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_560f72a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_560f72a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/home/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/home/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Views/home/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/home/Home.vue?vue&type=template&id=560f72a0&":
/*!*************************************************************************!*\
  !*** ./resources/js/Views/home/Home.vue?vue&type=template&id=560f72a0& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_560f72a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=560f72a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/Home.vue?vue&type=template&id=560f72a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_560f72a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_560f72a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=home.js.map?id=ba14e67cb9dbc8efbc18