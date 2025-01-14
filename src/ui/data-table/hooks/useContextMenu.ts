import { ref, Ref } from 'vue'
import { CellPayload, ColumnProps } from '../types'

export interface ContextMenuPosition
{
    x: number
    y: number
}

export interface UseContextMenuReturn
{
    visible: Ref<boolean>
    position: Ref<ContextMenuPosition>
    actionsPosition: Ref<ContextMenuPosition>
    selectedValue: Ref<CellPayload | null>
    show: (event: MouseEvent, rowIndex: number, key: string, row: any, col: ColumnProps) => void
    hide: (keepState?: boolean) => void
    isVisible: () => boolean
}

export const useContextMenu = (): UseContextMenuReturn => {
    const visible = ref(false)
    const position = ref<ContextMenuPosition>({ x: 0, y: 0 })
    const actionsPosition = ref<ContextMenuPosition>({ x: 0, y: 0 })
    const selectedCell = ref<CellPayload | null>(null)

    const show = (event: MouseEvent, rowIndex: number, key: string, row: any, col: ColumnProps) => {
        event.preventDefault()

        const x = event.clientX
        const y = event.clientY
        position.value = { x, y }

        const target = event.target as HTMLElement
        const rect = target.getBoundingClientRect()
        actionsPosition.value = {
            x: rect.left,
            y: rect.bottom
        }

        selectedCell.value = { rowIndex, key, value: row[key], row, col }
        visible.value = true

        const hideOnClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const contextMenu = document.querySelector('.context-menu')

            if (contextMenu && !contextMenu.contains(target)) {
                hide(true)
                document.removeEventListener('click', hideOnClickOutside)
            }
        }

        setTimeout(() => {
            document.addEventListener('click', hideOnClickOutside)
        }, 0)
    }

    const hide = (keepState = false) => {
        visible.value = false

        if (!keepState) {
            position.value = { x: 0, y: 0 }
            selectedCell.value = null
        }
    }

    const isVisible = (): boolean => {
        return visible.value
    }

    return {
        visible,
        position,
        actionsPosition,
        selectedValue: selectedCell,
        show,
        hide,
        isVisible
    }
}