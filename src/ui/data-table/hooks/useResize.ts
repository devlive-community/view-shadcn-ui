import { onUnmounted, Ref, ref } from 'vue'
import { ColumnProps, DataTableHeaderEmits } from '../types'
import { calcSize } from '@/utils/common.ts'

interface UseResizeReturn
{
    isResizing: Ref<boolean>
    currentColumn: Ref<ColumnProps | null>
    handleMouseDown: (e: MouseEvent, column: ColumnProps) => void
}

export function useResize(emits: DataTableHeaderEmits): UseResizeReturn
{
    const isResizing = ref(false)
    const currentColumn = ref<ColumnProps | null>(null)
    const startX = ref(0)
    const startWidth = ref(0)
    const resizeElement = ref<HTMLElement | null>(null)

    const handleMouseDown = (e: MouseEvent, column: ColumnProps) => {
        if (!column.resizable) {
            return
        }

        e.stopPropagation()
        isResizing.value = true
        currentColumn.value = column
        startX.value = e.clientX

        // 获取当前拖拽的列元素
        const headerCell = (e.target as HTMLElement).closest('[data-resize-handle]')?.parentElement
        if (headerCell) {
            resizeElement.value = headerCell
            // 修改这里：从 column.width 获取初始宽度，如果没有则使用默认值
            startWidth.value = column.width ? parseInt(column.width) : 150
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!isResizing.value || !currentColumn.value || !resizeElement.value) {
            return
        }

        e.preventDefault()

        // 计算鼠标移动的距离
        const diffX = e.clientX - startX.value

        // 确保最小宽度
        const newWidth = Math.max(100, startWidth.value + diffX)

        // 直接设置列宽
        if (currentColumn.value) {
            // 更新列的宽度属性
            currentColumn.value.width = `${ calcSize(newWidth) }`

            // 同时更新 DOM 元素的宽度
            if (resizeElement.value) {
                resizeElement.value.style.width = `${ calcSize(newWidth) }`
            }

            // 触发 on-resizable 事件
            emits('on-resizable', currentColumn.value, newWidth)
        }
    }

    const handleMouseUp = () => {
        if (currentColumn.value) {
            // 在松开鼠标时也触发一次事件，标记调整结束
            emits('on-resizable', currentColumn.value, parseInt(currentColumn.value.width || '150'))
        }

        isResizing.value = false
        currentColumn.value = null
        resizeElement.value = null

        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
    }

    onUnmounted(() => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
    })

    return {
        isResizing,
        currentColumn,
        handleMouseDown
    }
}