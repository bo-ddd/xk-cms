import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'
import { routes } from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes,
    needReGetUserInfo:true,
    userInfo:{},
    needReGetTaskList:true,
    taskList:{}
  },
  mutations: {
    NEED_GETUSERINFO:(state, payload) => state.needReGetUserInfo = payload,
    USER_INFO: (state, payload) => state.userInfo = payload,
    NEED_REGETTASKLIST:(state, payload) => state.needReGetTaskList = payload,
    TASK_LIST: (state, payload) => state.taskList = payload,
  },
  getters:{
    routes:state => state.routes,
    needReGetUserInfo:state => state.needReGetUserInfo,
    userInfo: state => state.userInfo
  },
  actions: {
    login(ctx,payload) {
      return api.login(payload);
    },
    logout(ctx,payload) {
      return api.logout(payload);
    },
    getCaptcha() {
      return `${api.getCaptcha()}?${Math.random()}`;
    },
    getUserInfo(ctx,payload) {
      if(ctx.state.needReGetUserInfo){
        return api.getUserInfo(payload).then(res=>{
          ctx.commit('NEED_GETUSERINFO',false);
          ctx.commit('USER_INFO',res);
          return res;
        })
      }else{
        return ctx.state.userInfo;
      }
    },
    updateUserInfo(ctx,payload) {
      return api.updateUserInfo(payload).then(res=>{
        ctx.commit('NEED_GETUSERINFO',true);
        return res;
      })
    },
    updatePassword(ctx,payload) {
      return api.updatePassword(payload);
    },
    getTaskList(ctx,payload) {
      if(ctx.state.needReGetTaskList){
        return api.getTaskList(payload).then(res=>{
          ctx.commit('NEED_REGETTASKLIST',false);
          ctx.commit('TASK_LIST',res);
          return res;
        })
      }else{
        return ctx.state.taskList;
      }
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
