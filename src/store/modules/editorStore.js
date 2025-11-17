import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useEditorStore = defineStore('editor', () => {
  // =================================================================================...
  // State
  // =================================================================================...

  // 画布上的所有组件数据
  const components = ref([]);

  // 当前选中的组件的 ID
  const activeComponentId = ref(null);

  // 画布设置
  const canvasSettings = ref({
    zoom: 1, // 缩放比例
    showGrid: true, // 是否显示网格
    gridSize: 20, // 网格大小
  });

  // =================================================================================...
  // Getters (Computed Properties)
  // =================================================================================...

  // 获取当前选中的组件对象
  const activeComponent = computed(() => {
    return components.value.find(c => c.id === activeComponentId.value);
  });

  // =================================================================================...
  // Actions
  // =================================================================================...

  /**
   * 添加一个新组件到画布
   * @param {object} component - 组件数据对象
   */
  function addComponent(component) {
    components.value.push(component);
    // 注意：历史记录的添加现在由 historyStore 负责
  }

  /**
   * 设置当前选中的组件
   * @param {string} id - 组件的 ID
   */
  function setActiveComponent(id) {
    activeComponentId.value = id;
  }

  /**
   * 更新组件的属性
   * @param {string} id - 要更新的组件 ID
   * @param {object} props - 新的属性
   */
  function updateComponentProps(id, props) {
    const component = components.value.find(c => c.id === id);
    if (component) {
      Object.assign(component.props, props);
      // 注意：历史记录的添加现在由 historyStore 负责
    }
  }

  // 暴露 state, getters, 和 actions
  return {
    components,
    activeComponentId,
    canvasSettings,
    activeComponent,
    addComponent,
    setActiveComponent,
    updateComponentProps,
  };
});
