export interface TimeLeft
{
    days: number
    hours: number
    minutes: number
    seconds: number
}

export interface CountDownProps
{
    progress?: number
    time: Date
    simple?: boolean
    title?: string
    toolbar?: boolean
    warningThreshold?: number
    showProgress?: boolean
    dark?: boolean
}

export type CountDownEmits = {
    (e: 'on-complete'): void
    (e: 'on-tick', timeLeft: TimeLeft): void
    (e: 'update:progress', progress: number): void
}
