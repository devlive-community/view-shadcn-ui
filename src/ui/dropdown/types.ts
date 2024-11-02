export type DropdownTrigger = 'click' | 'hover'

export interface DropdownProps
{
    trigger?: DropdownTrigger
}

export interface DropdownItemProps
{
    name?: string
    disabled?: boolean
    active?: boolean
}

export type DropdownEmits = {
    'on-open': [value: boolean]
    'on-close': [value: boolean]
}

export type DropdownItemEmits = {
    'on-click': [value: any]
}
