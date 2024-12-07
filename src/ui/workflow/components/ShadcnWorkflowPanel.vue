<template>
  <div class="h-full flex flex-col">
    <!-- 搜索框 -->
    <!-- Search box -->
    <div class="p-4 border-b border-gray-200">
      <ShadcnInput v-model="searchText" :placeholder="String(t('workflow.placeholder.search'))"/>
    </div>

    <!-- 分类列表 -->
    <!-- Category list -->
    <div class="flex-1 overflow-y-auto">
      <div v-for="catagory in categories" :key="catagory" class="mb-4">
        <div class="px-4 py-2 font-medium text-gray-600 bg-gray-50">{{ catagory }}</div>

        <!-- 节点列表 -->
        <!-- Node list -->
        <div class="p-2">
          <div v-for="node in filteredNodes(catagory)"
               class="p-3 mb-2 border border-gray-200 rounded-lg shadow-sm cursor-move hover:border-blue-500"
               draggable="true"
               :key="node.id"
               @dragstart="handleDragStart(node, $event)">
            <div class="font-medium text-sm">{{ node.category }}</div>

            <div class="text-xs text-gray-500 mt-1">
              {{ node.description || '暂无描述' }}
            </div>

            <!-- 端口预览 -->
            <!-- Port preview -->
            <div class="mt-2 flex justify-between text-xs text-gray-400">
              <div v-if="node.ports.some(p => p.type === WorkflowPortType.input)">
                {{ t('workflow.text.input') }}: {{ node.ports.filter(p => p.type === WorkflowPortType.input).length }}
              </div>
              <div v-if="node.ports.some(p => p.type === WorkflowPortType.output)">
                {{ t('workflow.text.output') }}: {{ node.ports.filter(p => p.type === WorkflowPortType.output).length }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { t } from '@/utils/locale'
import { WorkflowNode, WorkflowPanelEmits, WorkflowPanelProps, WorkflowPortType } from '../types'
import ShadcnInput from '@/ui/input'
import { randomUUID } from '@/utils/uuid.ts'

const props = defineProps<WorkflowPanelProps>()
const emits = defineEmits<WorkflowPanelEmits>()

const searchText = ref('')

// 根据分类过滤节点
// Filter nodes by category
const filteredNodes = (currentCategory: string) => {
  return props.nodes.filter(node => {
    const matchesSearch = node.category.toLowerCase().includes(searchText.value.toLowerCase())
    const matchesCategory = node.category === currentCategory
    return matchesSearch && matchesCategory
  })
}

// 处理节点拖拽
// Handle node dragging
const handleDragStart = (node: WorkflowNode, event: DragEvent) => {
  if (event.dataTransfer) {
    // 创建新的节点数据，确保id是唯一的
    // Create a new node data, ensuring the id is unique
    const newNode = {
      ...node,
      id: randomUUID(),
      position: { x: 0, y: 0 }
    }

    // 使用特定的 MIME 类型
    // Use a specific MIME type
    event.dataTransfer.setData('application/node', JSON.stringify(newNode))
    event.dataTransfer.effectAllowed = 'copy'

    // 创建拖拽预览
    // Create drag preview
    const preview = document.createElement('div')
    preview.className = 'bg-white border border-gray-200 rounded-lg p-2 shadow-lg'
    preview.textContent = node.category
    preview.style.position = 'absolute'
    preview.style.left = '-1000px'
    document.body.appendChild(preview)
    event.dataTransfer.setDragImage(preview, 0, 0)

    // 清理预览元素
    // Cleanup preview element
    requestAnimationFrame(() => {
      document.body.removeChild(preview)
    })

    emits('on-node-drag-start', node)
  }
}
</script>
