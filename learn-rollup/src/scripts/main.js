// Import styles (automatically injected into <head>).
//import '../styles/main.css';

// Import a couple modules for testing.
import util from './modules/util';
import {
    apiPostsGet,
    apiPostPost,
    apiPostGet
} from './modules/apiPublic';
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

        //#region 取得所有的使用者

        //----------取得所有的使用者
        // apiUsersGet()
        //     .then((res) => { console.log(res.data) })
        //     .catch((error) => { console.error(error) })
        //     .finally(() => { /* 不論失敗成功皆會執行 */ });
        // //-------------使用token來取得所有的使用者
        // apiUsersGet({
        //     headers: {
        //         Authorization: 'Bearer ' + this.appid //the token is a variable which holds the token
        //     }
        // })
        //     .then((res) => { console.log(res.data) })
        //     .catch((error) => { console.error(error) })
        //     .finally(() => { /* 不論失敗成功皆會執行 */ });

        apiPostsGet()
            .then((res) => { console.log(res.data) })
            .catch((error) => { console.error(error) })
            .finally(() => { /* 不論失敗成功皆會執行 */ });

        //end #region 取得所有的使用者
        apiPostPost({

            title: 'foo',
            body: 'bar',
            userId: 1

        })
            .then((res) => { console.log(res.data) })
            .catch((error) => { console.error(error) })
            .finally(() => { /* 不論失敗成功皆會執行 */ });

        apiPostGet({
            params: {
                userId: 1
            }
        })
            .then((res) => { console.log(res.data) })
            .catch((error) => { console.error(error) })
            .finally(() => { /* 不論失敗成功皆會執行 */ });

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
