<template>
  <div class="relative min-h-screen w-64 overflow-auto">
    <div class="w-64 inline-block">
      <ShadcnTree v-model="value" :data="data" :loadData="loadNodeData">
        <template #label="{ node }">
            <span class="text-xs font-normal text-gray-900">
              {{ node.label }}
            </span>
        </template>
      </ShadcnTree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

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

const generateChildNodes = (parentValue: string, level: number = 1, maxLevel: number = 3): any[] => {
  if (level >= maxLevel) {
    return []
  }

  const count = Math.floor(Math.random() * 3) + 1
  return Array.from({ length: count }, (_, index) => {
    const value = `${ parentValue }.${ index + 1 }`
    return {
      value,
      label: `Node\u00A0${ value }`,
      isLeaf: level === maxLevel - 1,
      children: []
    }
  })
}
const loadNodeData = (item: any, callback: (children: any[]) => void) => {
  setTimeout(() => {
    const level = 0
    const children = generateChildNodes(item.value, level)
    callback(children)
  }, 1000)
}
</script>
