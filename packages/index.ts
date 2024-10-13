import { App } from 'vue'
import IButton from '@/ui/button'
import ICard from '@/ui/card'

let components = [
    IButton,
    ICard
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

export default install
