import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { createAuthRouter } from '@/router/auth'
import { createDefaultRouter } from '@/router/default'

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createAuthRouter(router)
createDefaultRouter(router)

export default router
