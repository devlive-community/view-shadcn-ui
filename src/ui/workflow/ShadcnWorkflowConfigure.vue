<!-- ShadcnWorkflowConfigure.vue -->
<template>
  <div class="p-4">
    <div v-if="selectedNode" class="space-y-4">
      <h3 class="text-lg font-medium">节点配置</h3>

      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">
          节点类型
        </label>
        <input
            :value="selectedNode.type"
            class="w-full px-3 py-2 border rounded-md bg-gray-50"
            disabled
            type="text"
        >
      </div>

      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">
          节点数据
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
      请选择一个节点进行配置
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { WorkflowNode } from './types'

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
