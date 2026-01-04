import { ComponentSize } from '@/utils/theme.ts'

export interface InputProps
{
    modelValue: string
    placeholder?: string
    clearable?: boolean
    size?: ComponentSize
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
    'update:modelValue': [value: string]
    'on-change': [value: string]
    'on-clear': []
    'on-blur': [value: string]
    'on-prefix-click': []
    'on-suffix-click': []
}