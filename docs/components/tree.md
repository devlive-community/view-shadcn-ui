---
title: Shadcn Tree
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnTree component.

## Usage

::: raw

<CodeRunner title="Usage">
    Value: {{ basicValue }}
    <ShadcnTree v-model="basicValue"
                :data="data"
                @on-expand="onExpand"
                @on-node-click="onNodeClick"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTree v-model="value" :data="data"/>
</template>

<script setup>
import { ref } from "vue"
const value = ref([])
const data = [
    {
      value: 1,
      label: 'Parent Node 1',
      children: [
        {value: 2, label: 'Child Node 1.1'},
        {
          value: 3,
          label: 'Child Node 1.2',
          children: [
            {value: 4, label: 'Child Node 1.2.1'}
          ]
        }
      ]
    },
    {
      value: 5,
      label: 'Parent Node 2',
      children: [
        {value: 6, label: 'Child Node 2.1'}
      ]
    }
]

const onExpand = (node) => {
console.log('Expand Node:', node)
}

const onNodeClick = (node) => {
console.log('Click Node:', node)
}
</script>
```

:::

## Multiple

::: raw

<CodeRunner title="Multiple">
    Value: {{ multipleValue }}
    <ShadcnTree v-model="multipleValue" multiple :data="data"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTree v-model="value" multiple :data="data"/>
</template>

<script setup>
import { ref } from "vue"
const value = ref([])
const data = [
    {
      value: 1,
      label: 'Parent Node 1',
      children: [
        {value: 2, label: 'Child Node 1.1'},
        {
          value: 3,
          label: 'Child Node 1.2',
          children: [
            {value: 4, label: 'Child Node 1.2.1'}
          ]
        }
      ]
    },
    {
      value: 5,
      label: 'Parent Node 2',
      children: [
        {value: 6, label: 'Child Node 2.1'}
      ]
    }
  ]
</script>
```

:::

## Checkable

::: raw

<CodeRunner title="Checkable">
    Value: {{ checkableValue }}
    <ShadcnTree v-model="checkableValue" multiple checkable :data="data"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTree v-model="value" multiple checkable :data="data"/>
</template>

<script setup>
import { ref } from "vue"
const value = ref([])
const data = [
    {
      value: 1,
      label: 'Parent Node 1',
      children: [
        {value: 2, label: 'Child Node 1.1'},
        {
          value: 3,
          label: 'Child Node 1.2',
          children: [
            {value: 4, label: 'Child Node 1.2.1'}
          ]
        }
      ]
    },
    {
      value: 5,
      label: 'Parent Node 2',
      children: [
        {value: 6, label: 'Child Node 2.1'}
      ]
    }
  ]
</script>
```

:::

## Cascade

::: raw

<CodeRunner title="Cascade">
    Value: {{ cascadeValue }}
    <ShadcnTree v-model="cascadeValue" checkable cascade :data="data"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTree v-model="value" cascade checkable :data="data"/>
</template>

<script setup>
import { ref } from "vue"
const value = ref([])
const data = [
    {
      value: 1,
      label: 'Parent Node 1',
      children: [
        {value: 2, label: 'Child Node 1.1'},
        {
          value: 3,
          label: 'Child Node 1.2',
          children: [
            {value: 4, label: 'Child Node 1.2.1'}
          ]
        }
      ]
    },
    {
      value: 5,
      label: 'Parent Node 2',
      children: [
        {value: 6, label: 'Child Node 2.1'}
      ]
    }
  ]
</script>
```

:::

## Lazy Data

::: raw

<CodeRunner title="Lazy Data">
    Value: {{ lazyValue }}
    <ShadcnTree v-model="lazyValue" checkable cascade :data="lazyData" :loadData="loadNodeData"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTree v-model="value" checkable cascade :data="data" :loadData="loadNodeData"/>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
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
const loadNodeData = async (node: any): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const level = 0
      const children = generateChildNodes(node.value, level)
      resolve(children)
    }, 1000)
  })
}
</script>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled">
    Value: {{ disabledValue }}
    <ShadcnTree v-model="disabledValue" :data="disabledData"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTree v-model="value" :data="data"/>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
const value = ref([])
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
    disabled: true,
    children: [
      { value: '2.1', label: 'Child Node 2.1' }
    ]
  }
])
</script>
```

:::

## Show Line

::: raw

<CodeRunner title="Show Line">
    Value: {{ showLineValue }}
    <ShadcnTree v-model="basicValue" show-line checkable :data="data"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTree v-model="value" show-line checkable :data="data"/>
</template>
```

:::

## Label Slot

::: raw

<CodeRunner title="Label Slot">
      Value: {{ customValue }}
      <ShadcnTree v-model="customValue"
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
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTree v-model="value"
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
</template>

