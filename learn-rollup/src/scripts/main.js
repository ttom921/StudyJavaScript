// Import styles (automatically injected into <head>).
//import '../styles/main.css';

// Import a couple modules for testing.
import util from './modules/util';
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
