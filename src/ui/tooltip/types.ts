import { ArrangePosition } from '@/ui/common/position.ts'

export interface TooltipProps
{
    content?: string
    position?: ArrangePosition | string
    arrow?: boolean
    delay?: number
    maxWidth?: number | string
    dark?: boolean
    glass?: boolean
}
