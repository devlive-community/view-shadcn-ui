<template>
  <div class="flex-1 relative flex flex-col">
    <!-- 工具栏 -->
    <div v-if="showToolbar" class="h-12 border-b border-gray-200 bg-white px-4 flex items-center justify-between shrink-0 select-none">
      <div class="flex items-center space-x-4">
        <!-- 画布尺寸调整 -->
        <!-- Canvas size adjustment -->
        <div class="flex items-center space-x-2">
          <ShadcnNumber v-model="canvasSize.width" class="w-32" placeholder="宽度"/>
          <span class="text-gray-400">x</span>
          <ShadcnNumber v-model="canvasSize.height" class="w-32" placeholder="高度"/>
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

      <div class="flex items-center space-x-4">
        <!-- 网格控制 -->
        <!-- Grid control -->
        <ShadcnCheckbox v-model="showGrid" :value="true">显示网格</ShadcnCheckbox>
        <ShadcnCheckbox v-model="snapToGrid" :value="true">网格吸附</ShadcnCheckbox>

        <!-- 组件控制 -->
        <!-- Component control -->
        <ShadcnCheckbox v-model="showRuler" :value="true">显示标尺</ShadcnCheckbox>
        <ShadcnCheckbox v-model="resize" :value="true">拖拽调整尺寸</ShadcnCheckbox>

        <!-- 辅助线控制 -->
        <!-- Helper line control -->
        <ShadcnCheckbox v-model="showGuidelines" :value="true">显示辅助线</ShadcnCheckbox>
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
           :style="[canvasStyle, canvasBackgroundStyle]"
           :class="{'border border-gray-200': showGrid}"
           @dragover.prevent
           @drop="onDrop"
           @click="onCanvasClick">
        <!-- 网格背景 -->
        <!-- Grid background -->
        <div class="absolute inset-0" :style="gridStyle"/>

        <!-- 标尺 -->
        <!-- Ruler -->
        <div v-if="showRuler" class="absolute left-0 ml-0.5 top-0 w-full flex sticky">
          <!-- 左上角方块 -->
          <!-- Corner square -->
          <div class="w-5 h-5 bg-white border-gray-200 z-10 sticky left-0 top-0"/>
          <!-- 水平标尺刻度 -->
          <!-- Horizontal ruler scale -->
          <div class="h-5 bg-white border-b border-gray-200 flex-1 relative sticky top-0 z-10">
            <div v-for="i in Math.ceil(canvasSize.width / 100) + (canvasSize.width % 100 === 0 ? 1 : 0)"
                 class="absolute h-full"
                 :key="i"
                 :style="{ left: `${(i-1) * 100}px` }">
              <div class="relative h-full">
                <span class="absolute text-xs text-gray-400 bottom-0.5"
                      :class="[i === Math.ceil(canvasSize.width / 100) + (canvasSize.width % 100 === 0 ? 1 : 0) ? 'right-1 translate-x-0' : 'left-1/2 -translate-x-1/2']">
                  {{ (i - 1) * 100 }}
                </span>
                <div class="absolute bottom-0 w-px h-2 bg-gray-300 right-0.5"/>
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
              <div v-if="i !== 1" class="absolute right-0 top-1/2 transform -translate-y-1/2 h-px w-2 bg-gray-300"></div>
            </div>
          </div>
        </div>

        <!-- 对齐辅助线 -->
        <!-- Alignment guides -->
        <template v-if="isDragging && showGuidelines">
          <!-- 垂直辅助线 -->
          <!-- Vertical reference line -->
          <div v-if="dragTarget"
               class="absolute top-0 w-px bg-blue-500 pointer-events-none"
               :style="{
                 left: `${dragTarget.x}px`,
                 height: `${props.height}px`,
                 opacity: 0.5,
                 zIndex: 1000
               }"/>

          <!-- 垂直辅助线（右侧） -->
          <!-- Vertical reference line (right) -->
          <div v-if="dragTarget && selectedComponent"
               class="absolute top-0 w-px bg-blue-500 pointer-events-none"
               :style="{
                 left: `${dragTarget.x + selectedComponent.width}px`,
                 height: `${props.height}px`,
                 opacity: 0.5,
                 zIndex: 1000
               }"/>

          <!-- 水平辅助线 -->
          <!-- Horizontal reference line -->
          <div v-if="dragTarget"
               class="absolute left-0 h-px bg-blue-500 pointer-events-none"
               :style="{
                 top: `${dragTarget.y}px`,
                 width: '100%',
                 opacity: 0.5,
                 zIndex: 1000
               }"/>

          <!-- 水平辅助线（底部） -->
          <!-- Horizontal reference line (bottom) -->
          <div v-if="dragTarget && selectedComponent"
               class="absolute left-0 h-px bg-blue-500 pointer-events-none"
               :style="{
                 top: `${dragTarget.y + selectedComponent.height}px`,
                 width: '100%',
                 opacity: 0.5,
                 zIndex: 1000
               }"/>
        </template>

        <!-- 组件 -->
        <!-- Components with resize handles -->
        <div v-for="item in components"
             class="absolute bg-white border-2 flex items-center justify-center select-none group"
             :key="item.id"
             :data-component-id="item.id"
             :class="[
                 selectedIdRef === item.id ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-gray-300',
                 isDragging ? 'cursor-move' : 'cursor-default'
             ]"
             :style="getComponentStyle(item)"
             @mousedown="onComponentMouseDown($event, item)">

          <!-- 使用命名插槽进行自定义渲染 -->
          <!-- Use named slot for custom rendering -->
          <slot :name="item.type"
                :component="item"
                :configure="item.configure"
                :is-selected="selectedIdRef === item.id">
            <!-- 默认渲染 -->
            <!-- Default rendering -->
            <ShadcnDataBuilderRenderer :type="item.type" :configure="item.configure"/>
          </slot>

          <!-- Delete button - only show for selected component -->
          <div v-if="selectedIdRef === item.id"
               class="absolute -top-6 -right-4 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 shadow-sm z-10"
               @mousedown.stop
               @click.stop="removeComponent(item)">
            <ShadcnIcon icon="X" class="text-white" size="15"/>
          </div>

          <!-- Resize handles - only show for selected component -->
          <template v-if="resize && selectedIdRef === item.id">
            <!-- Top left -->
            <div class="absolute w-2 h-2 bg-white border-2 border-blue-500 rounded-sm cursor-nw-resize -top-1 -left-1"
                 @mousedown.stop="startResize($event, item, 'nw')"/>

            <!-- Top right -->
            <div class="absolute w-2 h-2 bg-white border-2 border-blue-500 rounded-sm cursor-ne-resize -top-1 -right-1"
                 @mousedown.stop="startResize($event, item, 'ne')"/>

            <!-- Bottom left -->
            <div class="absolute w-2 h-2 bg-white border-2 border-blue-500 rounded-sm cursor-sw-resize -bottom-1 -left-1"
                 @mousedown.stop="startResize($event, item, 'sw')"/>

            <!-- Bottom right -->
            <div class="absolute w-2 h-2 bg-white border-2 border-blue-500 rounded-sm cursor-se-resize -bottom-1 -right-1"
                 @mousedown.stop="startResize($event, item, 'se')"/>

            <!-- Top center -->
            <div class="absolute w-2 h-2 bg-white border-2 border-blue-500 rounded-sm cursor-n-resize -top-1 left-1/2 -translate-x-1/2"
                 @mousedown.stop="startResize($event, item, 'n')"/>

            <!-- Bottom center -->
            <div class="absolute w-2 h-2 bg-white border-2 border-blue-500 rounded-sm cursor-s-resize -bottom-1 left-1/2 -translate-x-1/2"
                 @mousedown.stop="startResize($event, item, 's')"/>

            <!-- Left center -->
            <div class="absolute w-2 h-2 bg-white border-2 border-blue-500 rounded-sm cursor-w-resize -left-1 top-1/2 -translate-y-1/2"
                 @mousedown.stop="startResize($event, item, 'w')"/>

            <!-- Right center -->
            <div class="absolute w-2 h-2 bg-white border-2 border-blue-500 rounded-sm cursor-e-resize -right-1 top-1/2 -translate-y-1/2"
                 @mousedown.stop="startResize($event, item, 'e')"/>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { calcSize } from '@/utils/common'
