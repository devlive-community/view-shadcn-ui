import { createApp, h, ref } from 'vue'
import LoadingBarComponent from './ShadcnLoadingBar.vue'
import type { LoadingBarProps, LoadingBarStatus } from './types'
import axios from 'axios'

const progress = ref(0)
const visible = ref(false)
const status = ref<'default' | 'success' | 'error'>('default')
const config = ref<Partial<LoadingBarProps>>({
    height: 2,
    animate: true,
    duration: 300
})

let timer: NodeJS.Timeout | null = null
let activeRequests = 0
let networkEnabled = false

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
        duration: config.value.duration,
        animate: config.value.animate
    }) : null
})
loadingBarApp.mount(loadingBarWrapper)

let requestInterceptor: number | null = null
let responseInterceptor: number | null = null

// 导出服务
// Export the service
export const LoadingBar = {
    configure: function (options: Partial<LoadingBarProps>) {
        Object.assign(config.value, options)
    },

    enabledNetwork: function (enabled: boolean = true) {
        if (enabled && !networkEnabled) {
            // 添加拦截器
            // Add interceptors
            requestInterceptor = axios.interceptors.request.use(
                (config) => {
                    if (activeRequests === 0) {
                        LoadingBar.start()
                    }
                    activeRequests++
                    return config
                },
                (error) => {
                    if (activeRequests === 1) {
                        LoadingBar.error()
                    }
                    activeRequests = Math.max(0, activeRequests - 1)
                    return Promise.reject(error)
                }
            )

            responseInterceptor = axios.interceptors.response.use(
                (response) => {
                    activeRequests = Math.max(0, activeRequests - 1)
                    if (activeRequests === 0) {
                        LoadingBar.success()
                    }
                    return response
                },
                (error) => {
                    activeRequests = Math.max(0, activeRequests - 1)
                    if (activeRequests === 0) {
                        LoadingBar.error()
                    }
                    return Promise.reject(error)
                }
            )
        }
        else if (!enabled && networkEnabled) {
            // 移除拦截器
            // Remove interceptors
            if (requestInterceptor !== null) {
                axios.interceptors.request.eject(requestInterceptor)
                requestInterceptor = null
            }
            if (responseInterceptor !== null) {
                axios.interceptors.response.eject(responseInterceptor)
                responseInterceptor = null
            }
        }
        networkEnabled = enabled
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
