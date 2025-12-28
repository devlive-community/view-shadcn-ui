import { SkeletonType } from '@/ui/common/type.ts'
import { SkeletonSize } from '@/ui/common/size.ts'

export interface SkeletonProps
{
    cols?: number | string
    rows?: number | string
    animation?: boolean
    size?: keyof typeof SkeletonSize
    paragraph?: { rows: number, width: (number | string)[] }
    dark?: boolean
    glass?: boolean
}

export interface SkeletonItemProps
{
    animation?: boolean
    width?: string
    type?: keyof typeof SkeletonType
    size?: keyof typeof SkeletonSize
    dark?: boolean
    glass?: boolean
}