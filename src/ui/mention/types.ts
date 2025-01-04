export interface MentionOption
{
    id: string | number
    name: string
}

export interface MentionProps
{
    suggestions: Array<MentionOption>
    placeholder?: string
}

export type MentionEmits = {
    (e: 'on-select', value: { id: string | number; name: string }): void
    (e: 'on-search', value: string): void
    (e: 'on-change', value: string): void
}