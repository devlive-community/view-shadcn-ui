<template>
  <div class="flex-1 relative flex flex-col">
    <!-- 工具栏 -->
    <div class="h-12 border-b border-gray-200 bg-white px-4 flex items-center justify-between shrink-0">
      <div class="flex items-center space-x-4">
        <!-- 画布尺寸调整 -->
        <!-- Canvas size adjustment -->
        <div class="flex items-center space-x-2">
          <input v-model="canvasSize.width"
                 type="number"
                 class="w-20 px-2 py-1 border border-gray-200 rounded text-sm"
                 placeholder="宽度">
          <span class="text-gray-400">x</span>
          <input v-model="canvasSize.height"
                 type="number"
                 class="w-20 px-2 py-1 border border-gray-200 rounded text-sm"
                 placeholder="高度">
        </div>

        <!-- 缩放控制 -->
        <!-- Zoom control -->
        <div class="flex items-center space-x-2">
          <div class="p-1 hover:bg-gray-100 cursor-pointer rounded-full" @click="onZoom('out')">
            <ShadcnIcon icon="Minus" class="h-4 w-4"/>
          </div>
          <span class="text-sm">{{ Math.round(scale * 100) }}%</span>
          <div class="p-1 hover:bg-gray-100 cursor-pointer rounded-full" @click="onZoom('in')">
            <ShadcnIcon icon="Plus" class="h-4 w-4"/>
          </div>
        </div>
      </div>

      <!-- 网格控制 -->
      <!-- Grid control -->
      <div class="flex items-center space-x-4">
        <label class="flex items-center space-x-2 text-sm">
          <input v-model="showGrid"
                 type="checkbox"
                 class="rounded text-blue-500">
          <span>显示网格</span>
        </label>
        <label class="flex items-center space-x-2 text-sm">
          <input v-model="snapToGrid"
                 type="checkbox"
                 class="rounded text-blue-500">
          <span>网格吸附</span>
        </label>
      </div>
    </div>

    <!-- 画布容器 -->
    <!-- Canvas container -->
    <div ref="containerRef"
         class="flex-1 overflow-auto bg-gray-50 relative"
         @wheel.ctrl.prevent="onWheel">
      <!-- 画布区域 -->
      <!-- Canvas area -->
      <div ref="canvasRef"
           class="absolute bg-white shadow-md"
           :style="canvasStyle"
           :class="{'border border-gray-200': showGrid}"
           @dragover.prevent
           @drop="onDrop">
        <!-- 网格背景 -->
        <!-- Grid background -->
        <div class="absolute inset-0" :style="gridStyle"/>

        <!-- 标尺 -->
        <!-- Ruler -->
        <div v-if="showRuler" class="absolute left-0 top-0 w-full flex sticky">
          <!-- 左上角方块 -->
          <!-- Corner square -->
          <div class="w-5 h-5 bg-transparent border-gray-200 z-10 sticky left-0 top-0"/>
          <!-- 水平标尺刻度 -->
          <!-- Horizontal ruler scale -->
          <div class="h-5 bg-white border-b border-gray-200 flex-1 relative sticky top-0">
            <div v-for="i in Math.ceil(canvasSize.width / 100) + (canvasSize.width % 100 === 0 ? 1 : 0)"
                 class="absolute h-full"
                 :key="i"
                 :style="{ left: `${(i-1) * 100}px` }">
              <div class="relative h-full">
                <span class="absolute text-xs text-gray-400 bottom-0.5"
                      :class="[i === Math.ceil(canvasSize.width / 100) + (canvasSize.width % 100 === 0 ? 1 : 0) ? 'right-1 translate-x-0' : 'left-1/2 -translate-x-1/2']">
                  {{ (i - 1) * 100 }}
                </span>
                <div class="absolute bottom-0 w-px h-2 bg-gray-300 right-0.5"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 垂直标尺 -->
        <!-- Vertical ruler -->
        <div v-if="showRuler"
             class="absolute left-0 top-5 w-5 bg-white border-r border-gray-200 sticky"
             :style="{ height: calcSize(canvasSize.height) }">
          <div v-for="i in Math.ceil(canvasSize.height / 100) + (canvasSize.height % 100 === 0 ? 1 : 0)"
               class="absolute w-full"
               :key="i"
               :style="{ top: `${(i-1) * 100}px` }">
            <div class="relative w-full">
              <div class="absolute text-xs text-gray-400 left-0.5 transform"
                   :class="[i === Math.ceil(canvasSize.height / 100) + (canvasSize.height % 100 === 0 ? 1 : 0) ? 'bottom-0 translate-y-0' : 'top-1/2 -translate-y-1/2']">
                <span style="writing-mode: vertical-rl; text-orientation: upright;">{{ (i - 1) * 100 }}</span>
              </div>
              <div class="absolute right-0 top-1/2 transform -translate-y-1/2 h-px w-2 bg-gray-300"></div>
            </div>
          </div>
        </div>

        <!-- 组件 -->
        <!-- Components -->
        <div v-for="item in components"
             class="absolute bg-white border-2 flex items-center justify-center cursor-move transition-all transform select-none"
             :key="item.id"
             :class="[selectedId === item.id ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-gray-300']"
             :style="getComponentStyle(item)"
             @mousedown="onComponentMouseDown($event, item)">
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { calcSize } from '@/utils/common'
import { ShadcnDataBuilderCanvasEmits, ShadcnDataBuilderCanvasProps, ShadcnDataBuilderPanelChildProps } from '@/ui/data-builder/types'

