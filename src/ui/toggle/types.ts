export interface ToggleProps
{
    modelValue?: any
    value?: any
    disabled?: boolean
}

export type ToggleEmits = {
    (e: 'update:modelValue', payload: any): void
    (e: 'on-change', payload: any): void
}
