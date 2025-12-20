export type MarkdownMode = 'preview' | 'edit' | 'split'

export interface MarkdownProps
{
    modelValue?: string
    mode?: MarkdownMode
    dark?: boolean
    glass?: boolean
    height?: string
    placeholder?: string
}

export type MarkdownEmits = {
    (e: 'update:modelValue', value: string): void
    (e: 'on-change', value: string): void
}
