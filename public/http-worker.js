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
    value: function install() {
      if (this.isSupported) {
        navigator.serviceWorker.register('/worker.js', {
          scope: '.'
        }).then(function () {
          return navigator.serviceWorker.ready;
        }).then(this.onInstalled.bind(this), this.onFailed.bind(this));
      } else {
        console.warn('ServiceWorker UnAvailable');
      }

      return this;
    }
    /**
     * Registration Successful Handler.
     * @param registration {ServiceWorkerRegistration}
     */

  }, {
    key: "onInstalled",
    value: function onInstalled(registration) {
      var _this = this;

      setTimeout(function () {
        _this.$events.$emit('worker:registered');

        _this.dispatch({
          test: 123
        }).then(function (result) {
          console.log("WorkerResult", result);
        });
      }, 1000);
    }
    /**
     * Registration Failed Handler.
     * @param error {Error}
     */

  }, {
    key: "onFailed",
    value: function onFailed(error) {
      var _this2 = this;

      setTimeout(function () {
        _this2.$events.$emit('worker:failed', error);
      }, 1000);
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
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        if (!_this3.isSupported || !_this3.isAvailable) reject();
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
//# sourceMappingURL=http-worker.js.map?id=2cee0496528374c17fa5