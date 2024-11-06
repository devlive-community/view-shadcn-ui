<template>
  <div class="w-full">
    <ShadcnTreeNode v-for="item in data"
                    :key="item.value"
                    :node="item"
                    :level="0"
                    :selected-values="modelValue"
                    :checkable="checkable"
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
  data: () => [],
  modelValue: () => [],
  multiple: false
})

const selectedNode = ref<any[]>([])

watch(() => props.modelValue, (newValue) => {
  selectedNode.value = newValue ?? []
})

const handleExpand = (node: TreeNode) => emit('on-expand', node)

const handleNodeClick = (node: TreeNode) => {
  const index = props.modelValue.indexOf(node.value)
  let updatedValues: any[]
  if (index === -1) {
    if (!props.multiple) {
      updatedValues = [node.value]
    }
    else {
      updatedValues = [...props.modelValue, node.value]
    }
  }
  else {
    updatedValues = props.modelValue.slice()
    updatedValues.splice(index, 1)
  }
  emit('update:modelValue', updatedValues)
  emit('on-node-click', node)
}
</script>
