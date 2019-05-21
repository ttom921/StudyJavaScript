### 前言

這是這實戰項目的基本架構，所以重新來建立先`npm install`

### 安裝需要的包

因為在開發中需要用到的一些都會用到的程式庫，所以將它們打包在一起，修改`webpack.dll.js`的內容如下

```js
const webpack = require('webpack');
const path = require('path');

const vendors = [
  'es5-shim',
  'fetch-detector',
  'es6-promise/auto'
];
```

`es5-shim`需要在可轉成es5來執行
`fetch-detector` 需要抓`mock`的資料
`es6-promise/auto`因為會用到es6的特性

```sh
npm i es5-shim es6-promise fetch-detector -dd
```

-dd 會列出安裝的log

接下來執行

```sh
npm run dll
```

在`src\lib\vendors.js`中可以看到已打包好的庫

### 設定不同的包引人方式

在`webpack.config.js`中修改如下,在所有的環境都要設定

```js
var webpackConf = {
    dev: {
        output: {
            library: 'pass',
            libraryTarget: 'umd'
        },
 //‧‧‧‧
        
```

在**有加**此設定在`dev\js\index.js` 的開始

```js
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pass"] = factory();
	else
		root["pass"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
    //....
```

在**無加**此設定在`dev\js\index.js` 的開始

```js
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
    //...
```

### 加入處理css

在`html-bundler.config.js`中加入和各個開發模式加入`html: [{ func: fileInclude, opts: { prefix: '@@', basePath: '@file' } }]`

```js
var fileInclude = require('qulp-file-include')
//....
custom: {
        js: [],
        css: [],
        imgs: [],
        html: [{ func: fileInclude, opts: { prefix: '@@', basePath: '@file' } }]
    },//自定义任务
 ////       
```

### 基本語法

#### import&export

靜態化，必須在頂部，不能使用條件語句，自動采用嚴格模式

在`js`的資料夾加入'lesson'的資料夾在裏面加入`m1.js`,`m2.js`,`m3.js`,`main.js`

在`m1.js`,中

```js
export default () => {
    console.log("m1");
}
```
在`m2.js`,中

```js
export default () => {
    console.log("m2");
}
```
在`m3.js`,中

```js
export default () => {
    console.log("m3");
}
```
在`main.js`,中

```js
import a1 from "./m1";
import a2 from "./m2";
import a3 from "./m3";

a1();
a2();
a3();
//console.log("main");
```
外部可以拿到實尌值，而非緩存值(是引用而不是copy)


> 可以對`commonJS`模塊，重新賦值
對`ES6`模塊重新賦值編譯報錯

> 都可以對對象內部的值進行改變

> `commonS`是對模塊的拷貝
> `ES6`是對模塊的引用



#### const & let

- 塊級作用域
- 使用`let`和`const`不再有變量提升，不允許動複聲明
- 使幅上`const`優先

#### 箭頭函數

- this指向定義時所在對象
- 不可以作為構造函數(不能使用new)
- 沒有arguments對象Ｓ

