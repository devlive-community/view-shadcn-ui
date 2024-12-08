<template>
  <div class="w-full h-full overflow-auto outline-none" tabindex="0" @keydown="handleKeyDown">
    <div ref="canvasRef"
         class="relative bg-gray-50"
         :style="{
               width: calcSize(canvas.width),
               height: calcSize(canvas.height),
         }"
         @mousemove="handleMouseMove"
         @mouseup="handleMouseUp"
         @mouseleave="handleMouseLeave"
         @dragover.prevent="handleDragOver"
         @drop.prevent="handleDrop">
      <!-- Background Grid Pattern -->
      <div v-if="canvas.showGrid"
           class="absolute inset-0"
           :style="{
                   backgroundImage: `
                     linear-gradient(to right, ${canvas.gridColor} 1px, transparent 1px),
                     linear-gradient(to bottom, ${canvas.gridColor} 1px, transparent 1px)
                   `,
                   backgroundSize: `${calcSize(canvas.gridSize)} ${calcSize(canvas.gridSize)}`,
                   opacity: canvas.gridOpacity
           }">
      </div>

      <div v-for="node in nodes"
           class="absolute bg-white rounded-lg shadow-md border"
           :key="node.id"
           :data-node-id="node.id"
           :class="{
                  'ring-2 ring-blue-500': selectedNodeId === node.id,
                  'cursor-move': !isConnecting,
                  'ring-2 ring-red-500 animate-pulse': node?.ports.some(port => port?.validated?.valid === false)
           }"
           :style="{
                transform: `translate(${calcSize(node.position?.x)}, ${calcSize(node.position?.y)})`
           }"
           @click="selectNode(node)"
           @mousedown="startDragging(node, $event)">
        <div class="p-2">
          <slot name="node" :node="node">
            <div class="p-2">
              <div class="text-xs text-gray-500 py-1.5 mb-2 border-b">{{ node.label }}</div>
            </div>
          </slot>

          <ShadcnWorkflowNodePorts :node="node"
                                   :disabled="isNodeDragging"
                                   :connections="connections"
                                   @on-connection-start="(event, port) => handleConnectionStart(event, port, node)"
                                   @on-connection-end="(event, port) => handleConnectionEnd(event, port, node)"
                                   @on-validation-change="handleNodeValidationChange"/>
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
                :class="['animate-pulse',
                        activeConnection.isValid ? 'stroke-blue-500' : 'stroke-red-500'
                ]"
                fill="none"
                stroke-dasharray="4"
                stroke-width="2"
                :d="getActiveConnectionPath()"/>

          <!-- 已建立的连接线 -->
          <!-- Existing connections -->
          <g v-for="connection in connections" :key="connection.id">
            <!-- 连接线的点击区域 -->
            <!-- Connection line click area -->
            <path stroke="transparent"
                  class="cursor-pointer hover:stroke-blue-200"
                  style="pointer-events: all"
                  stroke-width="4"
                  fill="none"
                  :d="getConnectionPath(connection)"
                  @click.stop="selectConnection(connection)"/>

            <!-- 实际显示的连接线 -->
            <!-- Actual connection line -->
            <path fill="none"
                  stroke-width="2"
                  :d="getConnectionPath(connection)"
                  :class="selectedConnectionId === connection.id ? 'stroke-blue-500' : 'stroke-gray-400'"/>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { t } from '@/utils/locale'
import { WorkflowCanvasEmits, WorkflowCanvasProps, WorkflowConnection, WorkflowNode, WorkflowPort, WorkflowPortType } from '../types'
import ShadcnWorkflowNodePorts from './ShadcnWorkflowNodePorts.vue'
import { calcSize } from '@/utils/common.ts'
import { randomUUID } from '@/utils/uuid.ts'

const emit = defineEmits<WorkflowCanvasEmits>()
const props = withDefaults(defineProps<WorkflowCanvasProps>(), {
  canvas: () => ({
    color: '#f3f4f6',
    showGrid: true,
    gridColor: 'rgba(0, 0, 0, 0.1)',
    gridSize: 20,
    gridOpacity: 0.5,
    pattern: 'grid',
    width: 1920,
    height: 1080
  })
})

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
  isValid: boolean
} | null>(null)
const selectedConnectionId = ref<string | null>(null)

