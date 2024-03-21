import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { createAuthRouter } from '@/router/auth'

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createAuthRouter(router)

export default router
