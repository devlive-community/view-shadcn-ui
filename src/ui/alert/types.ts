import { ComponentType } from '@/utils/theme.ts'

export interface AlertProps
{
    title?: string
    type?: ComponentType
    showIcon?: boolean
    banner?: boolean
    closable?: boolean
    dark?: boolean
    glass?: boolean
}

export type AlertEmits = {
    'on-close': [visible: boolean]
}
