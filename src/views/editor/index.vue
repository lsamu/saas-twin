<template>
  <el-container class="editor-container">
    <el-header class="editor-header-container">
      <EditorHeader />
    </el-header>
    <splitpanes class="default-theme editor-content">
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
  </el-container>
</template>

<script setup>
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import EditorHeader from '@/components/editor/header/index.vue';
import ComponentList from '@/components/editor/component-list/index.vue';
import Canvas from '@/components/editor/canvas/index.vue';
import PropEditor from '@/components/editor/prop-editor/index.vue';
</script>

<style scoped>
.editor-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.editor-header-container {
  padding: 0;
  height: 60px;
}

.editor-content {
  height: calc(100vh - 60px);
}

.splitpanes.default-theme .splitpanes__pane {
    background-color: #f0f2f5; /* Maintain a consistent background */
}
</style>
