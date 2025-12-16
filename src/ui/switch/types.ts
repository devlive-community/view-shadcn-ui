export interface SwitchProps {
    modelValue?: any
    type?: 'primary' | 'success' | 'warning' | 'error'
    size?: 'small' | 'default' | 'large'
    disabled?: boolean
    trueValue?: any
    falseValue?: any
    dark?: boolean
    glass?: boolean
}

export type SwitchEmits = {
    (e: 'update:modelValue', value: any): void
    (e: 'on-change', value: any): void
}
