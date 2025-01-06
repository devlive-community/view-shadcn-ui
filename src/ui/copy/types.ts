export interface CopyProps
{
    text: string
    tooltip?: boolean
    position?: 'top' | 'bottom' | 'left' | 'right'
}

export type CopyEmits = {
    (e: 'on-success'): void
    (e: 'on-failed'): void
}