// 获取端口的实际位置
// Get the actual position of the port
// @ts-ignore
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
  isConnecting.value = true
  const portPosition = getPortPosition(node, port.id)

  activeConnection.value = {
    sourcePort: port,
    sourceNode: node,
    sourcePortPosition: portPosition,
    mousePosition: {
      x: event.clientX - (canvasRef.value?.getBoundingClientRect().left || 0),
      y: event.clientY - (canvasRef.value?.getBoundingClientRect().top || 0)
    },
    isValid: false
  }

  const mouseMoveHandler = (e: MouseEvent) => {
    if (!isConnecting.value || !activeConnection.value) {
      return
    }

    // 更新鼠标位置
    // Update mouse position
    activeConnection.value.mousePosition = {
      x: e.clientX - (canvasRef.value?.getBoundingClientRect().left || 0),
      y: e.clientY - (canvasRef.value?.getBoundingClientRect().top || 0)
    }

    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    const portElement = elements.find(el => el.hasAttribute('data-port-id'))

    if (portElement) {
      const portId = portElement.getAttribute('data-port-id')
      const portType = portElement.getAttribute('data-port-type')
      const targetNode = props.nodes.find(n => portId?.startsWith(n.id))

      // 检查是否已经存在连接
      // Check if there is already a connection
      const isPortAlreadyConnected = props.connections.some(conn => {
        if (port.type === WorkflowPortType.output) {
          // 如果是输出端口，检查是否已经连接到目标输入端口
          // Check if it is already connected to the target input port
          return conn.source === port.id && conn.target === portId
        }
        else {
          // 如果是输入端口，检查是否已经连接到目标输出端口
          // Check if it is already connected to the target output port
          return conn.target === port.id && conn.source === portId
        }
      })

      // 判断连接是否有效的条件
      // Check if the connection is valid
      activeConnection.value.isValid = Boolean(
          targetNode &&
          targetNode.id !== node.id && // 不是同一个节点 | Not the same node
          portType !== port.type && // 端口类型不同（比如输入连接到输出） | Port type is different (e.g., input to output)
          portId && // 确保有端口 ID | Ensure there is a port ID
          !isPortAlreadyConnected
      )
    }
    else {
      // 当鼠标不在任何端口上时，设置为 false
      // When the mouse is not on any port, set it to false
      activeConnection.value.isValid = false
    }
  }

  const mouseUpHandler = () => {
    isConnecting.value = false
    activeConnection.value = null
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }

  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
}

