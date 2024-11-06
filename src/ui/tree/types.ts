export interface TreeNode
{
    label: string
    value?: any
    children: TreeNode[]
}

export interface TreeProps
{
    modelValue?: TreeNode
    data?: TreeNode[]
}

export interface TreeNodeProps
{
    node: TreeNode
    level: number
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
