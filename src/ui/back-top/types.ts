export interface BackTopProps
{
    visibilityHeight?: number
    right?: number
    bottom?: number
    duration?: number
}

export type BackTopEmits = {
    (e: 'click'): void
}
