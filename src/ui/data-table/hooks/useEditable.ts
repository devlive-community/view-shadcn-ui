import { ref, Ref } from 'vue'
import { CellPayload } from '../types.ts'

export interface UseEditableReturn
{
    editingCell: Ref<CellPayload | null>
    startEditing: (rowIndex: number, key: string, value: any, row: any) => void
    stopEditing: (value?: any) => CellPayload | null  // 返回最后的编辑状态
    updateValue: (value: any) => void
    isEditing: (rowIndex: number, key: string) => boolean
}

export const useEditable = (): UseEditableReturn => {
    const editingCell = ref<CellPayload | null>(null)

    const startEditing = (rowIndex: number, key: string, value: any, row: any) => {
        editingCell.value = { rowIndex, key, value, row }
    }

    const stopEditing = (newValue?: any) => {
        if (!editingCell.value) {
            return null
        }

        const lastEditState = {
            ...editingCell.value,
            value: newValue ?? editingCell.value.value
        }
        editingCell.value = null
        return lastEditState
    }

    const updateValue = (value: any) => {
        if (editingCell.value) {
            editingCell.value.value = value
        }
    }

    const isEditing = (rowIndex: number, key: string): boolean => {
        return (
            editingCell.value?.rowIndex === rowIndex &&
            editingCell.value?.key === key
        )
    }

    return {
        editingCell,
        startEditing,
        stopEditing,
        updateValue,
        isEditing
    }
}