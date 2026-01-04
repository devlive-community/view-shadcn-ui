import { ComponentSize, ComponentType } from '@/utils/theme.ts'

export interface SpinProps
{
    modelValue?: boolean
    type?: ComponentType
    size?: ComponentSize
    fixed?: boolean
    dark?: boolean
    glass?: boolean
}

export interface SpinEmits
{
    'update:modelValue': [value: boolean]
    'on-change': [value: boolean]
}
