<template>
  <div class="w-full h-full overflow-auto outline-none">
    <div ref="canvasRef"
         :style="{
               width: calcSize(canvas.width),
               height: calcSize(canvas.height),
         }"
         class="relative bg-gray-50">
      <!-- Background Grid Pattern -->
      <div v-if="canvas.showGrid"
           :style="{
                   backgroundImage: `
                     linear-gradient(to right, ${canvas.gridColor} 1px, transparent 1px),
                     linear-gradient(to bottom, ${canvas.gridColor} 1px, transparent 1px)
                   `,
                   backgroundSize: `${calcSize(canvas.gridSize)} ${calcSize(canvas.gridSize)}`,
                   opacity: canvas.gridOpacity
           }"
           class="absolute inset-0">
      </div>

      <div v-for="node in mergeNodes.nodes"
           :key="node.id"
           :data-node-id="node.id"
           :style="{
                transform: `translate(${calcSize(node.position?.x)}, ${calcSize(node.position?.y)})`
           }"
           class="absolute bg-white rounded-lg shadow-md border">
        <div class="px-2 pt-1.5 pb-1.5">
          <slot :node="node" name="node">
            <div class="w-full flex items-center justify-between border-b">
              <div class="w-full text-xs text-gray-500 py-1.5">{{ node.label }}</div>
            </div>
          </slot>

          <ShadcnWorkflowNodePorts :connections="mergeNodes.connections" :disabled="true" :node="node"/>
        </div>
      </div>

      <svg :style="{
                width: '100%',
                height: '100%',
                overflow: 'visible',
                pointerEvents: 'none'
           }"
           class="absolute inset-0">
        <g>
          <!-- 已建立的连接线 -->
          <!-- Existing connections -->
          <g v-for="connection in data.connections" :key="connection.id">
            <!-- 实际显示的连接线 -->
            <!-- Actual connection line -->
            <path :d="pathData[connection.id]" class="stroke-gray-400" fill="none" stroke-width="2"/>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { WorkflowConnection, WorkflowNode, WorkflowViewProps } from './types'
import { calcSize } from '@/utils/common.ts'
import ShadcnWorkflowNodePorts from './components/ShadcnWorkflowNodePorts.vue'

const props = withDefaults(defineProps<WorkflowViewProps>(), {
  data: () => ({
    nodes: [],
    connections: []
  }),
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
const mergeNodes = computed(() => mergeTemplateWithActualFastest(props.nodes, props.data))

const mergeTemplateWithActualFastest = (templateData, actualData) => {
  const templateLookup = {}
  const neededProps = ['label', 'category', 'description', 'ports', 'configure']

  templateData.forEach(item => {
    templateLookup[item.id] = {}
    neededProps.forEach(prop => {
      if (item[prop] !== undefined) {
        templateLookup[item.id][prop] = item[prop]
      }
    })
  })

  const result = { ...actualData }
  result.nodes = actualData.nodes.map(node => {
    const template = templateLookup[node.tid]
    return template ? { ...node, ...template } : node
  })

  return result
}

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

// 获取已建立连接的路径
// Get the path of established connections
const getConnectionPath = (connection: WorkflowConnection) => {
  const sourcePosition = getPortPosition(
      mergeNodes.value.nodes.find(n => n.ports.find(p => `${ n.id }-${ p.id }` === connection.source)),
      connection.source
  )
  const targetPosition = getPortPosition(
      mergeNodes.value.nodes.find(n => n.ports.find(p => `${ n.id }-${ p.id }` === connection.target)),
      connection.target
  )

  console.log(sourcePosition, targetPosition)

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

const pathData = ref({})

onMounted(() => {
  props.data.connections.forEach(connection => {
    pathData.value[connection.id] = getConnectionPath(connection)
  })
})
</script>
