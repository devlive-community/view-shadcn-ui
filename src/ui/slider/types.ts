import { BaseBackgroundType } from '@/ui/common/type.ts'

export interface SliderProps
{
    modelValue: number | number[]
    min?: number
    max?: number
    step?: number
    showTip?: boolean
    showStep?: boolean
    disabled?: boolean
    type?: keyof typeof BaseBackgroundType
    dark?: boolean
}

export type SliderEmits = {
    (e: 'update:modelValue', value: number | number[]): void
    (e: 'on-change', value: number | number[]): void
}