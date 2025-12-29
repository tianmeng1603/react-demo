import { request } from '@/utils';

// post 请求
export function loginApi(data: Object) {
    return request({
        url: '/login',
        method: 'post',
        data
    });
}

// get 请求
export function getUserInfoApi(params: Object) {
    return request({
        url: '/user/info',
        method: 'get',
        params
    });
}