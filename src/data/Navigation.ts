import { NavigationModel, NavigationPosition } from '@/model/Navigation'
import NavigationService from '@/services/Navigation'
import { Home, LogIn, LogOut } from 'lucide-vue-next'
import { cloneDeep } from 'lodash'

const createNavigation = (): void => {
    NavigationService.addNavigation(createNavigationItem('common.common.home', undefined, '/home', Home, NavigationPosition.LEFT_TOP))
    const signIn = createNavigationItem('common.common.signIn', undefined, '/auth/signin', LogIn, NavigationPosition.LEFT_TOP)
    NavigationService.addNavigation(signIn)
    const signUp = createNavigationItem('common.common.signUp', undefined, '/auth/signup', LogOut, NavigationPosition.LEFT_BOTTOM)
    NavigationService.addNavigation(signUp)
    NavigationService.addNavigation(createNavigationItem('common.common.home',
        undefined,
        '/home',
        undefined,
        NavigationPosition.TOP,
        [],
        'common.common.home',
        undefined))
    const newSignIn = cloneDeep(signIn)
    newSignIn.position = NavigationPosition.TOP
    newSignIn.description = 'user.tip.signIn'
    const newSignUp = cloneDeep(signUp)
    newSignUp.position = NavigationPosition.TOP
    newSignUp.description = 'user.tip.signUp'
    const children = [newSignIn, newSignUp]
    NavigationService.addNavigation(createNavigationItem('common.common.home',
        undefined,
        '/home',
        undefined,
        NavigationPosition.TOP,
        children,
        'common.common.home',
        undefined))
}

const createNavigationItem = (title?: string, label?: string, href?: string, icon?: any, position?: NavigationPosition, children?: NavigationModel[], group?: string, description?: string): NavigationModel => {
    return {
        title: title,
        label: label,
        href: href,
        icon: icon,
        position: position,
        group: group,
        description: description,
        children: children
    }
}

export {
    createNavigation
}
