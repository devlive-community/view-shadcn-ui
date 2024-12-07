<template>
  <div class="flex h-screen">
    <ShadcnWorkflowPanel class="w-64 border-r"
                         :category="categories"
                         :nodes="defaultNodes"
                         @on-node-drag-start="handleNodeDragStart"/>

    <ShadcnWorkflowCanvas class="flex-1"
                          :nodes="nodes"
                          :connections="connections"
                          :selected-node-id="selectedNode?.id"
                          @on-node-moved="handleNodeMoved"
                          @on-node-added="handleNodeAdded"
                          @on-connection-created="handleConnectionCreated"
                          @on-connection-removed="handleConnectionRemoved"/>

    <ShadcnWorkflowConfigure class="w-80 border-l" :selected-node="selectedNode" @update:node="handleNodeUpdated"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defaultNodes, WorkflowConnection, WorkflowNode } from './types'
import ShadcnWorkflowPanel from './ShadcnWorkflowPanel.vue'
import ShadcnWorkflowCanvas from './ShadcnWorkflowCanvas.vue'
import ShadcnWorkflowConfigure from './ShadcnWorkflowConfigure.vue'

const nodes = ref<WorkflowNode[]>([])
const connections = ref<WorkflowConnection[]>([])
const selectedNode = ref<WorkflowNode>()

const categories = ['输入节点', '处理节点', '输出节点']

const handleNodeDragStart = (node: WorkflowNode) => {
  console.log(node)
}

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
</script>
