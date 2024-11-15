import { WrapperSize } from '@/ui/common/size.ts'

export interface ToggleProps
{
    modelValue?: any
    value?: any
    disabled?: boolean
    size?: keyof typeof WrapperSize
}

export type ToggleEmits = {
    (e: 'update:modelValue', payload: any): void
    (e: 'on-change', payload: any): void
}
