<!-- ShadcnWorkflowPanel.vue -->
<template>
  <div class="h-full flex flex-col">
    <!-- 搜索框 -->
    <div class="p-4 border-b border-gray-200">
      <input
          type="text"
          v-model="searchText"
          placeholder="搜索节点..."
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- 分类列表 -->
    <div class="flex-1 overflow-y-auto">
      <div v-for="cat in category" :key="cat" class="mb-4">
        <div class="px-4 py-2 font-medium text-gray-600 bg-gray-50">
          {{ cat }}
        </div>

        <!-- 节点列表 -->
        <div class="p-2">
          <div v-for="node in filteredNodes(cat)"
               :key="node.id"
               class="p-3 mb-2  border border-gray-200 rounded-lg shadow-sm cursor-move hover:border-blue-500"
               draggable="true"
               @dragstart="handleDragStart(node, $event)">
            <div class="font-medium text-sm">{{ node.type }}</div>
            <div class="text-xs text-gray-500 mt-1">
              {{ node.description || '暂无描述' }}
            </div>
            <!-- 端口预览 -->
            <div class="mt-2 flex justify-between text-xs text-gray-400">
              <div v-if="node.ports.some(p => p.type === 'input')">
                输入: {{ node.ports.filter(p => p.type === 'input').length }}
              </div>
              <div v-if="node.ports.some(p => p.type === 'output')">
                输出: {{ node.ports.filter(p => p.type === 'output').length }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- ShadcnWorkflowPanel.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import type { Node, WorkflowPanelProps } from './types'

const props = defineProps<WorkflowPanelProps>()

const searchText = ref('')

// 根据分类过滤节点
const filteredNodes = (currentCategory: string) => {
  return props.nodes.filter(node => {
    const matchesSearch = node.type.toLowerCase().includes(searchText.value.toLowerCase())
    const matchesCategory = node.category === currentCategory
    return matchesSearch && matchesCategory
  })
}

// 处理节点拖拽
const handleDragStart = (node: Node, event: DragEvent) => {
  if (event.dataTransfer) {
    // 创建新的节点数据，确保id是唯一的
    const newNode = {
      ...node,
      id: `${ node.type }_${ Date.now() }`,
      position: { x: 0, y: 0 }
    }

    // 使用特定的 MIME 类型
    event.dataTransfer.setData('application/node', JSON.stringify(newNode))
    event.dataTransfer.effectAllowed = 'copy'

    // 创建拖拽预览
    const preview = document.createElement('div')
    preview.className = 'bg-white border border-gray-200 rounded-lg p-2 shadow-lg'
    preview.textContent = node.type
    preview.style.position = 'absolute'
    preview.style.left = '-1000px'
    document.body.appendChild(preview)
    event.dataTransfer.setDragImage(preview, 0, 0)

    // 清理预览元素
    requestAnimationFrame(() => {
      document.body.removeChild(preview)
    })
  }
}
</script>
