import { NavigationModel } from '@/model/Navigation'
import NavigationService from '@/services/Navigation'
import { Home } from 'lucide-vue-next'

const createNavigation = (): void => {
    NavigationService.addNavigation(createNavigationItem('Home', undefined, '/home', Home))
}

const createNavigationItem = (title?: string, label?: string, href?: string, icon?: any, children?: NavigationModel[]): NavigationModel => {
    return {
        title: title,
        label: label,
        href: href,
        icon: icon,
        children: children
    }
}

export {
    createNavigation
}
