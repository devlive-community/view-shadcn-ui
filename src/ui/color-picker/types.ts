export interface ColorPickerProps
{
    modelValue?: string // Color values in HEX/RGB/HSL format are supported
    color?: string
    disabled?: boolean
    readonly?: boolean
    presetColors?: string[]
    format?: 'auto' | 'hex' | 'rgb' | 'hsl'  // Output format, default is 'auto'
    showPanel?: boolean
    showDropper?: boolean
    showTransparency?: boolean
    showFormat?: boolean
    dark?: boolean
}

export type ColorPickerEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
}