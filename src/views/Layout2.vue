<template>
  <div>
    <!-- 在一个 template元素中，该元素必须至少和最多，只能包含一个父级元素，此句只适应于vue2.x -->
    <!-- 在CMS后台管理系统中，一般此菜单页面，被称为Layout页面； 页面命名：Layout.vue -->

    <!-- 二：打开router/index.js 配置路由 -->

    <!-- 三：elementui  ：能用就用，不要自己去写，也不要被这个语法 -->
    <!-- elementui - Container 布局容器 -->
    <el-container class="wrap">
      <el-aside width="200px">
        <el-menu default-active="nav2" class="el-menu-vertical-demo">
          <el-menu-item index="nav2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-nav3"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <el-table :data="list" style="width: 100%">
            <el-table-column prop="date" label="">
              <template slot="header">
                <i class="el-icon-edit"></i>
                <span>系统公告</span>
              </template>
            </el-table-column>
            <el-table-column width="340">
              <template slot="header">
                <el-link type="primary"
                  ><i class="el-icon-edit"></i>主要链接</el-link
                >
                <el-link type="primary"><i class="el-icon-edit"></i>主要链接</el-link>
              </template>
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                <span style="margin-left: 10px">{{ scope.row.address }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
    <!-- tip：粘完代码后要看一下效果是否实现，如果遇到这种布局窗口，
    想看他的位置是否正确，不要铺色块，应该打开f12审查元素； -->
  </div>
</template>

 <script>
export default {
  data() {
    return {
      list: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

// 一般情况下，wrap在样式中，指的是最外层的元素;
//  scoped  :  局布作用域；  如果 style中声明了scoped 那么，该样式只存在于当前模块中；
// 如果不写scoped，会影响其它页面的样式；所以一般情况下，
//在模块中，或者单页面项目中，必须要加上scoped;
<style scoped lang="scss">
// 用!important ,如果不好使用 ::v-deep 用来强制改elementui的样式； 如果不好使；
// 用 /deep/ 如果还不好使，用 >>>
// 为什么我们设置的样式不好使： 因为我们的样式在被打包时，
// 先打包我们的样式，之后elementui在把我们的样式给覆盖掉，这样就会导致他的优先级比我们设置的高；
::v-deep .el-table__cell {
  padding: 5px 0 !important;
}
.el-menu {
  border: none;
}
.el-aside {
  border-right: 1px solid #e6e6e6;
}
.wrap {
  height: 100vh;
}
</style>
