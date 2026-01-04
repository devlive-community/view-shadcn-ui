import { App } from 'vue'

import Message from './setup/message.ts'
import Spin from './setup/spin.ts'

import { Language, setLocale } from '@/utils/locale.ts'

import { ShadcnButton, ShadcnButtonGroup } from '@/ui/button'
import { ShadcnCard } from '@/ui/card'
import { ShadcnCopy } from '@/ui/copy'
import { ShadcnInput } from '@/ui/input'
import { ShadcnIcon } from '@/ui/icon'
import { ShadcnModal } from '@/ui/modal'
import { ShadcnTooltip } from '@/ui/tooltip'
import { ShadcnCodeEditor } from '@/ui/code-editor'
import { ShadcnRow } from '@/ui/row'
import { ShadcnCol } from '@/ui/col'
import { ShadcnDivider } from '@/ui/divider'
import { ShadcnEllipsis } from '@/ui/ellipsis'
import { ShadcnAvatar, ShadcnAvatarGroup } from '@/ui/avatar'
import { ShadcnBadge } from '@/ui/badge'
import { ShadcnAlert } from '@/ui/alert'
import { ShadcnProgress } from '@/ui/progress'
import { ShadcnSpace } from '@/ui/space'
import { ShadcnSwitch } from '@/ui/switch'
import { ShadcnRadio, ShadcnRadioGroup } from '@/ui/radio'
import { ShadcnCheckbox, ShadcnCheckboxGroup } from '@/ui/checkbox'
import { ShadcnSelect, ShadcnSelectGroup, ShadcnSelectOption } from '@/ui/select'
import { ShadcnRate } from '@/ui/rate'
import { ShadcnTab, ShadcnTabItem } from '@/ui/tab'
import { ShadcnSkeleton, ShadcnSkeletonItem } from '@/ui/skeleton'
import { ShadcnLayout, ShadcnLayoutContent, ShadcnLayoutFooter, ShadcnLayoutHeader, ShadcnLayoutSider } from '@/ui/layout'
import { ShadcnPagination } from '@/ui/pagination'
import { ShadcnDrawer } from '@/ui/drawer'
import { ShadcnMenu, ShadcnMenuGroup, ShadcnMenuItem, ShadcnMenuSub } from '@/ui/menu'
import { ShadcnMessage } from '@/ui/message'
import { ShadcnTable } from '@/ui/table'
import { ShadcnBreadcrumb, ShadcnBreadcrumbItem } from '@/ui/breadcrumb'
import { ShadcnSlider } from '@/ui/slider'
import { ShadcnSpin } from '@/ui/spin'
import { ShadcnForm, ShadcnFormItem } from '@/ui/form'
import { ShadcnTimeline, ShadcnTimelineItem } from '@/ui/timeline'
import { ShadcnTrend } from '@/ui/trend'
import { ShadcnException } from '@/ui/exception'
import { ShadcnLink } from '@/ui/link'
import { ShadcnCollapse, ShadcnCollapseItem } from '@/ui/collapse'
import { ShadcnTag } from '@/ui/tag'
import { ShadcnGlobalFooter, ShadcnToolbarFooter } from '@/ui/footer'
import { ShadcnWatermark } from '@/ui/watermark'
import { ShadcnHighlight } from '@/ui/highlight'
import { ShadcnDropdown, ShadcnDropdownItem } from '@/ui/dropdown'
import { ShadcnNumber } from '@/ui/number'
import { ShadcnTree } from '@/ui/tree'
import { ShadcnGradientText, ShadcnText } from '@/ui/text'
import { ShadcnContextMenu, ShadcnContextMenuItem, ShadcnContextMenuSub } from '@/ui/contextmenu'
import { ShadcnHoverCard } from '@/ui/hover-card'
import { ShadcnToggle, ShadcnToggleGroup } from '@/ui/toggle'
import { ShadcnDataBuilderCanvas, ShadcnDataBuilderConfigure, ShadcnDataBuilderEditor, ShadcnDataBuilderPanel, ShadcnDataBuilderView } from '@/ui/data-builder'
import { ShadcnUpload } from '@/ui/upload'
import { ShadcnLogger } from '@/ui/logger'
import { ShadcnScrollbar } from '@/ui/scrollbar'
import { ShadcnCountDown } from '@/ui/count-down'
import { ShadcnEmpty } from '@/ui/empty'
import { ShadcnBackTop } from '@/ui/back-top'
import { ShadcnWorkflowEditor, ShadcnWorkflowView } from '@/ui/workflow'
import { ShadcnInputTag } from '@/ui/input-tag'
import { ShadcnMap } from '@/ui/map'
import { ShadcnLoadingBar } from '@/ui/loading-bar'
import { ShadcnFloatButton } from '@/ui/float-button'
import { ShadcnDataFilter, ShadcnHierarchicalDataFilter } from '@/ui/data-filter'
import { ShadcnQrCode } from '@/ui/qrcode'
import { ShadcnTimePicker } from '@/ui/time-picker'
import { ShadcnColorPicker } from '@/ui/color-picker'
import { ShadcnDatePicker } from '@/ui/date-picker'
import { ShadcnCron } from '@/ui/cron'
import { ShadcnContribution } from '@/ui/contribution'
import { ShadcnMention } from '@/ui/mention'
import { ShadcnImage, ShadcnImageGroup, ShadcnImageViewer } from '@/ui/image'
import { ShadcnCarousel } from '@/ui/carousel'
import { ShadcnCellInputEditor, ShadcnCellSelectEditor, ShadcnDataTable } from '@/ui/data-table'
import { ShadcnMarquee } from '@/ui/marquee'
import { ShadcnNotification, ShadcnNotificationItem } from '@/ui/notification'
import { ShadcnTime } from '@/ui/time'
import { ShadcnIPInput } from '@/ui/ip-input'
import { ShadcnMarkdown } from '@/ui/markdown'
import { ShadcnTransfer } from '@/ui/transfer'

