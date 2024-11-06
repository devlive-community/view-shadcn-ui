# Example.vue
<template>
  <div class="p-4 space-y-2">
    <ShadcnCard title="Lazy load node">
      Value: {{ lazyValue }}
      <ShadcnTree key="lazy-tree"
                  v-model="lazyValue"
                  multiple
                  checkable
                  cascade
                  :data="lazyData"
                  :loadData="loadNodeData"/>
    </ShadcnCard>

    <ShadcnCard title="Single">
      Value: {{ singleValue }}
      <ShadcnTree key="single-tree"
                  v-model="singleValue"
                  :data="data"/>
    </ShadcnCard>

    <ShadcnCard title="Multiple">
      Value: {{ multipleValue }}
      <ShadcnTree key="multiple-tree"
                  v-model="multipleValue"
                  multiple
                  :data="data"/>
    </ShadcnCard>

    <ShadcnCard title="Checkbox">
      Value: {{ checkValue }}
      <ShadcnTree key="checkbox-tree"
                  v-model="checkValue"
                  multiple
                  checkable
                  :data="data"/>
    </ShadcnCard>

    <ShadcnCard title="Cascade">
      Value: {{ cascadeValue }}
      <ShadcnTree key="cascade-tree"
                  v-model="cascadeValue"
                  checkable
                  cascade
                  :data="data"/>
    </ShadcnCard>

    <ShadcnCard title="Custom Node Slot">
      Value: {{ customValue }}
      <ShadcnTree key="custom-tree"
                  v-model="customValue"
                  checkable
                  cascade
                  :data="data">
        <template #label="{ node }">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium">{{ node.label }}</span>
            <span class="text-xs text-gray-500">({{ node.value }})</span>
          </div>
        </template>
      </ShadcnTree>
    </ShadcnCard>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { TreeNode } from '@/ui/tree/types.ts'

const singleValue = ref([])
const multipleValue = ref([])
const checkValue = ref(['1.2.1'])
const cascadeValue = ref(['1.2.1'])
const customValue = ref([])
const lazyValue = ref([])

const lazyData = reactive<TreeNode[]>([
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

const data = reactive([
  {
    value: 1,
    label: 'Parent Node 1',
    children: [
      { value: '1.1', label: 'Child Node 1.1' },
      {
        value: '1.2',
        label: 'Child Node 1.2',
        children: [
          { value: '1.2.1', label: 'Child Node 1.2.1' }
        ]
      }
    ]
  },
  {
    value: 2,
    label: 'Parent Node 2',
    children: [
      { value: '2.1', label: 'Child Node 2.1' }
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

const loadNodeData = async (node: TreeNode): Promise<TreeNode[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const level = 0
      const children = generateChildNodes(node.value, level)
      resolve(children)
    }, 1000)
  })
}
</script>
