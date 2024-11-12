import { Size } from '@/ui/common/size.ts'
import { HoverType, TextType } from '@/ui/common/type.ts'

export interface SelectProps
{
    modelValue: any | any[]
    options?: SelectOptionProps[]
    placeholder?: string
    disabled?: boolean
    size?: keyof typeof Size
    type?: keyof typeof HoverType
    multiple?: boolean
    border?: boolean
    lazy?: boolean
    loadData?: (callback: (children: SelectOptionProps[]) => void) => void
}

export interface SelectOptionProps
{
    value: any
    label: string
    selected?: boolean
    disabled?: boolean
    type?: keyof typeof TextType
    parentName?: string
}

export interface SelectGroupProps
{
    label: string
}

export type SelectEmits = {
    'update:modelValue': [value: any]
    'update:options': [value: SelectOptionProps[]]
    'on-change': [value: any]
    'on-click-outside': [value: boolean]
}
