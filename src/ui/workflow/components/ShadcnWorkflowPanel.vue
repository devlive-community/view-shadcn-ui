<template>
  <div class="h-full flex flex-col">
    <!-- 搜索框 slot -->
    <!-- Search box slot -->
    <slot name="search">
      <div class="p-4 border-b border-gray-200">
        <ShadcnInput v-model="searchText" :placeholder="String(t('workflow.placeholder.search'))"/>
      </div>
    </slot>

    <!-- 分类列表 -->
    <!-- Category list -->
    <div class="flex-1 overflow-y-auto">
      <div v-for="category in categories" :key="category.value" class="mb-4">
        <!-- 分类标题 slot -->
        <!-- Category title slot -->
        <slot :category="category" name="category-header">
          <div class="px-4 py-2 font-medium text-gray-600 bg-gray-50">{{ category.label }}</div>
        </slot>

        <!-- 节点列表 -->
        <!-- Node list -->
        <div class="p-2">
          <div v-for="node in filteredNodes(category.value)" :key="node.id">
            <!-- 节点内容 slot -->
            <!-- Node content slot -->
            <slot :node="node" :onDragStart="handleDragStart" name="node">
              <div class="p-3 mb-2 border border-gray-200 rounded-lg shadow-sm cursor-move hover:border-blue-500"
                   draggable="true"
                   @dragstart="handleDragStart(node, $event)">
                <div class="font-medium text-sm">{{ node.label }}</div>

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
            </slot>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 slot -->
    <!-- Bottom slot -->
    <slot name="bottom"></slot>
  </div>
</template>

<script setup lang="ts">
import { t } from '@/utils/locale'
import { WorkflowNode, WorkflowPanelEmits, WorkflowPanelProps, WorkflowPortType } from '../types'
import ShadcnInput from '@/ui/input'
import { randomUUID } from '@/utils/uuid.ts'
import { ref, watch } from 'vue'

const emit = defineEmits<WorkflowPanelEmits>()
const props = withDefaults(defineProps<WorkflowPanelProps>(), {
  searchText: ''
})

const searchText = ref(props.searchText)

watch(() => props.searchText, (value) => {
  searchText.value = value
  emit('update:searchText', value)
})

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
    const newNode = {
      ...node,
      id: randomUUID(),
      position: { x: 0, y: 0 }
    }

    event.dataTransfer.setData('application/node', JSON.stringify(newNode))
    event.dataTransfer.effectAllowed = 'copy'

    const preview = document.createElement('div')
    preview.className = 'bg-white border border-gray-200 rounded-lg p-2 shadow-lg'
    preview.textContent = node.category
    preview.style.position = 'absolute'
    preview.style.left = '-1000px'
    document.body.appendChild(preview)
    event.dataTransfer.setDragImage(preview, 0, 0)

    requestAnimationFrame(() => {
      document.body.removeChild(preview)
    })

    emit('on-node-drag-start', node)
  }
}
</script>