import { ShadcnDataBuilderCanvasEmits, ShadcnDataBuilderCanvasProps, ShadcnDataBuilderPanelChildProps } from './types'
import ShadcnDataBuilderRenderer from './ShadcnDataBuilderRenderer.vue'

const emit = defineEmits<ShadcnDataBuilderCanvasEmits>()
const props = withDefaults(defineProps<ShadcnDataBuilderCanvasProps>(), {
  gridSize: 20,
  showGrid: true,
  snapToGrid: true,
  showRuler: true,
  width: 1920,
  height: 1080,
  showToolbar: true,
  isCenter: false,
  resize: true,
  canvasStyle: () => ({
    backgroundColor: '#ffffff',
    backgroundImage: '',
    opacity: 1
  }),
  showGuidelines: false
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
const resize = ref(props.resize)
const canvasSize = ref({ width: props.width, height: props.height })
const gridSize = ref(props.gridSize)

const selectedIdRef = computed({
  get: () => props.selectedId,
  set: (value) => {
    emit('update:selectedId', value)
  }
})

// 拖拽状态
// Drag state
const isDragging = ref(false)
const dragStartPos = ref({ x: 0, y: 0 })

// Resize state
const isResizing = ref(false)
const resizeDirection = ref<string>('')
const resizeStartPos = ref({ x: 0, y: 0 })
const resizeStartDimensions = ref({ width: 0, height: 0, x: 0, y: 0 })

// 存储当前拖拽的组件位置
// Store the current dragged component position
const dragTarget = ref<{ x: number; y: number } | null>(null)
const showGuidelines = ref(props.showGuidelines)

// 选中组件的计算属性
// Computed property for selected component
const selectedComponent = computed(() => {
  return components.value.find(item => item.id === selectedIdRef.value)
})

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

// 计算画布背景样式
// Calculate canvas background style
const canvasBackgroundStyle = computed(() => {
  const { backgroundColor, backgroundImage, opacity } = props.canvasStyle || {}
  return {
    backgroundColor: backgroundColor || '#ffffff',
    backgroundImage: backgroundImage ? `url(${ backgroundImage })` : 'none',
    opacity: opacity || 1
  } as any
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

  document.addEventListener('mousemove', onComponentMouseMove)
  document.addEventListener('mouseup', onComponentMouseUp)
}

// 处理组件拖动
// Handle component drag
const onComponentMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) {
    return
  }

  const pos = getRelativePosition(e)
  const currentComponent = components.value.find(item => item.id === selectedIdRef.value)
  if (!currentComponent) {
    return
  }

  // 计算新位置，考虑网格对齐
  // Calculate new position
  let newX = pos.x - (dragStartPos.value?.x || 0)
  let newY = pos.y - (dragStartPos.value?.y || 0)

  // 如果启用网格对齐，先对齐到网格
  // If grid alignment is enabled, first align to grid
  if (snapToGrid.value) {
    const alignedPos = alignToGrid({ x: newX, y: newY })
    newX = alignedPos.x
    newY = alignedPos.y
  }

  // 边界检查
  // Boundary check
  const maxX = canvasSize.value.width - currentComponent.width
  const maxY = canvasSize.value.height - currentComponent.height
  newX = Math.max(0, Math.min(maxX, newX))
  newY = Math.max(0, Math.min(maxY, newY))

  // 更新辅助线位置，考虑标尺偏移
  // Update reference line position
  const rulerOffset = showRuler.value ? 20 : 0
  dragTarget.value = {
    x: newX + rulerOffset,
    y: newY + rulerOffset
  }

  // 更新组件位置
  // Update component position
  const updatedComponents = components.value.map(item => {
    if (item.id === selectedIdRef.value) {
      return {
        ...item,
        x: newX,
        y: newY
      }
    }
    return item
  })

  components.value = updatedComponents
  emit('update:components', updatedComponents)
}

// 处理组件拖动结束
// Handle component drag end
const onComponentMouseUp = () => {
  isDragging.value = false

  dragTarget.value = null // 清除辅助线
  document.removeEventListener('mousemove', onComponentMouseMove)
  document.removeEventListener('mouseup', onComponentMouseUp)
}

// 处理新组件放置
// Handle new component drop
const onDrop = (e) => {
  const type = e.dataTransfer.getData('componentType')
  const label = e.dataTransfer.getData('componentLabel')
  const configure = JSON.parse(e.dataTransfer.getData('componentConfigure') || '{}')

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
    zIndex: components.value.length + 1,
    configure
  }]

  components.value = newComponents
  emit('update:components', newComponents)
}

