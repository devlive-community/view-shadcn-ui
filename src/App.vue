<template>
  <ShadcnWorkflowEditor v-model="workflowState"
                        :categories="categories"
                        :nodes="nodes"
                        :connections="[]"/>
</template>

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
const workflowState = ref({
  nodes: [],
  connections: []
})

const nodes: any[] = [
  {
    id: 'start',
    label: 'Start',
    category: 'input',
    position: { x: 0, y: 0 },
    configure: [
      {
        field: 'id',
        label: 'ID',
        type: 'select',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
          { label: 'Option 4', value: '4' },
          { label: 'Option 5', value: '5' },
          { label: 'Option 6', value: '6' },
          { label: 'Option 7', value: '7' }
        ]
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
        required: true,
        hiddenOnUsed: 'id'
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