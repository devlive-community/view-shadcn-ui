<template>
  <div class="w-64 bg-white border-l border-gray-200 p-4">
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
                     v-model="componentConfig.x"
                     @input="handleUpdate">
            </div>
            <div>
              <div class="text-xs text-gray-500 mb-1">Y 坐标</div>
              <input type="number"
                     class="w-full px-2 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
                     v-model="componentConfig.y"
                     @input="handleUpdate">
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
                     v-model="componentConfig.width"
                     @input="handleUpdate">
            </div>
            <div>
              <div class="text-xs text-gray-500 mb-1">高度</div>
              <input type="number"
                     class="w-full px-2 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
                     v-model="componentConfig.height"
                     @input="handleUpdate">
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

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  selectedComponent: {
    type: Object,
    default: null
  }
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
}, {deep: true})

// 更新组件
// Update component
const handleUpdate = () => {
  if (!props.selectedComponent) {
    return
  }
  emit('update', {
    ...props.selectedComponent,
    ...componentConfig.value
  })
}
</script>
