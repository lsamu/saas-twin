import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router'; // Import the router
import pinia from './store';

const app = createApp(App);

app.use(pinia);
app.use(router); // Use the router
app.use(ElementPlus);

app.mount('#app');
