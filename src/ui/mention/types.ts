import { Size } from '@/ui/common/size.ts'

export interface MentionOption
{
    id: string | number
    name: string
}

export interface MentionProps
{
    items: Array<MentionOption>
    placeholder?: string
    size?: keyof typeof Size
}

export type MentionEmits = {
    (e: 'on-select', value: MentionOption): void
    (e: 'on-change', value: MentionOption | string): void
    (e: 'on-search', value: string): void
}