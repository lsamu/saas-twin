<template>
  <div class="right-panel">
    <h3>属性配置区</h3>
    <div v-if="activeComponent">
      <div class="props-editor">
        <div v-for="(value, key) in activeComponent.props" :key="key" class="prop-item">
          <label class="prop-label">{{ key }}</label>
          <el-input v-model="editableProps[key]" @input="onInput" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>请在画布上选择一个组件</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useEditorStore } from '@/store/modules/editorStore';

const editorStore = useEditorStore();

const activeComponent = computed(() => editorStore.activeComponent);

const editableProps = ref({});

watch(() => activeComponent.value, (newVal) => {
  if (newVal) {
    editableProps.value = { ...newVal.props };
  }
}, { deep: true, immediate: true });

const onInput = () => {
  if (activeComponent.value) {
    editorStore.updateComponentProps({ id: activeComponent.value.id, props: editableProps.value });
  }
};
</script>

<style scoped>
.right-panel {
  padding: 10px;
  border-left: 1px solid #ebeef5;
  height: 100%;
}
.props-editor {
  width: 100%;
}
.prop-item {
  margin-bottom: 10px;
}
.prop-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
</style>
