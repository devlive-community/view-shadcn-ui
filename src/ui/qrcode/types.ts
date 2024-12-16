export interface QrCodeProps
{
    modelValue: string
    size?: number
    level?: 'L' | 'M' | 'Q' | 'H'
    background?: string
    foreground?: string
}

export type QrCodeEmits = {
    (e: 'on-generate'): void
}
