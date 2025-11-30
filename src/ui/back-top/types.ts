export interface BackTopProps
{
    visibilityHeight?: number
    right?: number
    bottom?: number
    duration?: number
    dark?: boolean
}

export type BackTopEmits = {
    (e: 'click'): void
}
