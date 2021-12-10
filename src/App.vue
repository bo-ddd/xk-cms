<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// 初始化样式
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.icon{
  display: block;
  width:24px;
  height:24px;
}

.theme-c{
  color:#303778;
}

body,
h3,
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

.fs-12 {
  font-size: 12px !important;
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
