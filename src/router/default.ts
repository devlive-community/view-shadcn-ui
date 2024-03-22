import { Router } from 'vue-router'
import LayoutContainer from '@/views/layouts/base/LayoutContainer.vue'

const createDefaultRouter = (router: Router): void => {
    router.addRoute({
        path: '/',
        name: 'home',
        redirect: '/home',
        component: LayoutContainer,
        children: [
            {
                name: 'home',
                path: 'home',
                component: () => import('@/views/pages/home/HomeIndex.vue')
            }
        ]
    })
    createHttpRouter(router)
    createUserRouter(router)
}

/**
 * Create an HTTP router with a route for common errors.
 *
 * @param {Router} router - the router to add the route to
 * @return {void}
 */
const createHttpRouter = (router: Router): void => {
    router.addRoute({
        path: '/common',
        name: 'common',
        children: [
            {
                name: '404',
                path: '404',
                component: () => import('@/views/common/error/NotFound.vue')
            }
        ]
    })
}

/**
 * Creates a user router.
 *
 * @param {Router} router - the router to add the user routes to
 * @return {void}
 */
const createUserRouter = (router: Router): void => {
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
