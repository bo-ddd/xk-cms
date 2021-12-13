// 2.  src/api/api.js
import axios from 'axios';
import { postConfig, getConfig } from './config'


// 添加请求拦截器  概念：每次调用接口之前都会走到此方法中；走完此方法才会去请求服务端；
// 看门的老大爷：
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么,一般配置一些请求头的公共信息；
    config.headers.authorization = sessionStorage.getItem('token');
    return config;
})

// 添加响应拦截器  概念：每次调用接口之后都会走到此方法中，服务端返回数据后优先走到此方法，之后才会走到 // // // //axiox.get()/axios.post() 的then方法中；
// 接口返回时遇到的那个老大爷；
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么，一般可以把登录失效后的逻辑添加到此处，所有需要登录接口的判断都可以写到此处，这样就不用每个接口都判断用户是否登录，如果没有登录就跳转到登录页面去的逻辑；抽离业务逻辑的好地方；
    if (response.data.status == 401) {
        location.href = '/login'
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    console.log('get error:', error)
    return {
        code: -1,
        msg: '网络异常'
    }
});

//接口定义的方式；
export default  {
    //登录
    login: (params = {}) => {
        return axios.post('/user/login', params, postConfig);
    },
    getCaptcha: () => {
        return `${getConfig.baseURL}/captcha`;
    },
    getUserInfo: (params = {}) => {
        return axios.post('/user/info', params, postConfig);
    },
    getTaskList: (params = {}) => {
        return axios.post('/task/list', params, postConfig);
    },
    getMyTaskList: (params = {}) => {
        return axios.post('/tasklog/mylist', params, postConfig);
    },
    getRankingList: (params = {}) => {
        return axios.post('/tasklog/rank', params, postConfig);
    },
    createTask: (params = {}) => {
        return axios.post('/task/create', params, postConfig);
    },
}