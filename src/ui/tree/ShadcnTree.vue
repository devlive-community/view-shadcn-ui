<template>
  <div class="w-full">
    <ShadcnTreeNode v-for="item in data"
                    :key="item.value"
                    :node="item"
                    :level="0"
                    :selected-values="selectedValues"
                    :checkable="checkable"
                    :cascade="cascade"
                    :show-line="showLine"
                    :loadData="loadData"
                    @on-expand="onExpand"
                    @on-node-click="onNodeClick">
      <template #label="slotProps">
        <slot name="label" v-bind="slotProps"/>
      </template>

      <template #expand="slotProps">
        <slot name="expand" v-bind="slotProps"/>
      </template>

      <template #collapse="slotProps">
        <slot name="collapse" v-bind="slotProps"/>
      </template>
    </ShadcnTreeNode>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, onMounted, ref, watch } from 'vue'
import { TreeEmits, TreeNode, TreeProps } from './types'
import ShadcnTreeNode from './ShadcnTreeNode.vue'

const emit = defineEmits<TreeEmits>()
const props = withDefaults(defineProps<TreeProps>(), {
  data: () => [],
  modelValue: () => [],
  multiple: false,
  checkable: false,
  cascade: false,
  showLine: false,
  loadData: undefined
})

// 存储所有预设选中的节点值
const preSelectedValues = ref<any[]>([])

// 递归查找所有预设选中的节点
const findPreSelectedNodes = (nodes: TreeNode[]) => {
  nodes.forEach(node => {
    if (node.selected && !preSelectedValues.value.includes(node.value)) {
      preSelectedValues.value.push(node.value)
    }
    if (node.children && node.children.length > 0) {
      findPreSelectedNodes(node.children)
    }
  })
}

// 合并 modelValue 和预设选中的值
const selectedValues = computed(() => {
  const uniqueValues = new Set([...props.modelValue, ...preSelectedValues.value])
  return Array.from(uniqueValues)
})

// 在组件挂载时初始化预设选中的节点
onMounted(() => {
  findPreSelectedNodes(props.data)
  // 如果有预设选中的节点，通知父组件更新
  if (preSelectedValues.value.length > 0) {
    emit('update:modelValue', selectedValues.value)
  }
})

// 观察数据变化，更新预设选中的节点
watch(() => props.data, () => {
  preSelectedValues.value = []
  findPreSelectedNodes(props.data)
  emit('update:modelValue', selectedValues.value)
}, { deep: true })

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

const onExpand = (node: TreeNode) => emit('on-expand', node)

const onNodeClick = (node: TreeNode) => {
  if (!props.checkable) {
    const index = selectedValues.value.indexOf(node.value)
    let updatedValues: any[]

    if (index === -1) {
      if (!props.multiple) {
        updatedValues = [node.value]
        preSelectedValues.value = [] // 单选模式下清除预设选中
      }
      else {
        updatedValues = [...selectedValues.value, node.value]
      }
    }
    else {
      updatedValues = selectedValues.value.filter(v => v !== node.value)
    }

    emit('update:modelValue', updatedValues)
    emit('on-node-click', node)
    return
  }

  let updatedValues = [...selectedValues.value]
  const index = updatedValues.indexOf(node.value)

  if (!props.cascade) {
    if (index === -1) {
      if (!props.multiple) {
        updatedValues = [node.value]
        preSelectedValues.value = [] // 单选模式下清除预设选中
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