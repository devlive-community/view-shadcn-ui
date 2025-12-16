export interface CronProps
{
    modelValue?: string
    dark?: boolean
    glass?: boolean
}

export type CronEmits = {
    (e: 'update:modelValue', value?: string): void
    (e: 'on-change', value?: string): void
}
