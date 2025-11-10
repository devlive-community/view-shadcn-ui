import { SkeletonSize } from '@/ui/common/size.ts'

interface AvatarOptions
{
    src?: string
    name?: string
}

export interface AvatarProps
{
    src?: string
    alt?: string
    size?: keyof typeof SkeletonSize
    square?: boolean
    dark?: boolean
}

export interface AvatarGroupProps
{
    items?: Array<AvatarOptions>
    size?: keyof typeof SkeletonSize
    square?: boolean
    max?: number | string
    dark?: boolean
}

export type AvatarEmits = {
    (e: 'on-success'): void
    (e: 'on-failed'): void
}
