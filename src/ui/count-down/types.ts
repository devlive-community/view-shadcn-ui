export interface CountDownProps
{
    time: Date
    simple?: boolean
}

export type CountDownEmits = {
    (e: 'on-complete'): void
}
