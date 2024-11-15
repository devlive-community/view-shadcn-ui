import { ArrangePosition } from '@/ui/common/position.ts'

export interface HoverCardProps
{
    content?: string
    position?: ArrangePosition | string
    arrow?: boolean
    delay?: number
    maxWidth?: number | string
}
