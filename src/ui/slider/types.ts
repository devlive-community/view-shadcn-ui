import { ButtonBackgroundType } from '@/ui/common/type.ts'

export interface SliderProps
{
    modelValue: number | number[]
    min?: number | string
    max?: number | string
    step?: number | string
    showTip?: boolean
    showStep?: boolean
    disabled?: boolean
    type?: keyof typeof ButtonBackgroundType
}

export type SliderEmits = {
    (e: 'update:modelValue', value: number | number[]): void
    (e: 'on-change', value: number | number[]): void
}

