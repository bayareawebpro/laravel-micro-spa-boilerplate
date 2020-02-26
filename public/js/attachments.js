(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attachments"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/attachments/AttachmentForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** @property $errors */

/** @property entity */

/** @method update */

/** @method store */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AttachmentForm",
  beforeCreate: function beforeCreate() {
    this.$bind.mapGetters('Attachments', {
      entity: 'entity'
    });
    this.$bind.mapActions('Attachments', {
      isLoading: 'isLoading',
      update: 'update',
      store: 'store'
    });
    this.$bind.mapState('Attachments', {
      $errors: '$errors'
    });
  },
  created: function created() {
    this.$errors.clear();
  },
  beforeDestroy: function beforeDestroy() {
    this.$errors.clear();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentShow.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/attachments/AttachmentShow.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AttachmentShow",
  beforeCreate: function beforeCreate() {
    this.$bind.mapGetters('Attachments', {
      entity: 'entity',
      modal: 'modal'
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserResource",
  beforeCreate: function beforeCreate() {
    this.$bind.mapActions('Attachments', {
      isLoading: 'isLoading',
      destroy: 'destroy',
      index: 'index'
    });
    this.$bind.mapGetters('Attachments', {
      destroying: 'destroying',
      resource: 'resource',
      modal: 'modal'
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentForm.vue?vue&type=template&id=7fc71245&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/attachments/AttachmentForm.vue?vue&type=template&id=7fc71245& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _vm.entity
    ? _c(
        "div",
        {
          staticClass: "layout layout-centered w-full lg:max-w-4xl mx-auto p-4"
        },
        [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.entity.name || "New Attachments") +
                  "\n        "
              )
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                ref: "form",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "card-content" },
                  [
                    _c("v-input-file", {
                      attrs: {
                        label: "Image",
                        help: "Choose an image.",
                        placeholder: "Select",
                        invalid: _vm.$errors.has("file"),
                        options: { accept: ["image/*"] }
                      },
                      on: {
                        change: function($event) {
                          return _vm.$errors.forget("file")
                        }
                      },
                      model: {
                        value: _vm.entity.file,
                        callback: function($$v) {
                          _vm.$set(_vm.entity, "file", $$v)
                        },
                        expression: "entity.file"
                      }
                    })
                  ],
                  1
                )
              ]
            )
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentShow.vue?vue&type=template&id=4f591bfe&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/attachments/AttachmentShow.vue?vue&type=template&id=4f591bfe& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _vm.entity
    ? _c("div", { staticClass: "layout p-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("\n            " + _vm._s(_vm.entity.name) + "\n        ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-content" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-yellow",
                  attrs: {
                    dusk: "entry-show",
                    to: {
                      name: "attachments.edit",
                      params: { id: _vm.entity.id }
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-edit" }),
                  _vm._v(" Edit\n            ")
                ]
              )
            ],
            1
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=template&id=4a9f2490&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=template&id=4a9f2490& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "layout p-4" },
    [
      _c("v-resource", {
        attrs: {
          loading: _vm.isLoading("attachments.index"),
          searchable: true
        },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function() {
              return [
                _c("i", { staticClass: "fa fa-photo" }),
                _vm._v(" Attachments\n        ")
              ]
            },
            proxy: true
          },
          {
            key: "actions",
            fn: function() {
              return [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-blue",
                    attrs: {
                      dusk: "action-create",
                      to: { name: "attachments.create" }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-user-plus" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "hidden sm:inline" }, [
                      _vm._v("Create")
                    ])
                  ]
                )
              ]
            },
            proxy: true
          },
          {
            key: "entries",
            fn: function(ref) {
              var entries = ref.entries
              return [
                _c(
                  "div",
                  { staticClass: "grid" },
                  _vm._l(entries, function(entry) {
                    return _c(
                      "div",
                      { staticClass: "grid-item sm:w-1/4 self-center" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "div",
                              to: {
                                name: "attachments.show",
                                params: { id: entry.id }
                              }
                            }
                          },
                          [
                            _c("img", {
                              staticClass: "rounded shadow mx-auto",
                              attrs: { loading: "lazy", src: entry.url }
                            })
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  0
                )
              ]
            }
          }
        ]),
        model: {
          value: _vm.resource,
          callback: function($$v) {
            _vm.resource = $$v
          },
          expression: "resource"
        }
      }),
      _vm._v(" "),
      _c("v-modal", {
        attrs: { dusk: "modal-destroy" },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function() {
              return [_vm._v("\n            Destroy Entity?\n        ")]
            },
            proxy: true
          },
          {
            key: "content",
            fn: function() {
              return [
                _c("div", { staticClass: "alert warn" }, [
                  _vm._v("This action is irreversible.")
                ])
              ]
            },
            proxy: true
          },
          {
            key: "actions",
            fn: function() {
              return [
                _c(
                  "v-action",
                  {
                    staticClass: "btn-green",
                    attrs: { focus: true, dusk: "destroy-confirm" },
                    on: {
                      click: function($event) {
                        return _vm.destroy(_vm.destroying)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-check-circle" }),
                    _vm._v(" Destroy\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-action",
                  {
                    staticClass: "btn-red ml-auto",
                    attrs: { dusk: "destroy-cancel" },
                    on: {
                      click: function($event) {
                        _vm.destroying = null
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-close" }),
                    _vm._v(" Cancel\n            ")
                  ]
                )
              ]
            },
            proxy: true
          }
        ]),
        model: {
          value: _vm.destroying,
          callback: function($$v) {
            _vm.destroying = $$v
          },
          expression: "destroying"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Views/attachments/AttachmentForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Views/attachments/AttachmentForm.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttachmentForm_vue_vue_type_template_id_7fc71245___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttachmentForm.vue?vue&type=template&id=7fc71245& */ "./resources/js/Views/attachments/AttachmentForm.vue?vue&type=template&id=7fc71245&");
/* harmony import */ var _AttachmentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttachmentForm.vue?vue&type=script&lang=js& */ "./resources/js/Views/attachments/AttachmentForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttachmentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttachmentForm_vue_vue_type_template_id_7fc71245___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttachmentForm_vue_vue_type_template_id_7fc71245___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/attachments/AttachmentForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/attachments/AttachmentForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Views/attachments/AttachmentForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/attachments/AttachmentForm.vue?vue&type=template&id=7fc71245&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Views/attachments/AttachmentForm.vue?vue&type=template&id=7fc71245& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentForm_vue_vue_type_template_id_7fc71245___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentForm.vue?vue&type=template&id=7fc71245& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentForm.vue?vue&type=template&id=7fc71245&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentForm_vue_vue_type_template_id_7fc71245___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentForm_vue_vue_type_template_id_7fc71245___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Views/attachments/AttachmentShow.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Views/attachments/AttachmentShow.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttachmentShow_vue_vue_type_template_id_4f591bfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttachmentShow.vue?vue&type=template&id=4f591bfe& */ "./resources/js/Views/attachments/AttachmentShow.vue?vue&type=template&id=4f591bfe&");
/* harmony import */ var _AttachmentShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttachmentShow.vue?vue&type=script&lang=js& */ "./resources/js/Views/attachments/AttachmentShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttachmentShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttachmentShow_vue_vue_type_template_id_4f591bfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttachmentShow_vue_vue_type_template_id_4f591bfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/attachments/AttachmentShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/attachments/AttachmentShow.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Views/attachments/AttachmentShow.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/attachments/AttachmentShow.vue?vue&type=template&id=4f591bfe&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Views/attachments/AttachmentShow.vue?vue&type=template&id=4f591bfe& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentShow_vue_vue_type_template_id_4f591bfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentShow.vue?vue&type=template&id=4f591bfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentShow.vue?vue&type=template&id=4f591bfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentShow_vue_vue_type_template_id_4f591bfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentShow_vue_vue_type_template_id_4f591bfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Views/attachments/AttachmentsResource.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Views/attachments/AttachmentsResource.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttachmentsResource_vue_vue_type_template_id_4a9f2490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttachmentsResource.vue?vue&type=template&id=4a9f2490& */ "./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=template&id=4a9f2490&");
/* harmony import */ var _AttachmentsResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttachmentsResource.vue?vue&type=script&lang=js& */ "./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttachmentsResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttachmentsResource_vue_vue_type_template_id_4a9f2490___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttachmentsResource_vue_vue_type_template_id_4a9f2490___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/attachments/AttachmentsResource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentsResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentsResource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentsResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=template&id=4a9f2490&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=template&id=4a9f2490& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentsResource_vue_vue_type_template_id_4a9f2490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentsResource.vue?vue&type=template&id=4a9f2490& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/attachments/AttachmentsResource.vue?vue&type=template&id=4a9f2490&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentsResource_vue_vue_type_template_id_4a9f2490___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentsResource_vue_vue_type_template_id_4a9f2490___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=attachments.js.map