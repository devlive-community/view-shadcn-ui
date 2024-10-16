import DefaultTheme from 'vitepress/theme'
import ViewShadcnUI from 'view-shadcn-ui'

import CodeRunner from './components/CodeRunner.vue'
import ApiTable from "./components/ApiTable.vue";

export default {
    ...DefaultTheme,
    enhanceApp: async ({app, router, siteData}) => {
        app.use(ViewShadcnUI)
        app.component('CodeRunner', CodeRunner)
        app.component('ApiTable', ApiTable)
    }
}
