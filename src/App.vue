<template>
  <ShadcnWorkflowView :nodes="nodes" :data="data"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
      'data': {
        'name': 'test',
        'name1': 'test'
      }
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
          { required: true, message: 'Please input password!' }
        ],
        required: true
      }
    ],
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
    ports: [
      { id: 'in12', type: 'input', label: 'Input 1', required: true },
      { id: 'in22', type: 'input', label: 'Input 2', required: true },
      { id: 'out1', type: 'output', label: 'Output 1' },
      { id: 'out2', type: 'output', label: 'Output 2' }
    ]
  }
]
</script>
