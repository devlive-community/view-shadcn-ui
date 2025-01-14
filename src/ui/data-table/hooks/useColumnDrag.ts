import { ref, Ref } from 'vue'
import type { ColumnProps } from '../types'

export const useColumnDrag = (
    columns: Ref<ColumnProps[]>,
    enabled: boolean = false,
    emit: (event: 'on-column-move', columns: ColumnProps[]) => void
) => {
    const dragOverColumn = ref<ColumnProps | null>(null)

    const handleDragStart = (column: ColumnProps, event: DragEvent) => {
        if (!enabled || !event.dataTransfer) {
            return
        }
        event.dataTransfer.effectAllowed = 'move'

        // 创建拖拽缩略图
        if (event.target instanceof HTMLElement) {
            const dragImage = event.target.cloneNode(true) as HTMLElement
            dragImage.className = 'bg-white p-2 rounded-sm text-center border'
            dragImage.style.position = 'absolute'
            document.body.appendChild(dragImage)

            // 设置拖拽缩略图
            event.dataTransfer.setDragImage(dragImage, 0, 0)

            // 在下一个事件循环中移除临时元素
            setTimeout(() => {
                document.body.removeChild(dragImage)
            }, 0)
        }

        event.dataTransfer.setData('text/column-key', column.key)
    }

    const handleDragOver = (column: ColumnProps, event: DragEvent) => {
        if (!enabled) {
            return
        }
        event.preventDefault()
        event.dataTransfer!.dropEffect = 'move'
        dragOverColumn.value = column
    }

    const handleDrop = (column: ColumnProps, event: DragEvent) => {
        if (!enabled) {
            return
        }
        event.preventDefault()

        const draggedColumnKey = event.dataTransfer?.getData('text/column-key')
        if (!draggedColumnKey) {
            return
        }

        const fromIndex = columns.value.findIndex(col => col.key === draggedColumnKey)
        const toIndex = columns.value.findIndex(col => col.key === column.key)

        if (fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex) {
            const newColumns = [...columns.value]
            const [movedColumn] = newColumns.splice(fromIndex, 1)
            newColumns.splice(toIndex, 0, movedColumn)

            emit('on-column-move', newColumns)
        }

        dragOverColumn.value = null
    }

    const handleDragEnd = () => {
        dragOverColumn.value = null
    }

    const isDragging = (_column: ColumnProps): boolean => {
        return false
    }

    const isDragOver = (column: ColumnProps): boolean => {
        return dragOverColumn.value?.key === column.key
    }

    return {
        handleDragStart,
        handleDragOver,
        handleDragEnd,
        handleDrop,
        isDragging,
        isDragOver
    }
}