import { WrapperSize } from '@/ui/common/size.ts'
import { ComputedRef } from 'vue'

export interface ToggleProps
{
    modelValue?: any
    value?: any
    disabled?: boolean
    size?: keyof typeof WrapperSize
}

export interface ToggleGroupProps
{
    modelValue?: any
    disabled?: boolean
    size?: keyof typeof WrapperSize
}

export interface ToggleGroupContext
{
    modelValue: ComputedRef<any>
    disabled: ComputedRef<boolean>
    size: ComputedRef<keyof typeof WrapperSize>
    onChange: (value: any) => void
}

export type ToggleEmits = {
    (e: 'update:modelValue', payload: any): void
    (e: 'on-change', payload: any): void
}