let components = [
    ShadcnButton, ShadcnButtonGroup,
    ShadcnCard,
    ShadcnCopy,
    ShadcnCodeEditor,
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
    ShadcnRadio, ShadcnRadioGroup,
    ShadcnCheckbox, ShadcnCheckboxGroup,
    ShadcnSelect, ShadcnSelectOption, ShadcnSelectGroup,
    ShadcnRate,
    ShadcnTab, ShadcnTabItem,
    ShadcnSkeleton, ShadcnSkeletonItem,
    ShadcnLayout, ShadcnLayoutHeader, ShadcnLayoutContent, ShadcnLayoutSider, ShadcnLayoutFooter,
    ShadcnPagination,
    ShadcnDrawer,
    ShadcnMenu, ShadcnMenuItem, ShadcnMenuSub, ShadcnMenuGroup,
    ShadcnMessage,
    ShadcnTable,
    ShadcnBreadcrumb, ShadcnBreadcrumbItem,
    ShadcnSlider,
    ShadcnSpin,
    ShadcnForm, ShadcnFormItem,
    ShadcnTimeline, ShadcnTimelineItem,
    ShadcnTrend,
    ShadcnException,
    ShadcnLink,
    ShadcnCollapse, ShadcnCollapseItem,
    ShadcnTag,
    ShadcnGlobalFooter, ShadcnToolbarFooter,
    ShadcnWatermark,
    ShadcnHighlight,
    ShadcnDropdown, ShadcnDropdownItem,
    ShadcnNumber,
    ShadcnTree,
    ShadcnText, ShadcnGradientText,
    ShadcnContextMenu, ShadcnContextMenuItem, ShadcnContextMenuSub,
    ShadcnHoverCard,
    ShadcnToggle, ShadcnToggleGroup,
    ShadcnDataBuilderPanel, ShadcnDataBuilderCanvas, ShadcnDataBuilderConfigure, ShadcnDataBuilderEditor, ShadcnDataBuilderView,
    ShadcnUpload,
    ShadcnLogger,
    ShadcnScrollbar,
    ShadcnCountDown,
    ShadcnEmpty,
    ShadcnBackTop,
    ShadcnWorkflowEditor, ShadcnWorkflowView,
    ShadcnInputTag,
    ShadcnMap,
    ShadcnLoadingBar,
    ShadcnFloatButton,
    ShadcnDataFilter, ShadcnHierarchicalDataFilter,
    ShadcnQrCode,
    ShadcnTimePicker,
    ShadcnColorPicker,
    ShadcnDatePicker,
    ShadcnCron,
    ShadcnContribution,
    ShadcnMention,
    ShadcnImage, ShadcnImageGroup, ShadcnImageViewer,
    ShadcnCarousel,
    ShadcnDataTable, ShadcnCellInputEditor, ShadcnCellSelectEditor,
    ShadcnMarquee,
    ShadcnNotification, ShadcnNotificationItem,
    ShadcnTime,
    ShadcnIPInput,
    ShadcnMarkdown,
    ShadcnTransfer
]

