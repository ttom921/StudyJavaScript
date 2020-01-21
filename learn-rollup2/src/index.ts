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
}
export default Engine;