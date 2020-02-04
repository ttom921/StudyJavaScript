import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';


export class RxjsWrapper {
    constructor() {
    }
    get(url: string, headers?: Object): Observable<any> {
        return ajax.getJSON(url, headers);
        // const subscribe = users.subscribe(
        //     res => console.log(res),
        //     err => console.error(err)
        // );
    }
    post(url: string, body?: any, headers?: Object) {
        return ajax.post(url, body, headers);
    }
    put(url: string, body?: any, headers?: Object) {
        return ajax.put(url, body, headers);
    }
    patch(url: string, body?: any, headers?: Object) {
        return ajax.patch(url, body, headers);
    }
    delete(url: string, headers?: Object) {
        return ajax.delete(url, headers);
    }
}