const emit = defineEmits<ShadcnDataBuilderCanvasEmits>()
const props = withDefaults(defineProps<ShadcnDataBuilderCanvasProps>(), {
  gridSize: 20,
  showGrid: true,
  snapToGrid: true,
  showRuler: true,
  width: 1920,
  height: 1080
})

// 画布状态
// Canvas state
const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLDivElement | null>(null)
const components = ref<ShadcnDataBuilderPanelChildProps[]>([])
const scale = ref(1)
const showGrid = ref(props.showGrid)
const snapToGrid = ref(props.snapToGrid)
const showRuler = ref(props.showRuler)
const canvasSize = ref({ width: props.width, height: props.height })
const gridSize = ref(props.gridSize)

// 拖拽状态
// Drag state
const isDragging = ref(false)
const dragStartPos = ref({ x: 0, y: 0 })

// 计算画布样式
// Calculate canvas style
const canvasStyle = computed(() => {
  const rulerOffset = showRuler.value ? 20 : 0
  return {
    width: `${ canvasSize.value.width + rulerOffset }px`,  // Add ruler width
    height: `${ canvasSize.value.height + rulerOffset }px`, // Add a ruler height
    transform: `scale(${ scale.value })`,
    transformOrigin: '0 0'
  }
})

// 计算网格样式
// Calculate grid style
const gridStyle = computed(() => {
  const rulerOffset = showRuler.value ? 20 : 0
  return {
    display: showGrid.value ? 'block' : 'none',
    backgroundSize: `${ gridSize.value }px ${ gridSize.value }px`,
    backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)',
    backgroundPosition: '0 0',
    left: `${ rulerOffset }px`,
    top: `${ rulerOffset }px`,
    width: `${ canvasSize.value.width }px`,
    height: `${ canvasSize.value.height }px`,
    position: 'absolute' as const
  }
})

watch(() => props.gridSize, (newSize) => {
  gridSize.value = newSize

  if (snapToGrid.value && components.value.length > 0) {
    const updatedComponents = components.value.map(component => ({
      ...component,
      x: Math.round(component.x / newSize) * newSize,
      y: Math.round(component.y / newSize) * newSize,
      width: newSize * 5,
      height: newSize * 3
    }))
    components.value = updatedComponents
    emit('update:components', updatedComponents)
  }
}, { immediate: true })

// 获取组件样式
// Get component style
const getComponentStyle = (component) => {
  const rulerOffset = showRuler.value ? 20 : 0
  return {
    left: `${ rulerOffset + component.x }px`,
    top: `${ rulerOffset + component.y }px`,
    width: calcSize(component.width),
    height: calcSize(component.height),
    zIndex: component.zIndex || 1
  }
}

// 处理画布缩放
// Handle zoom
const onZoom = (type) => {
  if (type === 'in' && scale.value < 2) {
    scale.value += 0.1
  }
  else if (type === 'out' && scale.value > 0.2) {
    scale.value -= 0.1
  }
}

// 处理滚轮缩放
// Handle wheel zoom
const onWheel = (e) => {
  if (e.deltaY < 0) {
    onZoom('in')
  }
  else {
    onZoom('out')
  }
}

// 对齐到网格
// Align to grid
const alignToGrid = (position) => {
  if (!snapToGrid.value) {
    return position
  }

  return {
    x: Math.round(position.x / gridSize.value) * gridSize.value,
    y: Math.round(position.y / gridSize.value) * gridSize.value
  }
}

