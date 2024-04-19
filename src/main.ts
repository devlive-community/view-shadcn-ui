import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import i18n from '@/i18n'
import moment from 'moment'
import './style.css'
import './assets/index.css'

// Import mock data
import '@/data/index'

import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(MotionPlugin)
app.provide('$t', i18n.global.t)
// Setting moment
app.config.globalProperties.$dt = moment
app.provide('$dt', moment)
app.mount('#app')
