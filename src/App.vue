<template>
  <el-container class="full-height">
    <el-header class="header">SaaS 数字孪生平台</el-header>
    <splitpanes class="default-theme" style="height: calc(100% - 60px)">
      <pane size="15">
        <ComponentList />
      </pane>
      <pane size="70">
        <Canvas />
      </pane>
      <pane size="15">
        <PropEditor />
      </pane>
    </splitpanes>
    <el-footer class="footer">© 2024 Your Company. All rights reserved.</el-footer>
  </el-container>
</template>

<script setup>
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import ComponentList from './components/editor/component-list/index.vue';
import Canvas from './components/editor/canvas/index.vue';
import PropEditor from './components/editor/prop-editor/index.vue';
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
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.footer {
  background-color: #f2f2f2;
  color: #666;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
}

.splitpanes.default-theme .splitpanes__pane {
    background-color: white;
}
</style>
