<template>
  <div :class="['flex w-full h-screen', dark ? 'bg-gray-900' : '']">
    <ShadcnWorkflowPanel class="border-r"
                         :categories="props.categories"
                         :nodes="props.nodes"
                         :search-text="props.searchText"
                         :dark="props.dark"
                         :style="{ width: calcSize(panelWidth) }"
                         @update:search-text="(text: string) => emit('update:searchText', text)">
      <template #search>
        <slot name="panel-search"/>
      </template>

      <template #category-header="{ category }">
        <slot :category="category" name="panel-category-header"/>
      </template>

      <template #node="{ node, onDragStart }">
        <slot :node="node" :onDragStart="onDragStart" name="panel-node"/>
      </template>

      <template #bottom>
        <slot name="panel-bottom"/>
      </template>
    </ShadcnWorkflowPanel>

    <ShadcnWorkflowCanvas class="flex-1"
                          :nodes="localNodes"
                          :connections="localConnections"
                          :selected-node-id="selectedNode?.id"
                          :dark="props.dark"
                          @on-node-moved="handleNodeMoved"
                          @on-node-added="handleNodeAdded"
                          @on-node-selected="handleNodeSelected"
                          @on-connection-created="handleConnectionCreated"
                          @on-connection-removed="handleConnectionRemoved"
                          @on-node-deleted="handleNodeDeleted"
                          @on-node-updated="handleNodeUpdated">
      <template #node="{ node }">
        <slot name="canvas-node" :node="node"/>
      </template>
    </ShadcnWorkflowCanvas>

    <ShadcnWorkflowConfigure class="border-l"
                             :selected-node="selectedNode"
                             :width="configureWidth"
                             :dark="props.dark"
                             :style="{ width: calcSize(configureWidth) }"
                             @update:node="handleNodeUpdated">
      <template v-for="(_, name) in $slots" :key="name" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps"/>
      </template>
    </ShadcnWorkflowConfigure>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { WorkflowConnection, WorkflowEmits, WorkflowNode, WorkflowProps } from './types'
import ShadcnWorkflowPanel from './components/ShadcnWorkflowPanel.vue'
import ShadcnWorkflowCanvas from './components/ShadcnWorkflowCanvas.vue'
import ShadcnWorkflowConfigure from './components/ShadcnWorkflowConfigure.vue'
import { calcSize } from '@/utils/common.ts'

const emit = defineEmits<WorkflowEmits>()
const props = withDefaults(defineProps<WorkflowProps>(), {
  nodes: () => [],
  connections: () => [],
  categories: () => [],
  modelValue: () => ({ nodes: [], connections: [] }),
  searchText: '',
  panelWidth: 250,
  configureWidth: 300,
  dark: false
})

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
  const simplifiedNodes = nodes.map(node => ({
    id: node.id,
    tid: node.tid,
    category: node.category,
    position: node.position,
    key: node.key,
    data: node.data && node.data.length > 0 ? node.data.reduce((acc, curr) => ({ ...acc, ...curr }), {}) : node.data
  }))
  const data = { nodes: simplifiedNodes, connections: connections }
  const validation = transformWorkflowValidation(nodes)

  emit('update:modelValue', { nodes, connections, data, validation })
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

const handleNodeDeleted = (node: WorkflowNode) => {
  localNodes.value = localNodes.value.filter(n => n.id !== node.id)
  emit('on-node-deleted', node)
}

const transformWorkflowValidation = (nodes: any) => {
  const validatedArr: Array<{
    type: string;
    scope?: string;
    message: string;
  }> = []

  nodes.forEach((node: any) => {
    // 处理 configure 字段中的验证信息
    // Handle validation information in the configure field
    if (node.configure) {
      node.configure.forEach((config: any) => {
        if (config.validated && !config.validated.valid) {
          validatedArr.push({
            type: 'configure',
            scope: config.field,
            message: config.validated.message
          })
        }
      })
    }

    // 处理 ports 字段中的验证信息
    // Handle validation information in the ports field
    if (node.ports) {
      node.ports.forEach((port: any) => {
        if (port.validated && !port.validated.valid) {
          validatedArr.push({
            type: 'port',
            scope: port.id,
            message: port.validated.message
          })
        }
      })
    }
  })

  return validatedArr
}

const mergeNodes = (propsNodes: WorkflowNode[], modelNodes: any[]) => {
  return modelNodes.map(modelNode => {
    const propsNode = propsNodes.find(node => node.id === modelNode.tid) as any

    let mergedConfigure = modelNode.configure || []
    if (propsNode?.configure) {
      mergedConfigure = propsNode?.configure.map(config => ({
        ...config,
        value: modelNode.data && modelNode.data[config.field] !== undefined
            ? modelNode.data[config.field]
            : config.value
      }))
    }

    if (propsNode) {
      return {
        ...propsNode,
        id: modelNode.id,
        position: modelNode.position,
        data: modelNode.data || {},
        category: modelNode.category,
        ports: propsNode.ports,
        configure: mergedConfigure,
        validation: propsNode.validation
      }
    }

    return modelNode
  })
}

onMounted(() => {
  if (props.modelValue) {
    localNodes.value = mergeNodes(props.nodes, props.modelValue.nodes)
    localConnections.value = props.modelValue.connections
  }
})

watch(() => props.modelValue?.nodes, (newNodes, oldNodes) => {
  if (!newNodes || JSON.stringify(newNodes) === JSON.stringify(oldNodes)) {
    return
  }
  localNodes.value = mergeNodes(props.nodes, newNodes)
})

watch(() => props.modelValue?.connections, (newConnections) => {
  if (newConnections) {
    localConnections.value = newConnections
  }
})
</script>