// 处理连接结束
// Handle connection end
// @ts-ignore
const handleConnectionEnd = (event: MouseEvent, targetPort: WorkflowPort, targetNode: WorkflowNode) => {
  if (!activeConnection.value) {
    return
  }

  const { sourcePort, sourceNode } = activeConnection.value

  // 验证连接是否有效
  // Validate connection
  if (sourcePort.type === targetPort.type) {
    activeConnection.value = null
    isConnecting.value = false
    return
  }

  // 防止自连接
  // Prevent self-connection
  if (sourceNode.id === targetNode.id) {
    activeConnection.value = null
    isConnecting.value = false
    return
  }

  // 检查是否已存在连接
  // Check if there is already a connection
  const isConnectionExists = props.connections.some(conn => {
    if (sourcePort.type === WorkflowPortType.output) {
      return conn.source === sourcePort.id && conn.target === targetPort.id
    }
    else {
      return conn.source === targetPort.id && conn.target === sourcePort.id
    }
  })
  if (isConnectionExists) {
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

const getNodeSize = (nodeId: string) => {
  const nodeElement = document.querySelector(`[data-node-id="${ nodeId }"]`) as HTMLElement
  if (!nodeElement) {
    return { width: 0, height: 0 }
  }

  return {
    width: nodeElement.offsetWidth + 2,
    height: nodeElement.offsetHeight + 2
  }
}

// 处理节点拖拽时的位置限制
// Handle position constraints during node dragging
const constrainPosition = (position: { x: number; y: number }, nodeId: string) => {
  const canvasWidth = props.canvas.width
  const canvasHeight = props.canvas.height

  const { width: nodeWidth, height: nodeHeight } = getNodeSize(nodeId)

  return {
    x: Math.max(2, Math.min(position.x, canvasWidth - nodeWidth)),
    y: Math.max(2, Math.min(position.y, canvasHeight - nodeHeight))
  }
}

// 处理鼠标移动
// Handle mouse move
const handleMouseMove = (event: MouseEvent) => {
  // 处理节点拖拽
  // Handle node dragging
  if (draggingNode.value && !isConnecting.value) {
    let newPosition = {
      x: event.clientX - dragOffset.value.x,
      y: event.clientY - dragOffset.value.y
    }

    newPosition = constrainPosition(newPosition, draggingNode.value.id)

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

  // 计算水平偏移量
  // Calculate horizontal offset
  const horizontalOffset = 8

  // 根据起点和终点的相对位置决定偏移方向
  // Determine the offset direction based on the relative position of the start and end points
  const startX = sourcePosition.x + horizontalOffset  // 输出端口向右偏移 | Output port to the right
  const endX = targetPosition.x - horizontalOffset    // 输入端口向左偏移 | Input port to the left

  const controls = getControlPoints(
      { x: startX, y: sourcePosition.y },    // 使用新的起点 | Use new start
      { x: endX, y: targetPosition.y }       // 使用新的终点 | Use new end
  )

  return `M ${ startX } ${ sourcePosition.y } C ${ controls.c1.x } ${ controls.c1.y } ${ controls.c2.x } ${ controls.c2.y } ${ endX } ${ targetPosition.y }`
}

// 开始拖拽节点
// Start dragging the node
const startDragging = (node: WorkflowNode, event: MouseEvent) => {
  // 如果正在连接线，不启动节点拖拽
  // If connecting, don't start node dragging
  if (isConnecting.value) {
    return
  }

  selectedConnectionId.value = null
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
  selectedConnectionId.value = null
  emit('on-node-selected', node)
}

// 处理鼠标释放
// Handle mouse release
const handleMouseUp = () => {
  draggingNode.value = null
  isNodeDragging.value = false
}

// 鼠标离开画布的处理函数
// Mouse leave handler
const handleMouseLeave = () => {
  if (draggingNode.value || isConnecting.value) {
    handleMouseUp()
  }
}

// 处理拖拽悬停
// Handle drag hover
const handleDragOver = (event: DragEvent) => {
  event.dataTransfer!.dropEffect = 'copy'
}

// 处理节点放置
// Handle node drop
const handleDrop = async (event: DragEvent) => {
  const data = event.dataTransfer!.getData('application/node')
  if (!data) {
    return
  }

  try {
    const nodeData = JSON.parse(data)
    const containerRect = canvasRef.value?.parentElement?.getBoundingClientRect()
    if (!containerRect) {
      return
    }

    const scrollLeft = canvasRef.value?.parentElement?.scrollLeft || 0
    const scrollTop = canvasRef.value?.parentElement?.scrollTop || 0

    let dropPosition = {
      x: event.clientX - containerRect.left + scrollLeft,
      y: event.clientY - containerRect.top + scrollTop
    }

    const newNode: WorkflowNode = {
      ...nodeData,
      position: dropPosition
    }

    const validatedPorts = newNode.ports.map(port => {
      if (!port.required) {
        return port
      }

      return {
        ...port,
        validated: {
          valid: false,
          message: t('workflow.validated.required')
        }
      }
    })

    const validatedNode = {
      ...newNode,
      ports: validatedPorts
    }

    // @ts-ignore
    emit('on-node-added', validatedNode)

    await nextTick()

    const adjustedPosition = constrainPosition(dropPosition, newNode.id)
    if (adjustedPosition.x !== dropPosition.x || adjustedPosition.y !== dropPosition.y) {
      emit('on-node-moved', {
        ...newNode,
        position: adjustedPosition
      })
    }
  }
  catch (e) {
    console.error('Error parsing drop data:', e)
  }
}

const selectConnection = (connection: WorkflowConnection) => {
  selectedConnectionId.value = connection.id
  // @ts-ignore
  emit('on-node-selected', null)
}

// 处理键盘事件
// Handle keyboard events
const handleKeyDown = (event: KeyboardEvent) => {
  if ((event.key === 'Delete' || event.key === 'Backspace')) {
    // 删除选中的节点
    // Delete the selected node
    if (props.selectedNodeId) {
      deleteSelectedNode()
      return
    }

    // 删除选中的连接线
    // Delete the selected connection
    if (selectedConnectionId.value) {
      emit('on-connection-removed', selectedConnectionId.value)
      selectedConnectionId.value = null
    }
  }
}

// 删除选中的节点
// Delete the selected node
const deleteSelectedNode = () => {
  if (!props.selectedNodeId) {
    return
  }

  // 找到要删除的节点
  // Find the node to be deleted
  const nodeToDelete = props.nodes.find(node => node.id === props.selectedNodeId)
  if (!nodeToDelete) {
    return
  }

  // 找到与该节点相关的所有连接
  // Find all connections related to the node
  const relatedConnections = props.connections.filter(connection => {
    return connection.source.startsWith(nodeToDelete.id) ||
        connection.target.startsWith(nodeToDelete.id)
  })

  // 删除相关连接
  // Delete related connections
  relatedConnections.forEach(connection => {
    emit('on-connection-removed', connection.id)
  })

  // 删除节点
  // Delete the node
  emit('on-node-deleted', nodeToDelete)

  // 清除选中状态
  // Clear selection
  // @ts-ignore
  emit('on-node-selected', null)
}

const handleNodeValidationChange = (validatedNode: WorkflowNode) => {
  // 首先检查节点是否真的需要更新
  // First, check if the node really needs to be updated
  const currentNode = props.nodes.find(n => n.id === validatedNode.id)
  if (!currentNode) {
    return
  }

  // 检查端口状态是否真的发生了变化
  // Check if the port status really changed
  const hasPortChanges = validatedNode.ports.some((newPort, index) => {
    const oldPort = currentNode.ports[index]
    if (!oldPort) {
      return true
    }

    // 只比较验证状态
    // Only compare validation status
    return JSON.stringify(newPort.validated) !== JSON.stringify(oldPort.validated)
  })

  // 只有在真正需要更新时才发出事件
  // Only emit the event if the node really needs to be updated
  if (hasPortChanges) {
    emit('on-node-updated', {
      ...currentNode,
      ports: validatedNode.ports.map(port => ({
        ...port,
        // 保持原有的 ID，不要重新生成
        // Preserve the original ID
        id: port.id.split('-').pop()!
      }))
    })
  }
}
</script>
