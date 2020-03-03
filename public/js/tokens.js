(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tokens"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/tokens/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TokenEdit",
  beforeCreate: function beforeCreate() {
    this.$bind.mapGetters('TokenResource', {
      abilities: 'abilities',
      entity: 'entity'
    });
    this.$bind.mapActions('TokenResource', {
      backToIndex: 'reloadCollection',
      update: 'update',
      create: 'create',
      store: 'store'
    });
    this.$bind.mapState('TokenResource', {
      $errors: '$errors',
      grants: 'grants'
    });
  },
  created: function created() {
    this.$errors.clear();

    if (!this.entity.abilities.length) {
      this.entity.abilities.push({});
    }

    if (this.$route.query.user_id) {
      this.entity.user_id = this.$route.query.user_id;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$errors.clear();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Layout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/tokens/Layout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TokenLayout",
  props: ['title', 'subtitle']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Resource.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/tokens/Resource.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** @property destroying */

/** @property resource */

/** @property $errors */

/** @method destroy */

/** @method index */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserResource",
  beforeCreate: function beforeCreate() {
    this.$bind.mapActions('TokenResource', {
      index: 'index',
      destroy: 'destroy'
    });
    this.$bind.mapState('TokenResource', {
      $errors: '$errors'
    });
    this.$bind.mapGetters('TokenResource', {
      destroying: 'destroying',
      resource: 'resource'
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/tokens/Show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** @property $errors */

/** @property entity */

/** @method update */

/** @method store */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TokenShow",
  beforeCreate: function beforeCreate() {
    this.$bind.mapGetters('TokenResource', {
      entity: 'entity'
    });
    this.$bind.mapState('TokenResource', {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Edit.vue?vue&type=template&id=0dc204a0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/tokens/Edit.vue?vue&type=template&id=0dc204a0& ***!
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
  return _vm.entity
    ? _c(
        "div",
        { staticClass: "lg:max-w-4xl mx-auto" },
        [
          _c(
            "form",
            {
              ref: "form",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  _vm.entity.id
                    ? _vm.update(_vm.entity)
                    : _vm.store(_vm.entity, false)
                }
              }
            },
            [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.entity.name || "New Token") +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-content" },
                  [
                    _c("div", { staticClass: "grid" }, [
                      _c(
                        "div",
                        { staticClass: "grid-item flex-grow" },
                        [
                          _c("v-input", {
                            attrs: {
                              type: "text",
                              name: "name",
                              label: "Name",
                              required: true,
                              invalid: _vm.$errors.has("name"),
                              help: _vm.$errors.first(
                                "name",
                                "Enter your name."
                              )
                            },
                            on: {
                              change: function($event) {
                                return _vm.$errors.forget("name")
                              }
                            },
                            model: {
                              value: _vm.entity.name,
                              callback: function($$v) {
                                _vm.$set(_vm.entity, "name", $$v)
                              },
                              expression: "entity.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "grid-item flex-shrink pb-3" },
                        [
                          _c(
                            "v-action",
                            {
                              staticClass: "btn-blue",
                              attrs: { dusk: "action-add" },
                              on: {
                                click: function($event) {
                                  return _vm.entity.abilities.push("*")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Add Ability\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-form-message",
                      {
                        staticClass: "alert-warn",
                        attrs: {
                          dismissible: false,
                          value: _vm.$errors.has("abilities")
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.$errors.first("abilities")) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.entity.abilities, function(ability, index) {
                      return _c("div", { staticClass: "grid" }, [
                        _c(
                          "div",
                          { staticClass: "grid-item flex-grow" },
                          [
                            _c("v-input-select", {
                              attrs: {
                                type: "text",
                                label: "Ability",
                                name: "ability",
                                options: _vm.grants,
                                required: true,
                                invalid: _vm.$errors.has("abilities." + index),
                                help: _vm.$errors.first(
                                  "abilities." + index,
                                  "Enter ability name."
                                )
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$errors.forget(
                                    "abilities." + index
                                  )
                                }
                              },
                              model: {
                                value: _vm.entity.abilities[index],
                                callback: function($$v) {
                                  _vm.$set(_vm.entity.abilities, index, $$v)
                                },
                                expression: "entity.abilities[index]"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "grid-item flex-shrink pb-3" },
                          [
                            _c(
                              "v-action",
                              {
                                staticClass: "btn-red self-start",
                                attrs: { dusk: "action-remove" },
                                on: {
                                  click: function($event) {
                                    return _vm.entity.abilities.splice(index, 1)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-times" })]
                            )
                          ],
                          1
                        )
                      ])
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-actions" },
                  [
                    _c(
                      "v-action",
                      {
                        staticClass: "btn-lg btn-green",
                        attrs: { type: "submit", dusk: "action-save" }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.entity.id ? "Update" : "Create") +
                            "\n                "
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("v-modal", {
            attrs: { dusk: "modal-destroy" },
            on: {
              closed: function($event) {
                _vm.$router.push(
                  _vm.$link("tokens.edit").withParams({ id: _vm.entity.id })
                )
              }
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "title",
                  fn: function() {
                    return [_vm._v("\n            Token Created\n        ")]
                  },
                  proxy: true
                },
                {
                  key: "content",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "This token will not be shown again, please copy it for your records."
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-input", {
                        ref: "token",
                        attrs: {
                          type: "text",
                          name: "token",
                          label: "Token",
                          help: "Authentication Token.",
                          value: _vm.entity.token,
                          "aria-readonly": true
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-action",
                        {
                          staticClass: "btn-green btn-xl",
                          attrs: { focus: true },
                          on: {
                            click: function($event) {
                              return _vm.$refs.token.clipboard()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-clipboard" }),
                          _vm._v(" Copy\n            ")
                        ]
                      )
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
                          attrs: { dusk: "modal-done" },
                          on: {
                            click: function($event) {
                              _vm.entity.token = null
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-check-circle" }),
                          _vm._v(" Done\n            ")
                        ]
                      )
                    ]
                  },
                  proxy: true
                }
              ],
              null,
              false,
              1169804626
            ),
            model: {
              value: _vm.entity.token,
              callback: function($$v) {
                _vm.$set(_vm.entity, "token", $$v)
              },
              expression: "entity.token"
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Layout.vue?vue&type=template&id=0d0aaf50&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/tokens/Layout.vue?vue&type=template&id=0d0aaf50& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex flex-col h-full" }, [
    _c(
      "div",
      { staticClass: "bg-gray-800 py-3 px-6" },
      [
        _c(
          "router-link",
          {
            staticClass: "page-title block",
            attrs: { to: { name: "tokens.index" } }
          },
          [_vm._v("\n            " + _vm._s(_vm.title) + "\n        ")]
        ),
        _vm._v(" "),
        _c("small", { staticClass: "page-lead" }, [
          _vm._v(_vm._s(_vm.subtitle))
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "layout p-4" },
      [
        _c(
          "transition",
          { attrs: { name: "fadeInLeft", mode: "out-in", duration: 90 } },
          [_c("router-view", { key: _vm.$route.name })],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Resource.vue?vue&type=template&id=a6960a98&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/tokens/Resource.vue?vue&type=template&id=a6960a98& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    [
      _c("v-resource", {
        attrs: { searchable: true },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function() {
              return [
                _c("i", { staticClass: "fa fa-key" }),
                _vm._v(" Tokens\n        ")
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
                      to: { name: "tokens.create" }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-key" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "hidden sm:inline" }, [
                      _vm._v("Add")
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
              return _vm._l(entries, function(entry) {
                return _c(
                  "div",
                  {
                    staticClass: "card my-4 text-sm",
                    attrs: { dusk: "entry" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "card-header p-2 flex" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "block",
                            attrs: {
                              dusk: "entry-show",
                              to: {
                                name: "tokens.show",
                                params: { id: entry.id }
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-key text-blue-500" }),
                            _vm._v(" "),
                            _c("strong", [_vm._v(_vm._s(entry.name))])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-action",
                          {
                            staticClass: "btn-red btn-xs ml-auto",
                            attrs: { dusk: "entry-destroy" },
                            on: {
                              click: function($event) {
                                _vm.destroying = entry
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-trash" }),
                            _vm._v(" Destroy\n                    ")
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-content" }, [
                      _c("div", { staticClass: "grid mb-4" }, [
                        _c("div", { staticClass: "grid-item w-1/2 sm:w-1/3" }, [
                          _c("strong", [_vm._v("Tokenable")]),
                          _c("br"),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-cubes text-blue-500" }),
                          _vm._v(
                            "\n                            " +
                              _vm._s(entry.tokenable_type) +
                              " (" +
                              _vm._s(entry.tokenable_id) +
                              ")\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "grid-item w-1/2  sm:w-1/3" },
                          [
                            _c("strong", [_vm._v("Abilities")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa fa-lock-open text-blue-500"
                            }),
                            _vm._v(
                              "\n                            " +
                                _vm._s(entry.abilities.join(",")) +
                                "\n                        "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "grid" }, [
                        _c(
                          "div",
                          { staticClass: "grid-item w-1/2  sm:w-1/3" },
                          [
                            _c("strong", [_vm._v("Last Used")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa fa-clock text-blue-500"
                            }),
                            _vm._v(
                              "\n                            " +
                                _vm._s(entry.last_used_at || "-") +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "grid-item w-1/2  sm:w-1/3" },
                          [
                            _c("strong", [_vm._v("Created")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa fa-clock text-blue-500"
                            }),
                            _vm._v(
                              "\n                            " +
                                _vm._s(entry.created_at) +
                                "\n                        "
                            )
                          ]
                        )
                      ])
                    ])
                  ]
                )
              })
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
              return [_vm._v("\n            Destroy Token?\n        ")]
            },
            proxy: true
          },
          {
            key: "content",
            fn: function() {
              return [
                _c("p", [
                  _c("strong", [_vm._v("Username:")]),
                  _vm._v(" " + _vm._s(_vm.destroying.tokenable.name))
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("strong", [_vm._v("Tokenable:")]),
                  _vm._v(
                    " " +
                      _vm._s(_vm.destroying.tokenable_type) +
                      " (" +
                      _vm._s(_vm.destroying.tokenable_id) +
                      ")"
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("strong", [_vm._v("Abilities:")]),
                  _vm._v(" " + _vm._s(_vm.destroying.abilities.join(", ")))
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Show.vue?vue&type=template&id=f5208dba&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/tokens/Show.vue?vue&type=template&id=f5208dba& ***!
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
  return _vm.entity
    ? _c("div", { staticClass: "lg:max-w-4xl mx-auto" }, [
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
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.entity.name) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "grid mb-4" }, [
                  _c(
                    "div",
                    { staticClass: "grid-item w-full sm:w-1/3" },
                    [
                      _c("strong", [_vm._v("Tokenable")]),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "block text-sm",
                          attrs: {
                            dusk: "entry-user-show",
                            to: {
                              name: "users.show",
                              params: { id: _vm.entity.tokenable_id }
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user" }),
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.entity.tokenable_type) +
                              " (" +
                              _vm._s(_vm.entity.tokenable_id) +
                              ")\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "grid-item w-full sm:w-2/3" }, [
                    _c("strong", [_vm._v("Abilities")]),
                    _c("br"),
                    _vm._v(" "),
                    _c("i", { staticClass: "fa fa-lock-open text-blue-500" }),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.entity.abilities.join(", ")) +
                        "\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "grid" }, [
                  _c("div", { staticClass: "grid-item w-full sm:w-1/3" }, [
                    _c("strong", [_vm._v("Last Used")]),
                    _c("br"),
                    _vm._v(" "),
                    _c("i", { staticClass: "fa fa-clock text-blue-500" }),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.entity.last_used_at || "-") +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "grid-item w-full sm:w-1/3" }, [
                    _c("strong", [_vm._v("Created")]),
                    _c("br"),
                    _vm._v(" "),
                    _c("i", { staticClass: "fa fa-clock text-blue-500" }),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.entity.created_at) +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "grid-item w-full sm:w-1/3" }, [
                    _c("strong", [_vm._v("Updated")]),
                    _c("br"),
                    _vm._v(" "),
                    _c("i", { staticClass: "fa fa-clock text-blue-500" }),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.entity.updated_at) +
                        "\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-actions" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-blue",
                      attrs: {
                        dusk: "entry-show",
                        to: _vm
                          .$link("tokens.edit")
                          .withParams({ id: _vm.entity.id })
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-edit" }),
                      _vm._v(" Edit\n                ")
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Views/tokens/Edit.vue":
/*!********************************************!*\
  !*** ./resources/js/Views/tokens/Edit.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_0dc204a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=0dc204a0& */ "./resources/js/Views/tokens/Edit.vue?vue&type=template&id=0dc204a0&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Views/tokens/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_0dc204a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_0dc204a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/tokens/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/tokens/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Views/tokens/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/tokens/Edit.vue?vue&type=template&id=0dc204a0&":
/*!***************************************************************************!*\
  !*** ./resources/js/Views/tokens/Edit.vue?vue&type=template&id=0dc204a0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0dc204a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=0dc204a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Edit.vue?vue&type=template&id=0dc204a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0dc204a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0dc204a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Views/tokens/Layout.vue":
/*!**********************************************!*\
  !*** ./resources/js/Views/tokens/Layout.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_0d0aaf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=0d0aaf50& */ "./resources/js/Views/tokens/Layout.vue?vue&type=template&id=0d0aaf50&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Views/tokens/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_0d0aaf50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_0d0aaf50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/tokens/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/tokens/Layout.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Views/tokens/Layout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/tokens/Layout.vue?vue&type=template&id=0d0aaf50&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Views/tokens/Layout.vue?vue&type=template&id=0d0aaf50& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_0d0aaf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=0d0aaf50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Layout.vue?vue&type=template&id=0d0aaf50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_0d0aaf50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_0d0aaf50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Views/tokens/Resource.vue":
/*!************************************************!*\
  !*** ./resources/js/Views/tokens/Resource.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resource_vue_vue_type_template_id_a6960a98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resource.vue?vue&type=template&id=a6960a98& */ "./resources/js/Views/tokens/Resource.vue?vue&type=template&id=a6960a98&");
/* harmony import */ var _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resource.vue?vue&type=script&lang=js& */ "./resources/js/Views/tokens/Resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resource_vue_vue_type_template_id_a6960a98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resource_vue_vue_type_template_id_a6960a98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/tokens/Resource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/tokens/Resource.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Views/tokens/Resource.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/tokens/Resource.vue?vue&type=template&id=a6960a98&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Views/tokens/Resource.vue?vue&type=template&id=a6960a98& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_a6960a98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=template&id=a6960a98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Resource.vue?vue&type=template&id=a6960a98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_a6960a98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_a6960a98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Views/tokens/Show.vue":
/*!********************************************!*\
  !*** ./resources/js/Views/tokens/Show.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_f5208dba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=f5208dba& */ "./resources/js/Views/tokens/Show.vue?vue&type=template&id=f5208dba&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Views/tokens/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_f5208dba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_f5208dba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/tokens/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/tokens/Show.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Views/tokens/Show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/tokens/Show.vue?vue&type=template&id=f5208dba&":
/*!***************************************************************************!*\
  !*** ./resources/js/Views/tokens/Show.vue?vue&type=template&id=f5208dba& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_f5208dba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=f5208dba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/tokens/Show.vue?vue&type=template&id=f5208dba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_f5208dba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_f5208dba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);