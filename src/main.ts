import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import i18n from '@/i18n'
import './style.css'
import './assets/index.css'

// Import mock data
import '@/data/index'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.provide('$t', i18n.global.t)
app.mount('#app')
