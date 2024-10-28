export interface Column
{
    label: string
    key: string
    slot?: string
    fixed?: 'left' | 'right'
    width?: string | number
}
