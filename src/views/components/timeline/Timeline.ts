export interface Timeline
{
    id?: number | string
    title?: string
    time?: string
    description?: string
    children?: Timeline[]
}
