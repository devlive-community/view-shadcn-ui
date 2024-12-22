export interface DatePickerProps
{
    modelValue?: Date
    placeholder?: string
}

export type DatePickerEmits = {
    (e: 'update:modelValue', value: Date): void
    (e: 'on-change', value: Date): void
}