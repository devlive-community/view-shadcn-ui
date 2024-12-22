export interface DatePickerProps
{
    modelValue?: Date | string
    placeholder?: string
    disabled?: boolean
    readonly?: boolean
    format?: string
}

export type DatePickerEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
}