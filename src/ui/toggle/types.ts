export interface ToggleProps
{
    modelValue?: any
    value?: any
}

export type ToggleEmits = {
    (e: 'update:modelValue', payload: any): void
    (e: 'on-change', payload: any): void
}
