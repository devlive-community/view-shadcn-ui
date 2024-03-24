export interface NavigationModel
{
    title?: string
    label?: string
    href?: string
    icon?: any
    group?: string
    description?: string,
    external?: boolean
    opened?: boolean
    position?: NavigationPosition
    children?: NavigationModel[]
}

export enum NavigationPosition
{
    TOP,
    LEFT_TOP,
    BOTTOM,
    LEFT_BOTTOM
}
