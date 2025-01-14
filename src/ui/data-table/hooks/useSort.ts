import { ref, Ref } from 'vue'
import type { ColumnProps, SortOrder } from '../types'

// 定义返回类型接口
interface UseSortReturn
{
    columns: Ref<ColumnProps[]>
    toggleSort: (key: string, event?: MouseEvent) => ColumnProps[]
    getSortedColumns: () => ColumnProps[]
}

interface SortableColumnProps
    extends ColumnProps
{
    sort?: SortOrder
    sortable?: boolean
}

export const useSort = (initialColumns: ColumnProps[]): UseSortReturn => {
    const columns = ref<SortableColumnProps[]>(initialColumns as SortableColumnProps[])

    const toggleSort = (key: string, event?: MouseEvent): ColumnProps[] => {
        const column = columns.value.find(col => col.key === key)
        if (!column || !column.sortable) {
            return []
        }

        // 多列排序需要按住 Shift 键
        const keepOtherSorts = event?.shiftKey

        // 如果不是按住 shift，则清除其他列的排序
        if (!keepOtherSorts) {
            columns.value.forEach(col => {
                if (col.key !== key) {
                    col.sort = null
                }
            })
        }

        // 切换当前列的排序状态
        if (!column.sort) {
            column.sort = 'asc'
        }
        else if (column.sort === 'asc') {
            column.sort = 'desc'
        }
        else {
            column.sort = null
        }

        return columns.value.filter(col => col.sort)
    }

    // 获取当前所有排序列
    const getSortedColumns = (): ColumnProps[] => {
        return columns.value.filter(col => col.sort)
    }

    return {
        columns,
        toggleSort,
        getSortedColumns
    }
}