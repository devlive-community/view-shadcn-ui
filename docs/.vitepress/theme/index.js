import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import CodeRunner from './components/CodeRunner.vue'
import ApiTable from './components/ApiTable.vue'

import './css/override.css'

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {})
    },
    enhanceApp: async ({ app, router, siteData }) => {
        // Fixed window is not defined
        if (!import.meta.env.SSR) {
            const module = await import('view-shadcn-ui')
            app.use(module.default)
        }

        app.component('CodeRunner', CodeRunner)
        app.component('ApiTable', ApiTable)
    }
}