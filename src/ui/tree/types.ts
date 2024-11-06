export interface TreeNode
{
    label: string
    value?: any
    children: TreeNode[]
}

export interface TreeProps
{
    modelValue?: any[]
    multiple?: boolean
    data?: TreeNode[]
}

export interface TreeNodeProps
{
    node: TreeNode
    level: number
    selectedValues?: any[]
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
