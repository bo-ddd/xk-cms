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
        <el-link type="primary" @click="publishTask(scope.row.id)">创建任务</el-link>
      </template>
    </el-table-column>
  </el-table>
  <el-drawer
  title="创建任务"
  :visible.sync="dialog"
  direction="rtl"
  ref="drawer"
  >
  <div class="drawer__content">
    <el-form :model="form">
      <el-form-item label="任务名称" label-width="100">
        <el-input v-model="form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="任务描述">
        <el-input v-model="form.desc" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div class="drawer__footer">
      <el-button @click="cancelForm">取 消</el-button>
      <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
    </div>
  </div>
</el-drawer>
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
      tasks:[],
      dialog:false,
      loading:false,
      form:{
        title:'',
        desc:''
      },
      selectTaskId:''
    };
  },
  async created(){
    let list = await this.getTaskList();
    let task = new Task(list.rows);
    this.tasks = task.data;
  },
  methods:{
    ...mapActions(['getTaskList','createTask']),
    publishTask(id){
      this.selectTaskId = id;
      this.dialog = true;
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          console.log(_)
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => { console.log(_)});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
};
</script>

<style scoped lang="scss">
  .drawer__content{
    padding:20px;
  }
  .drawer__footer{
    text-align: right;
  }
</style>