import { VNode } from 'vue'

export interface TimePickerProps
{
    modelValue?: string
    placeholder?: string
    disabled?: boolean
    clearable?: boolean
    quickTimes?: string[] // see format
    format?: 'HH:mm' | 'HH:mm:ss' | 'hh:mm A' | 'hh:mm:ss A'
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
