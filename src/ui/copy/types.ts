export interface CopyProps
{
    text: string
    tooltip?: boolean
    position?: 'top' | 'bottom' | 'left' | 'right'
    dark?: boolean
    glass?: boolean
}

export type CopyEmits = {
    (e: 'on-success'): void
    (e: 'on-failed'): void
}