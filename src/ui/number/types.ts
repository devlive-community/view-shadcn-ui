import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'

export interface NumberProps
{
    modelValue?: number | string
    name?: string
    size?: keyof typeof Size
    type?: keyof typeof HoverType
    disabled?: boolean
}

export type NumberEmits = {
    'update:modelValue': [value: any]
    'on-change': [value: any]
    'on-blur': [value: any]
}
