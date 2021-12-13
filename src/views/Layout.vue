<template>
  <el-container class="layout">
    <el-aside class="aside" style="width: 180px">
      <img class="logo" src="@/assets/images/logo.png" alt="" />
      <h4 class="title">学客管理系统</h4>
      <el-menu class="mt-20" @select="navigate" text-color="#7c7f84" active-text-color="#303778" :default-active="defaultActive" background-color="#eceff4">
        <el-menu-item v-for="item in menu" :key="item.name" :index="item.name">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <i class="mr-5" :class="$route.meta.icon"></i>
          <span>{{ $route.meta.title }}</span>
        </div>
        <div>
          <i class="mr-5 el-icon-switch-button"></i>
          <el-link type="primary" @click="signOut">退出</el-link>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods:{
    ...mapActions(['logout']),
    async signOut(){
      sessionStorage.setItem('token',null);
      let res = await this.logout();
      console.log(res);
      if(res.status == 1){
        this.$router.push({
          name:'Login'
        })
      }else{
        this.$message({
          type:"wraning",
          message:res.msg
        })
      }
    },
    navigate(name){
      this.$router.push({
        name
      })
    }
  },
  computed: {
    ...mapGetters(["routes"]),
    menu() {
      return this.routes[0].children;
    },
    defaultActive(){
      return this.$route.name;
    }
  },
};
</script>

<style scoped lang="scss">
.logo {
  width: 80px;
  margin: 20px auto 5px;
  display: block;
}
.el-menu {
  border: none;
  .el-menu-item{
    height:34px;
    line-height: 34px;
  }
  .is-active{
    background:#d9dfe8;
  }
}

.el-main{
  background: #fcfcfc;
  padding:20px 10%;
}

.layout {
  height: 100vh;
  & .title{
    text-align: center;
    color:#303778;
  }
  & .aside {
    border-right: 1px solid #e6e6e6;
    background-color:#eceff4;
  }
  & .header {
    min-width: 1000px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:#303778;
    & div{
      display: flex;
      align-items: center;
    }
  }
}
</style>