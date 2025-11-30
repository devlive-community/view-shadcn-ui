import { TextType } from '@/ui/common/type.ts'
import { TabSize } from '@/ui/common/size.ts'
import { ArrangeDirection, ArrangePosition } from '@/ui/common/position.ts'

export interface TabProps
{
    modelValue?: string
    type?: keyof typeof TextType
    size?: keyof typeof TabSize
    line?: boolean
    closable?: boolean
    position?: keyof typeof ArrangePosition
    direction?: keyof typeof ArrangeDirection
    showScrollButtons?: boolean
    dark?: boolean
}

export interface TabItemProps
{
    label: string
    value: string
    disabled?: boolean
    icon?: string
    dark?: boolean
}

export type TabEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
    (e: 'on-tab-remove', value: string): void
}