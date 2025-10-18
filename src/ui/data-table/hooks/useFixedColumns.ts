import { computed, Ref } from 'vue'
import { ColumnProps } from '../types'
import { calcSize } from "@/utils/common.ts";

export interface UseFixedColumnsReturn {
    leftFixedColumns: Ref<ColumnProps[]>
    scrollableColumns: Ref<ColumnProps[]>
    rightFixedColumns: Ref<ColumnProps[]>
    getLeftOffset: (index: number) => string
    getRightOffset: (index: number) => string
    hasLeftFixed: Ref<boolean>
    hasRightFixed: Ref<boolean>
}

export function useFixedColumns(columns: Ref<ColumnProps[]>): UseFixedColumnsReturn {
    const leftFixedColumns = computed(() =>
        columns.value.filter(col => col.fixed === 'left')
    )

    const scrollableColumns = computed(() =>
        columns.value.filter(col => !col.fixed)
    )

    const rightFixedColumns = computed(() =>
        columns.value.filter(col => col.fixed === 'right')
    )

    const hasLeftFixed = computed(() => leftFixedColumns.value.length > 0)
    const hasRightFixed = computed(() => rightFixedColumns.value.length > 0)

    const getLeftOffset = (index: number): string => {
        if (index === 0) return calcSize(0)

        const offset = leftFixedColumns.value
                                       .slice(0, index)
                                       .reduce((sum, col) => {
                                           const width = col.width || '150px'
                                           const numericWidth = parseInt(width.replace('px', ''))
                                           return sum + numericWidth
                                       }, 0)

        return calcSize(offset)
    }

    const getRightOffset = (index: number): string => {
        if (index === rightFixedColumns.value.length - 1) return calcSize(0)

        const offset = rightFixedColumns.value
                                        .slice(index + 1)
                                        .reduce((sum, col) => {
                                            const width = col.width || '150px'
                                            const numericWidth = parseInt(width.replace('px', ''))
                                            return sum + numericWidth
                                        }, 0)

        return calcSize(offset)
    }

    return {
        leftFixedColumns,
        scrollableColumns,
        rightFixedColumns,
        getLeftOffset,
        getRightOffset,
        hasLeftFixed,
        hasRightFixed
    }
}