<template>
  <div class="w-full h-screen flex">
    <ShadcnWorkflowPanel class="w-64 border-r border-gray-200" :nodes="availableNodes" :category="nodeCategories"/>

    <div class="flex-1 relative" @mousemove="handleMouseMove">
      <ShadcnWorkflowCanvas ref="canvasRef"
                            v-model:scale="scale"
                            v-model:position="position"
                            class="w-full h-full"
                            @drop-node="handleNodeDrop">
        <!-- 节点渲染 -->
        <template v-for="node in nodes" :key="node.id">
          <div class="absolute rounded-lg border bg-white p-4"
               :style="{
                   transform: `translate(${calcSize(node.position.x)}, ${calcSize(node.position.y)})`
               }"
               @click.stop="handleNodeSelect(node)">
            <div class="font-medium mb-2 cursor-move"
                 draggable="true"
                 @dragstart="handleNodeDragStart(node, $event)"
                 @drag="handleNodeDrag(node, $event)"
                 @dragend="handleNodeDragEnd">
              {{ node.type }}
            </div>
            <ShadcnWorkflowNodePorts :node="node" @port-mouse-down="handlePortMouseDown" @port-mouse-up="handlePortMouseUp"/>
          </div>
        </template>

      </ShadcnWorkflowCanvas>

      <!-- 连接线渲染 -->
      <svg class="absolute inset-0 w-full h-full" style="z-index: 1000; pointer-events: none;">
        <!-- 已存在的连线 -->
        <path v-for="edge in edges"
              class="stroke-gray-400"
              fill="none"
              stroke-width="2"
              :key="edge.id"
              :d="getEdgePath(edge)"/>

        <!-- 正在拖拽的临时连线 -->
        <path v-if="dragLine.isDragging"
              stroke="#409EFF"
              stroke-width="2"
              fill="none"
              stroke-dasharray="5,5"
              :d="getDragLinePath()"/>
      </svg>

    </div>

    <ShadcnWorkflowConfigure class="w-64 border-l border-gray-200"
                             :selected-node="selectedNode"
                             :selected-edge="selectedEdge"
                             @update:selected-node="handleNodeUpdate"
                             @delete-node="handleNodeDelete"
                             @delete-edge="handleEdgeDelete"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { Edge, Node, Port, Position, WorkflowEmits, WorkflowProps } from './types'
import ShadcnWorkflowPanel from './ShadcnWorkflowPanel.vue'
import ShadcnWorkflowCanvas from './ShadcnWorkflowCanvas.vue'
import ShadcnWorkflowConfigure from './ShadcnWorkflowConfigure.vue'
import ShadcnWorkflowNodePorts from './ShadcnWorkflowNodePorts.vue'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<WorkflowProps>(), {
  nodes: () => [],
  edges: () => [],
  readonly: false
})

const emit = defineEmits<WorkflowEmits>()

// 基础状态
const canvasRef = ref()
const scale = ref(1)
const position = ref<Position>({ x: 0, y: 0 })
const selectedNode = ref<Node | undefined>()
const selectedEdge = ref<Edge | undefined>()
const draggingNode = ref<Node | null>(null)

// 示例节点数据
const availableNodes = ref<Node[]>([
  {
    id: 'start',
    type: '开始节点',
    category: '基础节点',
    position: { x: 0, y: 0 },
    data: {},
    description: '工作流的起始节点',
    ports: [
      { id: 'out1', type: 'output', label: '输出' }
    ]
  },
  {
    id: 'process',
    type: '处理节点',
    category: '处理节点',
    position: { x: 0, y: 0 },
    data: {
      name: '',
      type: ['同步', '异步'],
      timeout: 3000
    },
    description: '处理业务逻辑的节点',
    ports: [
      { id: 'in1', type: 'input', label: '输入' },
      { id: 'in2', type: 'input', label: '输入' },
      { id: 'out1', type: 'output', label: '输出' }
    ]
  },
  {
    id: 'condition',
    type: '条件节点',
    category: '条件节点',
    position: { x: 0, y: 0 },
    data: {
      condition: ''
    },
    description: '条件判断节点',
    ports: [
      { id: 'in1', type: 'input', label: '输入' },
      { id: 'out1', type: 'output', label: '是' },
      { id: 'out2', type: 'output', label: '否' },
      { id: 'out3', type: 'output', label: '否' },
      { id: 'out4', type: 'output', label: '否' },
      { id: 'out5', type: 'output', label: '否' },
      { id: 'out6', type: 'output', label: '否' }
    ]
  }
])

const nodeCategories = ref(['基础节点', '处理节点', '条件节点'])

// 监听鼠标移动
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})

