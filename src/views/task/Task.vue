<template>
  <div class="task">
    <el-table
    :data="tasks"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    size="mini"
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="id"
      label="id"
      sortable
      width="100">
    </el-table-column>
    <el-table-column
      prop="category"
      label="任务名称">
    </el-table-column>
    <el-table-column
      prop="createdAt"
      width="200"
      label="创建任务时间">
    </el-table-column>
    <el-table-column
      align="center"
      width="100"
      label="操作">
      <template slot-scope="scope">
        <el-link type="primary" @click="toDetail(scope.row.id)">查看详情</el-link>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<style>
.task{
    padding:40px 40px 20px 40px;
    background:#fff;
}
</style>

<script>
import { mapActions } from 'vuex'
import Task from '@/assets/js/Task'
export default {
  data() {
    return {
      tasks:[]
    };
  },
  async created(){
    let list = await this.getTaskList(); 
    let task = new Task(list.rows);
    this.tasks = task.data;
  },
  methods:{
    ...mapActions(['getTaskList']),
  }
};
</script>