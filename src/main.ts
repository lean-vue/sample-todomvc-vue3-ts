import { createApp } from 'vue'
import App from './App.vue'

// Import Styles
import 'todomvc-app-css/index.css';

import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
