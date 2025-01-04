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
    modelValue?: string | string[] | null
    disabled?: boolean
    size?: keyof typeof WrapperSize
    multiple?: boolean
    orientation?: 'horizontal' | 'vertical'
}

export interface ToggleGroupContext
{
    modelValue: ComputedRef<any[]>
    disabled: ComputedRef<boolean>
    size: ComputedRef<keyof typeof WrapperSize>
    multiple: ComputedRef<boolean>
    orientation: ComputedRef<'horizontal' | 'vertical'>
    onChange: (value: any) => void
}

export interface ToggleEmits {
    (e: 'update:modelValue', value: string | string[] | null): void
    (e: 'on-change', value: string | string[] | null): void
}