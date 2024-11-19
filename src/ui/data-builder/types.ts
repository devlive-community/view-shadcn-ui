export interface ItemConfigureProps
{
    id?: number | string
    type?: string
    label?: string
    value?: any
    defaultValue?: any
    disabled?: boolean
    options?: Array<any>
}

export interface ItemConfigureGroupProps
{
    group?: string
    items?: Array<ItemConfigureProps>
}

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
    configure?: Array<ItemConfigureGroupProps>
    style?: any
}

export interface ShadcnDataBuilderBaseProps
{
    showGrid?: boolean
    snapToGrid?: boolean
    gridSize?: number
    showRuler?: boolean
    width?: number
    height?: number
    showToolbar?: boolean
    isCenter?: boolean
    resize?: boolean
    canvasStyle?: ShadcnDataBuilderCanvasStyle
    showGuidelines?: boolean
}

export interface ShadcnDataBuilderCanvasProps
    extends ShadcnDataBuilderBaseProps
{
    selectedId?: string | number
}

export interface ShadcnDataBuilderEditorProps
    extends ShadcnDataBuilderBaseProps
{
    panelWidth?: number
    configWidth?: number
    items?: Array<ShadcnDataBuilderPanelItemProps>
}

export interface ShadcnDataBuilderConfigureProps
{
    width?: number
    selectedComponent: any
    canvasWidth: number
    canvasHeight: number
    canvasStyle: ShadcnDataBuilderCanvasStyle
    gridSize: number
    snapToGrid?: boolean
}

export interface ShadcnDataBuilderViewProps
{
    width?: number
    height?: number
    canvasStyle: ShadcnDataBuilderCanvasStyle
    items: Array<ShadcnDataBuilderPanelChildProps>
}

// 画布样式
// Canvas Style
export interface ShadcnDataBuilderCanvasStyle
{
    backgroundColor?: string
    backgroundImage?: string
    opacity?: number
}

export interface ShadcnDataBuilderCanvasState
{
    type: string
    data: ShadcnDataBuilderCanvasStyle
}

export type ShadcnDataBuilderCanvasEmits = {
    (e: 'update:components', data: any): void
    (e: 'select', data: any): void
    (e: 'update:selectedId', id: any): void
}

export type ShadcnDataBuilderEditorEmits = {
    (e: 'update-config', data: any): void
}
