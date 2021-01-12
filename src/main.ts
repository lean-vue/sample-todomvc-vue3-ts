import { createApp } from 'vue'
import App from './App.vue'

// Import Styles
import 'todomvc-app-css/index.css';

import store from './store'

createApp(App).use(store).mount('#app')
