### 前言

這是一個登入模塊的demo,基本上是有三個模組來組成，`init.js`和`render.js`和`event.js`,先初始化模塊，接來的渲染，在綁定事件

先在`src\js`下加入`login`的資料夾，在下面加人``init.js`和`render.js`和`event.js`的文件

```
├─js
│  │  index.js
│  │
│  └─login
│          event.js
│          init.js
│          render.js
```

在`init.js`的需要來呼叫`render`和`event`的模塊來處理事件內容如下

```js
import render from "./render";
import event from "./event"
window.login = (opts) => {
    const container = opts.container;
    render(container);
    event();
}
```

在`render.js`的內容如下

```js
export default (container) => {

    const tpl =
        `<form> 
        <input name="unmae" type="text">
        <input name="passwrod" type="password">
        <input id="submit" value="登人" type="submit">
        </form >`
    container.innerHTML = tpl;
}
```

在`event.js`的內容如下

```js
export default () => {
    const btn = document.getElementById("submit");
    btn.onclick = () => {
        alert('btn 登入')
    }
}
```

最後要修改`index.html`的內容，加入一個`<div id="container"></div>`和`init.js`和呼叫它的主要內容如下

```html
<body>
    @@include('./templates/header.html',{})
    <h1>Hello World!</h1>
    <div id="container">

    </div>
    @@include('./templates/footer.html',{})
    <script type="text/javascript" src="../lib/vendors.js"></script>
    <script type="text/javascript" src="../js/login/init.js"></script>
    <script type="text/javascript">
        login({
            container: document.getElementById("container")
        });
    </script>
</body>
```







