import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useEditorStore } from './editorStore'; // 引入 editorStore
import cloneDeep from 'lodash.clonedeep'; // 使用 lodash 深拷贝来创建快照

export const useHistoryStore = defineStore('history', () => {
  const editorStore = useEditorStore();

  // =================================================================================...
  // State
  // =================================================================================...

  // 历史记录堆栈
  const history = ref([]);
  // 当前指针位置
  const historyIndex = ref(-1);

  // =================================================================================...
  // Getters
  // =================================================================================...

  // 是否可以撤销
  const canUndo = computed(() => historyIndex.value > 0);

  // 是否可以重做
  const canRedo = computed(() => historyIndex.value < history.value.length - 1);

  // =================================================================================...
  // Actions
  // =================================================================================...

  /**
   * 添加一个新的历史记录快照
   * 这个操作会清空当前指针之后的所有“重做”记录
   */
  function addSnapshot() {
    // 如果当前指针不在历史记录末尾，说明之前进行过撤销操作
    // 此时再添加新的操作，需要把指针之后的所有记录都清除
    if (historyIndex.value < history.value.length - 1) {
      history.value.splice(historyIndex.value + 1);
    }

    // 创建 editorStore 关键状态的深拷贝作为快照
    const snapshot = cloneDeep({
      components: editorStore.components,
      // 如果需要，也可以包含其他需要记录的状态
      // activeComponentId: editorStore.activeComponentId 
    });

    history.value.push(snapshot);
    historyIndex.value++;
  }

  /**
   * 撤销操作
   * 恢复到上一个状态
   */
  function undo() {
    if (canUndo.value) {
      historyIndex.value--;
      applySnapshot();
    }
  }

  /**
   * 重做操作
   * 恢复到下一个状态
   */
  function redo() {
    if (canRedo.value) {
      historyIndex.value++;
      applySnapshot();
    }
  }

  /**
   * 根据当前指针位置，将快照应用到 editorStore
   * @private
   */
  function applySnapshot() {
    const snapshot = history.value[historyIndex.value];
    if (snapshot) {
      // 使用深拷贝，避免后续操作意外修改历史记录中的快照
      editorStore.components = cloneDeep(snapshot.components);
      // editorStore.activeComponentId = snapshot.activeComponentId;
    }
  }
  
  /**
   * 初始化，添加第一个快照
   */
  function init() {
    addSnapshot();
  }

  return {
    canUndo,
    canRedo,
    addSnapshot,
    undo,
    redo,
    init
  };
});
