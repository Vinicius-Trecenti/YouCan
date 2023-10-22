import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/youcan',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});