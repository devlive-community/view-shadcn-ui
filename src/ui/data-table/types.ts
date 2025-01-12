import { Size } from './size'

export interface ColumnProps
{
    key: string
    label: string
}

export interface DataTableProps
{
    columns: ColumnProps[]
    data: Record<string, any>[]
    size?: Size
}

export type DataTableEmits = {
    (e: 'on-change'): void
}