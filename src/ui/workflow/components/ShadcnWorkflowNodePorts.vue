<template>
  <div class="flex items-center gap-3 min-w-[120px]">
    <!-- 输入端口组 -->
    <!-- Input Ports -->
    <div class="flex flex-col gap-3">
      <div v-for="port in inputPorts" class="flex items-center gap-1.5 justify-start select-none" :key="port.id">
        <ShadcnTooltip :content="String(port.validated ? port.validated.message : port.label)">
          <div class="w-3 h-3 rounded-full cursor-pointer transition-colors"
               :class="{
                   'bg-blue-500 hover:bg-blue-600': !port.validated,
                   'bg-red-500 hover:bg-red-600': port.validated && !port.validated.valid,
                   'bg-blue-500 hover:bg-blue-600 disabled': port.validated && port.validated.valid,
                   'hover:animate-pulse hover:h-3.5 hover:w-3.5': true
               }"
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
        <div class="font-medium text-sm">{{ node.label }}</div>
        <div class="text-xs text-gray-500">{{ node.description }}</div>
      </div>
    </slot>

    <!-- 输出端口组 -->
    <!-- Output Ports -->
    <div class="flex flex-col gap-3">
      <div v-for="port in outputPorts" class="flex items-center gap-1.5 justify-end select-none" :key="port.id">
        <span class="text-xs text-gray-600">{{ port.label }}</span>
        <ShadcnTooltip :content="String(port.validated ? port.validated.message : port.label)">
          <div class="w-3 h-3 rounded-full cursor-pointer transition-colors"
               :class="{
                   'bg-gray-500 hover:bg-gray-600': !port.validated,
                   'bg-red-500 hover:bg-red-600': port.validated && !port.validated.valid,
                   'bg-gray-500 hover:bg-gray-600 disabled': port.validated && port.validated.valid,
                   'hover:animate-pulse hover:h-3.5 hover:w-3.5': true
               }"
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
import { t } from '@/utils/locale'
import { WorkflowNodePortEmits, WorkflowNodePortProps, WorkflowPort, WorkflowPortType, WorkflowPortValidatedStatus } from '../types'
import ShadcnTooltip from '@/ui/tooltip'

const props = withDefaults(defineProps<WorkflowNodePortProps>(), {
  disabled: false,
  selected: false,
  connections: () => []
})

const emit = defineEmits<WorkflowNodePortEmits>()

const inputPorts = computed(() => {
  return props.node.ports
              .filter(port => port.type === WorkflowPortType.input)
              .map(port => {
                const portId = `${ props.node.id }-${ port.id }`
                const isConnected = props.connections?.some(conn =>
                    conn.target === portId || conn.source === portId
                ) ?? false

                const validatedStatus: WorkflowPortValidatedStatus | undefined = port.required ? {
                  valid: isConnected,
                  message: isConnected ? port.label : t('workflow.validated.required')
                } : undefined as any

                const portData: WorkflowPort = {
                  ...port,
                  id: portId,
                  validated: validatedStatus
                }
                return portData
              })
})

const outputPorts = computed(() => {
  return props.node.ports
              .filter(port => port.type === WorkflowPortType.output)
              .map(port => {
                const portId = `${ props.node.id }-${ port.id }`
                const isConnected = props.connections?.some(conn =>
                    conn.target === portId || conn.source === portId
                ) ?? false

                const validatedStatus: WorkflowPortValidatedStatus | undefined = port.required ? {
                  valid: isConnected,
                  message: isConnected ? port.label : t('workflow.validated.required')
                } : undefined as any

                const portData: WorkflowPort = {
                  ...port,
                  id: portId,
                  validated: validatedStatus
                }
                return portData
              })
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
