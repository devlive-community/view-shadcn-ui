export enum WorkflowPortType
{
    input = 'input',
    output = 'output'
}

export enum WorkflowNodeType
{
    input = 'input',
    switch = 'switch',
    radio = 'radio',
    checkbox = 'checkbox',
    select = 'select',
    textarea = 'textarea',
    text = 'text',
    number = 'number',
    slider = 'slider',
    toggle = 'toggle',
    upload = 'upload'
}

export interface WorkflowPortValidatedStatus
{
    valid: boolean
    message: string
}

export interface WorkflowPort
{
    id: string
    type: WorkflowPortType | string
    label: string
    required?: boolean
    validated?: WorkflowPortValidatedStatus
}

export interface WorkflowNode
{
    id: string
    tid: string
    key: string
    label: string
    category: string
    ports: WorkflowPort[]
    position?: {
        x: number
        y: number
    }
    configure?: Array<any>
    data?: Array<Record<string, any>>
    description?: string
}

export interface WorkflowConnection
{
    id: string
    source: string
    target: string
    line?: string
}

export interface WorkflowCategory
{
    label: string
    value: string
}

export interface WorkflowCanvasConfigure
{
    width: number
    height: number
    color?: string
    showGrid?: boolean
    gridColor?: string
    gridSize?: number
    gridOpacity?: number
    pattern?: 'dots' | 'grid' | 'none'
}

export interface WorkflowNodePortProps
{
    node: WorkflowNode
    disabled?: boolean
    selected?: boolean
    connections?: WorkflowConnection[]
}

export type WorkflowNodePortEmits = {
    (e: 'on-connection-start', event: MouseEvent, port: WorkflowPort): void
    (e: 'on-connection-end', event: MouseEvent, port: WorkflowPort): void
    (e: 'on-connection-drag', event: MouseEvent, port: WorkflowPort): void
    (e: 'on-validation-change', node: WorkflowNode): void
}

export interface WorkflowPanelProps
{
    nodes: WorkflowNode[]
    categories: WorkflowCategory[]
    searchText: string
}

export type WorkflowPanelEmits = {
    (e: 'update:searchText', value: string): void
    (e: 'on-node-drag-start', node: WorkflowNode): void
}

export interface WorkflowCanvasProps
{
    nodes: WorkflowNode[]
    connections: WorkflowConnection[]
    selectedNodeId?: string,
    canvas?: WorkflowCanvasConfigure
}

export type WorkflowCanvasEmits = {
    (e: 'on-node-moved', node: WorkflowNode): void
    (e: 'on-connection-created', connection: WorkflowConnection): void
    (e: 'on-connection-removed', connectionId: string): void
    (e: 'on-node-added', node: WorkflowNode): void
    (e: 'on-node-selected', node: WorkflowNode): void
    (e: 'on-node-deleted', node: WorkflowNode): void
    (e: 'on-node-updated', node: WorkflowNode): void
}

export interface WorkflowConnection
{
    id: string
    source: string
    target: string
}

export interface WorkflowProps
{
    modelValue?: {
        nodes: WorkflowNode[]
        connections: WorkflowConnection[]
    }
    nodes: WorkflowNode[]
    connections: WorkflowConnection[]
    categories: WorkflowCategory[],
    searchText?: string
    panelWidth?: number | string
    configureWidth?: number | string
}

export type WorkflowEmits = {
    (e: 'update:modelValue', value: { nodes: WorkflowNode[], connections: WorkflowConnection[], data?: any, validation?: any }): void
    (e: 'update:searchText', value: string): void
    (e: 'on-node-moved', node: WorkflowNode): void
    (e: 'on-node-added', node: WorkflowNode): void
    (e: 'on-node-selected', node: WorkflowNode): void
    (e: 'on-node-deleted', node: WorkflowNode): void
    (e: 'on-connection-created', connection: WorkflowConnection): void
    (e: 'on-connection-removed', connectionId: string): void
}

export interface WorkflowConfigureProps
{
    selectedNode?: WorkflowNode
    width?: number | string
}

export type WorkflowConfigureEmits = {
    (e: 'update:node', node: WorkflowNode): void
}

export interface WorkflowData
{
    nodes: WorkflowNode[]
    connections: WorkflowConnection[]
}

export interface WorkflowViewProps
{
    nodes: WorkflowNode[]
    data: WorkflowData
    canvas?: WorkflowCanvasConfigure
}
