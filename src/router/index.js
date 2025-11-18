import { createRouter, createWebHistory } from 'vue-router';
import EditorView from '../views/editor/index.vue';

const routes = [
  {
    path: '/',
    name: 'Editor',
    component: EditorView,
  },
  // You can add other routes here, for example a preview page
  // {
  //   path: '/preview',
  //   name: 'Preview',
  //   component: () => import('../views/Preview.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
