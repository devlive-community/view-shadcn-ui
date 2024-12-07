<template>
  <div ref="canvasRef"
       class="relative w-full h-full overflow-hidden bg-gray-50"
       @mousemove="handleMouseMove"
       @mouseup="handleMouseUp"
       @dragover.prevent="handleDragOver"
       @drop.prevent="handleDrop">
    <div v-for="node in nodes"
         class="absolute bg-white rounded-lg shadow-md border"
         :key="node.id"
         :class="{
              'ring-2 ring-blue-500': selectedNodeId === node.id,
              'cursor-move': !isConnecting
         }"
         :style="{
              transform: `translate(${calcSize(node.position?.x)}, ${calcSize(node.position?.y)})`
         }"
         @click="selectNode(node)"
         @mousedown="startDragging(node, $event)">
      <div class="p-2">
        <div class="text-xs text-gray-500">{{ node.category }}</div>
        <ShadcnWorkflowNodePorts :node="node"
                                 :disabled="isNodeDragging"
                                 @on-connection-start="(event, port) => handleConnectionStart(event, port, node)"
                                 @on-connection-end="(event, port) => handleConnectionEnd(event, port, node)"/>
      </div>
    </div>

    <svg class="absolute inset-0"
         :style="{
              width: '100%',
              height: '100%',
              overflow: 'visible',
              pointerEvents: 'none'
        }">
      <g>
        <!-- 活动连接线 -->
        <!-- Active connection line -->
        <path v-if="activeConnection"
              class="stroke-blue-400"
              fill="none"
              stroke-dasharray="4"
              stroke-width="2"
              :d="getActiveConnectionPath()"/>

        <!-- 已建立的连接线 -->
        <!-- Existing connections -->
        <path v-for="connection in connections"
              class="stroke-gray-400"
              fill="none"
              stroke-width="2"
              :key="connection.id"
              :d="getConnectionPath(connection)"/>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { WorkflowCanvasEmits, WorkflowCanvasProps, WorkflowConnection, WorkflowNode, WorkflowPort, WorkflowPortType } from './types'
import ShadcnWorkflowNodePorts from './ShadcnWorkflowNodePorts.vue'
import { calcSize } from '@/utils/common.ts'
import { randomUUID } from '@/utils/uuid.ts'

const emit = defineEmits<WorkflowCanvasEmits>()
const props = defineProps<WorkflowCanvasProps>()

const canvasRef = ref<HTMLElement | null>(null)
const isConnecting = ref(false)
const isNodeDragging = ref(false)
const draggingNode = ref<WorkflowNode | null>(null)
const dragOffset = ref({ x: 0, y: 0 })
const activeConnection = ref<{
  sourcePort: WorkflowPort
  sourceNode: WorkflowNode
  sourcePortPosition: { x: number; y: number }
  mousePosition: { x: number; y: number }
} | null>(null)

// 获取端口的实际位置
// Get the actual position of the port
const getPortPosition = (node: WorkflowNode, portId: string): { x: number; y: number } => {
  const portElement = document.querySelector(`[data-port-id="${ portId }"]`) as HTMLElement
  if (!portElement) {
    return { x: 0, y: 0 }
  }

  const rect = portElement.getBoundingClientRect()
  const canvasRect = canvasRef.value?.getBoundingClientRect()
  if (!canvasRect) {
    return { x: 0, y: 0 }
  }

  return {
    x: rect.left + rect.width / 2 - canvasRect.left,
    y: rect.top + rect.height / 2 - canvasRect.top
  }
}

// 计算贝塞尔曲线控制点
// Calculate Bezier curve control points
const getControlPoints = (start: { x: number; y: number }, end: { x: number; y: number }) => {
  const horizontalDistance = Math.abs(end.x - start.x)
  return {
    c1: { x: start.x + horizontalDistance / 2, y: start.y },
    c2: { x: end.x - horizontalDistance / 2, y: end.y }
  }
}

// 处理连接开始
// Handle connection start
const handleConnectionStart = (event: MouseEvent, port: WorkflowPort, node: WorkflowNode) => {
  // 设置连接状态，阻止节点拖拽
  // Set connection state, prevent node dragging
  isConnecting.value = true
  const portPosition = getPortPosition(node, port.id)
  activeConnection.value = {
    sourcePort: port,
    sourceNode: node,
    sourcePortPosition: portPosition,
    mousePosition: {
      x: event.clientX - (canvasRef.value?.getBoundingClientRect().left || 0),
      y: event.clientY - (canvasRef.value?.getBoundingClientRect().top || 0)
    }
  }
}

