import { onUnmounted, ref } from 'vue'
import type { ColumnProps } from '../types'

export function useResize()
{
    const isResizing = ref(false)
    const currentColumn = ref<ColumnProps | null>(null)
    const startX = ref(0)
    const startWidth = ref(0)

    const handleMouseDown = (e: MouseEvent, column: ColumnProps) => {
        if (!column.resizable) {
            return
        }

        e.stopPropagation()
        isResizing.value = true
        currentColumn.value = column
        startX.value = e.clientX

        const headerCell = (e.target as HTMLElement).closest('th')
        if (headerCell) {
            startWidth.value = headerCell.offsetWidth
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!isResizing.value || !currentColumn.value) {
            return
        }

        e.preventDefault()

        const diffX = e.clientX - startX.value
        const newWidth = Math.max(100, startWidth.value + diffX)

        if (currentColumn.value) {
            currentColumn.value.width = `${ newWidth }px`
        }
    }

    const handleMouseUp = () => {
        isResizing.value = false
        currentColumn.value = null

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