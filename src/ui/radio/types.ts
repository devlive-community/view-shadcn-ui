export interface RadioProps {
    modelValue?: any
    value: any
    disabled?: boolean
    size?: 'small' | 'default' | 'large'
    type?: 'primary' | 'success' | 'warning' | 'error'
    dark?: boolean
    glass?: boolean
}

export type RadioEmits = {
    (e: 'update:modelValue', value: any): void
    (e: 'on-change', value: any): void
}

export interface RadioGroupProps {
    modelValue?: any
    dark?: boolean
    glass?: boolean
}

export type RadioGroupEmits = {
    (e: 'update:modelValue', value: any): void
    (e: 'on-change', value: any): void
}
