import { Size } from '@/ui/common/size.ts'

export interface MentionOption
{
    id: string | number
    name: string
}

export interface MentionProps
{
    modelValue?: any[]
    items: Array<MentionOption>
    placeholder?: string
    size?: keyof typeof Size
}

export type MentionEmits = {
    (e: 'update:modelValue', value: any[]): void
    (e: 'on-select', value: MentionOption): void
    (e: 'on-change', value: any[]): void
    (e: 'on-search', value: string): void
}