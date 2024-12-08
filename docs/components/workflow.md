---
title: Shadcn Workflow
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnWorkflow component.

## Usage

::: raw

<CodeRunner title="Usage">
  <ShadcnWorkflowEditor v-model="workflowState"
                        :categories="categories"
                        :nodes="nodes"
                        :connections="[]"/>
</CodeRunner>

:::


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
    category: 'input',
    position: { x: 0, y: 0 },
    data: {},
    description: 'Job start node',
    ports: [
      { id: 'out1', type: 'output', label: 'Input' }
    ]
  },
  {
    id: 'end',
    category: 'output',
    description: 'Job end node',
    position: { x: 0, y: 0 },
    data: {},
    ports: [
      { id: 'in1', type: 'input', label: 'Output' }
    ]
  },
  {
    id: 'process',
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
