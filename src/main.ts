import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './routeur.inc'

createApp(App).use(router).mount('#app')
