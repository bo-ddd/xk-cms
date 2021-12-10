import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout.vue';

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/manage',
    children: [
      {
        path: '/manage',
        name: 'Manage',
        meta: {
          title: '管理中心',
          icon: 'el-icon-s-tools'
        },
        component: () => import(/* webpackChunkName: "manage" */ '../views/Manage.vue')
      },
      {
        path: '/task',
        name: 'Task',
        meta: {
          title: '任务中心',
          icon: 'el-icon-document'
        },
        component: () => import(/* webpackChunkName: "task" */ '../views/task/Task.vue')
      },
      {
        path: '/my/task',
        name: 'MyTask',
        meta: {
          title: '我的任务',
          icon: 'el-icon-document'
        },
        component: () => import(/* webpackChunkName: "mytask" */ '../views/mine/Task.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


// {
//   path:'/layout2',
//   name:'Layout2',
//   component:()=>import(/* webpackChunkName: "layout2" */ '../views/Layout2.vue')
// },
