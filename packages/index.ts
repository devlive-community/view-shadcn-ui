import { App } from 'vue'

import Message from './setup/message.ts'
import Spin from './setup/spin.ts'

import ShadcnButton from '@/ui/button'
import ShadcnButtonGroup from '@/ui/button/group'
import ShadcnCard from '@/ui/card'
import ShadcnCopy from '@/ui/copy'
import ShadcnInput from '@/ui/input'
import ShadcnIcon from '@/ui/icon'
import ShadcnModal from '@/ui/modal'
import ShadcnTooltip from '@/ui/tooltip'
import ShadcnCode from '@/ui/code'
import ShadcnRow from '@/ui/row'
import ShadcnCol from '@/ui/col/ShadcnCol.vue'
import ShadcnDivider from '@/ui/divider'
import ShadcnEllipsis from '@/ui/ellipsis'
import ShadcnAvatar from '@/ui/avatar'
import ShadcnAvatarGroup from '@/ui/avatar/group'
import ShadcnBadge from '@/ui/badge'
import ShadcnAlert from '@/ui/alert'
import ShadcnProgress from '@/ui/progress'
import ShadcnSpace from '@/ui/space'
import ShadcnSwitch from '@/ui/switch'
import ShadcnRadio from '@/ui/radio'
import ShadcnCheckbox from '@/ui/checkbox'
import ShadcnCheckboxGroup from '@/ui/checkbox/group'
import ShadcnRadioGroup from '@/ui/radio/group'
import ShadcnSelect from '@/ui/select'
import ShadcnSelectOption from '@/ui/select/option'
import ShadcnSelectGroup from '@/ui/select/group'
import ShadcnRate from '@/ui/rate'
import ShadcnTab from '@/ui/tab'
import ShadcnTabItem from '@/ui/tab/item'
import ShadcnSkeleton from '@/ui/skeleton'
import ShadcnSkeletonItem from '@/ui/skeleton/item'
import ShadcnLayout from '@/ui/layout'
import ShadcnLayoutHeader from '@/ui/layout/header'
import ShadcnLayoutContent from '@/ui/layout/content'
import ShadcnLayoutSider from '@/ui/layout/sider'
import ShadcnLayoutFooter from '@/ui/layout/footer'
import ShadcnLayoutWrapper from '@/ui/layout/wrapper'
import ShadcnLayoutMain from '@/ui/layout/main'
import ShadcnPagination from '@/ui/pagination'
import ShadcnDrawer from '@/ui/drawer'
import ShadcnMenu from '@/ui/menu'
import ShadcnMenuItem from '@/ui/menu/item'
import ShadcnMenuSub from '@/ui/menu/sub'
import ShadcnMenuGroup from '@/ui/menu/group'
import ShadcnMessage from '@/ui/message'
import ShadcnTable from '@/ui/table'
import ShadcnBreadcrumb from '@/ui/breadcrumb'
import ShadcnBreadcrumbItem from '@/ui/breadcrumb/item'
import ShadcnSlider from '@/ui/slider'
import ShadcnSpin from '@/ui/spin'
import ShadcnForm from '@/ui/form'
import ShadcnFormItem from '@/ui/form/item'
import ShadcnTimeline from '@/ui/timeline'
import ShadcnTimelineItem from '@/ui/timeline/item'
import ShadcnTrend from '@/ui/trend'
import ShadcnException from '@/ui/exception'
import ShadcnLink from '@/ui/link'
import ShadcnCollapse from '@/ui/collapse'
import ShadcnCollapseItem from '@/ui/collapse/item'
import ShadcnTag from '@/ui/tag'
import ShadcnGlobalFooter from '@/ui/footer/global'
import ShadcnToolbarFooter from '@/ui/footer/toolbar'
import ShadcnWatermark from '@/ui/watermark'
import ShadcnHighlight from '@/ui/highlight'
import ShadcnDropdown from '@/ui/dropdown'
import ShadcnDropdownItem from '@/ui/dropdown/item'
import ShadcnNumber from '@/ui/number'
import ShadcnTree from '@/ui/tree'
import ShadcnText from '@/ui/text'
import ShadcnGradientText from '@/ui/text/gradient'
import { ShadcnContextMenu, ShadcnContextMenuItem } from '@/ui/contextmenu'

