import { TextType } from '@/ui/common/type.ts'

export interface RateProps {
    modelValue: number
    max?: number | string
    allowHalf?: boolean
    type?: keyof typeof TextType
    disabled?: boolean
    showText?: boolean
    dark?: boolean
    glass?: boolean
}

export type RateEmits = {
    (e: 'update:modelValue', value: number): void
    (e: 'on-change', value: number): void
}
