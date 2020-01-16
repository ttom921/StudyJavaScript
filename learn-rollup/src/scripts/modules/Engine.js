import { util } from './util';
export class Engine {
    constructor(appid) {
        this.id = util.generatedId();
        if (!appid) {
            console.log("error no appid");
            return;
        }
        this.appid = appid;

        this.init();
    }
    init() {
        console.log('引擎開始起動了…')
    }
    showAppid() {
        console.log('appid=' + this.appid);
    }
}