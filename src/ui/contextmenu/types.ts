export type ContextMenuEmits = {
    (e: 'update:modelValue', payload: boolean): void
    (e: 'on-open', payload: boolean): void
    (e: 'on-close', payload: boolean): void
}

export type ContextMenuItemEmits = {
    (e: 'on-click'): void
}

export interface ContextMenuProps
{
    modelValue: boolean
}

export interface ContextMenuItemProps
{
    label?: string
}
