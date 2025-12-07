export interface FloatButtonProps
{
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left',
    circle?: boolean,
    top?: number | string,
    right?: number | string
    bottom?: number | string
    left?: number | string
    trigger?: 'click' | 'hover'
    dark?: boolean
}

export type FloatButtonEmits = {
    (e: 'on-menu-visible', visible: boolean): void
}
