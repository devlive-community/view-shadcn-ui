import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import ViewShadcnUI from 'view-shadcn-ui'
import Playground from './components/playground.vue'

const app = createApp(App)

app.use(ViewShadcnUI)
app.component('Playground', Playground)
app.mount('#app')