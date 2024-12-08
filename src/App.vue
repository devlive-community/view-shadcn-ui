<template>
  Current Workflow: {{ workflowState }}

  <ShadcnWorkflowEditor v-model="workflowState"
                        :categories="categories"
                        :nodes="nodes"
                        :connections="[]"
                        :search-text="searchText">
    <template #panel-search>
      <div class="p-4 border-b border-gray-200">
        <ShadcnInput v-model="searchText" placeholder="Search"/>
      </div>
    </template>
  </ShadcnWorkflowEditor>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categories = ['Input Node', 'Transform Node', 'Output Node']
const searchText = ref('')
const workflowState = ref({
  nodes: [],
  connections: []
})

const nodes: any[] = [
  {
    id: 'start',
    category: 'Input Node',
    position: { x: 0, y: 0 },
    data: {},
    description: 'Job start node',
    ports: [
      { id: 'out1', type: 'output', label: 'Input' }
    ]
  },
  {
    id: 'end',
    category: 'Output Node',
    description: 'Job end node',
    position: { x: 0, y: 0 },
    data: {},
    ports: [
      { id: 'in1', type: 'input', label: 'Output' }
    ]
  },
  {
    id: 'process',
    category: 'Transform Node',
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
