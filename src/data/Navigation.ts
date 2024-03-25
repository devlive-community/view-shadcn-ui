import { NavigationModel, NavigationPosition } from '@/model/Navigation'
import NavigationService from '@/services/Navigation'
import { AudioWaveform, Ban, CircleOff, FormInput, Gauge, LogIn, LogOut, StickyNote } from 'lucide-vue-next'

const createNavigation = (): void => {
    NavigationService.addNavigation(createNavigationItem('common.common.dashboard', undefined, '/dashboard', Gauge, NavigationPosition.LEFT_TOP))
    NavigationService.addNavigation(createNavigationItem('common.common.dashboard',
        undefined,
        '/dashboard',
        undefined,
        NavigationPosition.TOP,
        [],
        'common.common.dashboard',
        undefined))
    const signIn = createNavigationItem('common.common.signIn', undefined, '/auth/signin', LogIn, NavigationPosition.TOP)
    NavigationService.addNavigation(signIn)
    const signUp = createNavigationItem('common.common.signUp', undefined, '/auth/signup', LogOut, NavigationPosition.TOP)
    NavigationService.addNavigation(signUp)

    const datacap = createNavigationItem('common.common.datacap',
        undefined,
        'https://datacap.edurt.io',
        undefined,
        NavigationPosition.TOP,
        undefined
        , undefined,
        'common.tip.datacap',
        true)
    const openProject = createNavigationItem('common.common.openProject',
        undefined,
        '/open-project',
        undefined,
        NavigationPosition.TOP,
        [datacap],
        'common.common.openProject')
    NavigationService.addNavigation(openProject)

    const form = createNavigationItem('form.common.formBasic', undefined, '/forms/basic', AudioWaveform, NavigationPosition.LEFT_TOP)
    const formWithAction = createNavigationItem('form.common.formWithAction', undefined, '/forms/withAction', AudioWaveform, NavigationPosition.LEFT_TOP)
    const formWithSplitField = createNavigationItem('form.common.formWithSplitField', undefined, '/forms/withSplitField', AudioWaveform, NavigationPosition.LEFT_TOP)
    const formWithImage = createNavigationItem('form.common.formWithImage', undefined, '/forms/withImage', AudioWaveform, NavigationPosition.LEFT_TOP)
    const formWithThird = createNavigationItem('form.common.formWithThird', undefined, '/forms/withThird', AudioWaveform, NavigationPosition.LEFT_TOP)
    const formArray = [form, formWithAction, formWithSplitField, formWithImage, formWithThird]
    const froms = createNavigationItem('form.common.form', formArray.length.toString(), '/forms', FormInput, NavigationPosition.LEFT_TOP,
        formArray, undefined, 'common.common.form')
    NavigationService.addNavigation(froms)

    const page404 = createNavigationItem('common.common.page404', undefined, '/common/404', Ban, NavigationPosition.LEFT_TOP)
    const page403 = createNavigationItem('common.common.page403', undefined, '/common/403', CircleOff, NavigationPosition.LEFT_TOP)
    const pageArray = [page404, page403]
    const pages = createNavigationItem('common.common.page', pageArray.length.toString(), '/pages', StickyNote,
        NavigationPosition.LEFT_TOP, pageArray, undefined, 'common.common.page')
    NavigationService.addNavigation(pages)
}

const createNavigationItem = (title?: string, label?: string, href?: string, icon?: any, position?: NavigationPosition, children?: NavigationModel[], group?: string, description?: string, blank?: boolean): NavigationModel => {
    return {
        title: title,
        label: label,
        href: href,
        icon: icon,
        position: position,
        group: group,
        description: description,
        children: children,
        external: blank
    }
}

export {
    createNavigation
}
