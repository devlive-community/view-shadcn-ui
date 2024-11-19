<template>
  <div class="w-64 bg-white border-l border-gray-200 p-4 select-none">
    <div class="text-lg font-medium mb-4">配置面板</div>
    <template v-if="selectedComponent">
      <div class="space-y-4">
        <!-- 位置配置 -->
        <!-- Position configuration -->
        <div class="space-y-2">
          <div class="text-sm font-medium text-gray-600">位置</div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <div class="text-xs text-gray-500 mb-1">X 坐标</div>
              <input type="number"
                     class="w-full px-2 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
                     :min="0"
                     :max="maxX"
                     v-model="componentConfig.x"
                     @input="handlePositionUpdate">
            </div>
            <div>
              <div class="text-xs text-gray-500 mb-1">Y 坐标</div>
              <input type="number"
                     class="w-full px-2 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
                     :min="0"
                     :max="maxY"
                     v-model="componentConfig.y"
                     @input="handlePositionUpdate">
            </div>
          </div>
        </div>

        <!-- 大小配置 -->
        <!-- Size configuration -->
        <div class="space-y-2">
          <div class="text-sm font-medium text-gray-600">大小</div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <div class="text-xs text-gray-500 mb-1">宽度</div>
              <input type="number"
                     class="w-full px-2 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
                     :min="minWidth"
                     :max="maxWidth"
                     v-model="componentConfig.width"
                     @input="handleSizeUpdate">
            </div>
            <div>
              <div class="text-xs text-gray-500 mb-1">高度</div>
              <input type="number"
                     class="w-full px-2 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
                     :min="minHeight"
                     :max="maxHeight"
                     v-model="componentConfig.height"
                     @input="handleSizeUpdate">
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="text-gray-400 text-center py-4">
      请选择组件进行配置
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ShadcnDataBuilderConfigureProps } from '@/ui/data-builder/types.ts'

const props = withDefaults(defineProps<ShadcnDataBuilderConfigureProps>(), {
  canvasWidth: 1920,
  canvasHeight: 1080,
  gridSize: 20
})

const emit = defineEmits(['update'])

// 组件配置
// Component configuration
const componentConfig = ref({
  x: 0,
  y: 0,
  width: 0,
  height: 0
})

// 计算最大和最小边界
// Calculate maximum and minimum boundaries
const minWidth = computed(() => props.gridSize)
const minHeight = computed(() => props.gridSize)

const maxWidth = computed(() => props.canvasWidth)
const maxHeight = computed(() => props.canvasHeight)

const maxX = computed(() => props.canvasWidth - componentConfig.value.width)
const maxY = computed(() => props.canvasHeight - componentConfig.value.height)

// 监听选中组件变化
// Watch selected component changes
watch(() => props.selectedComponent, (newVal) => {
  if (newVal) {
    componentConfig.value = {
      x: newVal.x,
      y: newVal.y,
      width: newVal.width,
      height: newVal.height
    }
  }
}, { deep: true })

// 约束坐标值
// Constrain coordinate values
const constrainPosition = (value, min, max) => {
  return Math.min(Math.max(parseInt(value) || 0, min), max)
}

// 约束尺寸值
// Constrain size values
const constrainSize = (value, min, max) => {
  return Math.min(Math.max(parseInt(value) || min, min), max)
}

// 更新位置
// Update position
const handlePositionUpdate = () => {
  if (!props.selectedComponent) {
    return
  }

  const updatedConfig = {
    ...componentConfig.value,
    x: constrainPosition(componentConfig.value.x, 0, maxX.value),
    y: constrainPosition(componentConfig.value.y, 0, maxY.value)
  }

  componentConfig.value = updatedConfig
  emit('update', {
    ...props.selectedComponent,
    ...updatedConfig
  })
}

// 更新尺寸
// Update size
const handleSizeUpdate = () => {
  if (!props.selectedComponent) {
    return
  }

  const updatedConfig = {
    ...componentConfig.value,
    width: constrainSize(componentConfig.value.width, minWidth.value, maxWidth.value),
    height: constrainSize(componentConfig.value.height, minHeight.value, maxHeight.value)
  }

  // 如果新的尺寸导致组件超出画布,调整位置
  // If the new size causes the component to exceed the canvas, adjust the position
  if (updatedConfig.x + updatedConfig.width > props.canvasWidth) {
    updatedConfig.x = props.canvasWidth - updatedConfig.width
  }
  if (updatedConfig.y + updatedConfig.height > props.canvasHeight) {
    updatedConfig.y = props.canvasHeight - updatedConfig.height
  }

  componentConfig.value = updatedConfig
  emit('update', {
    ...props.selectedComponent,
    ...updatedConfig
  })
}
</script>
