<template>
  <div class="canvas-wrapper" ref="canvasWrapper" @scroll="handleScroll">
    <SketchRule
      :thick="thick"
      :scale="scale"
      :width="canvasWidth"
      :height="canvasHeight"
      :startX="startX"
      :startY="startY"
      :lines="lines"
      class="sketch-rule"
    >
      <div
        class="canvas-container"
        @dragover.prevent
        @drop="onDrop"
        :style="{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }"
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
    </SketchRule>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import EsDrager from 'es-drager';
import 'es-drager/lib/style.css';
import { useEditorStore } from '@/store/modules/editorStore';
import RenderComponent from '../canvas-render/index.vue';
import SketchRule from "vue3-sketch-ruler";
import "vue3-sketch-ruler/lib/style.css";

const editorStore = useEditorStore();

const components = computed(() => editorStore.components);

// Ruler settings
const thick = 20;
const scale = ref(1);
const canvasWidth = 1920;
const canvasHeight = 1080;
const startX = ref(0);
const startY = ref(0);
const lines = ref({ h: [], v: [] });
const canvasWrapper = ref(null);

const handleScroll = () => {
    if(canvasWrapper.value){
        const { scrollLeft, scrollTop } = canvasWrapper.value;
        startX.value = -scrollLeft / scale.value;
        startY.value = -scrollTop / scale.value;
    }
};

onMounted(() => {
  if (canvasWrapper.value) {
    const { clientWidth, clientHeight } = canvasWrapper.value;
    const scrollLeft = (canvasWidth - clientWidth) / 2;
    const scrollTop = (canvasHeight - clientHeight) / 2;

    canvasWrapper.value.scrollLeft = scrollLeft > 0 ? scrollLeft : 0;
    canvasWrapper.value.scrollTop = scrollTop > 0 ? scrollTop : 0;
  }
});

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
.canvas-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #f0f2f5;
}
.sketch-rule {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2; /* Make sure ruler is on top */
}
.canvas-container {
  position: relative;
}
</style>
