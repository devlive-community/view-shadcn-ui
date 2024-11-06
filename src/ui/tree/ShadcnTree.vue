<template>
  <div class="w-full">
    <ShadcnTreeNode v-for="item in data"
                    :key="item.value"
                    :node="item"
                    :level="0"
                    :selected-values="modelValue"
                    :checkable="checkable"
                    :cascade="cascade"
                    @on-expand="handleExpand"
                    @on-node-click="handleNodeClick">
      <template #label="slotProps">
        <slot name="label" v-bind="slotProps"/>
      </template>
    </ShadcnTreeNode>
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
  multiple: false,
  checkable: false,
  cascade: false
})

const selectedNode = ref<any[]>([])

watch(() => props.modelValue, (newValue) => {
  selectedNode.value = newValue ?? []
})

const handleExpand = (node: TreeNode) => emit('on-expand', node)

// Recursively gets the values of all child nodes
const getAllChildrenValues = (node: TreeNode): any[] => {
  let values: any[] = []
  if (node.children && node.children.length > 0) {
    node.children.forEach(child => {
      values.push(child.value)
      values = values.concat(getAllChildrenValues(child))
    })
  }
  return values
}

// Recursively find the parent node
const findParentNodes = (nodes: TreeNode[], targetValue: any, parent?: TreeNode): TreeNode[] => {
  let parents: TreeNode[] = []
  for (const node of nodes) {
    if (node.children && node.children.length > 0) {
      if (node.children.some(child => child.value === targetValue)) {
        if (parent) {
          parents.push(parent)
        }
        parents.push(node)
        return parents
      }
      const childParents = findParentNodes(node.children, targetValue, node)
      if (childParents.length > 0) {
        if (parent) {
          parents.push(parent)
        }
        parents = parents.concat(childParents)
        return parents
      }
    }
  }
  return parents
}

// Check that all children of the parent node are selected
const areAllChildrenSelected = (node: TreeNode, selectedValues: any[]): boolean => {
  if (!node.children || node.children.length === 0) {
    return true
  }
  return node.children.every(child => {
    if (child.children && child.children.length > 0) {
      return areAllChildrenSelected(child, selectedValues)
    }
    return selectedValues.includes(child.value)
  })
}

const handleNodeClick = (node: TreeNode) => {
  if (!props.checkable) {
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
    return
  }

  let updatedValues = [...props.modelValue]
  const index = updatedValues.indexOf(node.value)

  if (!props.cascade) {
    if (index === -1) {
      if (!props.multiple) {
        updatedValues = [node.value]
      }
      else {
        updatedValues = [...updatedValues, node.value]
      }
    }
    else {
      updatedValues.splice(index, 1)
    }
  }
  else {
    if (index === -1) {
      // When a node is selected
      updatedValues.push(node.value)

      // Add all child nodes
      const childrenValues = getAllChildrenValues(node)
      childrenValues.forEach(value => {
        if (!updatedValues.includes(value)) {
          updatedValues.push(value)
        }
      })

      // Check the status of the parent node
      const parentNodes = findParentNodes(props.data, node.value)
      parentNodes.forEach(parent => {
        if (areAllChildrenSelected(parent, updatedValues) && !updatedValues.includes(parent.value)) {
          updatedValues.push(parent.value)
        }
      })
    }
    else {
      // When a node is unchecked
      // Removes the current node
      updatedValues.splice(index, 1)

      // Remove all child nodes
      const childrenValues = getAllChildrenValues(node)
      updatedValues = updatedValues.filter(value => !childrenValues.includes(value))

      // Remove the parent node
      const parentNodes = findParentNodes(props.data, node.value)
      parentNodes.forEach(parent => {
        const parentIndex = updatedValues.indexOf(parent.value)
        if (parentIndex !== -1) {
          updatedValues.splice(parentIndex, 1)
        }
      })
    }
  }

  emit('update:modelValue', updatedValues)
  emit('on-node-click', node)
}
</script>
