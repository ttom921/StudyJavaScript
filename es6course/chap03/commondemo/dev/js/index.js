/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(2);


window.login = function (opts) {
    var container = opts.container;
    Object(__WEBPACK_IMPORTED_MODULE_0__render__["a" /* default */])(container);
    Object(__WEBPACK_IMPORTED_MODULE_1__event__["a" /* default */])();
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (container) {

    var tpl = "<form id=\"form\"> \n        <input id=\"input\" name=\"unmae\" type=\"text\">\n        <input name=\"passwrod\" type=\"password\">\n        <input id=\"submit\" value=\"\u767B\u4EBA\" type=\"submit\">\n        </form >";
    container.innerHTML = tpl;
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_formCheck__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (function () {
    var btn = document.getElementById("submit");
    var input = document.getElementById("input");
    var check = Object(__WEBPACK_IMPORTED_MODULE_0__common_formCheck__["a" /* default */])(document.getElementById("form"));
    btn.onclick = function () {
        check();
        alert('btn 登入');
    };
    input.oninput = function () {
        check();
    };
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (form) {
    return function () {
        alert(form.id);
        return [];
    };
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmVhZDc5MjU1MGE4OTQyNjQ3ZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9naW4vZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9mb3JtQ2hlY2suanMiXSwibmFtZXMiOlsid2luZG93IiwibG9naW4iLCJvcHRzIiwiY29udGFpbmVyIiwicmVuZGVyIiwiZXZlbnQiLCJ0cGwiLCJpbm5lckhUTUwiLCJidG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5wdXQiLCJjaGVjayIsImZvcm1DaGVjayIsIm9uY2xpY2siLCJhbGVydCIsIm9uaW5wdXQiLCJmb3JtIiwiaWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBQSxPQUFPQyxLQUFQLEdBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLFFBQU1DLFlBQVlELEtBQUtDLFNBQXZCO0FBQ0FDLG9FQUFNQSxDQUFDRCxTQUFQO0FBQ0FFLG1FQUFLQTtBQUNSLENBSkQsQzs7Ozs7OztBQ0ZlLG1FQUFDRixTQUFELEVBQWU7O0FBRTFCLFFBQU1HLG1PQUFOO0FBTUFILGNBQVVJLFNBQVYsR0FBc0JELEdBQXRCO0FBQ0gsQ0FURCxFOzs7Ozs7O0FDQUE7QUFBQTs7QUFFZSxxRUFBTTtBQUNqQixRQUFNRSxNQUFNQyxTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQVo7QUFDQSxRQUFNQyxRQUFRRixTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQSxRQUFNRSxRQUFRQywwRUFBU0EsQ0FBQ0osU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFWLENBQWQ7QUFDQUYsUUFBSU0sT0FBSixHQUFjLFlBQU07QUFDaEJGO0FBQ0FHLGNBQU0sUUFBTjtBQUNILEtBSEQ7QUFJQUosVUFBTUssT0FBTixHQUFnQixZQUFNO0FBQ2xCSjtBQUNILEtBRkQ7QUFHSCxDQVhELEU7Ozs7Ozs7QUNGZSxtRUFBQ0ssSUFBRCxFQUFVO0FBQ3JCLFdBQU8sWUFBTTtBQUNURixjQUFNRSxLQUFLQyxFQUFYO0FBQ0EsZUFBTyxFQUFQO0FBQ0gsS0FIRDtBQUlILENBTEQsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJlYWQ3OTI1NTBhODk0MjY0N2YwIiwiaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9yZW5kZXJcIjtcclxuaW1wb3J0IGV2ZW50IGZyb20gXCIuL2V2ZW50XCJcclxud2luZG93LmxvZ2luID0gKG9wdHMpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG9wdHMuY29udGFpbmVyO1xyXG4gICAgcmVuZGVyKGNvbnRhaW5lcik7XHJcbiAgICBldmVudCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvZ2luL2luaXQuanMiLCJleHBvcnQgZGVmYXVsdCAoY29udGFpbmVyKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdHBsID1cclxuICAgICAgICBgPGZvcm0gaWQ9XCJmb3JtXCI+IFxyXG4gICAgICAgIDxpbnB1dCBpZD1cImlucHV0XCIgbmFtZT1cInVubWFlXCIgdHlwZT1cInRleHRcIj5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInBhc3N3cm9kXCIgdHlwZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgPGlucHV0IGlkPVwic3VibWl0XCIgdmFsdWU9XCLnmbvkurpcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgPC9mb3JtID5gXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gdHBsO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvZ2luL3JlbmRlci5qcyIsImltcG9ydCBmb3JtQ2hlY2sgZnJvbSBcIi4uL2NvbW1vbi9mb3JtQ2hlY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpO1xyXG4gICAgY29uc3QgY2hlY2sgPSBmb3JtQ2hlY2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpKTtcclxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrKCk7XHJcbiAgICAgICAgYWxlcnQoJ2J0biDnmbvlhaUnKVxyXG4gICAgfVxyXG4gICAgaW5wdXQub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBjaGVjaygpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvZ2luL2V2ZW50LmpzIiwiZXhwb3J0IGRlZmF1bHQgKGZvcm0pID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoZm9ybS5pZCk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbW1vbi9mb3JtQ2hlY2suanMiXSwic291cmNlUm9vdCI6IiJ9