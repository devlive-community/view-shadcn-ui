import { Size } from '@/ui/common/size.ts'
import { HoverType } from '@/ui/common/type.ts'

export type InputTagProps = {
    modelValue?: string[]
    placeholder?: string
    name?: string
    disabled?: boolean
    size?: keyof typeof Size
    type?: keyof typeof HoverType
    max?: number
}

export type InputTagEmits = {
    (e: 'update:modelValue', value: string[]): void
    (e: 'on-add', value: string): void
    (e: 'on-remove', value: string): void
    (e: 'on-change', value: string[]): void
}
