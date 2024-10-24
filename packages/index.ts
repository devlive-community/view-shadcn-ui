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
import ShadcnSwitch from '@/ui/switch'
import ShadcnRadio from '@/ui/radio'
import ShadcnCheckbox from '@/ui/checkbox'
import ShadcnCheckboxGroup from '@/ui/checkbox/group'
import ShadcnRadioGroup from '@/ui/radio/group'
import ShadcnSelect from '@/ui/select'
import ShadcnSelectOption from '@/ui/select/option'
import ShadcnRate from '@/ui/rate'

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
    ShadcnSpace,
    ShadcnSwitch,
    ShadcnRadio,
    ShadcnRadioGroup,
    ShadcnCheckbox,
    ShadcnCheckboxGroup,
    ShadcnSelect,
    ShadcnSelectOption,
    ShadcnRate
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
export { default as ShadcnSwitch } from '@/ui/switch'
export { default as ShadcnRadio } from '@/ui/radio'
export { default as ShadcnRadioGroup } from '@/ui/radio/group'
export { default as ShadcnCheckbox } from '@/ui/checkbox'
export { default as ShadcnCheckboxGroup } from '@/ui/checkbox/group'
export { default as ShadcnSelect } from '@/ui/select'
export { default as ShadcnSelectOption } from '@/ui/select/option'
export { default as ShadcnRate } from '@/ui/rate'

// Support global import
export default install
