var monitor=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}
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
  ***************************************************************************** */var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var s="undefined"!=typeof window&&window,u="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,c="undefined"!=typeof global&&global,a=s||c||u;function h(e){return"function"==typeof e}var p=!1,l={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){e&&(new Error).stack;p=e},get useDeprecatedSynchronousErrorHandling(){return p}};function f(e){setTimeout((function(){throw e}),0)}var d={closed:!0,next:function(e){},error:function(e){if(l.useDeprecatedSynchronousErrorHandling)throw e;f(e)},complete:function(){}},b=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}();var y=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),v=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._unsubscribe=e)}return e.prototype.unsubscribe=function(){var t;if(!this.closed){var r,n=this._parentOrParents,i=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(var s=0;s<n.length;++s){n[s].remove(this)}if(h(i))try{i.call(this)}catch(e){t=e instanceof y?w(e.errors):[e]}if(b(o)){s=-1;for(var u=o.length;++s<u;){var c=o[s];if(null!==(r=c)&&"object"==typeof r)try{c.unsubscribe()}catch(e){t=t||[],e instanceof y?t=t.concat(w(e.errors)):t.push(e)}}}if(t)throw new y(t)}},e.prototype.add=function(t){var r=t;if(!t)return e.EMPTY;switch(typeof t){case"function":r=new e(t);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof e)){var n=r;(r=new e)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var i=r._parentOrParents;if(null===i)r._parentOrParents=this;else if(i instanceof e){if(i===this)return r;r._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return r;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[r]:o.push(r),r},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var r=t.indexOf(e);-1!==r&&t.splice(r,1)}},e.EMPTY=function(e){return e.closed=!0,e}(new e),e}();function w(e){return e.reduce((function(e,t){return e.concat(t instanceof y?t.errors:t)}),[])}var _=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),g=function(e){function t(r,n,i){var o=e.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=d;break;case 1:if(!r){o.destination=d;break}if("object"==typeof r){r instanceof t?(o.syncErrorThrowable=r.syncErrorThrowable,o.destination=r,r.add(o)):(o.syncErrorThrowable=!0,o.destination=new m(o,r));break}default:o.syncErrorThrowable=!0,o.destination=new m(o,r,n,i)}return o}return o(t,e),t.prototype[_]=function(){return this},t.create=function(e,r,n){var i=new t(e,r,n);return i.syncErrorThrowable=!1,i},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(v),m=function(e){function t(t,r,n,i){var o,s=e.call(this)||this;s._parentSubscriber=t;var u=s;return h(r)?o=r:r&&(o=r.next,n=r.error,i=r.complete,r!==d&&(h((u=Object.create(r)).unsubscribe)&&s.add(u.unsubscribe.bind(u)),u.unsubscribe=s.unsubscribe.bind(s))),s._context=u,s._next=o,s._error=n,s._complete=i,s}return o(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;l.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,r=l.useDeprecatedSynchronousErrorHandling;if(this._error)r&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)r?(t.syncErrorValue=e,t.syncErrorThrown=!0):f(e),this.unsubscribe();else{if(this.unsubscribe(),r)throw e;f(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var r=function(){return e._complete.call(e._context)};l.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),l.useDeprecatedSynchronousErrorHandling)throw e;f(e)}},t.prototype.__tryOrSetError=function(e,t,r){if(!l.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,r)}catch(t){return l.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(f(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(g);var E=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function S(){}function x(e){return e?1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}:S}var T=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var n=this.operator,i=function(e,t,r){if(e){if(e instanceof g)return e;if(e[_])return e[_]()}return e||t||r?new g(e,t,r):new g(d)}(e,t,r);if(n?i.add(n.call(i,this.source)):i.add(this.source||l.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),l.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){l.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),!function(e){for(;e;){var t=e,r=t.closed,n=t.destination,i=t.isStopped;if(r||i)return!1;e=n&&n instanceof g?n:null}return!0}(e)?console.warn(t):e.error(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=O(t))((function(t,n){var i;i=r.subscribe((function(t){try{e(t)}catch(e){n(e),i&&i.unsubscribe()}}),n,t)}))},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[E]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:x(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=O(e))((function(e,r){var n;t.subscribe((function(e){return n=e}),(function(e){return r(e)}),(function(){return e(n)}))}))},e.create=function(t){return new e(t)},e}();function O(e){if(e||(e=Promise),!e)throw new Error("no Promise impl found");return e}function q(e,t){return function(r){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new H(e,t))}}var H=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new j(e,this.project,this.thisArg))},e}(),j=function(e){function t(t,r,n){var i=e.call(this,t)||this;return i.project=r,i.count=0,i.thisArg=n||i,i}return o(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(g);function k(e,t){return void 0===t&&(t=null),new M({method:"GET",url:e,headers:t})}function P(e,t,r){return new M({method:"POST",url:e,body:t,headers:r})}function D(e,t){return new M({method:"DELETE",url:e,headers:t})}function A(e,t,r){return new M({method:"PUT",url:e,body:t,headers:r})}function N(e,t,r){return new M({method:"PATCH",url:e,body:t,headers:r})}var C=q((function(e,t){return e.response}));function X(e,t){return C(new M({method:"GET",url:e,responseType:"json",headers:t}))}var M=function(e){function t(t){var r=e.call(this)||this,n={async:!0,createXHR:function(){return this.crossDomain?function(){if(a.XMLHttpRequest)return new a.XMLHttpRequest;if(a.XDomainRequest)return new a.XDomainRequest;throw new Error("CORS is not supported by your browser")}():function(){if(a.XMLHttpRequest)return new a.XMLHttpRequest;var e=void 0;try{for(var t=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],r=0;r<3;r++)try{if(e=t[r],new a.ActiveXObject(e))break}catch(e){}return new a.ActiveXObject(e)}catch(e){throw new Error("XMLHttpRequest is not supported by your browser")}}()},crossDomain:!0,withCredentials:!1,headers:{},method:"GET",responseType:"json",timeout:0};if("string"==typeof t)n.url=t;else for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);return r.request=n,r}var r;return o(t,e),t.prototype._subscribe=function(e){return new R(e,this.request)},t.create=((r=function(e){return new t(e)}).get=k,r.post=P,r.delete=D,r.put=A,r.patch=N,r.getJSON=X,r),t}(T),R=function(e){function t(t,r){var n=e.call(this,t)||this;n.request=r,n.done=!1;var i=r.headers=r.headers||{};return r.crossDomain||n.getHeader(i,"X-Requested-With")||(i["X-Requested-With"]="XMLHttpRequest"),n.getHeader(i,"Content-Type")||a.FormData&&r.body instanceof a.FormData||void 0===r.body||(i["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"),r.body=n.serializeBody(r.body,n.getHeader(r.headers,"Content-Type")),n.send(),n}return o(t,e),t.prototype.next=function(e){this.done=!0;var t,r=this.xhr,n=this.request,i=this.destination;try{t=new L(e,r,n)}catch(e){return i.error(e)}i.next(t)},t.prototype.send=function(){var e=this.request,t=this.request,r=t.user,n=t.method,i=t.url,o=t.async,s=t.password,u=t.headers,c=t.body;try{var a=this.xhr=e.createXHR();this.setupEvents(a,e),r?a.open(n,i,o,r,s):a.open(n,i,o),o&&(a.timeout=e.timeout,a.responseType=e.responseType),"withCredentials"in a&&(a.withCredentials=!!e.withCredentials),this.setHeaders(a,u),c?a.send(c):a.send()}catch(e){this.error(e)}},t.prototype.serializeBody=function(e,t){if(!e||"string"==typeof e)return e;if(a.FormData&&e instanceof a.FormData)return e;if(t){var r=t.indexOf(";");-1!==r&&(t=t.substring(0,r))}switch(t){case"application/x-www-form-urlencoded":return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&");case"application/json":return JSON.stringify(e);default:return e}},t.prototype.setHeaders=function(e,t){for(var r in t)t.hasOwnProperty(r)&&e.setRequestHeader(r,t[r])},t.prototype.getHeader=function(e,t){for(var r in e)if(r.toLowerCase()===t.toLowerCase())return e[r]},t.prototype.setupEvents=function(e,t){var r=t.progressSubscriber;function n(e){var t,r=n,i=r.subscriber,o=r.progressSubscriber,s=r.request;o&&o.error(e);try{t=new V(this,s)}catch(e){t=e}i.error(t)}if(e.ontimeout=n,n.request=t,n.subscriber=this,n.progressSubscriber=r,e.upload&&"withCredentials"in e){var i,o;if(r)i=function(e){i.progressSubscriber.next(e)},a.XDomainRequest?e.onprogress=i:e.upload.onprogress=i,i.progressSubscriber=r;o=function(e){var t,r=o,n=r.progressSubscriber,i=r.subscriber,s=r.request;n&&n.error(e);try{t=new I("ajax error",this,s)}catch(e){t=e}i.error(t)},e.onerror=o,o.request=t,o.subscriber=this,o.progressSubscriber=r}function s(e){}function u(e){var t=u,r=t.subscriber,n=t.progressSubscriber,i=t.request;if(4===this.readyState){var o=1223===this.status?204:this.status,s="text"===this.responseType?this.response||this.responseText:this.response;if(0===o&&(o=s?200:0),o<400)n&&n.complete(),r.next(e),r.complete();else{n&&n.error(e);var c=void 0;try{c=new I("ajax error "+o,this,i)}catch(e){c=e}r.error(c)}}}e.onreadystatechange=s,s.subscriber=this,s.progressSubscriber=r,s.request=t,e.onload=u,u.subscriber=this,u.progressSubscriber=r,u.request=t},t.prototype.unsubscribe=function(){var t=this.done,r=this.xhr;!t&&r&&4!==r.readyState&&"function"==typeof r.abort&&r.abort(),e.prototype.unsubscribe.call(this)},t}(g),L=function(){return function(e,t,r){this.originalEvent=e,this.xhr=t,this.request=r,this.status=t.status,this.responseType=t.responseType||r.responseType,this.response=U(this.responseType,t)}}(),I=function(){function e(e,t,r){return Error.call(this),this.message=e,this.name="AjaxError",this.xhr=t,this.request=r,this.status=t.status,this.responseType=t.responseType||r.responseType,this.response=U(this.responseType,t),this}return e.prototype=Object.create(Error.prototype),e}();function U(e,t){switch(e){case"json":return function(e){return"response"in e?e.responseType?e.response:JSON.parse(e.response||e.responseText||"null"):JSON.parse(e.responseText||"null")}(t);case"xml":return t.responseXML;case"text":default:return"response"in t?t.response:t.responseText}}var V=function(e,t){return I.call(this,"ajax timeout",e,t),this.name="AjaxTimeoutError",this},F=function(){return M.create}(),G=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.scheduler=t,n.work=r,n.pending=!1,n}return o(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(n,this.id,t),this},t.prototype.requestAsyncId=function(e,t,r){return void 0===r&&(r=0),setInterval(e.flush.bind(e,this),r)},t.prototype.recycleAsyncId=function(e,t,r){if(void 0===r&&(r=0),null!==r&&this.delay===r&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(e,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var r=!1,n=void 0;try{this.work(e)}catch(e){r=!0,n=!!e&&e||new Error(e)}if(r)return this.unsubscribe(),n},t.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,r=t.actions,n=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&r.splice(n,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},t}(function(e){function t(t,r){return e.call(this)||this}return o(t,e),t.prototype.schedule=function(e,t){return this},t}(v)),J=function(){function e(t,r){void 0===r&&(r=e.now),this.SchedulerAction=t,this.now=r}return e.prototype.schedule=function(e,t,r){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(r,t)},e.now=function(){return Date.now()},e}(),W=new(function(e){function t(r,n){void 0===n&&(n=J.now);var i=e.call(this,r,(function(){return t.delegate&&t.delegate!==i?t.delegate.now():n()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return o(t,e),t.prototype.schedule=function(r,n,i){return void 0===n&&(n=0),t.delegate&&t.delegate!==this?t.delegate.schedule(r,n,i):e.prototype.schedule.call(this,r,n,i)},t.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var r;this.active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}},t}(J))(G);function z(e){return e&&"function"==typeof e.schedule}function B(e,t){return new T((function(r){var n=new v,i=0;return n.add(t.schedule((function(){i!==e.length?(r.next(e[i++]),r.closed||n.add(this.schedule())):r.complete()}))),n}))}function Y(e,t){return t?B(e,t):new T((r=e,function(e){for(var t=0,n=r.length;t<n&&!e.closed;t++)e.next(r[t]);e.complete()}));var r}var K=new T((function(e){return e.complete()}));function Q(e){return e?function(e){return new T((function(t){return e.schedule((function(){return t.complete()}))}))}(e):K}function Z(e){var t=e.error;e.subscriber.error(t)}var $=function(){function e(e,t,r){this.kind=e,this.value=t,this.error=r,this.hasValue="N"===e}return e.prototype.observe=function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}},e.prototype.do=function(e,t,r){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return r&&r()}},e.prototype.accept=function(e,t,r){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,r)},e.prototype.toObservable=function(){var e,t;switch(this.kind){case"N":return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=e[e.length-1];return z(r)?(e.pop(),B(e,r)):Y(e)}(this.value);case"E":return e=this.error,new T(t?function(r){return t.schedule(Z,0,{error:e,subscriber:r})}:function(t){return t.error(e)});case"C":return Q()}throw new Error("unexpected notification kind value")},e.createNext=function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification},e.createError=function(t){return new e("E",void 0,t)},e.createComplete=function(){return e.completeNotification},e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e}();function ee(e,t){void 0===t&&(t=W);var r,n=(r=e)instanceof Date&&!isNaN(+r)?+e-t.now():Math.abs(e);return function(e){return e.lift(new te(n,t))}}var te=function(){function e(e,t){this.delay=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new re(e,this.delay,this.scheduler))},e}(),re=function(e){function t(t,r,n){var i=e.call(this,t)||this;return i.delay=r,i.scheduler=n,i.queue=[],i.active=!1,i.errored=!1,i}return o(t,e),t.dispatch=function(e){for(var t=e.source,r=t.queue,n=e.scheduler,i=e.destination;r.length>0&&r[0].time-n.now()<=0;)r.shift().notification.observe(i);if(r.length>0){var o=Math.max(0,r[0].time-n.now());this.schedule(e,o)}else this.unsubscribe(),t.active=!1},t.prototype._schedule=function(e){this.active=!0,this.destination.add(e.schedule(t.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))},t.prototype.scheduleNotification=function(e){if(!0!==this.errored){var t=this.scheduler,r=new ne(t.now()+this.delay,e);this.queue.push(r),!1===this.active&&this._schedule(t)}},t.prototype._next=function(e){this.scheduleNotification($.createNext(e))},t.prototype._error=function(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.scheduleNotification($.createComplete()),this.unsubscribe()},t}(g),ne=function(){return function(e,t){this.time=e,this.notification=t}}(),ie=function(){function t(){e(this,t),n(this,"_appid",void 0)}return r(t,[{key:"init",value:function(e){this._appid=e}},{key:"showAppid",value:function(){console.log("appid="+this._appid)}},{key:"getAjaxTest",value:function(){var e="http://localhost:3000/posts",t=new oe;t.get(e).subscribe((function(e){console.log("test get"),console.log(e)})),t.get(e).pipe(ee(5e3)).subscribe((function(e){console.log("test get"),console.log(e)}))}}],[{key:"getInstance",value:function(){return null==this._instance&&(this._instance=new t),this._instance}}]),t}();n(ie,"_instance",null);var oe=function(){function t(){e(this,t)}return r(t,[{key:"get",value:function(e){return F.getJSON(e)}},{key:"post",value:function(e,t,r){return F.post(e,t,r)}},{key:"put",value:function(e,t,r){return F.put(e,t,r)}},{key:"patch",value:function(e,t,r){return F.patch(e,t,r)}},{key:"delete",value:function(e,t){return F.delete(e,t)}}]),t}();return ie}();
