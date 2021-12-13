<template>
  <div class="home">
    <header class="user-info">
      <div class="user-l">
        <div class="avator">
          <img class="avator-img" :src="avatorImg" alt="" />
        </div>
        <div>
          <p>{{ userInfo.avatorName }}，欢迎来到学客管理平台</p>
          <p class="mt-10">上次登录:{{ loginAt }}</p>
        </div>
      </div>
      <div class="user-r">
        <div class="item">
          <div class="title">平台人数</div>
          <h5 class="fs-16">100</h5>
        </div>
        <div class="item">
          <div class="title">班级人数</div>
          <h5 class="fs-16">100</h5>
        </div>
      </div>
    </header>
    <nav>
      <div class="item"  @click="navigator('MyTask')">
        <i class="el-icon-document"></i>
        <p>我的任务</p>
      </div>
    </nav>
    <el-table class="table" :data="tasks" size="mini" style="width: 100%">
      <el-table-column>
        <template slot="header">
          <i class="el-icon-ice-cream-round"></i>
          <span class="ml-5">任务列表</span>
        </template>
        <template slot-scope="scope">
          <span>{{ scope.row.category | category }}</span>
        </template>
      </el-table-column>
      <el-table-column class="info" width="240"  align="right">
        <template slot="header">
          <el-link
            class="mr-5 fs-12"
            icon="el-icon-edit"
            type="primary"
            :underline="false"
            >发布任务</el-link
          >
          <el-link type="primary" class="fs-12" :underline="false"
            >查看更多<i class="el-icon-view el-icon--right"></i>
          </el-link>
        </template>
        <template slot-scope="scope">
          <span class="float-r">{{ scope.row.createdTime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getTime } from "@/assets/util/util";
import Task from "@/assets/js/Task";
export default {
  data() {
    return {
      userInfo: {},
      avatorImg: "",
      loginAt: "",
      tasks: [],
    };
  },
  filters: {
    category(s) {
      let arr = s.split("=>");
      if (arr.length === 1) {
        return "【主任务】" + s;
      } else {
        let ct = arr.pop();
        return `【${arr.join("=>")}】${ct}`;
      }
    },
  },
  methods: {
    ...mapActions(["getUserInfo",'getTaskList']),
    async getTaskData() {
      let res = await this.getTaskList();
      let task = new Task(res.data.rows);
      this.tasks = task.category.sort((a, b) => b.id - a.id);
    },
    async getUserData() {
      let userInfo = await this.getUserInfo();
      this.userInfo = userInfo.data;
      this.avatorImg = require(`@/assets/avator/${this.userInfo.avatorImg}.png`);
      this.loginAt = getTime(this.userInfo.loginAt);
    },
    navigator(name){
      this.$router.push({
        name
      })
    }
  },
  async created() {
    this.getUserData();
    this.getTaskData();
  },
};
</script>

<style scoped lang="scss">

.home {
  min-width: 800px;
  background: #fff;
  padding: 2rem;
  font-size: 12px;
  & .user-info {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    & .user-l {
      display: flex;
      align-items: center;
      color: #99a5c3;
      & .avator {
        width: 60px;
        height: 60px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid #ccc;
        margin-right: 10px;
        & .avator-img {
          width: 50px;
        }
      }
    }
    & .user-r {
      display: flex;
      align-items: center;
      color: #666;
      & .item {
        padding: 0 20px;
        text-align: center;
        & .title {
          margin-bottom: 10px;
        }
      }
    }
  }
  & nav {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    color: #99a5c2;
    margin-top: 20px;
    .item {
      padding: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      background: #fcfcfc;
      & i {
        font-size: 36px;
      }
      & p {
        margin-top: 5px;
      }
    }
  }
  & .table {
    margin-top: 40px;
  }
}
</style>
