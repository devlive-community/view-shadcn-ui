<template>
  <div class="w-full">
    <ShadcnTreeNode v-for="item in data"
                    :key="item.value"
                    :node="item"
                    :level="0"
                    @on-expand="handleExpand"
                    @on-node-click="handleNodeClick"/>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { TreeEmits, TreeNode, TreeProps } from './types'
import ShadcnTreeNode from './ShadcnTreeNode.vue'

const emit = defineEmits<TreeEmits>()

withDefaults(defineProps<TreeProps>(), {
  data: () => []
})

const handleExpand = (node: TreeNode) => {
  emit('on-expand', node)
}

const handleNodeClick = (node: TreeNode) => {
  emit('on-node-click', node)
}
</script>
