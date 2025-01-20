export interface MarqueeProps
{
    speed?: number // 滚动速度，单位为秒
    repeat?: number // 重复次数，-1 为无限循环
}

export type MarqueeEmits = {
    (e: 'on-complete'): void
}