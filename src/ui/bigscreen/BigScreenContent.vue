# BigScreenEditor.vue
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
        <div class="absolute inset-0"
             :style="gridStyle">
        </div>

        <!-- 标尺 -->
        <!-- Ruler -->
        <div v-if="showRuler" class="sticky left-0 top-0 w-full h-6 bg-white border-b border-gray-200">
          <!-- 水平标尺刻度 -->
          <!-- Horizontal ruler scale -->
        </div>
        <div v-if="showRuler" class="sticky left-0 top-0 w-6 h-full bg-white border-r border-gray-200">
          <!-- 垂直标尺刻度 -->
          <!-- Vertical ruler scale -->
        </div>

        <!-- 组件 -->
        <!-- Components -->
        <div v-for="item in components"
             class="absolute bg-white border-2 flex items-center justify-center cursor-move transition-all transform"
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
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { calcSize } from '@/utils/common'
import { BigScreenContentProps, BigScreenEditorEmits } from '@/ui/bigscreen/types'

const emit = defineEmits<BigScreenEditorEmits>()
const props = withDefaults(defineProps<BigScreenContentProps>(), {
  gridSize: 20,
  showGrid: true,
  snapToGrid: true,
  showRuler: true
})

// 画布状态
// Canvas state
const containerRef = ref(null)
const canvasRef = ref(null)
const components = ref([])
const scale = ref(1)
const showGrid = ref(props.showGrid)
const snapToGrid = ref(props.snapToGrid)
const showRuler = ref(true)
const canvasSize = ref({
  width: 1920,
  height: 1080
})

// 拖拽状态
// Drag state
const isDragging = ref(false)
const dragStartPos = ref({ x: 0, y: 0 })

// 计算画布样式
// Calculate canvas style
const canvasStyle = computed(() => ({
  width: calcSize(canvasSize.value.width),
  height: calcSize(canvasSize.value.height),
  transform: `scale(${ scale.value })`,
  transformOrigin: '0 0'
}))

// 计算网格样式
// Calculate grid style
const gridStyle = computed(() => ({
  display: showGrid.value ? 'block' : 'none',
  backgroundSize: `${ calcSize(props.gridSize) } ${ calcSize(props.gridSize) }`,
  backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)',
  backgroundPosition: '0px 0px'
}))

// 获取组件样式
// Get component style
const getComponentStyle = (component) => {
  return {
    left: calcSize(component.x),
    top: calcSize(component.y),
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
    x: Math.round(position.x / props.gridSize) * props.gridSize,
    y: Math.round(position.y / props.gridSize) * props.gridSize
  }
}

// 获取相对于画布的位置
// Get relative position
const getRelativePosition = (e) => {
  const canvasRect = canvasRef.value.getBoundingClientRect()
  return {
    x: (e.clientX - canvasRect.left) / scale.value,
    y: (e.clientY - canvasRect.top) / scale.value
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
  const newPosition = alignToGrid({
    x: pos.x - dragStartPos.value.x,
    y: pos.y - dragStartPos.value.y
  })

  // 更新组件位置
  // Update component position
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
  const alignedPos = alignToGrid(pos)

  const newComponents = [...components.value, {
    id: Date.now(),
    type,
    label,
    x: alignedPos.x,
    y: alignedPos.y,
    width: props.gridSize * 5,
    height: props.gridSize * 3,
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
