import { NavigationModel, NavigationPosition } from '@/model/Navigation'
import NavigationService from '@/services/Navigation'
import { Home, LogIn, LogOut } from 'lucide-vue-next'

const createNavigation = (): void => {
    NavigationService.addNavigation(createNavigationItem('common.common.home', undefined, '/home', Home, NavigationPosition.LEFT_TOP))
    NavigationService.addNavigation(createNavigationItem('common.common.signIn', undefined, '/auth/signin', LogIn, NavigationPosition.LEFT_TOP))
    NavigationService.addNavigation(createNavigationItem('common.common.signUp', undefined, '/auth/signup', LogOut, NavigationPosition.BOTTOM))
    NavigationService.addNavigation(createNavigationItem('common.common.home',
        undefined,
        '/home',
        undefined,
        NavigationPosition.TOP,
        [],
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
