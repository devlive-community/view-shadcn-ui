export interface QrCodeProps
{
    modelValue: string
    size?: number
    padding?: number
    level?: 'L' | 'M' | 'Q' | 'H'
    background?: string
    foreground?: string
    rounded?: boolean
}

export type QrCodeEmits = {
    (e: 'on-generate'): void
}
