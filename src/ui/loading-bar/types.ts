export type LoadingBarStatus = 'default' | 'success' | 'error'

export interface LoadingBarProps
{
    modelValue?: number
    height?: number | string
    color?: string
    duration?: number | string
    animate?: boolean
    status?: LoadingBarStatus
}

export type LoadingBarEmits = {
    (e: 'update:modelValue', value: number): void
    (e: 'on-complete'): void
}
