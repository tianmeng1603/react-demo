import axios from 'axios';
import { getToken, removeToken } from './token';
import router from '@/router';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/',
  timeout: 5000,
});

// 1 添加请求拦截器
request.interceptors.request.use((config)=> {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error)=> {
  return Promise.reject(error);
});

// 2 添加响应拦截器
request.interceptors.response.use((response)=> {
  return response.data;
}, (error)=> {
  if (error.response.status === 401) {
    removeToken();
    router.navigate('/login');
  }
  return Promise.reject(error);
});

export { request };