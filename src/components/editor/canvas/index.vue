<template>
  <div
    class="canvas-container"
    @dragover.prevent
    @drop="onDrop"
  >
    <es-drager
      v-for="element in components"
      :key="element.id"
      v-model:x="element.props.x"
      v-model:y="element.props.y"
      :w="element.props.w"
      :h="element.props.h"
      @drag-end="(e) => onDragEnd(e, element.id)"
    >
      <RenderComponent :componentData="element" />
    </es-drager>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import EsDrager from 'es-drager';
import 'es-drager/lib/style.css';
import { useEditorStore } from '@/store/modules/editorStore';
import RenderComponent from '../canvas-render/index.vue';

const editorStore = useEditorStore();

const components = computed(() => editorStore.components);

const onDrop = (event) => {
  const componentData = JSON.parse(event.dataTransfer.getData('application/json'));
  const rect = event.currentTarget.getBoundingClientRect();
  const newId = uuidv4();

  const w = componentData.props.w || 100;
  const h = componentData.props.h || 100;

  const newComponent = {
    id: newId,
    component: componentData.component,
    props: {
      ...componentData.props,
      x: event.clientX - rect.left - w / 2,
      y: event.clientY - rect.top - h / 2,
      w: w,
      h: h,
    },
  };

  editorStore.addComponent(newComponent);
  editorStore.setActiveComponent(newId);
};

const onDragEnd = (e, id) => {
  editorStore.updateComponentProps({ id, props: { x: e.x, y: e.y } });
};
</script>

<style scoped>
.canvas-container {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  position: relative;
}
</style>
