import { Size } from '@/ui/data-table/size.ts'

export type SortOrder = 'asc' | 'desc' | null

export interface ColumnProps
{
    key: string
    label: string
    sortable?: boolean
    sort?: SortOrder
    ellipsis?: boolean // 是否省略
    width?: string // 宽度，支持输入数字和字符串会自动计算，如果是数字的情况时，单位为 px
    tooltip?: string
    align?: 'left' | 'center' | 'right'
    resizable?: boolean
}

export interface DataTableProps
{
    columns: ColumnProps[]
    data: Record<string, any>[]
    size?: Size
}

export type DataTableEmits = {
    (e: 'on-sort', column: ColumnProps[]): void
    (e: 'on-resizable', column: ColumnProps, width: number): void
    (e: 'on-cell-click', payload: { rowIndex: number; col: string; row: any }): void
}

export type DataTableHeaderEmits = {
    (e: 'on-sort', column: ColumnProps, event: MouseEvent): void
    (e: 'on-resizable', column: ColumnProps, width: number): void
}

export type DataTableBodyEmits = {
    (e: 'on-cell-click', payload: { rowIndex: number; col: string; row: any }): void
}