export interface TreeNode
{
    label: string
    value?: any
    children: TreeNode[]
    isLeaf?: boolean
}

export interface TreeProps
{
    modelValue?: any[]
    data?: TreeNode[]
    multiple?: boolean
    checkable?: boolean
    cascade?: boolean
    loadData?: (node: TreeNode) => Promise<TreeNode[]>
}

export interface TreeNodeProps
{
    node: TreeNode
    level: number
    selectedValues?: any[]
    checkable?: boolean
    cascade?: boolean
    loadData?: (node: TreeNode) => Promise<TreeNode[]>
}

export type TreeEmits = {
    (e: 'update:modelValue', value: any[]): void
    (e: 'on-expand', node: TreeNode): void
    (e: 'on-node-click', node: TreeNode): void
    (e: 'on-load', node: TreeNode): void
}

export type TreeNodeEmits = {
    (e: 'on-expand', node: TreeNode): void
    (e: 'on-node-click', node: TreeNode): void
    (e: 'on-load', node: TreeNode): void
}
