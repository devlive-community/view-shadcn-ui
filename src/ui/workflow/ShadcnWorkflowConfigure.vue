<template>
  <div class="h-full flex flex-col">
    <!-- 顶部标题 -->
    <!-- Top title -->
    <div class="p-4 border-b border-gray-200 bg-gray-50">
      <h3 class="font-medium">
        {{ getPanelTitle }}
      </h3>
    </div>

    <!-- 配置内容 -->
    <!-- Configuration content -->
    <div v-if="selectedNode || selectedEdge" class="flex-1 p-4 overflow-y-auto">
      <!-- 节点配置 -->
      <!-- Node configuration -->
      <template v-if="selectedNode">
        <!-- 基本信息 -->
        <!-- Basic information -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            节点类型
          </label>
          <input type="text"
                 readonly
                 class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                 :value="selectedNode.type"/>
        </div>

        <!-- 节点ID -->
        <!-- Node ID -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            节点ID
          </label>
          <input type="text"
                 readonly
                 class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                 :value="selectedNode.id"/>
        </div>

        <!-- 自定义配置表单 -->
        <!-- Custom configuration form -->
        <div v-if="selectedNode.data" class="mb-4">
          <div v-for="(value, key) in selectedNode.data"
               :key="key"
               class="mb-3">
            <label class="block text-sm font-medium text-gray-700 mb-1">
              {{ key }}
            </label>
            <input v-if="typeof value === 'string' || typeof value === 'number'"
                   type="text"
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                   :value="value"
                   @input="handleDataChange(key, $event)"/>
            <select
                v-else-if="Array.isArray(value)"
                :value="value[0]"
                @change="handleDataChange(key, $event)"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option v-for="option in value" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>

        <!-- 位置信息 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            位置
          </label>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="text-xs text-gray-500">X</label>
              <input
                  type="number"
                  :value="selectedNode.position.x"
                  @input="handlePositionChange('x', $event)"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label class="text-xs text-gray-500">Y</label>
              <input
                  type="number"
                  :value="selectedNode.position.y"
                  @input="handlePositionChange('y', $event)"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <!-- 删除节点按钮 -->
        <button
            @click="handleDeleteNode"
            class="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          删除节点
        </button>
      </template>

      <!-- 连线配置 -->
      <template v-else-if="selectedEdge">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            连线ID
          </label>
          <input
              type="text"
              :value="selectedEdge.id"
              readonly
              class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            起始节点
          </label>
          <input
              type="text"
              :value="selectedEdge.source"
              readonly
              class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            目标节点
          </label>
          <input
              type="text"
              :value="selectedEdge.target"
              readonly
              class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>

        <!-- 删除连线按钮 -->
        <button
            @click="handleDeleteEdge"
            class="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          删除连线
        </button>
      </template>
    </div>

    <!-- 空状态 -->
    <div
        v-else
        class="flex-1 flex items-center justify-center text-gray-500"
    >
      请选择节点或连线进行配置
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Position, WorkflowConfigureProps } from './types'

const props = defineProps<WorkflowConfigureProps>()
const emit = defineEmits(['update:selectedNode', 'update:selectedEdge', 'delete-node', 'delete-edge'])

// 计算面板标题
const getPanelTitle = computed(() => {
  if (props.selectedNode) {
    return '节点配置'
  }
  if (props.selectedEdge) {
    return '连线配置'
  }
  return '配置面板'
})

// 处理节点数据变更
const handleDataChange = (key: string, event: Event) => {
  if (!props.selectedNode) {
    return
  }

  const target = event.target as HTMLInputElement | HTMLSelectElement
  const newData = {
    ...props.selectedNode.data,
    [key]: target.value
  }

  emit('update:selectedNode', {
    ...props.selectedNode,
    data: newData
  })
}

// 处理位置变更
const handlePositionChange = (axis: 'x' | 'y', event: Event) => {
  if (!props.selectedNode) {
    return
  }

  const target = event.target as HTMLInputElement
  const newPosition: Position = {
    ...props.selectedNode.position,
    [axis]: Number(target.value)
  }

  emit('update:selectedNode', {
    ...props.selectedNode,
    position: newPosition
  })
}

// 删除节点
const handleDeleteNode = () => {
  if (props.selectedNode) {
    emit('delete-node', props.selectedNode)
  }
}

// 删除边
const handleDeleteEdge = () => {
  if (props.selectedEdge) {
    emit('delete-edge', props.selectedEdge)
  }
}
</script>