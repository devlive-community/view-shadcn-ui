import { Size } from '@/ui/data-table/size.ts'

export type SortOrder = 'asc' | 'desc' | null
export type RowSelectionMode = 'singleRow' | 'multipleRow'

export type CellClickPayload = { rowIndex: number; col: string; row: any } | null
export type RowSelectPayload = { rowIndex: number; row: any, selected: boolean, selectedRows: any[] } | null

export interface PaginationProps
{
    size?: number
    page?: number
    total?: number
    options?: any
}

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
    height?: number | string
    width?: number | string
    pagination?: PaginationProps
    rowSelection?: RowSelectionMode
}

export type DataTableEmits = {
    (e: 'on-sort', column: ColumnProps[]): void
    (e: 'on-resizable', column: ColumnProps, width: number): void
    (e: 'on-cell-click', payload: { rowIndex: number; col: string; row: any }): void
    (e: 'on-page-change', page: number): void
    (e: 'on-size-change', size: number): void
    (e: 'on-row-select', payload: RowSelectPayload): void
}

export type DataTableHeaderEmits = {
    (e: 'on-sort', column: ColumnProps, event: MouseEvent): void
    (e: 'on-resizable', column: ColumnProps, width: number): void
    (e: 'on-row-select', payload: RowSelectPayload): void
}

export type DataTableBodyEmits = {
    (e: 'on-cell-click', payload: CellClickPayload): void
    (e: 'on-row-select', payload: RowSelectPayload): void
}

export  type DataTablePaginationEmits = {
    (e: 'on-page-change', page: number): void
    (e: 'on-size-change', size: number): void
}