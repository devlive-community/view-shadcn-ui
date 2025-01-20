export interface MarqueeProps
{
    speed?: number // 滚动速度，单位为秒
}

export type MarqueeEmits = {
    (e: 'on-complete'): void
}