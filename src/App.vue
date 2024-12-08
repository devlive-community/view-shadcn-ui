<template>
  Current Workflow: {{ workflowState }}

  <ShadcnWorkflowEditor v-model="workflowState"
                        :categories="categories"
                        :nodes="nodes"
                        :connections="[]"
                        :search-text="searchText">
  </ShadcnWorkflowEditor>
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
const searchText = ref('')
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