// 节点拖拽处理
const handleNodeDragStart = (node: Node, event: DragEvent) => {
  if (!event.dataTransfer) {
    return
  }

  draggingNode.value = node

  // 创建自定义拖拽预览
  const dragPreview = document.createElement('div')
  dragPreview.className = 'bg-white border border-gray-200 rounded-lg p-2 opacity-50'
  dragPreview.textContent = node.type
  dragPreview.style.position = 'absolute'
  dragPreview.style.left = '-1000px'
  document.body.appendChild(dragPreview)

  event.dataTransfer.setDragImage(dragPreview, 0, 0)

  // 清理预览元素
  requestAnimationFrame(() => {
    document.body.removeChild(dragPreview)
  })
}

const handleNodeDrag = (node: Node, event: DragEvent) => {
  if (!draggingNode.value || !event.clientX || !event.clientY) {
    return
  }

  const canvasRect = canvasRef.value.$el.getBoundingClientRect()
  const newPosition = {
    x: (event.clientX - canvasRect.left - position.value.x) / scale.value,
    y: (event.clientY - canvasRect.top - position.value.y) / scale.value
  }

  const updatedNodes = props.nodes.map(n =>
      n.id === node.id ? { ...n, position: newPosition } : n
  )
  emit('update:nodes', updatedNodes)
}

const handleNodeDragEnd = () => {
  draggingNode.value = null
}

// 处理从面板拖入新节点
const handleNodeDrop = (dropPosition: Position, nodeData: Node) => {
  const newNode = {
    ...nodeData,
    position: dropPosition
  }

  const updatedNodes = [...props.nodes, newNode]
  emit('update:nodes', updatedNodes)
}

// 节点选择处理
const handleNodeSelect = (node: Node) => {
  selectedNode.value = node
  selectedEdge.value = undefined
  emit('node-select', node)
}

// 连线状态管理
const connectionState = ref({
  isConnecting: false,
  startNode: null as Node | null,
  startPort: null as Port | null,
  endNode: null as Node | null,
  endPort: null as Port | null,
  mousePosition: { x: 0, y: 0 }
})

// 处理鼠标移动
const handleMouseMove = (e: MouseEvent) => {
  if (connectionState.value.isConnecting) {
    const canvasRect = canvasRef.value.$el.getBoundingClientRect()
    connectionState.value.mousePosition = {
      x: (e.clientX - canvasRect.left - position.value.x) / scale.value,
      y: (e.clientY - canvasRect.top - position.value.y) / scale.value
    }
  }
}

// 计算连线路径
const getEdgePath = (edge: Edge) => {
  const sourceNode = props.nodes.find(n => n.id === edge.source)
  const targetNode = props.nodes.find(n => n.id === edge.target)

  if (!sourceNode || !targetNode) {
    return ''
  }

  // 获取源节点和目标节点的端口
  const sourcePort = sourceNode.ports.find(p => p.id === edge.sourcePort)
  const targetPort = targetNode.ports.find(p => p.id === edge.targetPort)

  if (!sourcePort || !targetPort) {
    return ''
  }

  // 计算端口的垂直位置
  const getPortY = (node: Node, port: Port) => {
    const portIndex = parseInt(port.id.match(/\d+/)?.[0] || '1') - 1
    return node.position.y + 70 + (portIndex * 40) // 30是初始偏移，40是端口间距
  }

  const startX = sourceNode.position.x + 233 // 节点宽度
  const endX = targetNode.position.x

  // 使用端口的实际垂直位置
  const startY = getPortY(sourceNode, sourcePort)
  const endY = getPortY(targetNode, targetPort)

  // 计算贝塞尔曲线的控制点
  const dx = Math.abs(endX - startX)
  const controlX1 = startX + Math.min(dx / 2, 50)
  const controlX2 = endX - Math.min(dx / 2, 50)

  return `M ${ startX } ${ startY } C ${ controlX1 } ${ startY }, ${ controlX2 } ${ endY }, ${ endX } ${ endY }`
}

// 拖拽线条状态
const dragLine = ref({
  isDragging: false,
  sourceNode: null as Node | null,
  sourcePort: null as Port | null,
  startPos: { x: 0, y: 0 },
  currentPos: { x: 0, y: 0 }
})

// 处理端口鼠标按下事件
const handlePortMouseDown = (node: Node, port: Port, event: MouseEvent) => {
  const canvasRect = canvasRef.value.$el.getBoundingClientRect()

  // 计算端口的垂直位置
  const getPortY = (node: Node, port: Port) => {
    const portIndex = parseInt(port.id.match(/\d+/)?.[0] || '1') - 1
    return node.position.y + 70 + (portIndex * 40)
  }

  // 根据端口类型调整起始位置
  const startX = port.type === 'output'
      ? node.position.x + 233  // 输出端口在右侧，与固定连接线对齐
      : node.position.x        // 输入端口在左侧

  // 使用相同的位置计算逻辑
  const startY = getPortY(node, port)

  dragLine.value = {
    isDragging: true,
    sourceNode: node,
    sourcePort: port,
    startPos: { x: startX, y: startY },
    currentPos: { x: startX, y: startY }
  }

  window.addEventListener('mousemove', handleGlobalMouseMove)
  window.addEventListener('mouseup', handleGlobalMouseUp)
}

