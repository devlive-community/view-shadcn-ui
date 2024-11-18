export interface BigScreenPanelProps
{
    items: () => Array<BigScreenPanelItemProps>
}

export interface BigScreenPanelItemProps
{
    group?: string
    children?: BigScreenPanelChildProps[]
}

export interface BigScreenPanelChildProps
{
    type?: string
    label?: string
}
