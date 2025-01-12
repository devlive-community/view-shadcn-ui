import { BaseSize } from '@/ui/common/size.ts'

export enum TablePaddingSize
{
    default = 'px-4 py-2 text-base',
    small = 'px-2 py-1 text-sm',
    large = 'px-6 py-3 text-lg'
}

export type Size = keyof typeof BaseSize