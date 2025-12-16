export interface CarouselProps
{
    items: any[] // 要显示的项数组
    autoPlay?: boolean // 是否自动播放
    interval?: number // 自动播放间隔（以毫秒为单位）
    showIndicators?: boolean // 是否显示指示器
    showArrows?: boolean // 是否显示箭头
    direction?: 'horizontal' | 'vertical' // 轮播方向
    height?: number | string
    dark?: boolean // 是否为暗黑模式
    glass?: boolean // 是否为液态玻璃效果
}

export type CarouselEmits = {
    (e: 'on-change', index: number): void
}