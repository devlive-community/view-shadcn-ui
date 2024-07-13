export interface Tree
{
    id?: number | string
    title?: string
    key?: string
    icon?: any
    opened?: boolean
    level?: number
    children?: Tree[]
}