// 处理连接结束
// Handle connection end
const handleConnectionEnd = (event: MouseEvent, targetPort: WorkflowPort, targetNode: WorkflowNode) => {
  if (!activeConnection.value) {
    return
  }

  const { sourcePort } = activeConnection.value

  // 验证连接是否有效
  // Validate connection
  if (sourcePort.type === targetPort.type) {
    activeConnection.value = null
    isConnecting.value = false
    return
  }

  // 创建新连接
  // Create new connection
  const connection: WorkflowConnection = {
    id: randomUUID(),
    source: sourcePort.type === WorkflowPortType.output ? sourcePort.id : targetPort.id,
    target: sourcePort.type === WorkflowPortType.input ? sourcePort.id : targetPort.id
  }

  emit('on-connection-created', connection)
  activeConnection.value = null
  isConnecting.value = false
}

// 处理鼠标移动
// Handle mouse move
const handleMouseMove = (event: MouseEvent) => {
  // 处理节点拖拽
  // Handle node dragging
  if (draggingNode.value && !isConnecting.value) {
    const newPosition = {
      x: event.clientX - dragOffset.value.x,
      y: event.clientY - dragOffset.value.y
    }

    emit('on-node-moved', {
      ...draggingNode.value,
      position: newPosition
    })
  }

  // 处理连接线拖拽
  // Handle connection line dragging
  if (activeConnection.value) {
    activeConnection.value.mousePosition = {
      x: event.clientX - (canvasRef.value?.getBoundingClientRect().left || 0),
      y: event.clientY - (canvasRef.value?.getBoundingClientRect().top || 0)
    }
  }
}

// 获取活动连接路径
// Get the path of the active connection
const getActiveConnectionPath = () => {
  if (!activeConnection.value) {
    return ''
  }

  const { sourcePortPosition, mousePosition } = activeConnection.value
  const controls = getControlPoints(sourcePortPosition, mousePosition)

  return `M ${ sourcePortPosition.x } ${ sourcePortPosition.y } C ${ controls.c1.x } ${ controls.c1.y } ${ controls.c2.x } ${ controls.c2.y } ${ mousePosition.x } ${ mousePosition.y }`
}

// 获取已建立连接的路径
// Get the path of established connections
const getConnectionPath = (connection: WorkflowConnection) => {
  const sourcePosition = getPortPosition(
      props.nodes.find(n => n.ports.find(p => p.id === connection.source))!,
      connection.source
  )
  const targetPosition = getPortPosition(
      props.nodes.find(n => n.ports.find(p => p.id === connection.target))!,
      connection.target
  )

  const controls = getControlPoints(sourcePosition, targetPosition)

  return `M ${ sourcePosition.x } ${ sourcePosition.y } C ${ controls.c1.x } ${ controls.c1.y } ${ controls.c2.x } ${ controls.c2.y } ${ targetPosition.x } ${ targetPosition.y }`
}

// 开始拖拽节点
// Start dragging the node
const startDragging = (node: WorkflowNode, event: MouseEvent) => {
  // 如果正在连接线，不启动节点拖拽
  // If connecting, don't start node dragging
  if (isConnecting.value) {
    return
  }

  isNodeDragging.value = true
  draggingNode.value = node
  dragOffset.value = {
    x: event.clientX - node.position!!.x,
    y: event.clientY - node.position!!.y
  }
}

// 选择节点
// Select the node
const selectNode = (node: WorkflowNode) => {
  emit('on-node-selected', node.id)
}

// 处理鼠标释放
// Handle mouse release
const handleMouseUp = () => {
  draggingNode.value = null
  isNodeDragging.value = false
}

// 处理拖拽悬停
// Handle drag hover
const handleDragOver = (event: DragEvent) => {
  event.dataTransfer!.dropEffect = 'copy'
}

// 处理节点放置
// Handle node drop
const handleDrop = (event: DragEvent) => {
  const data = event.dataTransfer!.getData('application/node')
  if (!data) {
    return
  }

  try {
    const nodeData = JSON.parse(data)
    const rect = canvasRef.value?.getBoundingClientRect()
    if (!rect) {
      return
    }

    // 计算放置位置
    // Calculate drop position
    const dropPosition = {
      x: event.clientX - rect.left - 60,  // 60 是节点宽度的一半 | 60 is the half width of the node
      y: event.clientY - rect.top - 30    // 30 是节点高度的一半 | 30 is the half height of the node
    }

    // 创建新节点
    // Create new node
    const newNode: Node = {
      ...nodeData,
      position: dropPosition
    }

    emit('on-node-added', newNode)
  }
  catch (e) {
    console.error('Error parsing drop data:', e)
  }
}
</script>
