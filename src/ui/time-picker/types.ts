import { VNode } from 'vue'

export interface TimePickerProps
{
    modelValue?: string
    placeholder?: string
}

export type TimePickerEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
}

export interface TimePickerSlots
{
    icon?: () => VNode[]
}
