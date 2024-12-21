export interface ColorPickerProps
{
    modelValue?: string // Color values in HEX or RGBA format are supported
    color?: string
    disabled?: boolean
    readonly?: boolean
    presetColors?: string[]
    format?: 'auto' | 'hex' | 'rgba'  // Output format, default is 'auto'
}

export type ColorPickerEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
}