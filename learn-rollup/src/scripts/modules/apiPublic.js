import axios from 'axios';

// User相關的 api
const userRequest = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: {
    //     Authorization: 'Bearer ' + token //the token is a variable which holds the token
    // }
    // //     // 選項: 'arraybuffer', 'document', 'json', 'text', 'stream'
    // //     // 瀏覽器才有 'blob' ， 預設為 'json'
    // //     responseType: 'json', // 伺服器回應的數據類型

    // //     // 伺服器回應的編碼模式 預設 'utf8'
    // //     responseEncoding: 'utf8',
});
// User 相關的 api
export const apiUsersGet = data => userRequest.get('/users', data);
// // // User 相關的 api
// // //export const apiUserLogin = data => userRequest.post('/signIn', data);
// // //export const apiUserLogout = data => userRequest.post('/signOut', data);
// // //export const apiUserSignUp = data => userRequest.post('/signUp', data);
