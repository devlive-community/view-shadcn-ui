export interface Timeline
{
    id?: number | string
    title?: string
    time?: string
    tip?: string
    description?: string
    children?: Timeline[]
}
