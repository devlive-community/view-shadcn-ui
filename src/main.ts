import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './style.css'
import './assets/index.css'

// Import mock data
import '@/data/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
