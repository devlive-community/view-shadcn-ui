export interface CarouselProps
{
    items: any[] // 要显示的项数组
    interval?: number // 自动播放间隔（以毫秒为单位）
    showIndicators?: boolean // 是否显示指示器
    showArrows?: boolean // 是否显示箭头
}

export type CarouselEmits = {
    (e: 'on-change', index: number): void
}