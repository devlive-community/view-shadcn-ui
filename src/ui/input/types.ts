import { Size } from '@/ui/enum/Size.ts'

export interface InputProps
{
    modelValue: string
    placeholder?: string
    clearable?: boolean
    size?: keyof typeof Size
    wordCount?: boolean
    maxCount?: number | string
    disabled?: boolean
    type?: string
    rows?: number | string
    cols?: number | string
    name?: string
    readonly?: boolean
    dark?: boolean
    glass?: boolean
}

export type InputEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
    (e: 'on-clear'): void
    (e: 'on-blur', value: string): void
    (e: 'on-prefix-click'): void
    (e: 'on-suffix-click'): void
}