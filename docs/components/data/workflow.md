---
title: 流程 (Workflow)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnWorkflow` 组件的一些特性和使用方法。

## 用法

::: raw

<CodeRunner title="用法">
  <div style="width: 1080px">
    <ShadcnWorkflowEditor v-model="workflowState"
                            :categories="categories"
                            :nodes="nodes"
                            :connections="[]"
                            :dark="darkMode"/>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div style="width: 1080px">
    <ShadcnWorkflowEditor v-model="workflowState"
                          :categories="categories"
                          :nodes="nodes"
                          :connections="[]"/>
  </div>
</template>
```

:::

## 视图

::: raw

<CodeRunner title="视图">
  <div style="width: 1080px">
    <ShadcnWorkflowView :nodes="nodes" :data="data" :dark="darkMode"/>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div style="width: 1080px">
    <ShadcnWorkflowView :nodes="nodes" :data="data"/>
  </div>
</template>
```

:::

## 示例

```json
{
    id: 'start',
    label: 'Start',
    category: 'input',
    position: { x: 0, y: 0 },
    configure: [
        {
            field: 'name',
            label: 'Name',
            type: 'input',
            description: 'This is a long description, this is a long description, this is a long description, this is a long description',
            required: true
        },
        {
            field: 'name1',
            label: 'Password',
            type: 'password',
            rules: [
                {
                    required: true, 
                    message: 'Please input password!'
                }
            ],
            required: true
        }
    ],
    description: 'Job start node',
    ports: [
        { 
            id: 'out1', 
            type: 'output',
            label: 'Output', 
            required: true,
            message: 'Input is required'
        }
    ]
}
```

- `id` ： 节点 ID
- `label` ： 节点标签
- `category` ：节点类别
- `position` ： 节点位置
    - `x` ： 节点 x 位置
    - `y` ： 节点 y 位置
- `configure` ： 节点配置
    - `field` ： 配置字段
    - `label` ： 配置标签
    - `type` ： 配置类型，支持所有 `form` 组件
    - `description` ： 配置描述
    - `required` ：配置必需
    - `rules` ： 配置规则
    - `hiddenOnUsed` ： 配置在使用时隐藏,格式为配置字段: 比如 `name` 配置了为 `hiddenOnUsed` 为 `id`, 那么在使用时 `id` 配置项会被隐藏
- `description` ： 节点描述
- `ports` ： 节点端口
    - `id` ： 端口 ID
    - `type` ： 端口类型
    - `label` ： 端口标签
    - `required` ：需要端口
    - `message` ： 端口消息

## 数据

```json
{
    "nodes": [
        {
            "id": "646de380-ec15-411c-a830-3bf4c5515451",
            "tid": "start",
            "category": "input",
            "position": {
                "x": 160,
                "y": 121
            },
            "data": {}
        },
        {
            "id": "109ed659-2909-41bd-9530-12010a539e3f",
            "tid": "end",
            "category": "output",
            "position": {
                "x": 396,
                "y": 340
            },
            "data": {}
        }
    ],
    "connections": [
        {
            "id": "7f4fe994-c2ef-4978-b1c8-f3c94dae79ef",
            "source": "646de380-ec15-411c-a830-3bf4c5515451-out1",
            "target": "109ed659-2909-41bd-9530-12010a539e3f-in1"
        }
    ]
}
```

- `nodes` ：节点
  - `id` ： 节点 ID
  - `tid` ： 节点 tid （原始节点 ID）
  - `category` ：节点类别
  - `position` ： 节点位置
    - `x` ： 节点 x 位置
    - `y` ： 节点 y 位置
  - `data` ：节点表单数据
- `connections` ：连接
  - `id` ： 连接 ID
  - `source` ： 连接源
  - `target` ： 连接目标

## 流程 (Workflow) 属性

<ApiTable title="流程 (Workflow) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
            ['modelValue', '流程的 model 值', '{ <br />nodes: WorkflowNode\[\], <br />connections: WorkflowConnection\[\] <br />}', '-'],
            ['nodes', '流程的节点', 'WorkflowNode\[\]', '\[\]'],
            ['connections', '流程的连接', 'WorkflowConnection\[\]', '\[\]'],
            ['categories', '流程的类别', '{ <br />label: string <br />value: string <br />}', '\[\]'],
            ['searchText', '流程的搜索文本', 'string', ''],
            ['panelWidth', '流程的面板宽度', 'number', '250'],
            ['configureWidth', '流程的面板高度', 'number', '300'],
    ]">
</ApiTable>

<br />

<ApiTable title="流程节点 (Workflow Node) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
            ['id', '节点的 ID', 'string', '-'],
            ['tid', '原始节点 id 的 tid', 'string', '-'],
            ['label', '节点的标签', 'string', '-'],
            ['category', '节点的类别', 'string', '-'],
            ['ports', '节点的端口', 'WorkflowPort\[\]', '\[\]'],
            ['position', '节点的位置', '{<br /> x: number, <br />y: number <br />}', '-'],
            ['configure', '节点的配置', 'array<any>', '-'],
            ['data', '节点的数据', 'array<any>', '-'],
            ['description', '节点的描述', 'string', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="流程端口 (Workflow Port) 属性"
    :headers="['事件', '描述', '类型']"
    :columns="[
        ['id', '端口的 ID', 'string'],
        ['type', '端口的类型', 'input | output'],
        ['label', '端口的标签', 'string'],
        ['required', '端口是否必须', 'boolean'],
        ['validated', '端口的验证状态', '{ <br />valid: boolean<br />message: string <br />}'],
    ]">
</ApiTable>

## 流程 (Workflow) 插槽

<ApiTable title="流程 (Workflow) 插槽"
    :headers="['插槽', '描述', '参数']" 
    :columns="[
        ['panel-search', '流程的搜索面板', '-'],
        ['panel-category-header', '流程的类别标题', '{ <br />category: { <br />label: string <br />value: string <br />} <br />}'],
        ['panel-node', '流程的节点面板', 'node, onDragStart'],
        ['panel-bottom', '流程的底部面板', '-'],
        ['canvas-node', '流程节点', 'node'],
        ['configure-\[node.type\]', '流程的配置面板', 'node, validation, onChange'],
    ]">
</ApiTable>

## 流程 (Workflow) 事件

<ApiTable title="流程 (Workflow) 事件"
    :headers="['事件', '描述', '类型']"
    :columns="[
        ['update:modelValue', '流程的 model 值', '{ <br />nodes: WorkflowNode\[\], <br />connections: WorkflowConnection\[\] <br />data: any <br />validation: any <br />}'],
        ['update:searchText', '流程的搜索文本', 'string'],
        ['on-node-moved', '节点移动', 'WorkflowNode'],
        ['on-node-added', '节点添加', 'WorkflowNode'],
        ['on-node-selected', '节点选择', 'WorkflowNode'],
        ['on-node-deleted', '节点删除', 'WorkflowNode'],
        ['on-connection-created', '连接创建', 'WorkflowConnection'],
        ['on-connection-removed', '连接删除', 'connectionId'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const categories = [
  {
    label: 'Input Node',
    value: 'input'
  },
  {
    label: 'Output Node',
    value: 'output'
  },
  {
    label: 'Transform Node',
    value: 'transform'
  }
]
const searchText = ref('')
const workflowState = ref({
  nodes: [],
  connections: []
})

const data = ref({
  'nodes': [
    {
      'id': '646de380-ec15-411c-a830-3bf4c5515451',
      'tid': 'start',
      'category': 'input',
      'position': {
        'x': 160,
        'y': 121
      },
      'data': {}
    },
    {
      'id': '109ed659-2909-41bd-9530-12010a539e3f',
      'tid': 'end',
      'category': 'output',
      'position': {
        'x': 396,
        'y': 340
      },
      'data': {}
    }
  ],
  'connections': [
    {
      'id': '7f4fe994-c2ef-4978-b1c8-f3c94dae79ef',
      'source': '646de380-ec15-411c-a830-3bf4c5515451-out1',
      'target': '109ed659-2909-41bd-9530-12010a539e3f-in1'
    }
  ]
} as any)

const nodes: any[] = [
  {
    id: 'start',
    label: 'Start',
    category: 'input',
    position: { x: 0, y: 0 },
    data: {},
    description: 'Job start node',
    ports: [
      { id: 'out1', type: 'output', label: 'Output', required: true, message: 'Input is required' }
    ]
  },
  {
    id: 'end',
    label: 'End',
    category: 'output',
    description: 'Job end node',
    position: { x: 0, y: 0 },
    data: {},
    ports: [
      { id: 'in1', type: 'input', label: 'Input', required: true }
    ]
  },
  {
    id: 'process',
    label: 'Process',
    category: 'transform',
    description: 'Job transform node',
    position: { x: 0, y: 0 },
    data: {},
    ports: [
      { id: 'in12', type: 'input', label: 'Input 1' },
      { id: 'in22', type: 'input', label: 'Input 2' },
      { id: 'out1', type: 'output', label: 'Output 1' },
      { id: 'out2', type: 'output', label: 'Output 2' }
    ]
  }
]
</script>