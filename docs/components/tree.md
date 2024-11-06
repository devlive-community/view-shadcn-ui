---
title: Shadcn Tree
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnTree component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnTree :data="data"
                @on-expand="onExpand"
                @on-node-click="onNodeClick"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTree :data="data" />
</template>

<script setup>
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

## Props

<ApiTable title="Tree Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['data', 'Tree data', 'Array', '[]', ''],
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
