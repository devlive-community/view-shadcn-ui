<template>
  <div class="flex items-center gap-3 min-w-[120px]">
    <!-- 输入端口组 -->
    <!-- Input Ports -->
    <div class="flex flex-col gap-3">
      <div v-for="port in inputPorts"
           class="flex items-center gap-1.5 justify-start select-none"
           :key="port.id">
        <ShadcnTooltip :content="port.label">
          <div class="w-3 h-3 rounded-full bg-blue-500 cursor-pointer transition-colors hover:bg-blue-600 hover:animate-pulse hover:h-3.5 hover:w-3.5"
               :data-port-id="port.id"
               :data-port-type="port.type"
               @mousedown="handlePortMouseDown($event, port)"
               @mouseup="handlePortMouseUp($event, port)"/>
        </ShadcnTooltip>
        <span class="text-xs text-gray-600">{{ port.label }}</span>
      </div>
    </div>

    <!-- 节点内容插槽 -->
    <!-- Node content slot -->
    <slot>
      <div class="px-2 py-1 flex flex-col items-center select-none">
        <div class="font-medium text-sm">{{ node.category }}</div>
        <div class="text-xs text-gray-500">{{ node.description }}</div>
      </div>
    </slot>

    <!-- 输出端口组 -->
    <!-- Output Ports -->
    <div class="flex flex-col gap-3">
      <div v-for="port in outputPorts"
           class="flex items-center gap-1.5 justify-end select-none"
           :key="port.id">
        <span class="text-xs text-gray-600">{{ port.label }}</span>
        <ShadcnTooltip :content="port.label">
          <div class="w-3 h-3 rounded-full bg-green-500 cursor-pointer transition-colors hover:bg-green-600 hover:animate-pulse hover:h-3.5 hover:w-3.5"
               :data-port-id="port.id"
               :data-port-type="port.type"
               @mousedown="handlePortMouseDown($event, port)"
               @mouseup="handlePortMouseUp($event, port)"/>
        </ShadcnTooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { WorkflowNodePortEmits, WorkflowNodePortProps, WorkflowPort, WorkflowPortType } from '../types'
import ShadcnTooltip from '@/ui/tooltip'

const props = withDefaults(defineProps<WorkflowNodePortProps>(), {
  disabled: false,
  selected: false
})

const emit = defineEmits<WorkflowNodePortEmits>()

const inputPorts = computed(() => {
  return props.node.ports
              .filter(port => port.type === WorkflowPortType.input)
              .map(port => ({
                ...port,
                id: `${ props.node.id }-${ port.id }`
              }))
})

const outputPorts = computed(() => {
  return props.node.ports
              .filter(port => port.type === WorkflowPortType.output)
              .map(port => ({
                ...port,
                id: `${ props.node.id }-${ port.id }`
              }))
})

const handlePortMouseDown = (event: MouseEvent, port: WorkflowPort) => {
  if (props.disabled) {
    return
  }
  emit('on-connection-start', event, port)
}

const handlePortMouseUp = (event: MouseEvent, port: WorkflowPort) => {
  if (props.disabled) {
    return
  }
  emit('on-connection-end', event, port)
}
</script>
