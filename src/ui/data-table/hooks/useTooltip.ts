import { onBeforeUnmount, onMounted, ref } from 'vue'
import { calcSize } from '@/utils/common.ts'

export function useTooltip()
{
    let tooltipEl = ref<HTMLElement | null>(null)

    // 创建 tooltip 元素
    onMounted(() => {
        tooltipEl.value = document.createElement('div')
        tooltipEl.value.className = 'hidden fixed z-50 bg-gray-800 text-white text-sm rounded-lg py-2 px-3 max-w-xs whitespace-normal'
        document.body.appendChild(tooltipEl.value)
    })

    // 清理 tooltip 元素
    onBeforeUnmount(() => {
        tooltipEl.value?.remove()
    })

    // 显示 tooltip
    const showTooltip = (event: MouseEvent, content: string) => {
        if (!tooltipEl.value) {
            return
        }

        tooltipEl.value.textContent = content
        tooltipEl.value.className = 'fixed z-50 bg-gray-800 text-white text-sm rounded-lg py-2 px-3 max-w-xs whitespace-normal'

        const tooltipRect = tooltipEl.value.getBoundingClientRect()

        // 计算位置，使 tooltip 在鼠标位置居中并默认显示在上方
        let left = event.clientX - (tooltipRect.width / 2)
        let top = event.clientY - tooltipRect.height - 12 // 默认在鼠标上方，留出 12px 间距

        // 检查右边界
        if (left + tooltipRect.width > window.innerWidth) {
            left = window.innerWidth - tooltipRect.width - 8
        }
        // 检查左边界
        if (left < 8) {
            left = 8
        }

        // 如果上方空间不足，则显示在下方
        if (top < 8) {
            top = event.clientY + 12 // 显示在鼠标下方
        }

        tooltipEl.value.style.left = `${ calcSize(left) }`
        tooltipEl.value.style.top = `${ calcSize(top) }`
    }

    // 隐藏 tooltip
    const hideTooltip = () => {
        if (tooltipEl.value) {
            tooltipEl.value.className = 'hidden fixed z-50 bg-gray-800 text-white text-sm rounded-lg py-2 px-3 max-w-xs whitespace-normal'
        }
    }

    return {
        showTooltip,
        hideTooltip
    }
}