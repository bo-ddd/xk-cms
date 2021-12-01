<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
let routes = [
  {
    path: "/home",
    template: `<div>my name is home page</div>`,
    children:[
      {
        path:'/manage',
        template: `<div>my name is manage page</div>`,
      }
    ]
  },
  {
    path: "/login",
    template: `<div>my name is login page</div>`,
  },
];
console.log(routes);
</script>


<style lang="scss">
// 初始化样式
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
}

// 常用样式表
.ta-c {
  text-align: center;
}

.ta-r {
  text-align: right;
}

.mt-10 {
  margin-top: 10px;
}

.mt-20 {
  margin-top: 20px !important;
}

.ml-5 {
  margin-left: 5px;
}

.mr-5 {
  margin-right: 5px;
}

.fs-16 {
  font-size: 16px;
}

.w-240 {
  width: 240px;
}

.float-r {
  float: right;
}
</style>
