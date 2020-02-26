(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/errors/Test.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/errors/Test.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Test",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/errors/Test.vue?vue&type=template&id=45c43cf2&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/errors/Test.vue?vue&type=template&id=45c43cf2& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "layout p-4" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header bg-gray-800" }, [
        _vm._v("\n            Card\n        ")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-content bg-gray-900" },
        [
          _c("br"),
          _c(
            "router-link",
            {
              staticClass: "btn",
              attrs: { to: { name: "errors.test", params: { status: 401 } } }
            },
            [_vm._v("401 UnAuthenticated")]
          ),
          _vm._v(" "),
          _c("br"),
          _c(
            "router-link",
            {
              staticClass: "btn",
              attrs: { to: { name: "errors.test", params: { status: 403 } } }
            },
            [_vm._v("403 UnAuthorized")]
          ),
          _vm._v(" "),
          _c("br"),
          _c(
            "router-link",
            {
              staticClass: "btn",
              attrs: { to: { name: "errors.test", params: { status: 403 } } }
            },
            [_vm._v("403 UnAuthorized")]
          ),
          _vm._v(" "),
          _c("br"),
          _c(
            "router-link",
            {
              staticClass: "btn",
              attrs: { to: { name: "errors.test", params: { status: 404 } } }
            },
            [_vm._v("404 Not Found")]
          ),
          _vm._v(" "),
          _c("br"),
          _c(
            "router-link",
            {
              staticClass: "btn",
              attrs: { to: { name: "errors.test", params: { status: 419 } } }
            },
            [_vm._v("419 Session Expired")]
          ),
          _vm._v(" "),
          _c("br"),
          _c(
            "router-link",
            {
              staticClass: "btn",
              attrs: { to: { name: "errors.test", params: { status: 422 } } }
            },
            [_vm._v("422 Invalid")]
          ),
          _vm._v(" "),
          _c("br"),
          _c(
            "router-link",
            {
              staticClass: "btn",
              attrs: { to: { name: "errors.test", params: { status: 500 } } }
            },
            [_vm._v("500 ServerError")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Views/errors/Test.vue":
/*!********************************************!*\
  !*** ./resources/js/Views/errors/Test.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Test_vue_vue_type_template_id_45c43cf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Test.vue?vue&type=template&id=45c43cf2& */ "./resources/js/Views/errors/Test.vue?vue&type=template&id=45c43cf2&");
/* harmony import */ var _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Test.vue?vue&type=script&lang=js& */ "./resources/js/Views/errors/Test.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Test_vue_vue_type_template_id_45c43cf2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Test_vue_vue_type_template_id_45c43cf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/errors/Test.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/errors/Test.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Views/errors/Test.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/errors/Test.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/errors/Test.vue?vue&type=template&id=45c43cf2&":
/*!***************************************************************************!*\
  !*** ./resources/js/Views/errors/Test.vue?vue&type=template&id=45c43cf2& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_45c43cf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=template&id=45c43cf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/errors/Test.vue?vue&type=template&id=45c43cf2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_45c43cf2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_45c43cf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=test.js.map