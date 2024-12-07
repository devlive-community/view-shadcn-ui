<template>
  <div ref="canvasRef"
       class="relative overflow-hidden"
       @wheel="handleWheel"
       @mousedown="handlePanStart"
       @mousemove="handlePanMove"
       @mouseup="handlePanEnd"
       @mouseleave="handlePanEnd"
       @dragover="handleDragOver"
       @drop="handleDrop">
    <div class="absolute"
         :style="{
              transform: `translate(${calcSize(position.x)}, ${calcSize(position.y)}) scale(${scale})`
         }">
      <slot/>
    </div>

    <!-- 网格背景 -->
    <!-- Grid background -->
    <div class="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid"
                   width="20"
                   height="20"
                   patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(0,0,0,0.1)"
                  stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Position, WorkflowCanvasEmits, WorkflowCanvasProps } from './types'
import { calcSize } from '@/utils/common.ts'

const props = withDefaults(defineProps<WorkflowCanvasProps>(), {
  scale: 1,
  position: () => ({ x: 0, y: 0 })
})

const emit = defineEmits<WorkflowCanvasEmits & {
  (e: 'drop-node', position: Position, nodeData: any): void
}>()

const canvasRef = ref<HTMLDivElement>()
const isPanning = ref(false)
const lastPosition = ref<Position>({ x: 0, y: 0 })

// 缩放处理
// Zoom handling
const handleWheel = (e: WheelEvent) => {
  const delta = e.deltaY > 0 ? 0.9 : 1.1
  const newScale = Math.max(0.1, Math.min(2, props.scale * delta))
  emit('update:scale', newScale)
}

// 平移处理
// Pan handling
const handlePanStart = (e: MouseEvent) => {
  if (e.target !== canvasRef.value) {
    return
  }
  isPanning.value = true
  lastPosition.value = {
    x: e.clientX - props.position.x,
    y: e.clientY - props.position.y
  }
}

const handlePanMove = (e: MouseEvent) => {
  if (!isPanning.value) {
    return
  }

  const newPosition = {
    x: e.clientX - lastPosition.value.x,
    y: e.clientY - lastPosition.value.y
  }
  emit('update:position', newPosition)
}

const handlePanEnd = () => {
  isPanning.value = false
}

// 拖拽处理
// Drag handling
const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'copy'
  }
}

const handleDrop = (e: DragEvent) => {
  e.preventDefault()
  if (!e.dataTransfer) {
    return
  }

  try {
    // 使用与 panel 组件相同的 MIME 类型
    // Use the same MIME type as the panel component
    const nodeData = e.dataTransfer.getData('application/node')
    if (!nodeData) {
      return
    }

    const parsedNodeData = JSON.parse(nodeData)
    const canvasRect = canvasRef.value?.getBoundingClientRect()

    if (canvasRect) {
      const position = {
        x: (e.clientX - canvasRect.left - props.position.x) / props.scale,
        y: (e.clientY - canvasRect.top - props.position.y) / props.scale
      }
      emit('drop-node', position, parsedNodeData)
    }
  }
  catch (error) {
    console.error('Error parsing dropped node data:', error)
  }
}
</script>
