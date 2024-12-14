import { createApp, h, ref } from 'vue'
import LoadingBarComponent from './ShadcnLoadingBar.vue'

const progress = ref(0)
const visible = ref(false)
const status = ref<'default' | 'success' | 'error'>('default')
let timer: NodeJS.Timeout | null = null

// 创建一个包装器 div 来挂载 LoadingBar
// Create a wrapper div to mount the LoadingBar
const loadingBarWrapper = document.createElement('div')
// 设置包装器样式
// Set the wrapper style
loadingBarWrapper.style.position = 'fixed'
loadingBarWrapper.style.top = '0'
loadingBarWrapper.style.left = '0'
loadingBarWrapper.style.right = '0'
loadingBarWrapper.style.zIndex = '9999'
document.body.appendChild(loadingBarWrapper)

// 创建并挂载 LoadingBar 组件
// Create and mount the LoadingBar component
const loadingBarApp = createApp({
    render: () => visible.value ? h(LoadingBarComponent, {
        modelValue: progress.value,
        class: 'w-full',
        status: status.value
    }) : null
})
loadingBarApp.mount(loadingBarWrapper)

// 导出服务
// Export the service
export const LoadingBar = {
    start: function () {
        visible.value = true
        progress.value = 0
        status.value = 'default'

        if (timer) {
            clearInterval(timer)
        }

        timer = setInterval(() => {
            if (progress.value < 90) {
                const remaining = 100 - progress.value
                const increment = remaining / 10
                progress.value += Math.min(increment, 3)
            }
        }, 200)
    },

    done: function (type: 'success' | 'error' = 'success') {
        if (timer) {
            clearInterval(timer)
            timer = null
        }

        status.value = type
        progress.value = 100

        setTimeout(() => {
            progress.value = 0
            visible.value = false
            status.value = 'default'
        }, 500)
    },

    error: function () {
        this.done('error')
    },

    success: function () {
        this.done('success')
    }
}
