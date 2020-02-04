import { delay } from "rxjs/operators";
import { RxjsWrapper } from "./module/rxjsWrapper"
import { ajax } from "rxjs/ajax";
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
        //console.log('init');
        this._appid = appid;
    }
    showAppid() {
        console.log('appid=' + this._appid);
    }
    getAjaxTest() {

        //var aWindow: Window = window.open("http://localhost:3000", "Window", "");
        // var mywin: Window = window.open("about:blank", "redirect");

        // someCallback("http://localhost:3000");
        //crud
        let url = `http://localhost:3000/posts`;
        let headers = {
            Authorization: "eyJhbGciOiJIUzUxMiIsImlhdCI6MTU4MDcwOTM4NSwiZXhwIjoxNTgwNzM4MTg1fQ.IntcInVzZXJfaWRcIjogMSwgXCJjb21wYW55X2lkXCI6IDEsIFwidXNlcl9yb2xlX2lkXCI6IDJ9Ig.7EyrIitcYKX7xQVmDz8LJmOB1jmn-rLOMM3xKSAFJrqZrjF009BWbQG8DAJK3HFgu8q3FYSUUnDrOBprlDsQyw"
        };
        // const requestSettings = {
        //     url: 'http://172.18.2.160：80/v0.4',
        //     crossDomain: true,
        //     body: {},
        //     responseType: 'json',
        // }
        // let source$ = ajax(requestSettings).subscribe(data => {
        //     console.log(data);
        // });
        let rxajax = new RxjsWrapper();
        // rxajax.get(url, headers).subscribe(
        //     data => {
        //         console.log("test get");
        //         console.log(data);
        //     }
        // );
        //c 創建
        // let body = { title: 'My test2', author: '10codeing2' };
        // rxajax.post(url, body).subscribe(
        //     data => {
        //         console.log("test post");
        //         console.log(data);
        //     }
        // );
        // u put
        // let body = { title: 'My testm22', author: '10codeingm2' };
        // rxajax.put('http://localhost:3000/posts/2', body).subscribe(
        //     response => {
        //         console.log(response);
        //     },
        //     err => {
        //         console.error(err);
        //     }
        // );
        //u patch 可更新部份
        // let mbody = { title: 'My testpatch' };
        // rxajax.patch('http://localhost:3000/posts/3', mbody).subscribe(
        //     response => {
        //         console.log(response);
        //     },
        //     err => {
        //         console.error(err);
        //     }
        // );
        //delete
        // rxajax.delete('http://localhost:3000/posts/6').subscribe(
        //     response => {
        //         console.log(response);
        //     },
        //     err => {
        //         console.error(err);
        //     }
        // );
        //
        // let getall$ = rxajax.get(url, headers);
        // getall$.pipe(
        //     delay(5000),
        // ).subscribe(
        //     data => {
        //         console.log("test get");
        //         console.log(data);
        //     }
        // );

        let asadata$ = rxajax.get("http://64.141.182.94:80/v0.4/servers", headers);
        asadata$.subscribe(data => {
            console.log(data);
        });
    }
}
export default Engine;