// 处理画布容器点击
// Handle canvas container click
const onCanvasClick = (e: MouseEvent) => {
  // 检查点击的目标元素是否是组件
  // Check if the clicked target is a component
  const target = e.target as HTMLElement
  const isComponent = components.value.some(component => {
    const componentElement = target.closest(`[data-component-id="${ component.id }"]`)
    return !!componentElement
  })

  // 如果不是点击组件，则取消选中
  // If not clicking on a component, clear selection
  if (!isComponent) {
    selectedIdRef.value = undefined
    emit('select', undefined)
    emit('update:selectedId', undefined)
  }
}

// Start resize handler
const startResize = (e: MouseEvent, component: any, direction: string) => {
  e.preventDefault()
  isResizing.value = true
  resizeDirection.value = direction

  const pos = getRelativePosition(e)
  resizeStartPos.value = { x: pos.x, y: pos.y }
  resizeStartDimensions.value = {
    width: component.width,
    height: component.height,
    x: component.x,
    y: component.y
  }

  document.addEventListener('mousemove', onResize)
  document.addEventListener('mouseup', stopResize)
}

// Handle resize
const onResize = (e: MouseEvent) => {
  if (!isResizing.value) {
    return
  }

  const pos = getRelativePosition(e)
  const deltaX = pos.x - resizeStartPos.value.x
  const deltaY = pos.y - resizeStartPos.value.y

  const currentComponent = components.value.find(item => item.id === selectedIdRef.value)
  if (!currentComponent) {
    return
  }

  let newWidth = resizeStartDimensions.value.width
  let newHeight = resizeStartDimensions.value.height
  let newX = resizeStartDimensions.value.x
  let newY = resizeStartDimensions.value.y

  // Handle different resize directions
  switch (resizeDirection.value) {
    case 'e':
      newWidth = Math.max(gridSize.value, resizeStartDimensions.value.width + deltaX)
      break
    case 'w':
      newWidth = Math.max(gridSize.value, resizeStartDimensions.value.width - deltaX)
      newX = resizeStartDimensions.value.x + deltaX
      break
    case 's':
      newHeight = Math.max(gridSize.value, resizeStartDimensions.value.height + deltaY)
      break
    case 'n':
      newHeight = Math.max(gridSize.value, resizeStartDimensions.value.height - deltaY)
      newY = resizeStartDimensions.value.y + deltaY
      break
    case 'se':
      newWidth = Math.max(gridSize.value, resizeStartDimensions.value.width + deltaX)
      newHeight = Math.max(gridSize.value, resizeStartDimensions.value.height + deltaY)
      break
    case 'sw':
      newWidth = Math.max(gridSize.value, resizeStartDimensions.value.width - deltaX)
      newHeight = Math.max(gridSize.value, resizeStartDimensions.value.height + deltaY)
      newX = resizeStartDimensions.value.x + deltaX
      break
    case 'ne':
      newWidth = Math.max(gridSize.value, resizeStartDimensions.value.width + deltaX)
      newHeight = Math.max(gridSize.value, resizeStartDimensions.value.height - deltaY)
      newY = resizeStartDimensions.value.y + deltaY
      break
    case 'nw':
      newWidth = Math.max(gridSize.value, resizeStartDimensions.value.width - deltaX)
      newHeight = Math.max(gridSize.value, resizeStartDimensions.value.height - deltaY)
      newX = resizeStartDimensions.value.x + deltaX
      newY = resizeStartDimensions.value.y + deltaY
      break
  }

  // Apply grid snapping if enabled
  if (snapToGrid.value) {
    newWidth = Math.round(newWidth / gridSize.value) * gridSize.value
    newHeight = Math.round(newHeight / gridSize.value) * gridSize.value
    newX = Math.round(newX / gridSize.value) * gridSize.value
    newY = Math.round(newY / gridSize.value) * gridSize.value
  }

  // Ensure component stays within canvas bounds
  newWidth = Math.min(newWidth, canvasSize.value.width - newX)
  newHeight = Math.min(newHeight, canvasSize.value.height - newY)
  newX = Math.max(0, Math.min(newX, canvasSize.value.width - newWidth))
  newY = Math.max(0, Math.min(newY, canvasSize.value.height - newHeight))

  // Update component dimensions
  const updatedComponents = components.value.map(item => {
    if (item.id === selectedIdRef.value) {
      return {
        ...item,
        width: newWidth,
        height: newHeight,
        x: newX,
        y: newY
      }
    }
    return item
  })

  components.value = updatedComponents
  emit('update:components', updatedComponents)
}

