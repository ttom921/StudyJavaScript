### 前言

這是一個公用模塊的demo,基本上是因為表單的驗證是通用的所以建立此模組來使用一個模組來組成，`formCheck.js`的文件

先在`src\js`下加入`common`的資料夾，在下面加人`fromCheck.js`的文件

```
├─js
│  │  index.js
│  │
│  ├─common
│  │      formCheck.js
```

在`event.js`的需要來呼叫`formCheck`來處理表單事件內容如下

```js
import formCheck from "../common/formCheck";

export default () => {
    const btn = document.getElementById("submit");
    const input = document.getElementById("input");
    const check = formCheck(document.getElementById("form"));
    btn.onclick = () => {
        check();
        alert('btn 登入')
    }
    input.oninput = () => {
        check();
    }
}
```

在`formCheck.js`的內容如下

```js
export default (form) => {
    return () => {
        alert(form.id);
        return [];
    }
}
```







