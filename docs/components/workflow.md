---
title: Shadcn Workflow
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnWorkflow component.

## Usage

::: raw

<CodeRunner title="Usage">
  <div style="width: 1080px">
    <ShadcnWorkflowEditor v-model="workflowState"
                            :categories="categories"
                            :nodes="nodes"
                            :connections="[]"/> 
  </div>
</CodeRunner>

:::

::: details Show code

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

## View

::: raw

<CodeRunner title="View">
  <div style="width: 1080px">
    <ShadcnWorkflowView :nodes="nodes" :data="data"/>
  </div>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <div style="width: 1080px">
    <ShadcnWorkflowView :nodes="nodes" :data="data"/>
  </div>
</template>
```

:::

## Example

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

- `id` : Node ID
- `label` : Node label
- `category` : Node category
- `position` : Node position
    - `x` : Node x position
    - `y` : Node y position
- `configure` : Node configure
    - `field` : Configure field
    - `label` : Configure label
    - `type` : Configure type, support all `form` component
    - `description` : Configure description
    - `required` : Configure required
    - `rules` : Configure rules
- `description` : Node description
- `ports` : Node ports
    - `id` : Port ID
    - `type` : Port type
    - `label` : Port label
    - `required` : Port required
    - `message` : Port message

## Data

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

- `nodes` : Nodes
  - `id` : Node ID
  - `tid` : Node tid (original node id)
  - `category` : Node category
  - `position` : Node position
    - `x` : Node x position
    - `y` : Node y position
  - `data` : Node form data
- `connections` : Connections
  - `id` : Connection ID
  - `source` : Connection source
  - `target` : Connection target

## Workflow Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
            ['modelValue', 'The model value of the workflow', '{ <br />nodes: WorkflowNode\[\], <br />connections: WorkflowConnection\[\] <br />}', '-'],
            ['nodes', 'The nodes of the workflow', 'WorkflowNode\[\]', '\[\]'],
            ['connections', 'The connections of the workflow', 'WorkflowConnection\[\]', '\[\]'],
            ['categories', 'The categories of the workflow', '{ <br />label: string <br />value: string <br />}', '\[\]'],
            ['searchText', 'The search text of the workflow', 'string', ''],
            ['panelWidth', 'The panel width of the workflow', 'number', '250'],
            ['configureWidth', 'The panel height of the workflow', 'number', '300'],
    ]">
</ApiTable>

<br />

<ApiTable title="WorkflowNode"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
            ['id', 'The id of the node', 'string', '-'],
            ['tid', 'The tid of the  original node id', 'string', '-'],
            ['label', 'The label of the node', 'string', '-'],
            ['category', 'The category of the node', 'string', '-'],
            ['ports', 'The ports of the node', 'WorkflowPort\[\]', '\[\]'],
            ['position', 'The position of the node', '{<br /> x: number, <br />y: number <br />}', '-'],
            ['configure', 'The configure of the node', 'array<any>', '-'],
            ['data', 'The data of the node', 'array<any>', '-'],
            ['description', 'The description of the node', 'string', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="WorkflowPort"
    :headers="['Attribute', 'Description', 'Type']"
    :columns="[
        ['id', 'The id of the port', 'string'],
        ['type', 'The type of the port', 'input | output'],
        ['label', 'The label of the port', 'string'],
        ['required', 'The required of the port', 'boolean'],
        ['validated', 'The validated of the port', '{ <br />valid: boolean<br />message: string <br />}'],
    ]">
</ApiTable>

## Workflow Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description', 'Parameters']"
    :columns="[
        ['panel-search', 'The search panel of the workflow', '-'],
        ['panel-category-header', 'The category header of the workflow', '{ <br />category: { <br />label: string <br />value: string <br />} <br />}'],
        ['panel-node', 'The node panel of the workflow', 'node, onDragStart'],
        ['panel-bottom', 'The bottom panel of the workflow', '-'],
        ['canvas-node', 'The node of the workflow', 'node'],
        ['configure-\[node.type\]', 'The configure panel of the workflow', 'node, validation, onChange'],
    ]">
</ApiTable>

## Workflow Events

<ApiTable title="Events"
    :headers="['Attribute', 'Description', 'Type']"
    :columns="[
        ['update:modelValue', 'The model value of the workflow', '{ <br />nodes: WorkflowNode\[\], <br />connections: WorkflowConnection\[\] <br />data: any <br />validation: any <br />}'],
        ['update:searchText', 'The search text of the workflow', 'string'],
        ['on-node-moved', 'The event of the node moved', 'WorkflowNode'],
        ['on-node-added', 'The event of the node selected', 'WorkflowNode'],
        ['on-node-selected', 'The event of the node selected', 'WorkflowNode'],
        ['on-node-deleted', 'The event of the node deleted', 'WorkflowNode'],
        ['on-connection-created', 'The event of the connection created', 'WorkflowConnection'],
        ['on-connection-removed', 'The event of the connection removed', 'connectionId'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

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
