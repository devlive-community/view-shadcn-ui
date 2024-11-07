import { SkeletonSize } from '@/ui/common/size.ts'

export interface AvatarProps
{
    src?: string
    alt?: string
    size?: keyof typeof SkeletonSize
    square?: boolean
}

export type AvatarEmits = {
    (e: 'on-success'): void
    (e: 'on-error'): void
}
