<template>
  <div class="wrap">
    <el-carousel :interval="4000" type="card" height="140px">
      <el-carousel-item v-for="item in mainTasks" :key="item.id">
        <div class="banner">
          <img class="icon" src="@/assets/images/icon_task.png" alt="" />
          <h3>任务名称：{{ item.title }}</h3>
          <h5>任务ID: {{ format(item.id) }}</h5>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="container">
      <div class="data">
        <div class="task-total">
          <div class="item">
            <img src="@/assets/images/icon_echart.png" alt="" />
            <div>
              <h4>任务总数</h4>
              <p>1000 <span>/2000</span></p>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/images/icon_echart.png" alt="" />
            <div>
              <h4>任务总数</h4>
              <p>1000 <span>/2000</span></p>
            </div>
          </div>
        </div>
        <el-table
          :data="process"
          size="mini"
          stripe
          class="mt-20"
          style="width: 100%"
        >
          <el-table-column prop="title">
            <template slot="header">
              <h3 class="title">进行中</h3>
            </template>
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <span>{{ scope.row.progress }}%</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="ranking">
        <el-table :data="rank" size="mini" stripe style="width: 100%">
          <el-table-column align="center" width="64" type="index">
            <template slot="header">
              <h3 class="title">排行榜</h3>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <div>{{scope.row.avatorName}}</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      mainTasks: [],
      process:[],
      rank:[],
    };
  },
  methods: {
    ...mapActions(["getMyTaskList","getRankingList"]),
    async getMyMainTaskData() {
      let res = await this.getMyTaskList({
        taskType:1
      });
      this.mainTasks = res.data.rows;
    },
    async getProcessTaskData() {
      let res = await this.getMyTaskList({
        taskStatus:2
      });
      this.process = res.data.rows;
    },
    async getRankingLiskData() {
      let res = await this.getRankingList();
      this.rank = res.data;
    },
    format(s) {
      return (Array(6).join(0) + s).slice(-6);
    },
  },
  created() {
    this.getMyMainTaskData();
    this.getProcessTaskData();
    this.getRankingLiskData();
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  min-width: 400px;
}
.title {
  color: #000;
}
.banner {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #303778;
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
}
.container {
  display: grid;
  grid-template-columns: 5fr 3fr;
  margin-top: 30px;
  & .data {
    & .task-total {
      display: flex;
      border-bottom: 2px solid #f0f1f7;
      padding-bottom: 30px;
      & .item {
        display: flex;
        align-items: center;
        margin-right: 40px;
        font-size: 12px;
        & img {
          width: 42px;
          height: 42px;
          margin-right: 10px;
        }
        & p {
          margin-top: 5px;
          color: #313878;
          font-weight: 800;
        }
        & span {
          display: inline-block;
          transform: scale(0.8, 0.8);
          color: #717a90;
        }
      }
    }
  }
  & .ranking {
    margin-left: 30px;
    border-left: 2px solid #f0f1f7;
    padding: 0 20px;
  }
}
</style>