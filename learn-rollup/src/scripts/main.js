// Import styles (automatically injected into <head>).
//import '../styles/main.css';

// Import a couple modules for testing.
import util from './modules/util';
import { apiUsersGet } from './modules/apiPublic';
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

        //----------取得所有的使用者
        apiUsersGet()
            .then((res) => { console.log(res.data) })
            .catch((error) => { console.error(error) })
            .finally(() => { /* 不論失敗成功皆會執行 */ });
        //-------------使用token來取得所有的使用者
        apiUsersGet({
            headers: {
                Authorization: 'Bearer ' + this.appid //the token is a variable which holds the token
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
