import { ComponentSize, ComponentType } from '@/utils/theme'

export interface SwitchProps
{
    modelValue?: any
    type?: ComponentType
    size?: ComponentSize
    disabled?: boolean
    trueValue?: any
    falseValue?: any
    dark?: boolean
    glass?: boolean
}

export type SwitchEmits = {
    'update:modelValue': [value: any]
    'on-change': [value: any]
}
