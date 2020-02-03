(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.monitor = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var __window = typeof window !== 'undefined' && window;
  var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
      self instanceof WorkerGlobalScope && self;
  var __global = typeof global !== 'undefined' && global;
  var _root = __window || __global || __self;
  //# sourceMappingURL=root.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isFunction(x) {
      return typeof x === 'function';
  }
  //# sourceMappingURL=isFunction.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var _enable_super_gross_mode_that_will_cause_bad_things = false;
  var config = {
      Promise: undefined,
      set useDeprecatedSynchronousErrorHandling(value) {
          if (value) {
              var error = /*@__PURE__*/ new Error();
              /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
          }
          _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
          return _enable_super_gross_mode_that_will_cause_bad_things;
      },
  };
  //# sourceMappingURL=config.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function hostReportError(err) {
      setTimeout(function () { throw err; }, 0);
  }
  //# sourceMappingURL=hostReportError.js.map

  /** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
  var empty = {
      closed: true,
      next: function (value) { },
      error: function (err) {
          if (config.useDeprecatedSynchronousErrorHandling) {
              throw err;
          }
          else {
              hostReportError(err);
          }
      },
      complete: function () { }
  };
  //# sourceMappingURL=Observer.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
  //# sourceMappingURL=isArray.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isObject(x) {
      return x !== null && typeof x === 'object';
  }
  //# sourceMappingURL=isObject.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
      function UnsubscriptionErrorImpl(errors) {
          Error.call(this);
          this.message = errors ?
              errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
          this.name = 'UnsubscriptionError';
          this.errors = errors;
          return this;
      }
      UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
  })();
  var UnsubscriptionError = UnsubscriptionErrorImpl;
  //# sourceMappingURL=UnsubscriptionError.js.map

  /** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
  var Subscription = /*@__PURE__*/ (function () {
      function Subscription(unsubscribe) {
          this.closed = false;
          this._parentOrParents = null;
          this._subscriptions = null;
          if (unsubscribe) {
              this._unsubscribe = unsubscribe;
          }
      }
      Subscription.prototype.unsubscribe = function () {
          var errors;
          if (this.closed) {
              return;
          }
          var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;
          if (_parentOrParents instanceof Subscription) {
              _parentOrParents.remove(this);
          }
          else if (_parentOrParents !== null) {
              for (var index = 0; index < _parentOrParents.length; ++index) {
                  var parent_1 = _parentOrParents[index];
                  parent_1.remove(this);
              }
          }
          if (isFunction(_unsubscribe)) {
              try {
                  _unsubscribe.call(this);
              }
              catch (e) {
                  errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
              }
          }
          if (isArray(_subscriptions)) {
              var index = -1;
              var len = _subscriptions.length;
              while (++index < len) {
                  var sub = _subscriptions[index];
                  if (isObject(sub)) {
                      try {
                          sub.unsubscribe();
                      }
                      catch (e) {
                          errors = errors || [];
                          if (e instanceof UnsubscriptionError) {
                              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                          }
                          else {
                              errors.push(e);
                          }
                      }
                  }
              }
          }
          if (errors) {
              throw new UnsubscriptionError(errors);
          }
      };
      Subscription.prototype.add = function (teardown) {
          var subscription = teardown;
          if (!teardown) {
              return Subscription.EMPTY;
          }
          switch (typeof teardown) {
              case 'function':
                  subscription = new Subscription(teardown);
              case 'object':
                  if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                      return subscription;
                  }
                  else if (this.closed) {
                      subscription.unsubscribe();
                      return subscription;
                  }
                  else if (!(subscription instanceof Subscription)) {
                      var tmp = subscription;
                      subscription = new Subscription();
                      subscription._subscriptions = [tmp];
                  }
                  break;
              default: {
                  throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
              }
          }
          var _parentOrParents = subscription._parentOrParents;
          if (_parentOrParents === null) {
              subscription._parentOrParents = this;
          }
          else if (_parentOrParents instanceof Subscription) {
              if (_parentOrParents === this) {
                  return subscription;
              }
              subscription._parentOrParents = [_parentOrParents, this];
          }
          else if (_parentOrParents.indexOf(this) === -1) {
              _parentOrParents.push(this);
          }
          else {
              return subscription;
          }
          var subscriptions = this._subscriptions;
          if (subscriptions === null) {
              this._subscriptions = [subscription];
          }
          else {
              subscriptions.push(subscription);
          }
          return subscription;
      };
      Subscription.prototype.remove = function (subscription) {
          var subscriptions = this._subscriptions;
          if (subscriptions) {
              var subscriptionIndex = subscriptions.indexOf(subscription);
              if (subscriptionIndex !== -1) {
                  subscriptions.splice(subscriptionIndex, 1);
              }
          }
      };
      Subscription.EMPTY = (function (empty) {
          empty.closed = true;
          return empty;
      }(new Subscription()));
      return Subscription;
  }());
  function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
  }
  //# sourceMappingURL=Subscription.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var rxSubscriber = /*@__PURE__*/ (function () {
      return typeof Symbol === 'function'
          ? /*@__PURE__*/ Symbol('rxSubscriber')
          : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
  })();
  //# sourceMappingURL=rxSubscriber.js.map

  /** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
  var Subscriber = /*@__PURE__*/ (function (_super) {
      __extends(Subscriber, _super);
      function Subscriber(destinationOrNext, error, complete) {
          var _this = _super.call(this) || this;
          _this.syncErrorValue = null;
          _this.syncErrorThrown = false;
          _this.syncErrorThrowable = false;
          _this.isStopped = false;
          switch (arguments.length) {
              case 0:
                  _this.destination = empty;
                  break;
              case 1:
                  if (!destinationOrNext) {
                      _this.destination = empty;
                      break;
                  }
                  if (typeof destinationOrNext === 'object') {
                      if (destinationOrNext instanceof Subscriber) {
                          _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                          _this.destination = destinationOrNext;
                          destinationOrNext.add(_this);
                      }
                      else {
                          _this.syncErrorThrowable = true;
                          _this.destination = new SafeSubscriber(_this, destinationOrNext);
                      }
                      break;
                  }
              default:
                  _this.syncErrorThrowable = true;
                  _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                  break;
          }
          return _this;
      }
      Subscriber.prototype[rxSubscriber] = function () { return this; };
      Subscriber.create = function (next, error, complete) {
          var subscriber = new Subscriber(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
      };
      Subscriber.prototype.next = function (value) {
          if (!this.isStopped) {
              this._next(value);
          }
      };
      Subscriber.prototype.error = function (err) {
          if (!this.isStopped) {
              this.isStopped = true;
              this._error(err);
          }
      };
      Subscriber.prototype.complete = function () {
          if (!this.isStopped) {
              this.isStopped = true;
              this._complete();
          }
      };
      Subscriber.prototype.unsubscribe = function () {
          if (this.closed) {
              return;
          }
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
      };
      Subscriber.prototype._next = function (value) {
          this.destination.next(value);
      };
      Subscriber.prototype._error = function (err) {
          this.destination.error(err);
          this.unsubscribe();
      };
      Subscriber.prototype._complete = function () {
          this.destination.complete();
          this.unsubscribe();
      };
      Subscriber.prototype._unsubscribeAndRecycle = function () {
          var _parentOrParents = this._parentOrParents;
          this._parentOrParents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parentOrParents = _parentOrParents;
          return this;
      };
      return Subscriber;
  }(Subscription));
  var SafeSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(SafeSubscriber, _super);
      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          _this._parentSubscriber = _parentSubscriber;
          var next;
          var context = _this;
          if (isFunction(observerOrNext)) {
              next = observerOrNext;
          }
          else if (observerOrNext) {
              next = observerOrNext.next;
              error = observerOrNext.error;
              complete = observerOrNext.complete;
              if (observerOrNext !== empty) {
                  context = Object.create(observerOrNext);
                  if (isFunction(context.unsubscribe)) {
                      _this.add(context.unsubscribe.bind(context));
                  }
                  context.unsubscribe = _this.unsubscribe.bind(_this);
              }
          }
          _this._context = context;
          _this._next = next;
          _this._error = error;
          _this._complete = complete;
          return _this;
      }
      SafeSubscriber.prototype.next = function (value) {
          if (!this.isStopped && this._next) {
              var _parentSubscriber = this._parentSubscriber;
              if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                  this.__tryOrUnsub(this._next, value);
              }
              else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.error = function (err) {
          if (!this.isStopped) {
              var _parentSubscriber = this._parentSubscriber;
              var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
              if (this._error) {
                  if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                      this.__tryOrUnsub(this._error, err);
                      this.unsubscribe();
                  }
                  else {
                      this.__tryOrSetError(_parentSubscriber, this._error, err);
                      this.unsubscribe();
                  }
              }
              else if (!_parentSubscriber.syncErrorThrowable) {
                  this.unsubscribe();
                  if (useDeprecatedSynchronousErrorHandling) {
                      throw err;
                  }
                  hostReportError(err);
              }
              else {
                  if (useDeprecatedSynchronousErrorHandling) {
                      _parentSubscriber.syncErrorValue = err;
                      _parentSubscriber.syncErrorThrown = true;
                  }
                  else {
                      hostReportError(err);
                  }
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.complete = function () {
          var _this = this;
          if (!this.isStopped) {
              var _parentSubscriber = this._parentSubscriber;
              if (this._complete) {
                  var wrappedComplete = function () { return _this._complete.call(_this._context); };
                  if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                      this.__tryOrUnsub(wrappedComplete);
                      this.unsubscribe();
                  }
                  else {
                      this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                      this.unsubscribe();
                  }
              }
              else {
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
          try {
              fn.call(this._context, value);
          }
          catch (err) {
              this.unsubscribe();
              if (config.useDeprecatedSynchronousErrorHandling) {
                  throw err;
              }
              else {
                  hostReportError(err);
              }
          }
      };
      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
          if (!config.useDeprecatedSynchronousErrorHandling) {
              throw new Error('bad call');
          }
          try {
              fn.call(this._context, value);
          }
          catch (err) {
              if (config.useDeprecatedSynchronousErrorHandling) {
                  parent.syncErrorValue = err;
                  parent.syncErrorThrown = true;
                  return true;
              }
              else {
                  hostReportError(err);
                  return true;
              }
          }
          return false;
      };
      SafeSubscriber.prototype._unsubscribe = function () {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;
          _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber;
  }(Subscriber));
  //# sourceMappingURL=Subscriber.js.map

  /** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
  function canReportError(observer) {
      while (observer) {
          var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
          if (closed_1 || isStopped) {
              return false;
          }
          else if (destination && destination instanceof Subscriber) {
              observer = destination;
          }
          else {
              observer = null;
          }
      }
      return true;
  }
  //# sourceMappingURL=canReportError.js.map

  /** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
  function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
          if (nextOrObserver instanceof Subscriber) {
              return nextOrObserver;
          }
          if (nextOrObserver[rxSubscriber]) {
              return nextOrObserver[rxSubscriber]();
          }
      }
      if (!nextOrObserver && !error && !complete) {
          return new Subscriber(empty);
      }
      return new Subscriber(nextOrObserver, error, complete);
  }
  //# sourceMappingURL=toSubscriber.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
  //# sourceMappingURL=observable.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function noop() { }
  //# sourceMappingURL=noop.js.map

  /** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
  function pipeFromArray(fns) {
      if (!fns) {
          return noop;
      }
      if (fns.length === 1) {
          return fns[0];
      }
      return function piped(input) {
          return fns.reduce(function (prev, fn) { return fn(prev); }, input);
      };
  }
  //# sourceMappingURL=pipe.js.map

  /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
  var Observable = /*@__PURE__*/ (function () {
      function Observable(subscribe) {
          this._isScalar = false;
          if (subscribe) {
              this._subscribe = subscribe;
          }
      }
      Observable.prototype.lift = function (operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
      };
      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = toSubscriber(observerOrNext, error, complete);
          if (operator) {
              sink.add(operator.call(sink, this.source));
          }
          else {
              sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                  this._subscribe(sink) :
                  this._trySubscribe(sink));
          }
          if (config.useDeprecatedSynchronousErrorHandling) {
              if (sink.syncErrorThrowable) {
                  sink.syncErrorThrowable = false;
                  if (sink.syncErrorThrown) {
                      throw sink.syncErrorValue;
                  }
              }
          }
          return sink;
      };
      Observable.prototype._trySubscribe = function (sink) {
          try {
              return this._subscribe(sink);
          }
          catch (err) {
              if (config.useDeprecatedSynchronousErrorHandling) {
                  sink.syncErrorThrown = true;
                  sink.syncErrorValue = err;
              }
              if (canReportError(sink)) {
                  sink.error(err);
              }
              else {
                  console.warn(err);
              }
          }
      };
      Observable.prototype.forEach = function (next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var subscription;
              subscription = _this.subscribe(function (value) {
                  try {
                      next(value);
                  }
                  catch (err) {
                      reject(err);
                      if (subscription) {
                          subscription.unsubscribe();
                      }
                  }
              }, reject, resolve);
          });
      };
      Observable.prototype._subscribe = function (subscriber) {
          var source = this.source;
          return source && source.subscribe(subscriber);
      };
      Observable.prototype[observable] = function () {
          return this;
      };
      Observable.prototype.pipe = function () {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              operations[_i] = arguments[_i];
          }
          if (operations.length === 0) {
              return this;
          }
          return pipeFromArray(operations)(this);
      };
      Observable.prototype.toPromise = function (promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var value;
              _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
          });
      };
      Observable.create = function (subscribe) {
          return new Observable(subscribe);
      };
      return Observable;
  }());
  function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
          promiseCtor =  Promise;
      }
      if (!promiseCtor) {
          throw new Error('no Promise impl found');
      }
      return promiseCtor;
  }
  //# sourceMappingURL=Observable.js.map

  /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
  function map(project, thisArg) {
      return function mapOperation(source) {
          if (typeof project !== 'function') {
              throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          }
          return source.lift(new MapOperator(project, thisArg));
      };
  }
  var MapOperator = /*@__PURE__*/ (function () {
      function MapOperator(project, thisArg) {
          this.project = project;
          this.thisArg = thisArg;
      }
      MapOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator;
  }());
  var MapSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(MapSubscriber, _super);
      function MapSubscriber(destination, project, thisArg) {
          var _this = _super.call(this, destination) || this;
          _this.project = project;
          _this.count = 0;
          _this.thisArg = thisArg || _this;
          return _this;
      }
      MapSubscriber.prototype._next = function (value) {
          var result;
          try {
              result = this.project.call(this.thisArg, value, this.count++);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          this.destination.next(result);
      };
      return MapSubscriber;
  }(Subscriber));
  //# sourceMappingURL=map.js.map

  /** PURE_IMPORTS_START tslib,_.._util_root,_.._Observable,_.._Subscriber,_.._operators_map PURE_IMPORTS_END */
  function getCORSRequest() {
      if (_root.XMLHttpRequest) {
          return new _root.XMLHttpRequest();
      }
      else if (!!_root.XDomainRequest) {
          return new _root.XDomainRequest();
      }
      else {
          throw new Error('CORS is not supported by your browser');
      }
  }
  function getXMLHttpRequest() {
      if (_root.XMLHttpRequest) {
          return new _root.XMLHttpRequest();
      }
      else {
          var progId = void 0;
          try {
              var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
              for (var i = 0; i < 3; i++) {
                  try {
                      progId = progIds[i];
                      if (new _root.ActiveXObject(progId)) {
                          break;
                      }
                  }
                  catch (e) {
                  }
              }
              return new _root.ActiveXObject(progId);
          }
          catch (e) {
              throw new Error('XMLHttpRequest is not supported by your browser');
          }
      }
  }
  function ajaxGet(url, headers) {
      if (headers === void 0) {
          headers = null;
      }
      return new AjaxObservable({ method: 'GET', url: url, headers: headers });
  }
  function ajaxPost(url, body, headers) {
      return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
  }
  function ajaxDelete(url, headers) {
      return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
  }
  function ajaxPut(url, body, headers) {
      return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
  }
  function ajaxPatch(url, body, headers) {
      return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
  }
  var mapResponse = /*@__PURE__*/ map(function (x, index) { return x.response; });
  function ajaxGetJSON(url, headers) {
      return mapResponse(new AjaxObservable({
          method: 'GET',
          url: url,
          responseType: 'json',
          headers: headers
      }));
  }
  var AjaxObservable = /*@__PURE__*/ (function (_super) {
      __extends(AjaxObservable, _super);
      function AjaxObservable(urlOrRequest) {
          var _this = _super.call(this) || this;
          var request = {
              async: true,
              createXHR: function () {
                  return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
              },
              crossDomain: true,
              withCredentials: false,
              headers: {},
              method: 'GET',
              responseType: 'json',
              timeout: 0
          };
          if (typeof urlOrRequest === 'string') {
              request.url = urlOrRequest;
          }
          else {
              for (var prop in urlOrRequest) {
                  if (urlOrRequest.hasOwnProperty(prop)) {
                      request[prop] = urlOrRequest[prop];
                  }
              }
          }
          _this.request = request;
          return _this;
      }
      AjaxObservable.prototype._subscribe = function (subscriber) {
          return new AjaxSubscriber(subscriber, this.request);
      };
      AjaxObservable.create = (function () {
          var create = function (urlOrRequest) {
              return new AjaxObservable(urlOrRequest);
          };
          create.get = ajaxGet;
          create.post = ajaxPost;
          create.delete = ajaxDelete;
          create.put = ajaxPut;
          create.patch = ajaxPatch;
          create.getJSON = ajaxGetJSON;
          return create;
      })();
      return AjaxObservable;
  }(Observable));
  var AjaxSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(AjaxSubscriber, _super);
      function AjaxSubscriber(destination, request) {
          var _this = _super.call(this, destination) || this;
          _this.request = request;
          _this.done = false;
          var headers = request.headers = request.headers || {};
          if (!request.crossDomain && !_this.getHeader(headers, 'X-Requested-With')) {
              headers['X-Requested-With'] = 'XMLHttpRequest';
          }
          var contentTypeHeader = _this.getHeader(headers, 'Content-Type');
          if (!contentTypeHeader && !(_root.FormData && request.body instanceof _root.FormData) && typeof request.body !== 'undefined') {
              headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
          }
          request.body = _this.serializeBody(request.body, _this.getHeader(request.headers, 'Content-Type'));
          _this.send();
          return _this;
      }
      AjaxSubscriber.prototype.next = function (e) {
          this.done = true;
          var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
          var result;
          try {
              result = new AjaxResponse(e, xhr, request);
          }
          catch (err) {
              return destination.error(err);
          }
          destination.next(result);
      };
      AjaxSubscriber.prototype.send = function () {
          var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
          try {
              var xhr = this.xhr = request.createXHR();
              this.setupEvents(xhr, request);
              if (user) {
                  xhr.open(method, url, async, user, password);
              }
              else {
                  xhr.open(method, url, async);
              }
              if (async) {
                  xhr.timeout = request.timeout;
                  xhr.responseType = request.responseType;
              }
              if ('withCredentials' in xhr) {
                  xhr.withCredentials = !!request.withCredentials;
              }
              this.setHeaders(xhr, headers);
              if (body) {
                  xhr.send(body);
              }
              else {
                  xhr.send();
              }
          }
          catch (err) {
              this.error(err);
          }
      };
      AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
          if (!body || typeof body === 'string') {
              return body;
          }
          else if (_root.FormData && body instanceof _root.FormData) {
              return body;
          }
          if (contentType) {
              var splitIndex = contentType.indexOf(';');
              if (splitIndex !== -1) {
                  contentType = contentType.substring(0, splitIndex);
              }
          }
          switch (contentType) {
              case 'application/x-www-form-urlencoded':
                  return Object.keys(body).map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(body[key]); }).join('&');
              case 'application/json':
                  return JSON.stringify(body);
              default:
                  return body;
          }
      };
      AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
          for (var key in headers) {
              if (headers.hasOwnProperty(key)) {
                  xhr.setRequestHeader(key, headers[key]);
              }
          }
      };
      AjaxSubscriber.prototype.getHeader = function (headers, headerName) {
          for (var key in headers) {
              if (key.toLowerCase() === headerName.toLowerCase()) {
                  return headers[key];
              }
          }
          return undefined;
      };
      AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
          var progressSubscriber = request.progressSubscriber;
          function xhrTimeout(e) {
              var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
              if (progressSubscriber) {
                  progressSubscriber.error(e);
              }
              var error;
              try {
                  error = new AjaxTimeoutError(this, request);
              }
              catch (err) {
                  error = err;
              }
              subscriber.error(error);
          }
          xhr.ontimeout = xhrTimeout;
          xhrTimeout.request = request;
          xhrTimeout.subscriber = this;
          xhrTimeout.progressSubscriber = progressSubscriber;
          if (xhr.upload && 'withCredentials' in xhr) {
              if (progressSubscriber) {
                  var xhrProgress_1;
                  xhrProgress_1 = function (e) {
                      var progressSubscriber = xhrProgress_1.progressSubscriber;
                      progressSubscriber.next(e);
                  };
                  if (_root.XDomainRequest) {
                      xhr.onprogress = xhrProgress_1;
                  }
                  else {
                      xhr.upload.onprogress = xhrProgress_1;
                  }
                  xhrProgress_1.progressSubscriber = progressSubscriber;
              }
              var xhrError_1;
              xhrError_1 = function (e) {
                  var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                  if (progressSubscriber) {
                      progressSubscriber.error(e);
                  }
                  var error;
                  try {
                      error = new AjaxError('ajax error', this, request);
                  }
                  catch (err) {
                      error = err;
                  }
                  subscriber.error(error);
              };
              xhr.onerror = xhrError_1;
              xhrError_1.request = request;
              xhrError_1.subscriber = this;
              xhrError_1.progressSubscriber = progressSubscriber;
          }
          function xhrReadyStateChange(e) {
              return;
          }
          xhr.onreadystatechange = xhrReadyStateChange;
          xhrReadyStateChange.subscriber = this;
          xhrReadyStateChange.progressSubscriber = progressSubscriber;
          xhrReadyStateChange.request = request;
          function xhrLoad(e) {
              var _a = xhrLoad, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
              if (this.readyState === 4) {
                  var status_1 = this.status === 1223 ? 204 : this.status;
                  var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                  if (status_1 === 0) {
                      status_1 = response ? 200 : 0;
                  }
                  if (status_1 < 400) {
                      if (progressSubscriber) {
                          progressSubscriber.complete();
                      }
                      subscriber.next(e);
                      subscriber.complete();
                  }
                  else {
                      if (progressSubscriber) {
                          progressSubscriber.error(e);
                      }
                      var error = void 0;
                      try {
                          error = new AjaxError('ajax error ' + status_1, this, request);
                      }
                      catch (err) {
                          error = err;
                      }
                      subscriber.error(error);
                  }
              }
          }
          xhr.onload = xhrLoad;
          xhrLoad.subscriber = this;
          xhrLoad.progressSubscriber = progressSubscriber;
          xhrLoad.request = request;
      };
      AjaxSubscriber.prototype.unsubscribe = function () {
          var _a = this, done = _a.done, xhr = _a.xhr;
          if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
              xhr.abort();
          }
          _super.prototype.unsubscribe.call(this);
      };
      return AjaxSubscriber;
  }(Subscriber));
  var AjaxResponse = /*@__PURE__*/ (function () {
      function AjaxResponse(originalEvent, xhr, request) {
          this.originalEvent = originalEvent;
          this.xhr = xhr;
          this.request = request;
          this.status = xhr.status;
          this.responseType = xhr.responseType || request.responseType;
          this.response = parseXhrResponse(this.responseType, xhr);
      }
      return AjaxResponse;
  }());
  var AjaxErrorImpl = /*@__PURE__*/ (function () {
      function AjaxErrorImpl(message, xhr, request) {
          Error.call(this);
          this.message = message;
          this.name = 'AjaxError';
          this.xhr = xhr;
          this.request = request;
          this.status = xhr.status;
          this.responseType = xhr.responseType || request.responseType;
          this.response = parseXhrResponse(this.responseType, xhr);
          return this;
      }
      AjaxErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
      return AjaxErrorImpl;
  })();
  var AjaxError = AjaxErrorImpl;
  function parseJson(xhr) {
      if ('response' in xhr) {
          return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
      }
      else {
          return JSON.parse(xhr.responseText || 'null');
      }
  }
  function parseXhrResponse(responseType, xhr) {
      switch (responseType) {
          case 'json':
              return parseJson(xhr);
          case 'xml':
              return xhr.responseXML;
          case 'text':
          default:
              return ('response' in xhr) ? xhr.response : xhr.responseText;
      }
  }
  function AjaxTimeoutErrorImpl(xhr, request) {
      AjaxError.call(this, 'ajax timeout', xhr, request);
      this.name = 'AjaxTimeoutError';
      return this;
  }
  var AjaxTimeoutError = AjaxTimeoutErrorImpl;
  //# sourceMappingURL=AjaxObservable.js.map

  /** PURE_IMPORTS_START _AjaxObservable PURE_IMPORTS_END */
  var ajax = /*@__PURE__*/ (function () { return AjaxObservable.create; })();
  //# sourceMappingURL=ajax.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var subscribeToArray = function (array) {
      return function (subscriber) {
          for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
              subscriber.next(array[i]);
          }
          subscriber.complete();
      };
  };
  //# sourceMappingURL=subscribeToArray.js.map

  /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
  var Action = /*@__PURE__*/ (function (_super) {
      __extends(Action, _super);
      function Action(scheduler, work) {
          return _super.call(this) || this;
      }
      Action.prototype.schedule = function (state, delay) {
          return this;
      };
      return Action;
  }(Subscription));
  //# sourceMappingURL=Action.js.map

  /** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
  var AsyncAction = /*@__PURE__*/ (function (_super) {
      __extends(AsyncAction, _super);
      function AsyncAction(scheduler, work) {
          var _this = _super.call(this, scheduler, work) || this;
          _this.scheduler = scheduler;
          _this.work = work;
          _this.pending = false;
          return _this;
      }
      AsyncAction.prototype.schedule = function (state, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if (this.closed) {
              return this;
          }
          this.state = state;
          var id = this.id;
          var scheduler = this.scheduler;
          if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
          }
          this.pending = true;
          this.delay = delay;
          this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
          return this;
      };
      AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          return setInterval(scheduler.flush.bind(scheduler, this), delay);
      };
      AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
          }
          clearInterval(id);
          return undefined;
      };
      AsyncAction.prototype.execute = function (state, delay) {
          if (this.closed) {
              return new Error('executing a cancelled action');
          }
          this.pending = false;
          var error = this._execute(state, delay);
          if (error) {
              return error;
          }
          else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
          }
      };
      AsyncAction.prototype._execute = function (state, delay) {
          var errored = false;
          var errorValue = undefined;
          try {
              this.work(state);
          }
          catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
          }
          if (errored) {
              this.unsubscribe();
              return errorValue;
          }
      };
      AsyncAction.prototype._unsubscribe = function () {
          var id = this.id;
          var scheduler = this.scheduler;
          var actions = scheduler.actions;
          var index = actions.indexOf(this);
          this.work = null;
          this.state = null;
          this.pending = false;
          this.scheduler = null;
          if (index !== -1) {
              actions.splice(index, 1);
          }
          if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
          }
          this.delay = null;
      };
      return AsyncAction;
  }(Action));
  //# sourceMappingURL=AsyncAction.js.map

  var Scheduler = /*@__PURE__*/ (function () {
      function Scheduler(SchedulerAction, now) {
          if (now === void 0) {
              now = Scheduler.now;
          }
          this.SchedulerAction = SchedulerAction;
          this.now = now;
      }
      Scheduler.prototype.schedule = function (work, delay, state) {
          if (delay === void 0) {
              delay = 0;
          }
          return new this.SchedulerAction(this, work).schedule(state, delay);
      };
      Scheduler.now = function () { return Date.now(); };
      return Scheduler;
  }());
  //# sourceMappingURL=Scheduler.js.map

  /** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
  var AsyncScheduler = /*@__PURE__*/ (function (_super) {
      __extends(AsyncScheduler, _super);
      function AsyncScheduler(SchedulerAction, now) {
          if (now === void 0) {
              now = Scheduler.now;
          }
          var _this = _super.call(this, SchedulerAction, function () {
              if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                  return AsyncScheduler.delegate.now();
              }
              else {
                  return now();
              }
          }) || this;
          _this.actions = [];
          _this.active = false;
          _this.scheduled = undefined;
          return _this;
      }
      AsyncScheduler.prototype.schedule = function (work, delay, state) {
          if (delay === void 0) {
              delay = 0;
          }
          if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
              return AsyncScheduler.delegate.schedule(work, delay, state);
          }
          else {
              return _super.prototype.schedule.call(this, work, delay, state);
          }
      };
      AsyncScheduler.prototype.flush = function (action) {
          var actions = this.actions;
          if (this.active) {
              actions.push(action);
              return;
          }
          var error;
          this.active = true;
          do {
              if (error = action.execute(action.state, action.delay)) {
                  break;
              }
          } while (action = actions.shift());
          this.active = false;
          if (error) {
              while (action = actions.shift()) {
                  action.unsubscribe();
              }
              throw error;
          }
      };
      return AsyncScheduler;
  }(Scheduler));
  //# sourceMappingURL=AsyncScheduler.js.map

  /** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
  var async = /*@__PURE__*/ new AsyncScheduler(AsyncAction);
  //# sourceMappingURL=async.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isScheduler(value) {
      return value && typeof value.schedule === 'function';
  }
  //# sourceMappingURL=isScheduler.js.map

  /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
  function scheduleArray(input, scheduler) {
      return new Observable(function (subscriber) {
          var sub = new Subscription();
          var i = 0;
          sub.add(scheduler.schedule(function () {
              if (i === input.length) {
                  subscriber.complete();
                  return;
              }
              subscriber.next(input[i++]);
              if (!subscriber.closed) {
                  sub.add(this.schedule());
              }
          }));
          return sub;
      });
  }
  //# sourceMappingURL=scheduleArray.js.map

  /** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
  function fromArray(input, scheduler) {
      if (!scheduler) {
          return new Observable(subscribeToArray(input));
      }
      else {
          return scheduleArray(input, scheduler);
      }
  }
  //# sourceMappingURL=fromArray.js.map

  /** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
  function of() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
      }
      var scheduler = args[args.length - 1];
      if (isScheduler(scheduler)) {
          args.pop();
          return scheduleArray(args, scheduler);
      }
      else {
          return fromArray(args);
      }
  }
  //# sourceMappingURL=of.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isDate(value) {
      return value instanceof Date && !isNaN(+value);
  }
  //# sourceMappingURL=isDate.js.map

  /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
  var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
  function empty$1(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : EMPTY;
  }
  function emptyScheduled(scheduler) {
      return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
  }
  //# sourceMappingURL=empty.js.map

  /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
  function throwError(error, scheduler) {
      if (!scheduler) {
          return new Observable(function (subscriber) { return subscriber.error(error); });
      }
      else {
          return new Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
      }
  }
  function dispatch(_a) {
      var error = _a.error, subscriber = _a.subscriber;
      subscriber.error(error);
  }
  //# sourceMappingURL=throwError.js.map

  /** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
  var Notification = /*@__PURE__*/ (function () {
      function Notification(kind, value, error) {
          this.kind = kind;
          this.value = value;
          this.error = error;
          this.hasValue = kind === 'N';
      }
      Notification.prototype.observe = function (observer) {
          switch (this.kind) {
              case 'N':
                  return observer.next && observer.next(this.value);
              case 'E':
                  return observer.error && observer.error(this.error);
              case 'C':
                  return observer.complete && observer.complete();
          }
      };
      Notification.prototype.do = function (next, error, complete) {
          var kind = this.kind;
          switch (kind) {
              case 'N':
                  return next && next(this.value);
              case 'E':
                  return error && error(this.error);
              case 'C':
                  return complete && complete();
          }
      };
      Notification.prototype.accept = function (nextOrObserver, error, complete) {
          if (nextOrObserver && typeof nextOrObserver.next === 'function') {
              return this.observe(nextOrObserver);
          }
          else {
              return this.do(nextOrObserver, error, complete);
          }
      };
      Notification.prototype.toObservable = function () {
          var kind = this.kind;
          switch (kind) {
              case 'N':
                  return of(this.value);
              case 'E':
                  return throwError(this.error);
              case 'C':
                  return empty$1();
          }
          throw new Error('unexpected notification kind value');
      };
      Notification.createNext = function (value) {
          if (typeof value !== 'undefined') {
              return new Notification('N', value);
          }
          return Notification.undefinedValueNotification;
      };
      Notification.createError = function (err) {
          return new Notification('E', undefined, err);
      };
      Notification.createComplete = function () {
          return Notification.completeNotification;
      };
      Notification.completeNotification = new Notification('C');
      Notification.undefinedValueNotification = new Notification('N', undefined);
      return Notification;
  }());
  //# sourceMappingURL=Notification.js.map

  /** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_Subscriber,_Notification PURE_IMPORTS_END */
  function delay(delay, scheduler) {
      if (scheduler === void 0) {
          scheduler = async;
      }
      var absoluteDelay = isDate(delay);
      var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
      return function (source) { return source.lift(new DelayOperator(delayFor, scheduler)); };
  }
  var DelayOperator = /*@__PURE__*/ (function () {
      function DelayOperator(delay, scheduler) {
          this.delay = delay;
          this.scheduler = scheduler;
      }
      DelayOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
      };
      return DelayOperator;
  }());
  var DelaySubscriber = /*@__PURE__*/ (function (_super) {
      __extends(DelaySubscriber, _super);
      function DelaySubscriber(destination, delay, scheduler) {
          var _this = _super.call(this, destination) || this;
          _this.delay = delay;
          _this.scheduler = scheduler;
          _this.queue = [];
          _this.active = false;
          _this.errored = false;
          return _this;
      }
      DelaySubscriber.dispatch = function (state) {
          var source = state.source;
          var queue = source.queue;
          var scheduler = state.scheduler;
          var destination = state.destination;
          while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
              queue.shift().notification.observe(destination);
          }
          if (queue.length > 0) {
              var delay_1 = Math.max(0, queue[0].time - scheduler.now());
              this.schedule(state, delay_1);
          }
          else {
              this.unsubscribe();
              source.active = false;
          }
      };
      DelaySubscriber.prototype._schedule = function (scheduler) {
          this.active = true;
          var destination = this.destination;
          destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
              source: this, destination: this.destination, scheduler: scheduler
          }));
      };
      DelaySubscriber.prototype.scheduleNotification = function (notification) {
          if (this.errored === true) {
              return;
          }
          var scheduler = this.scheduler;
          var message = new DelayMessage(scheduler.now() + this.delay, notification);
          this.queue.push(message);
          if (this.active === false) {
              this._schedule(scheduler);
          }
      };
      DelaySubscriber.prototype._next = function (value) {
          this.scheduleNotification(Notification.createNext(value));
      };
      DelaySubscriber.prototype._error = function (err) {
          this.errored = true;
          this.queue = [];
          this.destination.error(err);
          this.unsubscribe();
      };
      DelaySubscriber.prototype._complete = function () {
          this.scheduleNotification(Notification.createComplete());
          this.unsubscribe();
      };
      return DelaySubscriber;
  }(Subscriber));
  var DelayMessage = /*@__PURE__*/ (function () {
      function DelayMessage(time, notification) {
          this.time = time;
          this.notification = notification;
      }
      return DelayMessage;
  }());
  //# sourceMappingURL=delay.js.map

  var Engine =
  /*#__PURE__*/
  function () {
    //#region Singleton
    function Engine() {
      _classCallCheck(this, Engine);
    }

    _createClass(Engine, [{
      key: "init",
      value: function init(appid) {
        this._appid = appid;
      }
    }, {
      key: "showAppid",
      value: function showAppid() {
        console.log('appid=' + this._appid);
      }
    }, {
      key: "getAjaxTest",
      value: function getAjaxTest() {
        //var aWindow: Window = window.open("http://localhost:3000", "Window", "");
        // var mywin: Window = window.open("about:blank", "redirect");
        // someCallback("http://localhost:3000");
        //crud
        var url = "http://localhost:3000/posts";
        var rxajax = new RxjsWrapper();
        rxajax.get(url).subscribe(function (data) {
          console.log("test get");
          console.log(data);
        }); //c 創建
        // let body = { title: 'My test2', author: '10codeing2' };
        // rxajax.post(url, body).subscribe(
        //     data => {
        //         console.log("test post");
        //         console.log(data);
        //     }
        // );
        // u put
        // let body = { title: 'My testm22', author: '10codeingm2' };
        // rxajax.put('http://localhost:3000/posts/2', body).subscribe(
        //     response => {
        //         console.log(response);
        //     },
        //     err => {
        //         console.error(err);
        //     }
        // );
        //u patch 可更新部份
        // let mbody = { title: 'My testpatch' };
        // rxajax.patch('http://localhost:3000/posts/3', mbody).subscribe(
        //     response => {
        //         console.log(response);
        //     },
        //     err => {
        //         console.error(err);
        //     }
        // );
        //delete
        // rxajax.delete('http://localhost:3000/posts/6').subscribe(
        //     response => {
        //         console.log(response);
        //     },
        //     err => {
        //         console.error(err);
        //     }
        // );
        //

        var getall$ = rxajax.get(url);
        getall$.pipe(delay(5000)).subscribe(function (data) {
          console.log("test get");
          console.log(data);
        });
      }
    }], [{
      key: "getInstance",
      value: function getInstance() {
        if (this._instance == null) {
          this._instance = new Engine();
        }

        return this._instance;
      } //#endregion Singleton

    }]);

    return Engine;
  }();

  _defineProperty(Engine, "_instance", null);

  var RxjsWrapper =
  /*#__PURE__*/
  function () {
    function RxjsWrapper() {
      _classCallCheck(this, RxjsWrapper);
    }

    _createClass(RxjsWrapper, [{
      key: "get",
      value: function get(url) {
        return ajax.getJSON(url); // const subscribe = users.subscribe(
        //     res => console.log(res),
        //     err => console.error(err)
        // );
      }
    }, {
      key: "post",
      value: function post(url, body, headers) {
        return ajax.post(url, body, headers);
      }
    }, {
      key: "put",
      value: function put(url, body, headers) {
        return ajax.put(url, body, headers);
      }
    }, {
      key: "patch",
      value: function patch(url, body, headers) {
        return ajax.patch(url, body, headers);
      }
    }, {
      key: "delete",
      value: function _delete(url, headers) {
        return ajax["delete"](url, headers);
      }
    }]);

    return RxjsWrapper;
  }();

  return Engine;

})));
//# sourceMappingURL=index.js.map
