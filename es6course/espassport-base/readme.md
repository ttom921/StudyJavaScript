### 環境準備
- 使用html-bundler初始化項目

- 安裝必要的polyfill

- 加入gulp-file-include

這是為了讓此專案可以在`es5`的環境下可以執行，安裝需要的庫
```sh
npm instll es5-shim --save-dev
npm install babel-polyfill --save-dev
```

 在`webpack.dll.js`將上面剛加入的庫定義進來

```js
const webpack = require('webpack');
const path = require('path');

const vendors = [
  'es5-shim',
  'babel-polyfill'
];
```

因`webpakc.dll.js`有變動所以要執行一下

```sh
nmp run dll
```

### 加入html的模板

在通常的應用上，常常有Header和Footer件所以我們通常在`index.html`中會加入此`<div class="header">header</div>`和`<div class="footer">footer</div>`如下

```html
<body>
    <div class="header">header</div>
    <h1>Hello World!</h1>
    <div class="footer">footer</div>
    <script type="text/javascript" src="../lib/vendors.js"></script>
    <script type="text/javascript" src="../js/index.js"></script>
</body>
```

可是如果網站上有多處的頭尾文件，每一個都要改那很容易出錯，所以要加入模板引擎`gulp-file-include`的庫來處理

```sh
npm i gulp-file-include --save-dev
```

因為這個庫是有關`css`和`html`的後制處理所以要在`html-bunder.config.js`中加入

```js
ar fileInclude = require('gulp-file-include');
//var destMod = {
//    output: './dist/dest',
//....
```

因為這是客制化的服務所還要在`custom`中加入如下

```js
custom: {
        js: [],
        css: [],
        imgs: [],
        html: [{ func: fileInclude, opts: { prefix: '@@', basePath: '@fils' } }]//加入
    },//自定义任务
```

在`devMod`中也有`custom`一樣要加

```
custom: {
        js: [],
        css: [],
        imgs: [],
        html: [{ func: fileInclude, opts: { prefix: '@@', basePath: '@fils' } }]//加入
    },//自定义任务
```

然後在`src\html`的目錄下在建立`templates`的資料夾在它的下面建立兩個`html`檔`header.html`和`footer.html`

```
├─html
│  │  index.html
│  │
│  └─templates
│          footer.html
│          header.html
```

之後將修改`index.html`將`<div class="header">header</div>`和`<div class="footer">footer</div>`分別放到`header.htm`和`footer.html`中

在`index.html`的內容如下

```html
body>
    @@include('./templates/header.html',{})
    <h1>Hello World!</h1>
    @@include('./templates/footer.html',{})
    <script type="text/javascript" src="../lib/vendors.js"></script>
    <script type="text/javascript" src="../js/index.js"></script>
</body>
```

在`header.html`的內容如下

```html
<div class="header">header</div>
```

在`footer.html`的內容如下

```html
<div class="footer">footer</div>
```

這樣就可以使用模板

 


