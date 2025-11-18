import { defineStore } from 'pinia';
import { useEditorStore } from './editorStore';
import cloneDeep from 'lodash.clonedeep';

export const useHistoryStore = defineStore('history', {
  state: () => ({
    // 历史记录栈
    history: [],
    // 当前历史记录指针
    currentIndex: -1,
    // 最大历史记录步数
    maxHistorySteps: 50,
  }),

  actions: {
    // 记录当前状态
    recordState() {
      const editorStore = useEditorStore();

      // 如果当前指针不在栈顶，则丢弃之后的所有记录
      if (this.currentIndex < this.history.length - 1) {
        this.history.splice(this.currentIndex + 1);
      }

      // 使用深拷贝来保存状态快照
      const snapshot = cloneDeep(editorStore.$state.components);
      this.history.push(snapshot);

      // 如果超出最大步数，则移除最早的记录
      if (this.history.length > this.maxHistorySteps) {
        this.history.shift();
      }

      // 移动指针到栈顶
      this.currentIndex = this.history.length - 1;
    },

    // 撤销
    undo() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        const editorStore = useEditorStore();
        // 使用深拷贝恢复状态，避免引用问题
        editorStore.components = cloneDeep(this.history[this.currentIndex]);
      }
    },

    // 重做
    redo() {
      if (this.currentIndex < this.history.length - 1) {
        this.currentIndex++;
        const editorStore = useEditorStore();
        // 使用深拷贝恢复状态
        editorStore.components = cloneDeep(this.history[this.currentIndex]);
      }
    },
  },
});
