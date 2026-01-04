import { ComponentSize, ComponentType } from '@/utils/theme.ts'

export interface CheckboxProps
{
    modelValue?: any,
    value?: any,
    disabled?: boolean,
    size?: ComponentSize,
    type?: ComponentType,
    indeterminate?: boolean,
    dark?: boolean,
    glass?: boolean
}

export type CheckboxEmits = {
    'update:modelValue': [value: any]
    'on-change': [value: any]
}
