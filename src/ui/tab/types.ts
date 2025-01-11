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
}

export interface TabItemProps
{
    label: string
    value: string
    disabled?: boolean
    icon?: string
}

export type TabEmits = {
    'update:modelValue': (value: string) => void
    'on-change': (value: string) => void
    'on-tab-remove': (value: string) => void
}