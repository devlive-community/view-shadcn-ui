import { ArrangePosition } from '@/ui/common/position.ts'

export interface TooltipProps
{
    content?: string
    width?: number
    position?: ArrangePosition | string
    arrow?: boolean
    delay?: number
    maxWidth?: number | string
}
