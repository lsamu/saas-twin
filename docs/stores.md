# Store 设计理念

本项目的状态管理使用 Pinia，并遵循模块化的设计原则。每个主要的功能域都有其独立的 Store 文件，统一存放在 `src/store/modules/` 目录下。

### 设计风格

- **组合式 API (Composition API) 风格**: 我们使用 `defineStore` 的函数形式，与 Vue 3 的组合式 API 风格保持一致。
- **状态 (State)**: 使用 `ref()` 和 `reactive()`。
- **计算属性 (Getters)**: 使用 `computed()`。
- **动作 (Actions)**: 声明为普通的 `function`。

### 核心 Stores

1.  **`appStore.js`**: 负责全局应用级别的状态（如主题、加载状态）。

2.  **`userStore.js`**: 负责管理用户信息和认证。

3.  **`editorStore.js`**: 负责管理编辑器画布的实时状态，例如：
    *   画布上的所有组件实例数据。
    *   当前选中的组件。
    *   画布的缩放、网格等设置。

4.  **`componentStore.js`**: 负责管理和维护项目可用的“物料组件”，例如：
    *   从服务器获取所有可用的组件列表。
    *   管理组件的元数据（如默认 props, 缩略图等）。

5.  **`historyStore.js`**: 负责管理编辑器的操作历史记录，实现撤销/重做功能。
    *   记录状态快照。
    *   执行撤销 (Undo) 和重做 (Redo) 逻辑。
