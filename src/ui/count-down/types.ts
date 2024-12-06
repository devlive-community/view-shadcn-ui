export interface CountDownProps
{
    time: Date
    simple?: boolean
    title?: string
    toolbar?: boolean
}

export type CountDownEmits = {
    (e: 'on-complete'): void
}
