import { axiosPost } from './http'
import { Dialog,Toast } from 'vant';
// let baseUrl = "";
// let url = baseUrl;

function $http(url: String,param: any){
    return new Promise((resolve:any,reject:any) => {
        axiosPost({
            url: url,
            param,
            success(data: any){
                if(data.status === '0'){
                    resolve(data)
                }else{
                    Dialog({ message: data.msg });
                    return;
                }
            },
            error(err: any){
                reject(err)
            }
        })
    })
}

export {
    $http
}