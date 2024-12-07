<template>
  <div class="flex h-screen">
    <ShadcnWorkflowPanel class="w-64 border-r" :categories="props.categories" :nodes="props.nodes"/>

    <ShadcnWorkflowCanvas class="flex-1"
                          :nodes="localNodes"
                          :connections="localConnections"
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
import { ref, watch } from 'vue'
import { WorkflowConnection, WorkflowEmits, WorkflowNode, WorkflowProps } from './types'
import ShadcnWorkflowPanel from './components/ShadcnWorkflowPanel.vue'
import ShadcnWorkflowCanvas from './components/ShadcnWorkflowCanvas.vue'
import ShadcnWorkflowConfigure from './components/ShadcnWorkflowConfigure.vue'

const props = withDefaults(defineProps<WorkflowProps>(), {
  nodes: () => [],
  connections: () => [],
  categories: () => [],
  modelValue: () => ({ nodes: [], connections: [] })
})

const emit = defineEmits<WorkflowEmits>()

const localNodes = ref<WorkflowNode[]>([])
const localConnections = ref<WorkflowConnection[]>([])
const selectedNode = ref<WorkflowNode>()

// Watch for external changes
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    localNodes.value = newValue.nodes
    localConnections.value = newValue.connections
  }
}, { deep: true })

// Watch for internal changes and emit updates
watch([localNodes, localConnections], ([nodes, connections]) => {
  emit('update:modelValue', { nodes, connections })
}, { deep: true })

const handleNodeMoved = (node: WorkflowNode) => {
  const index = localNodes.value.findIndex(n => n.id === node.id)
  if (index !== -1) {
    localNodes.value[index] = node
  }
  emit('on-node-moved', node)
}

const handleNodeAdded = (node: WorkflowNode) => {
  localNodes.value.push(node)
  selectedNode.value = node
  emit('on-node-added', node)
}

const handleConnectionCreated = (connection: WorkflowConnection) => {
  localConnections.value.push(connection)
  emit('on-connection-created', connection)
}

const handleConnectionRemoved = (connectionId: string) => {
  localConnections.value = localConnections.value.filter(conn => conn.id !== connectionId)
  emit('on-connection-removed', connectionId)
}

const handleNodeUpdated = (node: WorkflowNode) => {
  const index = localNodes.value.findIndex(n => n.id === node.id)
  if (index !== -1) {
    localNodes.value[index] = node
  }
}

const handleNodeSelected = (node: WorkflowNode) => {
  selectedNode.value = node
  emit('on-node-selected', node)
}
</script>
