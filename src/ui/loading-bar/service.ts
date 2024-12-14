import { createApp, h, ref } from 'vue'
import LoadingBarComponent from './ShadcnLoadingBar.vue'
import type { LoadingBarProps, LoadingBarStatus } from './types'

const progress = ref(0)
const visible = ref(false)
const status = ref<LoadingBarStatus>('default')

// 配置选项
// Configuration options
const config = ref<Partial<LoadingBarProps>>({
    height: 2,
    color: '#2563eb',
    duration: 300,
    animate: true
})

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
        status: status.value,
        height: config.value.height,
        color: config.value.color,
        duration: config.value.duration,
        animate: config.value.animate
    }) : null
})
loadingBarApp.mount(loadingBarWrapper)

// 导出服务
// Export the service
export const LoadingBar = {
    configure: function (options: Partial<LoadingBarProps>) {
        Object.assign(config.value, options)
    },

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

    done: function (type: LoadingBarStatus = 'success') {
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
