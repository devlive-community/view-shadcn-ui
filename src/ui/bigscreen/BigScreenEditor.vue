<template>
  <div class="flex-1 relative overflow-auto"
       @dragover.prevent
       @drop="handleDrop"
       :style="gridStyle">
    <!-- 已添加的组件 -->
    <div v-for="item in components"
         :key="item.id"
         class="absolute bg-white border-2 flex items-center justify-center cursor-move transition-all"
         :class="[
        selectedId === item.id
          ? 'border-blue-500 shadow-lg'
          : 'border-gray-200 hover:border-gray-300'
      ]"
         :style="getPosition(item)"
         @click.stop="handleSelect(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const props = defineProps({
  gridSize: {
    type: Number,
    default: 20
  },
  selectedId: {
    type: [Number, null],
    default: null
  }
})

const emit = defineEmits(['update:components', 'select'])

// 编辑区网格配置
const gridStyle = {
  backgroundSize: `${props.gridSize}px ${props.gridSize}px`,
  backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)'
}

// 画布中的组件
const components = ref([])

// 处理放置
const handleDrop = (e) => {
  const type = e.dataTransfer.getData('componentType')
  const label = e.dataTransfer.getData('componentLabel')

  // 获取放置位置
  const rect = e.target.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  // 对齐到网格
  const alignedX = Math.round(x / props.gridSize) * props.gridSize
  const alignedY = Math.round(y / props.gridSize) * props.gridSize

  // 添加新组件
  const newComponents = [...components.value, {
    id: Date.now(),
    type,
    label,
    x: alignedX,
    y: alignedY,
    width: props.gridSize * 5,
    height: props.gridSize * 3
  }]

  components.value = newComponents
  emit('update:components', newComponents)
}

// 选择组件
const handleSelect = (component) => {
  emit('select', component)
}

// 获取组件位置样式
const getPosition = (component) => {
  return {
    left: component.x + 'px',
    top: component.y + 'px',
    width: component.width + 'px',
    height: component.height + 'px'
  }
}

// 暴露方法给父组件
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
