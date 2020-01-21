import axios from 'axios';

//Post相關的api
const postRequest = axios.create({
    baseURL: 'http://localhost:3000'
});
//C
export const apiPostPost = data => postRequest.post('/posts', data);
//R
export const apiPostGet = data => postRequest.get('/posts', data);
//U
//export const apiPostPut = (url, data) => postRequest.put(url, data);
export const apiPostPut = data => postRequest.put(`/posts/${data.id}`, data);
export const apiPostPatch = data => postRequest.patch(`/posts/${data.id}`, data);
//
//Delete
export const apiPostDelete = data => postRequest.delete(`/posts/${data.id}`, data);

