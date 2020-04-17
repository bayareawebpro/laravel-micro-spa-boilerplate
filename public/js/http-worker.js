(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["http-worker"],{

/***/ "./resources/js/Services/Http/WorkerService.js":
/*!*****************************************************!*\
  !*** ./resources/js/Services/Http/WorkerService.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkerService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WorkerService = /*#__PURE__*/function () {
  function WorkerService(Events) {
    _classCallCheck(this, WorkerService);

    this.$events = Events;
  }

  _createClass(WorkerService, [{
    key: "install",
    value: function () {
      var _install = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.isSupported) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return navigator.serviceWorker.register('/worker.js', {
                  scope: '.'
                }).then(function () {
                  return navigator.serviceWorker.ready;
                }).then(this.onInstalled.bind(this), this.onFailed.bind(this));

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                console.warn('ServiceWorker UnAvailable');

              case 7:
                return _context.abrupt("return", Promise.reject(new Error('ServiceWorker UnAvailable')));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function install() {
        return _install.apply(this, arguments);
      }

      return install;
    }()
    /**
     * Registration Successful Handler.
     * @param registration {ServiceWorkerRegistration}
     */

  }, {
    key: "onInstalled",
    value: function onInstalled(registration) {
      this.$events.$emit('worker:registered', registration);
    }
    /**
     * Registration Failed Handler.
     * @param error {Error}
     */

  }, {
    key: "onFailed",
    value: function onFailed(error) {
      this.$events.$emit('worker:failed', error);
    }
    /**
     * Dispatch Event to Queue Worker.
     * @param job {Object}
     * @return {Promise}
     * @docs https://html.spec.whatwg.org/multipage/workers.html#dom-worker-postmessage
     */

  }, {
    key: "dispatch",
    value: function dispatch(job) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (!_this.isSupported || !_this.isAvailable) reject();
        var channel = new MessageChannel();

        channel.port1.onmessage = function (event) {
          if (event.data.error) {
            reject(event.data.error);
          } else {
            resolve(event.data);
          }
        };

        navigator.serviceWorker.controller.postMessage(job, [channel.port2]);
      });
    }
  }, {
    key: "isSupported",
    get: function get() {
      return 'navigator' in window && 'serviceWorker' in navigator;
    }
  }, {
    key: "isAvailable",
    get: function get() {
      return navigator.serviceWorker.controller;
    }
  }]);

  return WorkerService;
}();



/***/ })

}]);
//# sourceMappingURL=http-worker.js.map?id=f8078610c9c16af20bfe