import { Router } from 'vue-router'

const createAuthRouter = (router: Router): void => {
    router.addRoute({
        path: '/auth',
        name: 'auth',
        children: [
            {
                name: 'signup',
                path: 'signup',
                component: () => import('@/views/auth/AuthSignup.vue')
            },
            {
                name: 'signin',
                path: 'signin',
                component: () => import('@/views/auth/AuthSignin.vue')
            }
        ]
    })
}

export {
    createAuthRouter
}
