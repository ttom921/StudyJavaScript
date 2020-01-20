import axios from 'axios';

//User相關的api
const userRequest = axios.create({
    baseURL: 'http://localhost:3000'
});
export const apiUsersGet = data => userRequest.get('/users', data);