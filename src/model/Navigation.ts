export interface NavigationModel
{
    title?: string
    label?: string
    href?: string
    icon?: any
    position?: NavigationPosition
    children?: NavigationModel[]
}

export enum NavigationPosition
{
    TOP,
    BOTTOM
}
