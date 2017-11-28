import axios from 'axios'
import {Config} from './config'
// axios 配置
axios.defaults.timeout = Config.TIMEOUT;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '';
let baseURL = '';
if(Config.baseURL.prod.indexOf('http')>=0){
  baseURL = Config.baseURL.prod;
}else{
  baseURL = Config.baseURL.dev;
}

// axios.defaults.withCredentials = true;
 export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(baseURL + url, params)
            .then(response => {
               resolve(response.data);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(baseURL + url, params)
            .then(response => {
               resolve(response.data);
            })
            .catch((error) => {
               reject(error)
            })
    })
}
