// Import styles (automatically injected into <head>).
//import '../styles/main.css';

// Import a couple modules for testing.
import util from './modules/util';
// import {
//     apiPostsGet,
//     apiPostPost,
//     apiPostGet
// } from './modules/apiPublic';
import {
    //apiPostPost,
    //apiPostGet,
    //apiPostPut,
    //apiPostPatch,
    //apiPostDelete

} from './modules/apiJServer';

import Rxios from './modules/Rxios';
class Engine {
    constructor() {
        this.id = util.generatedId();
    }
    init(appid) {
        if (!appid) {
            console.log("error no appid");
            return;
        }
        this.appid = appid;
        console.log('引擎開始起動了…')
    }
    showAppid() {
        console.log('appid=' + this.appid);
    }
    GetUsers() {

        //#region Post CRUD
        // apiPostPost({
        //     "title": "My test",
        //     "author": "10codeing"
        // })
        //     .then((res) => { console.log(res.data) })
        //     .catch((error) => { console.error(error) })
        //     .finally(() => { /* 不論失敗成功皆會執行 */ });
        //取得所有
        // apiPostGet()
        //     .then((res) => { console.log(res.data) })
        //     .catch((error) => { console.error(error) })
        //     .finally(() => { /* 不論失敗成功皆會執行 */ });
        //取得特定
        // apiPostGet({
        //     params: {
        //         id: 2
        //     }
        // })
        //     .then((res) => { console.log(res.data) })
        //     .catch((error) => { console.error(error) })
        //     .finally(() => { /* 不論失敗成功皆會執行 */ });
        //put
        // apiPostPut({
        //     id: '2',
        //     title: 'My test2',
        //     author: '10codeing2'
        // })
        //     .then((res) => { console.log(res.data) })
        //     .catch((error) => { console.error(error) })
        //     .finally(() => { /* 不論失敗成功皆會執行 */ });
        //patch
        // apiPostPatch({
        //     id: '3',
        //     title: 'My test3patch',
        // })
        //     .then((res) => { console.log(res.data) })
        //     .catch((error) => { console.error(error) })
        //     .finally(() => { /* 不論失敗成功皆會執行 */ });
        // apiPostDelete({
        //     id: 2
        // })
        //     .then((res) => { console.log(res.data) })
        //     .catch((error) => { console.error(error) })
        //     .finally(() => { /* 不論失敗成功皆會執行 */ });
        // //end #region 取得所有的使用者

        //-----------------------
        // const http = new Rxios({
        //     baseURL: 'https://jsonplaceholder.typicode.com',
        // });
        // // plain GET request
        // http.get('/posts').subscribe(
        //     response => {
        //         console.log(response); // no need to 'response.data'
        //     },
        //     err => {
        //         console.error(err);
        //     }
        // );
        const http = new Rxios({
            baseURL: 'http://localhost:3000',
        });
        //create
        // http.post('/posts', {
        //     "title": "My test",
        //     "author": "10codeing"
        // }).subscribe(
        //     response => {
        //         console.log(response); // no need to 'response.data'
        //     },
        //     err => {
        //         console.error(err);
        //     }
        // );
        // R get
        http.get('/posts').subscribe(
            response => {
                console.log(response);
            },
            err => {
                console.error(err);
            }
        );
        //
        //取得特定
        http.get('/posts', { id: 2 }).subscribe(
            response => {
                console.log(response);
            },
            err => {
                console.error(err);
            }
        );
        // u put
        let body = { title: 'My test2', author: '10codeing2' };
        http.put('/posts/2', body).subscribe(
            response => {
                console.log(response);
            },
            err => {
                console.error(err);
            }
        );
        //u patch 可更新部份
        body = { title: 'My testpatch' };
        http.patch('/posts/3', body).subscribe(
            response => {
                console.log(response);
            },
            err => {
                console.error(err);
            }
        );
        //detel
        // http.delete('/posts/4').subscribe(
        //     response => {
        //         console.log(response);
        //     },
        //     err => {
        //         console.error(err);
        //     }
        // );

    }
}
//get Singleton
let getHSApi = (function () {
    let engine = null;
    return function () {
        if (!engine) {
            engine = new Engine();
        }
        return engine;
    }
})();
export default getHSApi;
