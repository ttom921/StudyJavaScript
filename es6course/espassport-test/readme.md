### 前言

```sh
hb create espassport
hb create espassport -w //add webpack.config.js local
```


```sh
cd espassport && npm install
```


```sh
hb dev -p 8080
```

使用瀏覽器可以到`html`可以看到`Hello World`

### 加入第三方庫

在此專案加入第三方庫是放在`vender.js`中，在此先放`jquery`

先安裝`jquery`的庫

```
npm i jquery --save-dev
```

在`webpack.dll.js`中加入`jquery`的宣告

```javascript
onst webpack = require('webpack');
const path = require('path');

const vendors = [
  'jquery'
];
//.............
```

原來的大小

```
   Asset     Size  Chunks             Chunk Names
index.js  6.11 kB       0  [emitted]  main
```

執行`npm run dll`將`jquey`打包進去，大小會增加

```
     Asset     Size  Chunks             Chunk Names
vendors.js  89.7 kB       0  [emitted]  vendor
```

在`src\lib\vendors.js`裏會看到`jquery`加入

現在來使用`jquey`來修改`index.js`刪除原來的內容加入

```javascript
import $ from 'jquery';
$(`body`).append('<h1>你好!!</h1>');
```
大小有增加
```
   Asset     Size  Chunks             Chunk Names
index.js  7.39 kB       0  [emitted]  main
```

