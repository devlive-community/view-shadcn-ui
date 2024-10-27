---
title: Shadcn Table
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnTable component.

## Usage

<CodeRunner title="Usage">
    <ShadcnTable :columns="columns" :data="data"/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnTable :columns="columns" :data="data"/>
</template>

<script setup lang="ts">
const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Address', key: 'address' },
  { label: 'Age', key: 'age' }
]
const data = [
  { name: 'John Doe', address: 'New York No. 1 Lake Park', age: 32 },
  { name: 'Joe Black', address: 'Sidney No. 1 Lake Park', age: 42 },
  { name: 'Jim Green', address: 'London No. 1 Lake Park', age: 32 },
  { name: 'Jim Red', address: 'London No. 2 Lake Park', age: 32 }
]
```

:::

## Stripe

<CodeRunner title="Stripe">
    <ShadcnTable :columns="columns" :data="data" stripe/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnTable :columns="columns" :data="data" stripe/>
</template>

<script setup lang="ts">
const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Address', key: 'address' },
  { label: 'Age', key: 'age' }
]
const data = [
  { name: 'John Doe', address: 'New York No. 1 Lake Park', age: 32 },
  { name: 'Joe Black', address: 'Sidney No. 1 Lake Park', age: 42 },
  { name: 'Jim Green', address: 'London No. 1 Lake Park', age: 32 },
  { name: 'Jim Red', address: 'London No. 2 Lake Park', age: 32 }
]
```

:::

## Border

<CodeRunner title="Border">
    <ShadcnTable :columns="columns" :data="data" border/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnTable :columns="columns" :data="data" border/>
</template>

<script setup lang="ts">
const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Address', key: 'address' },
  { label: 'Age', key: 'age' }
]
const data = [
  { name: 'John Doe', address: 'New York No. 1 Lake Park', age: 32 },
  { name: 'Joe Black', address: 'Sidney No. 1 Lake Park', age: 42 },
  { name: 'Jim Green', address: 'London No. 1 Lake Park', age: 32 },
  { name: 'Jim Red', address: 'London No. 2 Lake Park', age: 32 }
]
```

:::

## Props

<ApiTable title="Table Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['columns', 'The columns of the table', 'Array<{label: string, key: string}>', '-', '-', '-'],
        ['data', 'The data of the table', 'Array', '-', '-', '-'],
        ['stripe', 'Whether the table is striped', 'Boolean', 'false', '-', '-'],
        ['border', 'Whether the table is bordered', 'Boolean', 'false', '-', '-']
    ]">
</ApiTable>

<script setup>
const total = 5
const columns = []
const data = []

for (let i = 0; i < total; i++) {
  columns.push({
    label: `Address ${i}`,
    key: `address${i}`
  })
}

for (let i = 0; i < total; i++) {
  const rowData = {}
  for (let j = 0; j < total; j++) {
    rowData[`address${j}`] = `New York No. ${i}-${j} Lake Park`
  }
  data.push(rowData)
}
</script>
