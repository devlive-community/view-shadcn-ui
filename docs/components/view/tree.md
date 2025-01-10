---
title: 树 (Tree)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTree` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    值: {{ basicValue }}
    <ShadcnTree v-model="basicValue"
                :data="data"
                @on-expand="onExpand"
                @on-node-click="onNodeClick"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnTree v-model="value" :data="data"/>
</template>
```

:::

## 多选 (multiple)

::: raw

<CodeRunner title="多选 (multiple)">
    值: {{ multipleValue }}
    <ShadcnTree v-model="multipleValue" multiple :data="data"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnTree v-model="value" multiple :data="data"/>
</template>
```

:::

## 选择框 (checkable)

::: raw

<CodeRunner title="选择框 (checkable)">
    值: {{ checkableValue }}
    <ShadcnTree v-model="checkableValue" multiple checkable :data="data"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnTree v-model="value" multiple checkable :data="data"/>
</template>
```

:::

## 级联选择 (cascade)

::: raw

<CodeRunner title="级联选择 (cascade)">
    值: {{ cascadeValue }}
    <ShadcnTree v-model="cascadeValue" checkable cascade :data="data"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnTree v-model="value" cascade checkable :data="data"/>
</template>
```

:::

## 懒加载 (lazy)

::: raw

<CodeRunner title="懒加载 (lazy)">
    值: {{ lazyValue }}
    <ShadcnTree v-model="lazyValue" checkable cascade :data="lazyData" :loadData="loadNodeData"/>
</CodeRunner>

:::

::: details 查看代码

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

const generateChildNodes = (parentValue: string, level: number = 1, maxLevel: number = 3): any[] => {
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
const loadNodeData = (item: any, callback: (children: any[]) => void) => {
  setTimeout(() => {
    const level = 0
    const children = generateChildNodes(item.value, level)
    callback(children)
  }, 1000)
}
</script>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    值: {{ disabledValue }}
    <ShadcnTree v-model="disabledValue" :data="disabledData"/>
</CodeRunner>

:::

::: details 查看代码

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

## 显示线 (show-line)

::: raw

<CodeRunner title="显示线 (show-line)">
    值: {{ basicValue }}
    <ShadcnTree v-model="basicValue" show-line checkable :data="data"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnTree v-model="value" show-line checkable :data="data"/>
</template>
```

:::

## 自定义 Label 插槽

::: raw

<CodeRunner title="自定义 Label 插槽">
      值: {{ customValue }}
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

::: details 查看代码

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

## 自定义 Expand/Collapse 插槽

::: raw

<CodeRunner title="自定义 Expand/Collapse 插槽">
    <ShadcnTree v-model="value" :data="data">
        <template #expand>O</template>
        <template #collapse>C</template>
    </ShadcnTree>
</CodeRunner>

:::

::: details 查看代码

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

## 树 (Tree) 属性

<ApiTable title="树 (Tree) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['modelValue', '当前选择的值', 'array', '\[\]'],
        ['data', '树的结构数据', 'array', '\[\]'],
        ['multiple', '多选模式', 'boolean', 'false'],
        ['checkable', '选择框模式', 'boolean', 'false'],
        ['cascade', '级联模式，仅在 checkable 为 true 时有效，如果 cascade 为 true，则 checkable 变为 true，单模式无效', 'boolean', 'false'],
        ['showLine', '是否显示线', 'boolean', 'false'],
        ['loadData', '懒加载数据，仅在 <strong>item.isLeaf</strong> 为 <strong>false</strong> 时有效', 'function', '-'],
    ]">
</ApiTable>

## 树节点 (Tree Node) 属性

<ApiTable title="树节点 (Tree Node) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['value', '节点的值', 'string', ''],
        ['label', '节点的标签', 'string', ''],
        ['children', '子节点数据', 'array', '\[\]'],
        ['isLeaf', '是否为懒加载节点', 'boolean', 'false'],
        ['disabled', '是否禁用', 'boolean', 'false'],
        ['selected', '是否选中', 'boolean', 'false'],
    ]">
</ApiTable>

## 树 (Tree) 插槽

<ApiTable title="树 (Tree) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['label', '树节点的标签插槽'],
        ['expand', '展开图标插槽'],
        ['collapse', '合并图标插槽'],
    ]">
</ApiTable>

## 树 (Tree) 事件

<ApiTable title="树 (Tree) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-expand', '节点展开事件', 'node'],
        ['on-node-click', '节点点击事件', 'node'],
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
        const generateChildNodes = (parentValue: string, level: number = 1, maxLevel: number = 3): any[] => {
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
        const loadNodeData = (item: any, callback: (children: any[]) => void) => {
            setTimeout(() => {
              const level = 0
              const children = generateChildNodes(item.value, level)
              callback(children)
            }, 1000)
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