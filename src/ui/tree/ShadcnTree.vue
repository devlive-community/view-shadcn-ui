<template>
  <div class="w-full">
    <ShadcnTreeNode v-for="item in data"
                    :key="item.value"
                    :node="item"
                    :level="0"
                    :selected-values="modelValue"
                    @on-expand="handleExpand"
                    @on-node-click="handleNodeClick"/>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, watch } from 'vue'
import { TreeEmits, TreeNode, TreeProps } from './types'
import ShadcnTreeNode from './ShadcnTreeNode.vue'

const emit = defineEmits<TreeEmits>()
const props = withDefaults(defineProps<TreeProps>(), {
  data: () => []
})

watch(() => props.modelValue, (newValue) => {
  selectedNode.value = newValue
})

const selectedNode = ref<TreeNode | null>(null)

const handleExpand = (node: TreeNode) => {
  emit('on-expand', node)
}

const handleNodeClick = (node: TreeNode) => {
  const index = props.modelValue.indexOf(node.value)
  let updatedValues: any[]
  if (index === -1) {
    updatedValues = [node.value]
  }
  else {
    updatedValues = props.modelValue.slice()
    updatedValues.splice(index, 1)
  }
  emit('update:modelValue', updatedValues)
  emit('on-node-click', node)
}
</script>
