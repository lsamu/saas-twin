<template>
  <div class="editor-header">
    <div class="left-actions">
      <el-button type="primary" @click="handlePreview">预览</el-button>
    </div>
    <div class="center-actions">
      <el-button-group>
        <el-button @click="handleUndo">撤销</el-button>
        <el-button @click="handleRedo">重做</el-button>
      </el-button-group>
    </div>
    <div class="right-actions">
      <el-button type="danger" @click="handleClear">清空</el-button>
    </div>
  </div>
</template>

<script setup>
import { useEditorStore } from '@/store/modules/editorStore';

const editorStore = useEditorStore();

const handlePreview = () => {
  console.log('预览');
  // 在新标签页中打开预览
  // window.open('/preview', '_blank');
};

const handleUndo = () => {
  console.log('撤销');
  // editorStore.undo();
};

const handleRedo = () => {
  console.log('重做');
  // editorStore.redo();
};

const handleClear = () => {
  console.log('清空');
  editorStore.clearComponents();
};
</script>

<style scoped>
.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100%;
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
}

.left-actions, .center-actions, .right-actions {
  display: flex;
  align-items: center;
}
</style>
