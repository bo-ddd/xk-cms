import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'
import { routes } from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes,
  },
  mutations: {
  },
  getters:{
    routes:state => state.routes,
  },
  actions: {
    login(ctx,payload) {
      return api.login(payload);
    },
    getCaptcha() {
      return `${api.getCaptcha()}?${Math.random()}`;
    },
    getUserInfo(ctx,payload) {
      return  api.getUserInfo(payload);
    },
    getTaskList(ctx,payload) {
      return  api.getTaskList(payload);
    },
    getMyTaskList(ctx,payload) {
      return  api.getMyTaskList(payload);
    },
    getRankingList(ctx,payload) {
      return  api.getRankingList(payload);
    },
    createTask(ctx,payload) {
      return  api.createTask(payload);
    },
  },
  modules: {
  }
})
