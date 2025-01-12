import { Size } from '@/ui/data-table/size.ts'

export type SortOrder = 'asc' | 'desc' | null

export interface ColumnProps
{
    key: string
    label: string
    sortable?: boolean
    sort?: SortOrder
}

export interface DataTableProps
{
    columns: ColumnProps[]
    data: Record<string, any>[]
    size?: Size
}

export type DataTableEmits = {
    (e: 'on-sort', column: ColumnProps[]): void
}