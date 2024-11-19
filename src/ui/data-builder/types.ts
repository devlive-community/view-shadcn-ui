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
    id: number | string
    type: any
    label: any
    x: any
    y: any
    width: number
    height: number
    zIndex: number
}

export interface ShadcnDataBuilderBaseProps
{
    showGrid?: boolean
    snapToGrid?: boolean
    gridSize?: number
    showRuler?: boolean
    width?: number
    height?: number
}

export interface ShadcnDataBuilderCanvasProps
    extends ShadcnDataBuilderBaseProps
{
    selectedId?: string
}

export interface ShadcnDataBuilderEditorProps
    extends ShadcnDataBuilderBaseProps
{
    panelWidth?: number
    items?: Array<ShadcnDataBuilderPanelItemProps>
}

export type ShadcnDataBuilderCanvasEmits = {
    (e: 'update:components', data: any): void
    (e: 'select', data: any): void
}

export type ShadcnDataBuilderEditorEmits = {
    (e: 'update-config', data: any): void
}
