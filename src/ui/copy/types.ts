export interface CopyProps
{
    text: string
    tooltip?: boolean
    position?: 'top' | 'bottom' | 'left' | 'right'
    dark?: boolean
}

export type CopyEmits = {
    (e: 'on-success'): void
    (e: 'on-failed'): void
}