export interface ColorPickerProps
{
    modelValue?: string
    color?: string
}

export type ColorPickerEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
}