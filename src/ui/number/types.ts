import { Size } from '@/ui/common/size.ts'

export interface NumberProps
{
    modelValue?: number | string
    size?: keyof typeof Size
}

export type NumberEmits = {
    'update:modelValue': [value: any]
    'on-change': [value: any]
}
