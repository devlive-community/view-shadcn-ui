// types.ts
export type Position = {
    x: number
    y: number
}

export type Port = {
    id: string
    type: 'input' | 'output'
    label: string
}

export type Node = {
    id: string
    type: string
    category?: string
    position: Position
    data: Record<string, any>
    ports: Port[]
    description?: string
}

export type Edge = {
    id: string
    source: string
    sourcePort: string
    target: string
    targetPort: string
}

export type WorkflowEmits = {
    (e: 'update:nodes', nodes: Node[]): void
    (e: 'update:edges', edges: Edge[]): void
    (e: 'node-select', node: Node): void
    (e: 'edge-select', edge: Edge): void
}

export type WorkflowProps = {
    nodes?: Node[]
    edges?: Edge[]
    readonly?: boolean
}

export type WorkflowNodePortsEmits = {
    (e: 'connect', port: Port): void
}

export type WorkflowNodePortsProps = {
    node: Node
}

export type WorkflowCanvasProps = {
    scale?: number
    position?: Position
}

export type WorkflowCanvasEmits = {
    (e: 'update:scale', scale: number): void
    (e: 'update:position', position: Position): void
}

export type WorkflowConfigureProps = {
    selectedNode?: Node
    selectedEdge?: Edge
}

export type WorkflowPanelProps = {
    nodes: Node[]
    category?: string[]
}
