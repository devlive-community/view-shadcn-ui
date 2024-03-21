import { Router } from 'vue-router'

const createAuthRouter = (router: Router) => {
    router.addRoute({
        path: '/auth',
        name: 'auth',
        children: [
            {
                name: 'signup',
                path: 'signup',
                component: () => import('@/views/auth/AuthSignup.vue')
            }
        ]
    })
}

export {
    createAuthRouter
}