<script setup>
import { ref } from "vue"
const value = ref([])
const data = [
    {
      value: 1,
      label: 'Parent Node 1',
      children: [
        {value: 2, label: 'Child Node 1.1'},
        {
          value: 3,
          label: 'Child Node 1.2',
          children: [
            {value: 4, label: 'Child Node 1.2.1'}
          ]
        }
      ]
    },
    {
      value: 5,
      label: 'Parent Node 2',
      children: [
        {value: 6, label: 'Child Node 2.1'}
      ]
    }
  ]
</script>
```

:::

## Expand & Collapse Slot

::: raw

<CodeRunner title="Expand & Collapse Slot">
    <ShadcnTree v-model="value" :data="data">
        <template #expand>O</template>
        <template #collapse>C</template>
    </ShadcnTree>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTree v-model="value" :data="data">
    <template #expand>O</template>
    <template #collapse>C</template>
  </ShadcnTree>
</template>

<script setup>
import { ref } from "vue"
const value = ref([])
const data = [
{
  value: 1,
  label: 'Parent Node 1',
  children: [
    {value: 2, label: 'Child Node 1.1'},
    {
      value: 3,
      label: 'Child Node 1.2',
      children: [
        {value: 4, label: 'Child Node 1.2.1'}
      ]
    }
  ]
},
{
  value: 5,
  label: 'Parent Node 2',
  children: [
    {value: 6, label: 'Child Node 2.1'}
  ]
}
]
</script>
```

:::

## Props

<ApiTable title="Tree Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['modelValue', 'Tree value', 'array', '\[\]'],
        ['data', 'Tree data', 'array', '\[\]'],
        ['multiple', 'Multiple mode', 'boolean', 'false'],
        ['checkable', 'Checkable mode', 'boolean', 'false'],
        ['cascade', 'Cascade mode, only works when checkable is true, if cascade is true, checkable become true, single mode is inworked', 'boolean', 'false'],
        ['showLine', 'Show line', 'boolean', 'false'],
        ['loadData', 'Load data function, only works when <strong>item.isLeaf</strong> is <strong>false</strong>', 'function', 'undefined'],
    ]">
</ApiTable>

<br />

<ApiTable title="Tree Node Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['value', 'Tree node value', 'string', ''],
        ['label', 'Tree node label', 'string', ''],
        ['children', 'Tree node children', 'array', '\[\]'],
        ['isLeaf', 'Whether the tree node is leaf', 'boolean', 'false'],
        ['disabled', 'Whether the tree node is disabled', 'boolean', 'false'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Tree Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['label', 'Tree label'],
        ['expand', 'Tree expand icon'],
        ['collapse', 'Tree collapse icon'],
    ]">
</ApiTable>

## Events

<ApiTable title="Tree Events"
    :headers="['Event Name', 'Description', 'Parameters']"
    :columns="[
        ['on-expand', 'Expand event', 'node'],
        ['on-node-click', 'Node click event', 'node'],
    ]">
</ApiTable>

<script lang="ts">
import { reactive, ref } from 'vue'

export default {
    setup() {
        const lazyData = reactive<[]>([
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
        const loadNodeData = async (node: TreeNode): Promise<TreeNode[]> => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const level = 0
              const children = generateChildNodes(node.value, level)
              console.log('Generated children for node', node.value, ':', children)
              resolve(children)
            }, 1000)
          })
        }

        return {
            lazyData,
            loadNodeData
        }
    },
    data() {
        return {
            basicValue: [],
            multipleValue: [],
            checkableValue: [1],
            cascadeValue: [],
            customValue: [],
            lazyValue: ref([]),
            disabledValue: [],
            data: [
                  {
                    value: 1,
                    label: 'Parent Node 1',
                    children: [
                      {value: 2, label: 'Child Node 1.1'},
                      {
                        value: 3,
                        label: 'Child Node 1.2',
                        children: [
                          {value: 4, label: 'Child Node 1.2.1'}
                        ]
                      }
                    ]
                  },
                  {
                    value: 5,
                    label: 'Parent Node 2',
                    children: [
                      {value: 6, label: 'Child Node 2.1'}
                    ]
                  }
                ],
            disabledData: [
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
                                disabled: true,
                                children: [
                                  { value: '2.1', label: 'Child Node 2.1' }
                                ]
                              }
                            ]
        }
    },
    methods: {
        onExpand(node) {
            this.$Message.success({
              content: 'Expand Node: ' + node.label,
              showIcon: true
            })
        },
        onNodeClick(node) {
            this.$Message.success({
              content: 'Click Node: ' + node.label,
              showIcon: true
            })
        }
    }
}
</script>
