export interface CronProps
{
    modelValue?: string
}

export type CronEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
}