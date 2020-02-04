declare class Engine {
    private static _instance;
    private constructor();
    static getInstance(): Engine;
    private _appid;
    init(appid: string): void;
    showAppid(): void;
    getAjaxTest(): void;
}
export default Engine;
