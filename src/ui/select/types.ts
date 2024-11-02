import { Size } from '@/ui/common/size.ts'
import { HoverType, TextType } from '@/ui/common/type.ts'

export interface SelectProps
{
    modelValue: any
    options?: SelectOptionProps[]
    placeholder?: string
    disabled?: boolean
    size?: keyof typeof Size
    type?: keyof typeof HoverType
}

export interface SelectOptionProps
{
    value: any
    label: string
    selected?: boolean
    disabled?: boolean
    type?: keyof typeof TextType
}

export interface SelectGroupProps
{
    label: string
}

export type SelectEmits = {
    'update:modelValue': [value: any]
    'on-change': [value: any]
}
