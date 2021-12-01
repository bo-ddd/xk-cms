<template>
  <div class="task">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="任务名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="时间">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="任务 Id" prop="id" width="100"></el-table-column>
      <el-table-column label="任务名称" prop="taskName"></el-table-column>
      <el-table-column label="时间" prop="createTime"></el-table-column>
    </el-table>
  </div>
</template>

<style>
.task{
    padding:20px;
    background:#fff;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          taskName: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          createTime: "10333",
        },
        {
          id: "12987123",
          taskName: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          createTime: "10333",
        },
        {
          id: "12987125",
          taskName: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          createTime: "10333",
        },
        {
          id: "12987126",
          taskName: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          createTime: "10333",
        },
      ],
    };
  },
};
</script>