import { defineStore } from 'pinia';

export const useEditorStore = defineStore('editor', {
  state: () => ({
    // 画布中的所有组件
    components: [],
    // 当前选中的组件ID
    activeComponentId: null,
  }),

  getters: {
    // 获取当前选中的组件
    activeComponent: (state) => {
      return state.components.find(c => c.id === state.activeComponentId);
    },
  },

  actions: {
    // 添加一个组件到画布
    addComponent(component) {
      this.components.push(component);
    },

    // 更新所有组件
    updateComponents(components) {
      this.components = components;
    },

    // 设置当前选中的组件
    setActiveComponent(componentId) {
      this.activeComponentId = componentId;
    },

    // 更新组件属性
    updateComponentProps({ id, props }) {
      const component = this.components.find(c => c.id === id);
      if (component) {
        if(component.props) {
          Object.assign(component.props, props);
        } else {
          component.props = props;
        }
      }
    },
  },
});
