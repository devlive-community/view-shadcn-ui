import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'

export interface KeyValuePair
{
    key?: string
    value?: string
}

export interface MapProps
{
    modelValue: KeyValuePair[]
    size?: keyof typeof Size
    type?: keyof typeof HoverType
    disabled?: boolean
    max?: number
}

export type MapEmits = {
    (e: 'update:modelValue', value: KeyValuePair[]): void
    (e: 'on-add', value: KeyValuePair): void
    (e: 'on-remove', value: KeyValuePair): void
}
