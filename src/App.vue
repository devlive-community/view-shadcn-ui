<template>
  <ShadcnWorkflowEditor
      v-model:nodes="nodes"
      v-model:edges="edges"
      @node-select="handleNodeSelect"
      @edge-select="handleEdgeSelect"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Edge } from '@/ui/workflow/types.ts'
import ShadcnWorkflowEditor from '@/ui/workflow/ShadcnWorkflowEditor.vue'

const nodes = ref<Node[]>([])
const edges = ref<Edge[]>([])

const handleNodeSelect = (node: Node) => {
  console.log('Selected node:', node)
}

const handleEdgeSelect = (edge: Edge) => {
  console.log('Selected edge:', edge)
}
</script>