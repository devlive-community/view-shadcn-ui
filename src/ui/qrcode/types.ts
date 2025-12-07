import { VNode } from 'vue'

export interface QrCodeProps
{
    modelValue: string
    size?: number
    padding?: number
    margin?: number
    level?: 'L' | 'M' | 'Q' | 'H'
    background?: string
    foreground?: string
    rounded?: boolean
    dark?: boolean
}

export type QrCodeEmits = {
    (e: 'on-complete'): void
}

export interface QrCodeSlots
{
    img?: () => VNode[]
}
