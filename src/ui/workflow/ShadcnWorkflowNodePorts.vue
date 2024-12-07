<template>
  <div class="relative"
       :style="{
         minWidth: '200px',
         minHeight: `${calculateContainerHeight()}px`
       }"
       @mousedown.stop>
    <!-- 输入端口 -->
    <div v-for="port in inputPorts" :key="port.id"
         class="absolute left-0 group cursor-crosshair"
         :style="{
           top: `${getPortPosition(port, inputPorts.length)}px`
         }"
         @mousedown.stop="(e) => handlePortMouseDown(port, e)"
         @mouseup.stop="(e) => handlePortMouseUp(port, e)"
         @dragstart.prevent>
      <div class="absolute w-3 h-3 bg-blue-500 rounded-full
                  group-hover:w-4 group-hover:h-4
                  group-hover:bg-blue-600
                  transition-all duration-200
                  -translate-x-1/2 -translate-y-1/2"/>
      <span class="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gray-600 whitespace-nowrap">
        {{ port.label }}
      </span>
    </div>

    <!-- 输出端口 -->
    <div v-for="port in outputPorts" :key="port.id"
         class="absolute right-0 group cursor-crosshair"
         :style="{
           top: `${getPortPosition(port, outputPorts.length)}px`
         }"
         @mousedown.stop="(e) => handlePortMouseDown(port, e)"
         @mouseup.stop="(e) => handlePortMouseUp(port, e)"
         @dragstart.prevent>
      <div class="absolute w-3 h-3 bg-green-500 rounded-full
                  group-hover:w-4 group-hover:h-4
                  group-hover:bg-green-600
                  transition-all duration-200
                  -translate-x-1/2 -translate-y-1/2"/>
      <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-600 whitespace-nowrap">
        {{ port.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Port, WorkflowNodePortsProps } from './types'

const props = defineProps<WorkflowNodePortsProps>()
const emit = defineEmits(['port-mouse-down', 'port-mouse-up'])

const inputPorts = computed(() =>
    props.node.ports.filter(port => port.type === 'input')
)

const outputPorts = computed(() =>
    props.node.ports.filter(port => port.type === 'output')
)

const portSpacing = 40 // 端口之间的间距
const minHeight = 40 // 最小容器高度
const paddingY = 20 // 上下内边距

// 计算端口位置，根据端口ID区分不同的垂直位置
const getPortPosition = (port: Port, totalPorts: number) => {
  const startY = paddingY
  // 从端口ID提取索引，例如 'out1' -> 1, 'out2' -> 2
  const portIndex = parseInt(port.id.match(/\d+/)?.[0] || '1') - 1
  return startY + (portIndex * portSpacing)
}

// 计算容器所需的总高度
const calculateContainerHeight = () => {
  const maxPorts = Math.max(inputPorts.value.length, outputPorts.value.length)
  if (maxPorts <= 1) return minHeight
  return Math.max((paddingY * 2) + ((maxPorts - 1) * portSpacing), minHeight)
}

const handlePortMouseDown = (port: Port, event: MouseEvent) => {
  // 获取端口的实际位置
  const portPosition = getPortPosition(port, port.type === 'input' ? inputPorts.value.length : outputPorts.value.length)
  // 将端口位置信息添加到事件中
  const enrichedEvent = {
    ...event,
    portPosition
  }
  emit('port-mouse-down', props.node, port, enrichedEvent)
}

const handlePortMouseUp = (port: Port, event: MouseEvent) => {
  // 同样传递端口位置信息
  const portPosition = getPortPosition(port, port.type === 'input' ? inputPorts.value.length : outputPorts.value.length)
  const enrichedEvent = {
    ...event,
    portPosition
  }
  emit('port-mouse-up', props.node, port, enrichedEvent)
}
</script>
