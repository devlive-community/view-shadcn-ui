export interface ColumnProps
{
    label?: string
    key?: string
    slot?: string
    fixed?: 'left' | 'right'
    width?: string | number
    size?: keyof typeof TableCellSize
    border?: boolean
    stripe?: boolean
    isLastLeftFixed?: boolean
    isFirstRightFixed?: boolean
    leftOffset?: number
    rightOffset?: number
}

export interface TableProps
{
    columns: Array<ColumnProps>
    data: Array<any>
    stripe?: boolean
    border?: boolean
    width?: string | number
    height?: string | number
    minHeight?: string | number
    size?: keyof typeof TableCellSize
}

export enum TableCellSize
{
    small = 'px-2 py-2',
    default = 'px-4 py-4',
    large = 'px-6 py-6'
}