let components = [
    ShadcnButton,
    ShadcnButtonGroup,
    ShadcnCard,
    ShadcnCopy,
    ShadcnCode,
    ShadcnInput,
    ShadcnIcon,
    ShadcnModal,
    ShadcnTooltip,
    ShadcnRow,
    ShadcnCol,
    ShadcnDivider,
    ShadcnEllipsis,
    ShadcnAvatar,
    ShadcnAvatarGroup,
    ShadcnBadge,
    ShadcnAlert,
    ShadcnProgress,
    ShadcnSpace,
    ShadcnSwitch,
    ShadcnRadio,
    ShadcnRadioGroup,
    ShadcnCheckbox,
    ShadcnCheckboxGroup,
    ShadcnSelect,
    ShadcnSelectOption,
    ShadcnSelectGroup,
    ShadcnRate,
    ShadcnTab,
    ShadcnTabItem,
    ShadcnSkeleton,
    ShadcnSkeletonItem,
    ShadcnLayout,
    ShadcnLayoutHeader,
    ShadcnLayoutContent,
    ShadcnLayoutSider,
    ShadcnLayoutFooter,
    ShadcnLayoutWrapper,
    ShadcnLayoutMain,
    ShadcnPagination,
    ShadcnDrawer,
    ShadcnMenu,
    ShadcnMenuItem,
    ShadcnMenuSub,
    ShadcnMenuGroup,
    ShadcnMessage,
    ShadcnTable,
    ShadcnBreadcrumb,
    ShadcnBreadcrumbItem,
    ShadcnSlider,
    ShadcnSpin,
    ShadcnForm,
    ShadcnFormItem,
    ShadcnTimeline,
    ShadcnTimelineItem,
    ShadcnTrend,
    ShadcnException,
    ShadcnLink,
    ShadcnCollapse,
    ShadcnCollapseItem,
    ShadcnTag,
    ShadcnGlobalFooter,
    ShadcnToolbarFooter,
    ShadcnWatermark,
    ShadcnHighlight,
    ShadcnDropdown,
    ShadcnDropdownItem,
    ShadcnNumber,
    ShadcnTree,
    ShadcnText,
    ShadcnGradientText,
    ShadcnContextMenu,
    ShadcnContextMenuItem
]

const install = (Vue: App) => {
    components.map((component: any) => {
        Vue.component(component.__name as string, component)
    })

    // Support global import
    Vue.config.globalProperties.$Message = Message
    Vue.config.globalProperties.$Spin = Spin
}

let windowObj = window as any

if (typeof windowObj !== 'undefined' && windowObj.Vue) {
    const vm = windowObj.Vue.createApp({})
    install(vm)
}

// Auto import css
if (typeof window !== 'undefined') {
    import('../dist/view-shadcn-ui.min.css')
}

