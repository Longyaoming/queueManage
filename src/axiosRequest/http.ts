import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Dialog,Toast } from 'vant';
import router from '@/router'

//设置请求超时
axios.defaults.timeout = 1000000; 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求拦截
axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (err: any) => {
        Promise.reject(err)
    }
)

//响应拦截
axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (err: any) =>{
        let errMsg = "";
        if(err && err.response.status){
            switch (err.response.status) {
                case 401:
                    errMsg = "登录状态失效，请重新登录"
                    localStorage.removeItem('tsToken');
                    router.push({name:'login'})
                    break;
                case 403:
                    errMsg = '拒绝访问';
                    break;
                case 404:
                    errMsg = "请求路径有误"
                    break;
                case 408:
                    errMsg = '请求超时';
                    break;
        
                case 500:
                    errMsg = '服务器内部错误';
                    break;
        
                case 501:
                    errMsg = '服务未实现';
                    break;
        
                case 502:
                    errMsg = '网关错误';
                    break;
        
                case 503:
                    errMsg = '服务不可用';
                    break;
        
                case 504:
                    errMsg = '网关超时';
                    break;
        
                case 505:
                    errMsg = 'HTTP版本不受支持';
                    break;
            
                default:
                    errMsg = err.response.data.msg;
                    break;
            }
        }else{
            errMsg = err;
        }

        Dialog({ message: '提示' });
        return Promise.reject(errMsg)
    }
)

//post请求
function axiosPost(option: any){
    //加载loading
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
    });
    axios.post(option.url, option.param)
    .then((res:any) => {
        Toast.clear();
        option.success(res.data)
    })
    .catch((err: any) => {
        Toast.clear();
        option.error(err);
    })
}

export {
    axiosPost
}