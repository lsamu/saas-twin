# 文件结构

这是一个基于 Vue.js 的项目，使用了 Element Plus 作为 UI 库，Pinia 作为状态管理器。

```
saas-twin/
├── public/               # 公共静态资源，打包时不经 Webpack 处理
│   └── index.html        # 应用的 HTML 入口文件
├── src/                  # 项目核心源代码
│   ├── assets/             # 静态资源 (图片, 字体, 样式文件等)
│   │   ├── images/
│   │   └── styles/
│   ├── components/         # 全局可复用 Vue 组件
│   │   ├── common/         # 通用基础组件 (如按钮, 模态框等)
│   │   ├── editor/         # 编辑器核心功能组件
│   │   │   ├── header/       # 编辑器头部
│   │   │   │   └── index.vue
│   │   │   ├── footer/       # 编辑器底部
│   │   │   │   └── index.vue
│   │   │   ├── layer/        # 图层/层次管理
│   │   │   │   └── index.vue
│   │   │   ├── component-list/ # 可用组件列表
│   │   │   │   └── index.vue
│   │   │   ├── canvas/       # 编辑器画布
│   │   │   │   └── index.vue
│   │   │   ├── canvas-render/ # 画布渲染引擎
│   │   │   │   └── index.vue
│   │   │   ├── prop-editor/  # 属性编辑器
│   │   │   │   └── index.vue
│   │   │   ├── event-editor/ # 事件编辑器
│   │   │   │   └── index.vue
│   │   │   ├── animation-editor/ # 动画编辑器
│   │   │   │   └── index.vue
│   │   │   ├── data-source-editor/ # 数据源编辑器
│   │   │   │   └── index.vue
│   │   │   ├── template/     # 模板库
│   │   │   │   └── index.vue
│   │   │   └── res/          # 3D资源/素材库
│   │   │       └── index.vue
│   │   ├── design/         # 孪生设计器相关组件
│   │   └── system/         # 系统/布局级别组件 (如导航栏, 侧边栏)
│   ├── views/              # 页面级组件 (路由对应的视图)
│   │   ├── design/         # 设计器页面
│   │   │   └── index.vue
│   │   ├── editor/         # 编辑器页面
│   │   │   └── index.vue
│   │   ├── preview/        # 预览页面
│   │   │   └── index.vue
│   │   └── view/           # 查看器页面
│   │       └── index.vue
│   ├── router/             # Vue Router 路由配置
│   │   └── index.js
│   ├── store/              # Pinia 状态管理
│   │   ├── modules/        # 按模块拆分 store
│   │   └── index.js        # 主 store 文件
│   ├── api/                # API 请求模块
│   │   ├── index.js        # API 入口，统一导出
│   │   └── user.js
│   ├── hooks/              # 自定义 Vue Composables (Hooks)
│   ├── utils/              # 工具函数
│   ├── layouts/            # 布局组件 (管理通用页面结构)
│   ├── App.vue             # 根组件
│   └── main.js             # 应用入口文件
├── tests/                # 测试文件
│   ├── unit/               # 单元测试
│   └── e2e/                # 端到端测试
├── .env.development      # 开发环境变量
├── .env.production       # 生产环境变量
├── .gitignore            # Git 忽略配置
├── package.json          # 项目依赖和脚本配置
├── vite.config.js        # Vite 项目配置文件
└── README.md             # 项目说明
```
