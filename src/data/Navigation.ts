import { NavigationModel, NavigationPosition } from '@/model/Navigation'
import NavigationService from '@/services/Navigation'
import { Home, LogIn, LogOut } from 'lucide-vue-next'

const createNavigation = (): void => {
    NavigationService.addNavigation(createNavigationItem('Home', undefined, '/home', Home, NavigationPosition.TOP))
    NavigationService.addNavigation(createNavigationItem('Sign In', undefined, '/auth/signin', LogIn, NavigationPosition.TOP))
    NavigationService.addNavigation(createNavigationItem('Sign Up', undefined, '/auth/signup', LogOut, NavigationPosition.BOTTOM))
}

const createNavigationItem = (title?: string, label?: string, href?: string, icon?: any, position?: NavigationPosition, children?: NavigationModel[]): NavigationModel => {
    return {
        title: title,
        label: label,
        href: href,
        icon: icon,
        position: position,
        children: children
    }
}

export {
    createNavigation
}
