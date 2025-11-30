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
    loading?: boolean
    loadData?: (callback: (children: SelectOptionProps[]) => void) => void
    dark?: boolean
}

export interface SelectOptionProps
{
    value: any
    label: string
    selected?: boolean
    disabled?: boolean
    type?: keyof typeof TextType
    parentName?: string
    dark?: boolean
}

export interface SelectGroupProps
{
    label: string
    dark?: boolean
}

export type SelectEmits = {
    'update:modelValue': [value: any]
    'update:options': [value: SelectOptionProps[]]
    'on-change': [value: any]
    'on-click-outside': [value: boolean]
}
