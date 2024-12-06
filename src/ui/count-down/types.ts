export interface CountDownProps
{
    time: Date
    simple?: boolean
    title?: string
    toolbar?: boolean
    warningThreshold?: number
}

export type CountDownEmits = {
    (e: 'on-complete'): void
}
