export interface BigScreenPanelProps
{
    width?: number | string
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

export interface BigScreenContentProps
{
    showGrid?: boolean
    snapToGrid?: boolean
    gridSize?: number
    selectedId?: string
    showRuler?: boolean
}

export type BigScreenEditorEmits = {
    (e: 'update:components', data: any): void
    (e: 'select', data: any): void
}
