import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

import ViewShadcnUI from '../packages/index'

const app = createApp(App)
app.use(ViewShadcnUI)
app.mount('#app')
