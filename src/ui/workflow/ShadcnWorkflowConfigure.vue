<template>
  <div class="p-4">
    <div v-if="selectedNode" class="space-y-4">
      <h3 class="text-lg font-medium">{{ t('workflow.text.nodeConfigure') }}</h3>

      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">{{ t('workflow.text.nodeId') }}</label>
        <ShadcnInput v-model="selectedNode.id" disabled/>
      </div>

      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">
          Node Data
        </label>
        <textarea
            v-model="nodeData"
            class="w-full px-3 py-2 border rounded-md"
            rows="4"
            @input="updateNodeData"
        />
      </div>
    </div>

    <div v-else class="text-center text-gray-500">
      {{ t('workflow.placeholder.selectNode') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { t } from '@/utils/locale'
import type { WorkflowNode } from './types'
import ShadcnInput from '@/ui/input'

const props = defineProps<{
  selectedNode?: WorkflowNode
}>()

const emit = defineEmits<{
  (e: 'update:node', node: WorkflowNode): void
}>()

const nodeData = ref('')

watch(() => props.selectedNode, (node) => {
  if (node) {
    nodeData.value = JSON.stringify(node.data, null, 2)
  }
  else {
    nodeData.value = ''
  }
}, { immediate: true })

const updateNodeData = () => {
  if (!props.selectedNode) {
    return
  }

  try {
    const data = JSON.parse(nodeData.value)
    emit('update:node', {
      ...props.selectedNode,
      data
    })
  }
  catch (e) {
    // 处理 JSON 解析错误
  }
}
</script>
