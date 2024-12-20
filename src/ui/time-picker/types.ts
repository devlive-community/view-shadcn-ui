import { VNode } from 'vue'

export interface TimePickerProps
{
    modelValue?: string
    placeholder?: string
    disabled?: boolean
    clearable?: boolean
}

export type TimePickerEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
    (e: 'on-clear'): void
}

export interface TimePickerSlots
{
    icon?: () => VNode[]
    clear?: () => VNode[]
}
