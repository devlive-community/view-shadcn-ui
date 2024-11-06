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

## Props

<ApiTable title="Tree Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'Tree value', 'array', '\[\]', ''],
        ['data', 'Tree data', 'array', '\[\]', ''],
        ['multiple', 'Multiple mode', 'boolean', 'false', ''],
        ['checkable', 'Checkable mode', 'boolean', 'false', ''],
        ['cascade', 'Cascade mode, only works when checkable is true, if cascade is true, checkable become true, single mode is inworked', 'boolean', 'false', ''],
    ]">
</ApiTable>

## Slots

<ApiTable title="Tree Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['label', 'Tree label'],
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

<script>
export default {
    data() {
        return {
            basicValue: [],
            multipleValue: [],
            checkableValue: [1],
            cascadeValue: [],
            customValue: [],
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
