var monitor = (function (axios) {
  'use strict';

  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

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

  var Engine =
  /*#__PURE__*/
  function () {
    //#region Singleton
    function Engine() {
      _classCallCheck(this, Engine);

      _defineProperty(this, "_appid", "");
    }

    _createClass(Engine, [{
      key: "init",
      value: function init(appid) {
        //console.log('init');
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
        //     Authorization: "eyJhbGciOiJIUzUxMiIsImlhdCI6MTU4MDc5Njc0OCwiZXhwIjoxNTgwODAwMzQ4fQ.IntcInVzZXJfaWRcIjogMSwgXCJjb21wYW55X2lkXCI6IDEsIFwidXNlcl9yb2xlX2lkXCI6IDJ9Ig.KrJmeosU0n0uouLNlbzmxP_XPhr_G9UIzeUotp5SvcS7kTyD8N_keZ4s3Ve2VALeOyY6bBIUoz3xNUWfhEJfhw"
        // };
        // const requestSettings = {
        //     url: 'http://172.18.2.160：80/v0.4',
        //     crossDomain: true,
        //     body: {},
        //     responseType: 'json',
        // }
        // let source$ = ajax(requestSettings).subscribe(data => {
        //     console.log(data);
        // });
        // get
        // axios.get(url)
        //     .then((res) => {
        //         // Success
        //         //console.log(response.status);
        //         console.log(res.data);
        //     })
        //     .catch((error) => {
        //         // Error
        //         console.log(error);
        //         // Error 的詳細資訊
        //         console.log(error.response);
        //     })
        //     .finally(() => {
        //         console.log('always executed');
        //     });
        //c 創建
        // let body = { title: 'axiosMy test2', author: 'axios2' };
        // 資料由後方物件帶入
        // axios.post(url, body)
        //     .then((res) => { console.table(res.data) })
        //     .catch((error) => { console.error(error) });
        // u put
        // let body = { title: 'putaxiosMy testm22', author: 'axios2put' };
        // // 資料由後方物件帶入
        // axios.put('http://localhost:3000/posts/6', body)
        //     .then((res) => { console.table(res.data) })
        //     .catch((error) => { console.error(error) });
        //u patch 可更新部份
        // let mbody = { title: 'My axios testpatch' };
        // axios.patch('http://localhost:3000/posts/6', mbody)
        //     .then((res) => { console.table(res.data) })
        //     .catch((error) => { console.error(error) });
        //delete
        // axios.delete('http://localhost:3000/posts/6')
        //     .then((res) => { console.table(res.data) })
        //     .catch((error) => { console.error(error) });
        //

        var config = {
          method: 'get',
          // 大小寫皆可
          headers: {
            'Content-Type': 'application/json',
            Authorization: "eyJhbGciOiJIUzUxMiIsImlhdCI6MTU4MDc5Njc0OCwiZXhwIjoxNTgwODAwMzQ4fQ.IntcInVzZXJfaWRcIjogMSwgXCJjb21wYW55X2lkXCI6IDEsIFwidXNlcl9yb2xlX2lkXCI6IDJ9Ig.KrJmeosU0n0uouLNlbzmxP_XPhr_G9UIzeUotp5SvcS7kTyD8N_keZ4s3Ve2VALeOyY6bBIUoz3xNUWfhEJfhw"
          },
          // 添加在 url 前面，除非 url 為絕對路徑
          //baseURL: '',
          // 主要傳送的資料 (只用於 PUT、POST、PATCH )
          // 在沒有 transformRequest 情況下資料型別有限制 (下有補充)
          //data: { name: 'test', title: 777 },
          // params 注意此不等同於 data
          // 此為 URL 上要代的參數   ~url?ID=123
          //params: { ID: 123 }
          // // 序列化參數 ???
          // paramsSerializer: function (params) {
          //     return Qs.stringify(params, { arrayFormat: 'brackets' })
          // },
          //maxContentLength: 2000, // 限制傳送大小
          // 請求時間超過 1000毫秒(1秒)，請求會被中止
          timeout: 1000,
          // 選項: 'arraybuffer', 'document', 'json', 'text', 'stream'
          // 瀏覽器才有 'blob' ， 預設為 'json'
          responseType: 'json' // 伺服器回應的數據類型
          // 在上傳、下載途中可執行的事情 (progressBar、Loading)
          //onUploadProgress(progressEvt) { /* 原生 ProgressEvent */ },
          //onDownloadProgress(progressEvt) { /* 原生 ProgressEvent */ },
          // 允許自定義處理請求，可讓測試更容易 (有看沒懂..)
          // return promise 並提供有效的回應 (valid response)
          //adapter(config) { /* 下方章節 補充詳細用法 */ },

        };
        axios.get('http://localhost:5500/v0.4/servers', config).then(function (res) {
          // Success
          //console.log(response.status);
          console.log(res.data);
        })["catch"](function (error) {
          // Error
          console.log(error); // Error 的詳細資訊

          console.log(error.response);
        })["finally"](function () {
          console.log('always executed');
        }); // let asadata$ = rxajax.get("http://64.141.182.94:80/v0.4/servers", headers);
        // asadata$.subscribe(data => {
        //     console.log(data);
        // });
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

  _defineProperty(Engine, "_instance", void 0);

  return Engine;

}(axios));
