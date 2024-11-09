<template>
  <ShadcnTree v-model="value" checkable cascade :data="data" :loadData="loadNodeData"/>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { TreeNode } from '@/ui/tree/types.ts'
const value = ref([])
const data = reactive<[]>([
  {
    value: 1,
    label: 'Parent Node 1',
    isLeaf: false,
    children: []
  },
  {
    value: 2,
    label: 'Parent Node 2',
    children: [
      { value: '2.1', label: 'Child Node 2.1', children: [] }
    ]
  }
])

const generateChildNodes = (parentValue: string, level: number = 1, maxLevel: number = 3): TreeNode[] => {
  if (level >= maxLevel) {
    return []
  }

  const count = Math.floor(Math.random() * 3) + 1
  return Array.from({ length: count }, (_, index) => {
    const value = `${ parentValue }.${ index + 1 }`
    return {
      value,
      label: `Node ${ value }`,
      isLeaf: level === maxLevel - 1,
      children: []
    }
  })
}

const loadNodeData = (item: TreeNode, callback: (children: TreeNode[]) => void) => {
    setTimeout(() => {
      const level = 0
      const children = generateChildNodes(item.value, level)
      callback(children)
    }, 1000)
}
</script>
