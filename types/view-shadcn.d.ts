import { App } from 'vue'

declare module 'view-shadcn-ui'
{
    export const install: (app: App) => void

    export const ShadcnButton: typeof import('@/ui/button').default
    export const ShadcnCard: typeof import('@/ui/card').default
    export const ShadcnCopy: typeof import('@/ui/copy').default
    export const ShadcnCode: typeof import('@/ui/code').default
    export const ShadcnInput: typeof import('@/ui/input').default
    export const Icon: typeof import('@/ui/icon').default
    export const ShadcnModal: typeof import('@/ui/modal').default
    export const ShadcnTooltip: typeof import('@/ui/tooltip').default
    export const ShadcnRow: typeof import('@/ui/row').default
    export const ShadcnCol: typeof import('@/ui/col/ShadcnCol.vue').default
    export const ShadcnDivider: typeof import('@/ui/divider').default
    export const ShadcnEllipsis: typeof import('@/ui/ellipsis').default
    export const ShadcnAvatar: typeof import('@/ui/avatar').default
    export const ShadcnBadge: typeof import('@/ui/badge').default
    export const ShadcnAlert: typeof import('@/ui/alert').default
    export const ShadcnProgress: typeof import('@/ui/progress').default
    export const ShadcnSpace: typeof import('@/ui/space').default
    export const ShadcnSwitch: typeof import('@/ui/switch').default
    export const ShadcnRadio: typeof import('@/ui/radio').default
    export const ShadcnRadioGroup: typeof import('@/ui/radio/group').default
    export const ShadcnCheckbox: typeof import('@/ui/checkbox').default
    export const ShadcnCheckboxGroup: typeof import('@/ui/checkbox/group').default
    export const ShadcnSelect: typeof import('@/ui/select').default
    export const ShadcnSelectOption: typeof import('@/ui/select/option').default
    export const ShadcnRate: typeof import('@/ui/rate').default
    export const ShadcnTab: typeof import('@/ui/tab').default
    export const ShadcnTabItem: typeof import('@/ui/tab/item').default
    export const ShadcnSkeleton: typeof import('@/ui/skeleton').default
    export const ShadcnSkeletonItem: typeof import('@/ui/skeleton/item').default
    export const ShadcnLayout: typeof import('@/ui/layout').default
    export const ShadcnLayoutHeader: typeof import('@/ui/layout/header').default
    export const ShadcnLayoutContent: typeof import('@/ui/layout/content').default
    export const ShadcnLayoutSider: typeof import('@/ui/layout/sider').default
    export const ShadcnLayoutFooter: typeof import('@/ui/layout/footer').default
    export const ShadcnLayoutWrapper: typeof import('@/ui/layout/wrapper').default
    export const ShadcnLayoutMain: typeof import('@/ui/layout/main').default
    export const ShadcnPagination: typeof import('@/ui/pagination').default
    export const ShadcnDrawer: typeof import('@/ui/drawer').default
    export const ShadcnMenu: typeof import('@/ui/menu').default
    export const ShadcnMenuItem: typeof import('@/ui/menu/item').default
    export const ShadcnMenuSub: typeof import('@/ui/menu/sub').default
    export const ShadcnMenuGroup: typeof import('@/ui/menu/group').default
    export const ShadcnMessage: typeof import('@/ui/message').default
    export const ShadcnTable: typeof import('@/ui/table').default
    export const ShadcnBreadcrumb: typeof import('@/ui/breadcrumb').default
    export const ShadcnBreadcrumbItem: typeof import('@/ui/breadcrumb/item').default
    export const ShadcnSlider: typeof import('@/ui/slider').default
}
