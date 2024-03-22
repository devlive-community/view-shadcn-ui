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

router.beforeEach((_to, _from, _next): void => {
    if (_to.matched.length === 0) {
        _next('/common/404')
    }
    else {
        _next()
    }
})

export default router
