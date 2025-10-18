import { Size } from '@/ui/data-table/size.ts'
import { Component } from 'vue'

export type SortOrder = 'asc' | 'desc' | null
export type RowSelectionMode = 'singleRow' | 'multipleRow'
export type FixedType = 'left' | 'right'
export type ConditionType = 'gt' | 'gte' | 'lt' | 'lte' | 'eq' | 'neq' | 'between' | 'in' | 'notIn'

export type CellClickPayload = { rowIndex: number; col: string; row: any } | null
export type RowSelectPayload = { rowIndex: number; row: any, selected: boolean, selectedRows: any[] } | null
export type CellPayload = { rowIndex: number; key: string; value: any; row: any, col: ColumnProps }
export type RowPayload = { rowIndex: number, row: any, values: Record<string, any> }

export enum TextAlign
{
    left = 'text-left',
    center = 'text-center',
    right = 'text-right'
}

export interface BorderConfig
{
    outer?: boolean      // 外边框
    inner?: boolean      // 内边框（单元格间）
    horizontal?: boolean // 水平边框
    vertical?: boolean   // 垂直边框
}

export interface GradientCondition
{
    type: ConditionType
    value: number | [number, number] | string[]
    gradient?: string
    backgroundColor?: string
    textColor?: string
    borderColor?: string
    className?: string
}

export interface CellStyleConfig
{
    key: string
    field?: string
    conditions: GradientCondition[]
    defaultGradient?: string
    defaultBackgroundColor?: string
    defaultTextColor?: string
    defaultClassName?: string
}

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
    ellipsis?: boolean
    width?: string
    tooltip?: string | boolean
    align?: TextAlign | string
    resizable?: boolean
    editable?: boolean
    cellEditor?: Component
    cellEditorProps?: Record<string, any>
    fixed?: FixedType
    styleConfig?: CellStyleConfig
}

export interface DataTableProps
{
    columns: ColumnProps[]
    data: Record<string, any>[]
    size?: Size
    height?: number | string
    width?: number | string
    loading?: boolean
    pagination?: PaginationProps
    rowSelection?: RowSelectionMode
    columnMove?: boolean
    contextMenu?: boolean
    border?: boolean | BorderConfig  // 支持布尔值快捷配置和细粒度配置
}

export type DataTableHeaderEmits = {
    (e: 'on-sort', column: ColumnProps, event: MouseEvent): void
    (e: 'on-resizable', column: ColumnProps, width: number): void
    (e: 'on-row-select', payload: RowSelectPayload): void
    (e: 'on-column-move', columns: ColumnProps[]): void
}

export type DataTableEmits = {
    (e: 'on-sort', column: ColumnProps[]): void
    (e: 'on-resizable', column: ColumnProps, width: number): void
    (e: 'on-cell-click', payload: { rowIndex: number; col: string; row: any }): void
    (e: 'on-page-change', page: number): void
    (e: 'on-size-change', size: number): void
    (e: 'on-row-select', payload: RowSelectPayload): void
    (e: 'on-column-move', columns: ColumnProps[]): void
    (e: 'on-cell-edit', payload: CellPayload): void
    (e: 'on-row-edit', payload: RowPayload): void
}

export type DataTableBodyEmits = {
    (e: 'on-cell-click', payload: CellClickPayload): void
    (e: 'on-row-select', payload: RowSelectPayload): void
    (e: 'on-cell-edit', payload: CellPayload): void
    (e: 'on-row-edit', payload: RowPayload): void
}

export type DataTablePaginationEmits = {
    (e: 'on-page-change', page: number): void
    (e: 'on-size-change', size: number): void
}