<template>
  <div class="left-panel">
    <el-tabs v-model="activeTab" tab-position="left">
      <el-tab-pane label="组件库" name="components">
        <div
          v-for="element in componentList"
          :key="element.id"
          class="component-item"
          draggable="true"
          @dragstart="onDragStart($event, element)"
        >
          <i :class="element.icon"></i>
          <span>{{ element.name }}</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="层级结构" name="layers">
        <!-- Layer structure content will go here -->
      </el-tab-pane>
      <el-tab-pane label="资源" name="assets">
        <!-- Assets content will go here -->
      </el-tab-pane>
      <el-tab-pane label="模板市场" name="templates">
        <!-- Template market content will go here -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { componentList as components } from '@/config/component-list';

const activeTab = ref('components');
const componentList = ref(components);

const onDragStart = (event, component) => {
  event.dataTransfer.setData('application/json', JSON.stringify(component));
};
</script>

<style scoped>
.left-panel {
  padding: 10px;
  border-right: 1px solid #ebeef5;
  height: 100%;
}
.component-item {
  padding: 10px;
  cursor: move;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.component-item i {
  margin-right: 10px;
}
</style>
