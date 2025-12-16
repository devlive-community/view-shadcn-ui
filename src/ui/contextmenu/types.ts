export interface ContextMenuPosition {
    x: number;
    y: number;
}

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
    position?: ContextMenuPosition;
    dark?: boolean
    glass?: boolean
}

export interface ContextMenuItemProps
{
    label?: string
    disabled?: boolean
    dark?: boolean
}
