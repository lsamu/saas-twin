<template>
  <el-container class="full-height">
    <el-header class="header">SaaS 数字孪生平台</el-header>
    <el-container>
      <el-aside width="200px" class="left-panel">
        组件物料区
      </el-aside>
      <el-main class="main-canvas">
        画布编辑区
      </el-main>
      <el-aside width="280px" class="right-panel">
        属性配置区
      </el-aside>
    </el-container>
  </el-container>
</template>

<script setup>
// 脚本区暂时为空
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.full-height {
  height: 100vh;
}

.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.left-panel, .right-panel {
  border: 1px solid #EBEEF5;
  padding: 10px;
}

.main-canvas {
  background-color: #F2F6FC;
  border: 1px solid #EBEEF5;
}
</style>
