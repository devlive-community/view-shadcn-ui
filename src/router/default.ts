import { Router } from 'vue-router'

const createDefaultRouter = (router: Router) => {
    router.addRoute({
        path: '/',
        name: 'home',
        redirect: '/auth/signup'
    })
}

export {
    createDefaultRouter
}
