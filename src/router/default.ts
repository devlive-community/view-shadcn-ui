import { Router } from 'vue-router'

const createDefaultRouter = (router: Router) => {
    router.addRoute({
        path: '/',
        name: 'home',
        redirect: '/auth/signup'
    })
    createUserRouter(router)
}

/**
 * Creates a user router.
 *
 * @param {Router} router - the router to add the user routes to
 * @return {void}
 */
const createUserRouter = (router: Router) => {
    router.addRoute({
        path: '/user',
        name: 'user',
        children: [
            {
                name: 'forgot',
                path: 'forgot',
                children: [
                    {
                        name: 'password',
                        path: 'password',
                        component: () => import('@/views/pages/user/ForgotPassword.vue')
                    }
                ]
            }
        ]
    })
}

export {
    createDefaultRouter
}
