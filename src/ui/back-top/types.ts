export interface BackTopProps
{
    visibilityHeight?: number
    right?: number
    bottom?: number
    duration?: number
    dark?: boolean
    glass?: boolean
    target?: string | HTMLElement
}

export type BackTopEmits = {
    (e: 'click'): void
}
