import { Size } from '@/ui/enum/Size'
import { Type } from '@/ui/enum/Type'

export interface TransferItem {
  [key: string]: any
  disabled?: boolean
}

export interface TransferProps {
  data: TransferItem[]
  modelValue: (string | number)[]
  keyProp?: string
  labelProp?: string
  leftTitle?: string
  rightTitle?: string
  dark?: boolean
  glass?: boolean
  type?: keyof typeof Type
  size?: keyof typeof Size
  height?: string
}

export type TransferEmits = {
  'update:modelValue': [value: (string | number)[]]
  'on-change': [value: (string | number)[], direction: 'left' | 'right', movedKeys: (string | number)[]]
}
