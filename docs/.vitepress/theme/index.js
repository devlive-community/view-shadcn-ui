import DefaultTheme from 'vitepress/theme'

import CodeRunner from './components/CodeRunner.vue'
import ApiTable from "./components/ApiTable.vue";

export default {
    ...DefaultTheme,
    enhanceApp: async ({app, router, siteData}) => {
        // Fixed window is not defined
        if (!import.meta.env.SSR) {
            const module = await import('view-shadcn-ui')
            app.use(module.default)
        }

        app.component('CodeRunner', CodeRunner)
        app.component('ApiTable', ApiTable)
    }
}