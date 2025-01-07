import { ButtonBackgroundType } from '@/ui/common/type.ts'

export interface BadgeProps
{
    text?: string | number
    type?: keyof typeof ButtonBackgroundType
    dot?: boolean
    max?: number | string
}