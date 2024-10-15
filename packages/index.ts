import { App } from 'vue'
import ShadcnButton from '@/ui/button'
import ShadcnCard from '@/ui/card'
import ShadcnInput from '@/ui/input'
import ShadcnModal from '@/ui/modal'

let components = [
    ShadcnButton,
    ShadcnCard,
    ShadcnInput,
    ShadcnModal
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
export { default as ShadcnInput } from '@/ui/input'
export { default as ShadcnModal } from '@/ui/modal'

// Support global import
export default install
