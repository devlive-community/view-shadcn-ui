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
    divided?: boolean
}

export type DropdownEmits = {
    'on-open': [value: boolean]
    'on-close': [value: boolean]
    'on-click-outside': [value: boolean]
}

export type DropdownItemEmits = {
    'on-click': [value: any]
}
