import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'
import { routes } from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes
  },
  mutations: {
  },
  getters:{
    routes:state => state.routes,
  },
  actions: {
    /**
     * @description 用户登录
     * @param username  用户名
     * @param password 密码
    */
    login(ctx,payload) {
      return api.login(payload);
    },
    getCaptcha() {
      return `${api.getCaptcha()}?${Math.random()}`;
    },
    getUserInfo(ctx,payload) {
      return  api.getUserInfo(payload);
    },
  },
  modules: {
  }
})
