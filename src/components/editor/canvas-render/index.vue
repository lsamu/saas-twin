<template>
  <component :is="componentTag" v-bind="componentProps">
    {{ componentProps.text }}
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  componentData: {
    type: Object,
    required: true,
  },
});

// Determine the component to render based on its ID
const componentTag = computed(() => {
  // The componentData.id is now a uuid, we need to use componentData.component
  switch (props.componentData.component) {
    case 'text':
      return 'div'; // Render a simple div for text
    case 'button':
      return 'el-button'; // Render an Element Plus button
    case 'image':
      return 'el-image'; // Render an Element Plus image
    default:
      return 'div';
  }
});

// Pass down the props to the rendered component
const componentProps = computed(() => {
  return props.componentData.props;
});
</script>