// Stop resize
const stopResize = () => {
  isResizing.value = false
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', stopResize)
}

const removeComponent = (component) => {
  // Remove the component from the components array
  const updatedComponents = components.value.filter(item => item.id !== component.id)
  components.value = updatedComponents

  // Clear selection if the deleted component was selected
  if (selectedIdRef.value === component.id) {
    selectedIdRef.value = undefined
    emit('select', undefined)
  }

  // Emit the updated components array
  emit('update:components', updatedComponents)
}

// 初始化画布位置
// Initialize canvas position
onMounted(() => {
  if (containerRef.value && canvasRef.value) {
    // 将画布居中显示
    // Center the canvas
    const container = containerRef.value
    if (props.isCenter) {
      const canvas = canvasRef.value
      container.scrollLeft = (canvas.offsetWidth * scale.value - container.offsetWidth) / 2
      container.scrollTop = (canvas.offsetHeight * scale.value - container.offsetHeight) / 2
    }
    else {
      container.scrollLeft = 0
      container.scrollTop = 0
    }
  }
})

// 清理事件监听
// Cleanup event listeners
onUnmounted(() => {
  document.removeEventListener('mousemove', onComponentMouseMove)
  document.removeEventListener('mouseup', onComponentMouseUp)
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', stopResize)
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