interface InstallOptions
{
    locale?: Language
}

const install = (Vue: App, options: InstallOptions = {}) => {
    // 设置语言
    // Set language
    if (options.locale) {
        setLocale(options.locale)
    }

    components.map((component: any) => {
        Vue.component(component.__name as string, component)
    })

    // Support global import
    Vue.config.globalProperties.$Message = Message
    Vue.config.globalProperties.$Spin = Spin
    Vue.config.globalProperties.$setLocale = setLocale
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
export { ShadcnButton, ShadcnButtonGroup } from '@/ui/button'
export { ShadcnCard } from '@/ui/card'
export { ShadcnCopy } from '@/ui/copy'
export { ShadcnCodeEditor } from '@/ui/code-editor'
export { ShadcnInput } from '@/ui/input'
export { ShadcnIcon } from '@/ui/icon'
export { ShadcnModal } from '@/ui/modal'
export { ShadcnTooltip } from '@/ui/tooltip'
export { ShadcnRow } from '@/ui/row'
export { ShadcnCol } from '@/ui/col'
export { ShadcnDivider } from '@/ui/divider'
export { ShadcnEllipsis } from '@/ui/ellipsis'
export { ShadcnAvatar, ShadcnAvatarGroup } from '@/ui/avatar'
export { ShadcnBadge } from '@/ui/badge'
export { ShadcnAlert } from '@/ui/alert'
export { ShadcnProgress } from '@/ui/progress'
export { ShadcnSpace } from '@/ui/space'
export { ShadcnSwitch } from '@/ui/switch'
export { ShadcnRadio, ShadcnRadioGroup } from '@/ui/radio'
export { ShadcnCheckbox, ShadcnCheckboxGroup } from '@/ui/checkbox'
export { ShadcnSelect, ShadcnSelectOption, ShadcnSelectGroup } from '@/ui/select'
export { ShadcnRate } from '@/ui/rate'
export { ShadcnTab, ShadcnTabItem } from '@/ui/tab'
export { ShadcnSkeleton, ShadcnSkeletonItem } from '@/ui/skeleton'
export { ShadcnLayout, ShadcnLayoutContent, ShadcnLayoutFooter, ShadcnLayoutHeader, ShadcnLayoutSider } from '@/ui/layout'
export { ShadcnPagination } from '@/ui/pagination'
export { ShadcnDrawer } from '@/ui/drawer'
export { ShadcnMenu, ShadcnMenuItem, ShadcnMenuSub, ShadcnMenuGroup } from '@/ui/menu'
export { ShadcnMessage } from '@/ui/message'
export { ShadcnTable } from '@/ui/table'
export { ShadcnBreadcrumb, ShadcnBreadcrumbItem } from '@/ui/breadcrumb'
export { ShadcnSlider } from '@/ui/slider'
export { ShadcnSpin } from '@/ui/spin'
export { ShadcnForm, ShadcnFormItem } from '@/ui/form'
export { ShadcnTimeline, ShadcnTimelineItem } from '@/ui/timeline'
export { ShadcnTrend } from '@/ui/trend'
export { ShadcnException } from '@/ui/exception'
export { ShadcnLink } from '@/ui/link'
export { ShadcnCollapse, ShadcnCollapseItem } from '@/ui/collapse'
export { ShadcnTag } from '@/ui/tag'
export { ShadcnGlobalFooter, ShadcnToolbarFooter } from '@/ui/footer'
export { ShadcnWatermark } from '@/ui/watermark'
export { ShadcnHighlight } from '@/ui/highlight'
export { ShadcnDropdown, ShadcnDropdownItem } from '@/ui/dropdown'
export { ShadcnNumber } from '@/ui/number'
export { ShadcnTree } from '@/ui/tree'
export { ShadcnText, ShadcnGradientText } from '@/ui/text'
export { ShadcnContextMenu, ShadcnContextMenuItem, ShadcnContextMenuSub } from '@/ui/contextmenu'
export { ShadcnHoverCard } from '@/ui/hover-card'
export { ShadcnToggle, ShadcnToggleGroup } from '@/ui/toggle'
export { ShadcnDataBuilderPanel, ShadcnDataBuilderCanvas, ShadcnDataBuilderConfigure, ShadcnDataBuilderEditor, ShadcnDataBuilderView } from '@/ui/data-builder'
export { ShadcnUpload } from '@/ui/upload'
export { ShadcnLogger } from '@/ui/logger'
export { ShadcnScrollbar } from '@/ui/scrollbar'
export { ShadcnCountDown } from '@/ui/count-down'
export { ShadcnEmpty } from '@/ui/empty'
export { ShadcnBackTop } from '@/ui/back-top'
export { ShadcnWorkflowEditor, ShadcnWorkflowView } from '@/ui/workflow'
export { ShadcnInputTag } from '@/ui/input-tag'
export { ShadcnMap } from '@/ui/map'
export { ShadcnLoadingBar } from '@/ui/loading-bar'
export { ShadcnFloatButton } from '@/ui/float-button'
export { ShadcnDataFilter, ShadcnHierarchicalDataFilter } from '@/ui/data-filter'
export { ShadcnQrCode } from '@/ui/qrcode'
export { ShadcnTimePicker } from '@/ui/time-picker'
export { ShadcnColorPicker } from '@/ui/color-picker'
export { ShadcnDatePicker } from '@/ui/date-picker'
export { ShadcnCron } from '@/ui/cron'
export { ShadcnContribution } from '@/ui/contribution'
export { ShadcnMention } from '@/ui/mention'
export { ShadcnImage, ShadcnImageGroup, ShadcnImageViewer } from '@/ui/image'
export { ShadcnCarousel } from '@/ui/carousel'
export { ShadcnDataTable, ShadcnCellInputEditor, ShadcnCellSelectEditor } from '@/ui/data-table'
export { ShadcnMarquee } from '@/ui/marquee'
export { ShadcnNotification, ShadcnNotificationItem } from '@/ui/notification'
export { ShadcnTime } from '@/ui/time'
export { ShadcnIPInput } from '@/ui/ip-input'
export { ShadcnMarkdown } from '@/ui/markdown'
export { ShadcnTransfer } from '@/ui/transfer'

// Export functions
export { fnToString, fnToFunction } from '@/utils/formatter'
export { formatLogger, formatFromExample, formatMultipleLines, formatLoggerFromStream } from '@/utils/logger'
export { randomUUID, validateUUID } from '@/utils/uuid'
export { getRecentTriggerTime } from '@/utils/cron'
export { LoadingBar } from '@/ui/loading-bar/service'

// Export locale
export { setLocale }

// Support global import
export default install
