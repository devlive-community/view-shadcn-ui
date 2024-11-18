export interface ShadcnDataBuilderPanelProps
{
    width?: number | string
    items: Array<ShadcnDataBuilderPanelItemProps>
}

export interface ShadcnDataBuilderPanelItemProps
{
    group?: string
    children?: Array<ShadcnDataBuilderPanelChildProps>
}

export interface ShadcnDataBuilderPanelChildProps
{
    id?: number | string
    type?: any
    label?: any
    x?: any
    y?: any
    width?: number
    height?: number
    zIndex?: number
}

export interface ShadcnDataBuilderContentProps
{
    showGrid?: boolean
    snapToGrid?: boolean
    gridSize?: number
    selectedId?: string
    showRuler?: boolean
}

export interface ShadcnDataBuilderEditorProps
{
    panelWidth?: number
    items?: Array<ShadcnDataBuilderPanelItemProps>
    showGrid?: boolean
    snapToGrid?: boolean
    gridSize?: number
    showRuler?: boolean
}

export type ShadcnDataBuilderContentEmits = {
    (e: 'update:components', data: any): void
    (e: 'select', data: any): void
}

export type ShadcnDataBuilderEditorEmits = {
    (e: 'update-config', data: any): void
}
