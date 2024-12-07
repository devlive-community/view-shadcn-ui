export enum WorkflowPortType
{
    input = 'input',
    output = 'output'
}

export interface WorkflowPort
{
    id: string
    type: WorkflowPortType | string
    label: string
}

export interface WorkflowNode
{
    id: string
    category: string
    ports: WorkflowPort[]
    position?: {
        x: number
        y: number
    }
    data?: Record<string, any>
    description?: string
}

export interface WorkflowConnection
{
    id: string
    source: string      // 源节点的端口ID
    target: string      // 目标节点的端口ID
}

export interface WorkflowNodePortProps
{
    node: WorkflowNode
    disabled?: boolean
    selected?: boolean
}

export type WorkflowNodePortEmits = {
    (e: 'on-connection-start', event: MouseEvent, port: WorkflowPort): void
    (e: 'on-connection-end', event: MouseEvent, port: WorkflowPort): void
    (e: 'on-connection-drag', event: MouseEvent, port: WorkflowPort): void
}

export interface WorkflowPanelProps
{
    nodes: WorkflowNode[]
    categories: string[]
}

export type WorkflowPanelEmits = {
    (e: 'on-node-drag-start', node: WorkflowNode): void
}

export interface WorkflowCanvasProps
{
    nodes: WorkflowNode[]
    connections: WorkflowConnection[]
    selectedNodeId?: string
}

export type WorkflowCanvasEmits = {
    (e: 'on-node-moved', node: WorkflowNode): void
    (e: 'on-connection-created', connection: WorkflowConnection): void
    (e: 'on-connection-removed', connectionId: string): void
    (e: 'on-node-added', node: WorkflowNode): void
    (e: 'on-node-selected', node: WorkflowNode): void
}

export interface WorkflowConnection
{
    id: string
    source: string
    target: string
}

export interface WorkflowProps
{
    nodes: WorkflowNode[]
    connections: WorkflowConnection[]
    categories: string[]
}
