import { App } from 'vue'
import ShadcnButton from '@/ui/button'
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
import ShadcnBadge from '@/ui/badge'
import ShadcnAlert from '@/ui/alert'
import ShadcnProgress from '@/ui/progress'
import ShadcnSpace from '@/ui/space'

let components = [
    ShadcnButton,
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
    ShadcnBadge,
    ShadcnAlert,
    ShadcnProgress,
    ShadcnSpace
]

const install = (Vue: App) => {
    components.map((component: any) => {
        Vue.component(component.__name as string, component)
    })
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
export { default as ShadcnBadge } from '@/ui/badge'
export { default as ShadcnAlert } from '@/ui/alert'
export { default as ShadcnProgress } from '@/ui/progress'
export { default as ShadcnSpace } from '@/ui/space'

// Support global import
export default install