// Support on-demand import
export { default as ShadcnButton } from '@/ui/button'
export { default as ShadcnButtonGroup } from '@/ui/button/group'
export { default as ShadcnCard } from '@/ui/card'
export { default as ShadcnCopy } from '@/ui/copy'
export { default as ShadcnCode } from '@/ui/code'
export { default as ShadcnInput } from '@/ui/input'
export { default as ShadcnIcon } from '@/ui/icon'
export { default as ShadcnModal } from '@/ui/modal'
export { default as ShadcnTooltip } from '@/ui/tooltip'
export { default as ShadcnRow } from '@/ui/row'
export { default as ShadcnCol } from '@/ui/col'
export { default as ShadcnDivider } from '@/ui/divider'
export { default as ShadcnEllipsis } from '@/ui/ellipsis'
export { default as ShadcnAvatar } from '@/ui/avatar'
export { default as ShadcnAvatarGroup } from '@/ui/avatar/group'
export { default as ShadcnBadge } from '@/ui/badge'
export { default as ShadcnAlert } from '@/ui/alert'
export { default as ShadcnProgress } from '@/ui/progress'
export { default as ShadcnSpace } from '@/ui/space'
export { default as ShadcnSwitch } from '@/ui/switch'
export { default as ShadcnRadio } from '@/ui/radio'
export { default as ShadcnRadioGroup } from '@/ui/radio/group'
export { default as ShadcnCheckbox } from '@/ui/checkbox'
export { default as ShadcnCheckboxGroup } from '@/ui/checkbox/group'
export { default as ShadcnSelect } from '@/ui/select'
export { default as ShadcnSelectOption } from '@/ui/select/option'
export { default as ShadcnSelectGroup } from '@/ui/select/group'
export { default as ShadcnRate } from '@/ui/rate'
export { default as ShadcnTab } from '@/ui/tab'
export { default as ShadcnTabItem } from '@/ui/tab/item'
export { default as ShadcnSkeleton } from '@/ui/skeleton'
export { default as ShadcnSkeletonItem } from '@/ui/skeleton/item'
export { default as ShadcnLayout } from '@/ui/layout'
export { default as ShadcnLayoutHeader } from '@/ui/layout/header'
export { default as ShadcnLayoutContent } from '@/ui/layout/content'
export { default as ShadcnLayoutSider } from '@/ui/layout/sider'
export { default as ShadcnLayoutFooter } from '@/ui/layout/footer'
export { default as ShadcnLayoutWrapper } from '@/ui/layout/wrapper'
export { default as ShadcnLayoutMain } from '@/ui/layout/main'
export { default as ShadcnPagination } from '@/ui/pagination'
export { default as ShadcnDrawer } from '@/ui/drawer'
export { default as ShadcnMenu } from '@/ui/menu'
export { default as ShadcnMenuItem } from '@/ui/menu/item'
export { default as ShadcnMenuSub } from '@/ui/menu/sub'
export { default as ShadcnMenuGroup } from '@/ui/menu/group'
export { default as ShadcnMessage } from '@/ui/message'
export { default as ShadcnTable } from '@/ui/table'
export { default as ShadcnBreadcrumb } from '@/ui/breadcrumb'
export { default as ShadcnBreadcrumbItem } from '@/ui/breadcrumb/item'
export { default as ShadcnSlider } from '@/ui/slider'
export { default as ShadcnSpin } from '@/ui/spin'
export { default as ShadcnForm } from '@/ui/form'
export { default as ShadcnFormItem } from '@/ui/form/item'
export { default as ShadcnTimeline } from '@/ui/timeline'
export { default as ShadcnTimelineItem } from '@/ui/timeline/item'
export { default as ShadcnTrend } from '@/ui/trend'
export { default as ShadcnException } from '@/ui/exception'
export { default as ShadcnLink } from '@/ui/link'
export { default as ShadcnCollapse } from '@/ui/collapse'
export { default as ShadcnCollapseItem } from '@/ui/collapse/item'
export { default as ShadcnTag } from '@/ui/tag'
export { default as ShadcnGlobalFooter } from '@/ui/footer/global'
export { default as ShadcnToolbarFooter } from '@/ui/footer/toolbar'
export { default as ShadcnWatermark } from '@/ui/watermark'
export { default as ShadcnHighlight } from '@/ui/highlight'
export { default as ShadcnDropdown } from '@/ui/dropdown'
export { default as ShadcnDropdownItem } from '@/ui/dropdown/item'
export { default as ShadcnNumber } from '@/ui/number'
export { default as ShadcnTree } from '@/ui/tree'
export { default as ShadcnText } from '@/ui/text'
export { default as ShadcnGradientText } from '@/ui/text/gradient'
export { ShadcnContextMenu, ShadcnContextMenuItem } from '@/ui/contextmenu'

// Support global import
export default install
