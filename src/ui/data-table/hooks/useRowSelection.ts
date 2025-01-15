import { computed, ref } from 'vue'
import type { RowSelectionMode } from '../types'

export function useRowSelection(
    mode: RowSelectionMode = 'singleRow',
    data: Record<string, any>[],
    emits: any
)
{
    const totalRows = data.length
    const selectedRows = ref<number[]>([])

    const toggleRowSelection = (rowIndex: number) => {
        if (mode === 'singleRow') {
            const newSelected = selectedRows.value[0] === rowIndex ? [] : [rowIndex]
            selectedRows.value = newSelected

            // 单选模式只提交当前选中的行
            if (newSelected.length > 0) {
                emits('on-row-select', {
                    rowIndex,
                    row: data[rowIndex],
                    selected: true,
                    selectedRows: [data[rowIndex]]  // 只包含当前选中的行数据
                })
            }
            else {
                emits('on-row-select', {
                    rowIndex,
                    row: null,
                    selected: false,
                    selectedRows: []  // 清空选择时返回空数组
                })
            }
        }
        else {
            const index = selectedRows.value.indexOf(rowIndex)
            const newSelected = [...selectedRows.value]

            if (index > -1) {
                newSelected.splice(index, 1)
            }
            else {
                newSelected.push(rowIndex)
            }

            selectedRows.value = newSelected

            // 多选模式提交所有选中的行数据
            emits('on-row-select', {
                rowIndex,
                row: data[rowIndex],
                selected: newSelected.includes(rowIndex),
                selectedRows: newSelected.map(index => data[index])  // 包含所有选中行的数据
            })
        }
    }

    const isRowSelected = (rowIndex: number) => {
        return selectedRows.value.includes(rowIndex)
    }

    const toggleAllRows = () => {
        if (mode === 'multipleRow') {
            const isAllSelectedCurrently = selectedRows.value.length === totalRows
            selectedRows.value = isAllSelectedCurrently
                ? []
                : Array.from({ length: totalRows }, (_, i) => i)

            emits('on-row-select', {
                rowIndex: -1,
                row: null,
                selected: !isAllSelectedCurrently,
                selectedRows: !isAllSelectedCurrently ? data : []
            })
        }
    }

    const isAllSelected = computed(() => {
        return mode === 'multipleRow' &&
            totalRows > 0 &&
            selectedRows.value.length === totalRows
    })

    const isIndeterminate = computed(() => {
        return mode === 'multipleRow' &&
            selectedRows.value.length > 0 &&
            selectedRows.value.length < totalRows
    })

    const clearSelection = () => {
        selectedRows.value = []
    }

    return {
        selectedRows: computed(() => selectedRows.value),
        toggleRowSelection,
        isRowSelected,
        toggleAllRows,
        isAllSelected,
        isIndeterminate,
        clearSelection
    }
}