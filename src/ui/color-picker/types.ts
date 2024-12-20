export interface ColorPickerProps
{
    modelValue?: string
    color?: string
    disabled?: boolean
    readonly?: boolean
}

export type ColorPickerEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
}