// 处理端口鼠标松开事件
const handlePortMouseUp = (node: Node, port: Port) => {
  if (!dragLine.value.isDragging || !dragLine.value.sourceNode || !dragLine.value.sourcePort) {
    return
  }

  const sourceNode = dragLine.value.sourceNode
  const sourcePort = dragLine.value.sourcePort

  // 检查端口连接的有效性
  const isValid = (
      // 不同节点
      sourceNode.id !== node.id &&
      // 不同类型的端口
      sourcePort.type !== port.type
  )

  if (isValid) {
    // 确保输出端口是源，输入端口是目标
    const isSourceOutput = sourcePort.type === 'output'
    const newEdge: Edge = {
      id: `edge_${ Date.now() }`,
      source: isSourceOutput ? sourceNode.id : node.id,
      sourcePort: isSourceOutput ? sourcePort.id : port.id,
      target: isSourceOutput ? node.id : sourceNode.id,
      targetPort: isSourceOutput ? port.id : sourcePort.id
    }

    emit('update:edges', [...props.edges, newEdge])
  }

  // 重置拖拽状态
  resetDragLine()
}

// 处理全局鼠标移动
const handleGlobalMouseMove = (event: MouseEvent) => {
  if (!dragLine.value.isDragging) {
    return
  }

  const canvasRect = canvasRef.value.$el.getBoundingClientRect()
  dragLine.value.currentPos = {
    x: (event.clientX - canvasRect.left - position.value.x) / scale.value,
    y: (event.clientY - canvasRect.top - position.value.y) / scale.value
  }
}

// 处理全局鼠标松开
const handleGlobalMouseUp = () => {
  resetDragLine()
}

// 重置拖拽线条状态
const resetDragLine = () => {
  dragLine.value = {
    isDragging: false,
    sourceNode: null,
    sourcePort: null,
    startPos: { x: 0, y: 0 },
    currentPos: { x: 0, y: 0 }
  }

  // 移除全局事件监听
  window.removeEventListener('mousemove', handleGlobalMouseMove)
  window.removeEventListener('mouseup', handleGlobalMouseUp)
}

// 获取拖拽线条路径
const getDragLinePath = () => {
  if (!dragLine.value.isDragging || !dragLine.value.sourceNode || !dragLine.value.sourcePort) {
    return ''
  }

  const { sourceNode, sourcePort, currentPos } = dragLine.value

  // 计算端口的垂直位置，与固定连接线使用相同的逻辑
  const getPortY = (node: Node, port: Port) => {
    const portIndex = parseInt(port.id.match(/\d+/)?.[0] || '1') - 1
    return node.position.y + 70 + (portIndex * 40)
  }

  const startY = getPortY(sourceNode, sourcePort)
  const startX = sourcePort.type === 'output'
      ? sourceNode.position.x + 233  // 输出端口在右侧，与固定连接线对齐
      : sourceNode.position.x        // 输入端口在左侧

  // 计算贝塞尔曲线的控制点
  const dx = Math.abs(currentPos.x - startX)
  const controlX1 = startX + (sourcePort.type === 'output' ? Math.min(dx / 2, 50) : -Math.min(dx / 2, 50))
  const controlX2 = currentPos.x + (sourcePort.type === 'output' ? -Math.min(dx / 2, 50) : Math.min(dx / 2, 50))

  return `M ${ startX } ${ startY } C ${ controlX1 } ${ startY }, ${ controlX2 } ${ currentPos.y }, ${ currentPos.x } ${ currentPos.y }`
}

// 节点更新处理
const handleNodeUpdate = (updatedNode: Node) => {
  const updatedNodes = props.nodes.map(n =>
      n.id === updatedNode.id ? updatedNode : n
  )
  emit('update:nodes', updatedNodes)
}

// 删除节点
const handleNodeDelete = (node: Node) => {
  const updatedNodes = props.nodes.filter(n => n.id !== node.id)
  const updatedEdges = props.edges.filter(e =>
      e.source !== node.id && e.target !== node.id
  )

  emit('update:nodes', updatedNodes)
  emit('update:edges', updatedEdges)
  selectedNode.value = undefined
}

// 删除边
const handleEdgeDelete = (edge: Edge) => {
  const updatedEdges = props.edges.filter(e => e.id !== edge.id)
  emit('update:edges', updatedEdges)
  selectedEdge.value = undefined
}
</script>
