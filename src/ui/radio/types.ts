import { ComponentSize, ComponentType } from '@/utils/theme'

export interface RadioProps
{
    modelValue?: any
    value?: any
    disabled?: boolean
    size?: ComponentSize
    type?: ComponentType
    dark?: boolean
    glass?: boolean
}

export type RadioEmits = {
    'update:modelValue': [value: any]
    'on-change': [value: any]
}
