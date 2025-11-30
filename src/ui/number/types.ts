import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'

export interface NumberProps
{
    modelValue?: number | string
    name?: string
    size?: keyof typeof Size
    type?: keyof typeof HoverType
    disabled?: boolean
    placeholder?: string
    min?: number | string
    max?: number | string
    clearable?: boolean,
    showControl?: boolean,
    formatter?: (value: number) => string
    parser?: (value: string) => number
    dark?: boolean
}

export type NumberEmits = {
    'update:modelValue': [value: any]
    'on-change': [value: any]
    'on-blur': [value: any]
    'on-clear': [value: any]
}
