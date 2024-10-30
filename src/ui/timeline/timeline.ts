export interface TimelineContext
{
    addItem: (id: symbol) => void
    removeItem: (id: symbol) => void
    items: Set<symbol>
    split: boolean
}
