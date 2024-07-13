export interface Timeline
{
    id?: number | string
    title?: string
    time?: string
    tip?: string
    description?: string
    type?: 'opened' | 'commented' | 'closed'
    children?: Timeline[]
}