// 获取相对于画布的位置
// Get relative position
const getRelativePosition = (e) => {
  if (!canvasRef.value) {
    return { x: 0, y: 0 }
  }

  const canvasRect = canvasRef.value.getBoundingClientRect()
  const rulerOffset = showRuler.value ? 20 : 0

  const x = (e.clientX - canvasRect.left - rulerOffset) / scale.value
  const y = (e.clientY - canvasRect.top - rulerOffset) / scale.value

  return {
    x: Math.max(0, Math.min(x, canvasSize.value.width)),
    y: Math.max(0, Math.min(y, canvasSize.value.height))
  }
}

// 处理组件拖动开始
// Handle component drag start
const onComponentMouseDown = (e, component) => {
  e.stopPropagation()

  // 选中组件
  // Select component
  emit('select', component)

  isDragging.value = true
  const pos = getRelativePosition(e)
  dragStartPos.value = {
    x: pos.x - component.x,
    y: pos.y - component.y
  }

  document.addEventListener('mousemove', handleComponentMouseMove)
  document.addEventListener('mouseup', handleComponentMouseUp)
}

// 处理组件拖动
// Handle component drag
const handleComponentMouseMove = (e) => {
  if (!isDragging.value) {
    return
  }

  const pos = getRelativePosition(e)

  // 获取当前选中的组件
  // Get the currently selected component
  const currentComponent = components.value.find(item => item.id === props.selectedId)
  if (!currentComponent) {
    return
  }

  // 考虑组件尺寸的最大边界
  // Consider the maximum size of the component
  const maxX = canvasSize.value.width - currentComponent.width
  const maxY = canvasSize.value.height - currentComponent.height

  const newPosition = alignToGrid({
    x: Math.min(maxX, Math.max(0, pos.x - dragStartPos.value.x)),
    y: Math.min(maxY, Math.max(0, pos.y - dragStartPos.value.y))
  })

  const updatedComponents = components.value.map(item => {
    if (item.id === props.selectedId) {
      return {
        ...item,
        x: newPosition.x,
        y: newPosition.y
      }
    }
    return item
  })

  components.value = updatedComponents
  emit('update:components', updatedComponents)
}

// 处理组件拖动结束
// Handle component drag end
const handleComponentMouseUp = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', handleComponentMouseMove)
  document.removeEventListener('mouseup', handleComponentMouseUp)
}

// 处理新组件放置
// Handle new component drop
const onDrop = (e) => {
  const type = e.dataTransfer.getData('componentType')
  const label = e.dataTransfer.getData('componentLabel')

  if (!type) {
    return
  }

  const pos = getRelativePosition(e)

  // 计算新组件的尺寸
  // Calculate the size of the new component
  const newComponentWidth = gridSize.value * 5
  const newComponentHeight = gridSize.value * 3

  // 考虑组件尺寸的最大边界
  // Consider the maximum size of the component
  const maxX = canvasSize.value.width - newComponentWidth
  const maxY = canvasSize.value.height - newComponentHeight

  const alignedPos = alignToGrid({
    x: Math.min(maxX, Math.max(0, pos.x)),
    y: Math.min(maxY, Math.max(0, pos.y))
  })

  const newComponents = [...components.value, {
    id: Date.now(),
    type,
    label,
    x: alignedPos.x,
    y: alignedPos.y,
    width: newComponentWidth,
    height: newComponentHeight,
    zIndex: components.value.length + 1
  }]

  components.value = newComponents
  emit('update:components', newComponents)
}

// 初始化画布位置
// Initialize canvas position
onMounted(() => {
  if (containerRef.value && canvasRef.value) {
    // 将画布居中显示
    // Center the canvas
    const container = containerRef.value
    const canvas = canvasRef.value
    container.scrollLeft = (canvas.offsetWidth * scale.value - container.offsetWidth) / 2
    container.scrollTop = (canvas.offsetHeight * scale.value - container.offsetHeight) / 2
  }
})

// 清理事件监听
// Cleanup event listeners
onUnmounted(() => {
  document.removeEventListener('mousemove', handleComponentMouseMove)
  document.removeEventListener('mouseup', handleComponentMouseUp)
})

// 暴露方法给父组件
// Expose methods
defineExpose({
  updateComponent: (updatedComponent) => {
    const index = components.value.findIndex(item => item.id === updatedComponent.id)
    if (index > -1) {
      const newComponents = [...components.value]
      newComponents[index] = updatedComponent
      components.value = newComponents
      emit('update:components', newComponents)
    }
  }
})
</script>
