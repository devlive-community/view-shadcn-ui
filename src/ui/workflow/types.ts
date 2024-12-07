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
    category: string[]
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
    (e: 'on-node-selected', nodeId: string): void
}

export interface WorkflowConnection
{
    id: string
    source: string
    target: string
}

export const defaultNodes: WorkflowNode[] = [
    {
        id: 'start',
        category: '输入节点',
        position: { x: 0, y: 0 },
        data: {},
        description: '工作流的起始节点',
        ports: [
            { id: 'out1', type: 'output', label: '输出' }
        ]
    },
    {
        id: 'end',
        category: '输出节点',
        description: '工作流的结束节点',
        position: { x: 0, y: 0 },
        data: {},
        ports: [
            { id: 'in1', type: 'input', label: '输入' }
        ]
    },
    {
        id: 'process',
        category: '处理节点',
        description: '处理数据节点',
        position: { x: 0, y: 0 },
        data: {},
        ports: [
            { id: 'in12', type: 'input', label: '输入1' },
            { id: 'in2', type: 'input', label: '输入2' },
            { id: 'out1', type: 'output', label: '输出1' },
            { id: 'out2', type: 'output', label: '输出2' }
        ]
    }
]