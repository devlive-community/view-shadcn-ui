export interface TreeNode
{
    label: string
    value?: any
    children: TreeNode[]
}

export interface TreeProps
{
    modelValue?: any[]
    data?: TreeNode[]
    multiple?: boolean
    checkable?: boolean
    cascade?: boolean
}

export interface TreeNodeProps
{
    node: TreeNode
    level: number
    selectedValues?: any[]
    checkable?: boolean
    cascade?: boolean
}

export type TreeEmits = {
    'update:modelValue': [nodes: TreeNode[]]
    'on-expand': [node: TreeNode]
    'on-node-click': [node: TreeNode]
}

export type TreeNodeEmits = {
    'on-expand': [node: TreeNode]
    'on-node-click': [node: TreeNode]
}
