export interface DatePickerProps
{
    modelValue?: Date | string
    type?: 'date' | 'range'
    placeholder?: string
    disabled?: boolean
    readonly?: boolean
    format?: string
    clearable?: boolean
    showShortcuts?: boolean
    dark?: boolean
    glass?: boolean
}

export type DatePickerEmits = {
    (e: 'update:modelValue', value: string | [string, string]): void
    (e: 'on-change', value: string | [string, string]): void
}