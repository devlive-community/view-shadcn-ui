<template>
  <div class="flex h-screen">
    <ShadcnWorkflowPanel class="w-64 border-r" :categories="props.categories" :nodes="props.nodes"/>

    <ShadcnWorkflowCanvas class="flex-1"
                          :nodes="nodes"
                          :connections="connections"
                          :selected-node-id="selectedNode?.id"
                          @on-node-moved="handleNodeMoved"
                          @on-node-added="handleNodeAdded"
                          @on-node-selected="handleNodeSelected"
                          @on-connection-created="handleConnectionCreated"
                          @on-connection-removed="handleConnectionRemoved"/>

    <ShadcnWorkflowConfigure class="w-80 border-l" :selected-node="selectedNode" @update:node="handleNodeUpdated"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { WorkflowConnection, WorkflowNode, WorkflowProps } from './types'
import ShadcnWorkflowPanel from './components/ShadcnWorkflowPanel.vue'
import ShadcnWorkflowCanvas from './components/ShadcnWorkflowCanvas.vue'
import ShadcnWorkflowConfigure from './components/ShadcnWorkflowConfigure.vue'

const props = withDefaults(defineProps<WorkflowProps>(), {
  nodes: () => [],
  connections: () => [],
  categories: () => []
})

const nodes = ref<WorkflowNode[]>([])
const connections = ref<WorkflowConnection[]>(props.connections)
const selectedNode = ref<WorkflowNode>()

const handleNodeMoved = (node: WorkflowNode) => {
  const index = nodes.value.findIndex(n => n.id === node.id)
  if (index !== -1) {
    nodes.value[index] = node
  }
}

const handleNodeAdded = (node: WorkflowNode) => {
  nodes.value.push(node)
  selectedNode.value = node
}

const handleConnectionCreated = (connection: WorkflowConnection) => {
  connections.value.push(connection)
}

const handleConnectionRemoved = (connectionId: string) => {
  connections.value = connections.value.filter(conn => conn.id !== connectionId)
}

const handleNodeUpdated = (node: WorkflowNode) => {
  const index = nodes.value.findIndex(n => n.id === node.id)
  if (index !== -1) {
    nodes.value[index] = node
  }
}

const handleNodeSelected = (node: WorkflowNode) => {
  selectedNode.value = node
}
</script>
