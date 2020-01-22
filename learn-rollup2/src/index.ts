import { ajax } from 'rxjs/ajax';
class Engine {
    //#region Singleton
    private static _instance: Engine = null;
    private constructor() { };
    public static getInstance(): Engine {
        if (this._instance == null) {
            this._instance = new Engine();
        }
        return this._instance;
    }
    //#endregion Singleton
    private _appid: string;

    init(appid: string) {
        this._appid = appid;
    }
    showAppid() {
        console.log('appid=' + this._appid);
    }
    getAjaxTest() {
        const githubUsers = `https://api.github.com/users?per_page=2`;

        const users = ajax(githubUsers);

        const subscribe = users.subscribe(
            res => console.log(res),
            err => console.error(err)
        );

    }
}
export default Engine;