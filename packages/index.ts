import { App } from 'vue'
import ShadcnButton from '@/ui/button'
import ShadcnCard from '@/ui/card'
import ShadcnCopy from '@/ui/copy'
import ShadcnInput from '@/ui/input'
import ShadcnIcon from '@/ui/icon'
import ShadcnModal from '@/ui/modal'
import ShadcnTooltip from '@/ui/tooltip'

let components = [
    ShadcnButton,
    ShadcnCard,
    ShadcnCopy,
    ShadcnInput,
    ShadcnIcon,
    ShadcnModal,
    ShadcnTooltip
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
export { default as ShadcnInput } from '@/ui/input'
export { default as ShadcnIcon } from '@/ui/icon'
export { default as ShadcnModal } from '@/ui/modal'
export { default as ShadcnTooltip } from '@/ui/tooltip'

// Support global import
export default install
