import { ref, Ref } from 'vue'
import { CellPayload, ColumnProps, RowPayload } from '../types.ts'

export interface UseEditableReturn
{
    editingCell: Ref<CellPayload | null>
    editingRowState: Ref<RowPayload | null>
    startEditing: (rowIndex: number, key: string, value: any, row: any, col: ColumnProps) => void
    startRowEditing: (rowIndex: number, row: any) => void
    stopEditing: (value?: any) => CellPayload | null
    stopRowEditing: () => RowPayload | null
    updateValue: (value: any) => void
    updateRowValue: (key: string, value: any) => void
    isEditing: (rowIndex: number, key: string) => boolean
    isRowEditing: (rowIndex: number) => boolean
}

export const useEditable = (): UseEditableReturn => {
    const editingCell = ref<CellPayload | null>(null)
    const editingRowState = ref<RowPayload | null>(null)

    const startEditing = (rowIndex: number, key: string, value: any, row: any, col: ColumnProps) => {
        editingCell.value = { rowIndex, key, value, row, col }
        editingRowState.value = null
    }

    const startRowEditing = (rowIndex: number, row: any) => {
        editingRowState.value = {
            rowIndex,
            row: { ...row }, // 创建原始行数据的深拷贝
            values: { ...row } // 创建用于编辑的数据副本
        }
        editingCell.value = null
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

    const stopRowEditing = () => {
        if (!editingRowState.value) {
            return null
        }

        const { rowIndex, row, values } = editingRowState.value

        // 创建包含最新值的状态
        const finalState = {
            rowIndex,
            row: { ...row }, // 保留原始行数据
            values: { ...values } // 返回修改后的数据副本
        }

        // 清除编辑状态
        editingRowState.value = null
        return finalState
    }

    const updateValue = (value: any) => {
        if (editingCell.value) {
            editingCell.value.value = value
        }
    }

    const updateRowValue = (key: string, value: any) => {
        if (editingRowState.value) {
            editingRowState.value.values[key] = value
        }
    }

    const isEditing = (rowIndex: number, key: string): boolean => {
        return (
            (editingCell.value?.rowIndex === rowIndex && editingCell.value?.key === key) ||
            isRowEditing(rowIndex)
        )
    }

    const isRowEditing = (rowIndex: number): boolean => {
        return editingRowState.value?.rowIndex === rowIndex
    }

    return {
        editingCell,
        editingRowState,
        startEditing,
        startRowEditing,
        stopEditing,
        stopRowEditing,
        updateValue,
        updateRowValue,
        isEditing,
        isRowEditing
    }
}