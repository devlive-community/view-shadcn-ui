<template>
  <div :class="['relative', `pl-${level * 4}`]">
    <div class="flex items-center py-1 px-1.5 hover:bg-gray-100 rounded-lg cursor-pointer"
         @click="handleNodeClick">
      <button v-if="hasChildren"
              class="w-4 h-4 flex items-center justify-center mr-2 text-gray-500 hover:text-gray-700"
              @click.stop="handleExpand">
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             fill="currentColor"
             :class="['w-4 h-4 transition-transform', { 'rotate-90': isExpanded }]">
          <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"/>
        </svg>
      </button>

      <span v-else class="w-6"></span>

      <span class="text-sm">{{ node.label }}</span>
    </div>

    <div v-if="hasChildren && isExpanded" class="relative">
      <ShadcnTreeNode v-for="child in node.children"
                      :key="child.value"
                      :node="child"
                      :level="level + 1"
                      @on-expand="handleChildExpand"
                      @on-node-click="handleChildClick"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { TreeNode, TreeNodeEmits, TreeNodeProps } from './types'

const props = defineProps<TreeNodeProps>()
const emit = defineEmits<TreeNodeEmits>()

const isExpanded = ref(false)

const hasChildren = computed(() => {
  return props.node.children && props.node.children.length > 0
})

// Handle expand/collapse events
const handleExpand = (event: Event) => {
  event.stopPropagation()
  isExpanded.value = !isExpanded.value
  emit('on-expand', props.node)
}

// Handle node click events
const handleNodeClick = () => {
  emit('on-node-click', props.node)
}

// Handles expand/collapse events for child nodes
const handleChildExpand = (node: TreeNode) => {
  emit('on-expand', node)
}

// Handle click events for child nodes
const handleChildClick = (node: TreeNode) => {
  emit('on-node-click', node)
}
</script>
