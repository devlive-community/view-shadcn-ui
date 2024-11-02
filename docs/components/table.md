---
title: Shadcn Table
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnTable component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnTable :columns="columns" :data="data"/>
</CodeRunner>

:::

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

::: raw

<CodeRunner title="Stripe">
    <ShadcnTable :columns="columns" :data="data" stripe/>
</CodeRunner>

:::

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

::: raw

<CodeRunner title="Border">
    <ShadcnTable :columns="columns" :data="data" border/>
</CodeRunner>

:::

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

## Width

::: raw

<CodeRunner title="Width">
    <ShadcnTable :columns="columns" :data="data" width="300"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTable :columns="columns" :data="data" width="300"/>
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

## Height

::: raw

<CodeRunner title="Height">
    <ShadcnTable :columns="columns" :data="data" height="300"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTable :columns="columns" :data="data" height="300"/>
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

## Column Slot

::: raw

<CodeRunner title="Column Slot">
    <ShadcnTable :columns="slotColumns" :data="data">
      <template #actions="{ row, index }">
        <ShadcnButton @click="click(row, index)">Edit</ShadcnButton>
      </template>
    </ShadcnTable>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTable :columns="columns" :data="data">
    <template #actions="{ row, index }">
      <ShadcnButton @click="click(row, index)">Edit</ShadcnButton>
    </template>
  </ShadcnTable>
</template>

<script setup lang="ts">
const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Address', key: 'address' },
  { label: 'Age', key: 'age' },
  { label: 'Actions', key: 'actions', slot: 'actions' }
]
const data = [
  { name: 'John Doe', address: 'New York No. 1 Lake Park', age: 32 },
  { name: 'Joe Black', address: 'Sidney No. 1 Lake Park', age: 42 },
  { name: 'Jim Green', address: 'London No. 1 Lake Park', age: 32 },
  { name: 'Jim Red', address: 'London No. 2 Lake Park', age: 32 }
]
  
const click = (row: any, index: number) => {
    this.$Message.info({
      content: `Click [ ${row.name} ] - [ ${index} ]`,
    })
}
</script>
```

:::

## Column Fixed

::: raw

<CodeRunner title="Column Fixed">
    <ShadcnTable :columns="fixedColumns" :data="data" width="300"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTable :columns="columns" :data="data"/>
</template>

<script setup lang="ts">
  const columns = [
    { label: 'Name', key: 'name', fixed: 'left' },
    { label: 'Address', key: 'address', fixed: 'left' },
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

## Column Multiple Fixed

::: raw

<CodeRunner title="Column Multiple Fixed">
    <ShadcnTable :columns="fixedMultiColumns" :data="data"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTable :columns="columns" :data="data"/>
</template>

<script setup lang="ts">
const columns = [
    { 'label': 'Name', 'key': 'name', 'width': 100, 'fixed': 'left' },
    { 'label': 'Age', 'key': 'age', 'width': 100, 'fixed': 'left' },
    { 'label': 'Province', 'key': 'province', 'width': 100 },
    { 'label': 'City', 'key': 'city', 'width': 100 },
    { 'label': 'Address', 'key': 'address', 'width': 200 },
    { 'label': 'Postcode', 'key': 'zip', 'width': 100, 'fixed': 'right' },
    { 'label': 'Action', 'key': 'action', 'fixed': 'right', 'width': 160 }
]
const data = [
    { 'name': 'John Brown', 'age': 18, 'address': 'New York No. 1 Lake Park', 'province': 'America', 'city': 'New York', 'zip': 100000 },
    { 'name': 'Jim Green', 'age': 24, 'address': 'Washington, D.C. No. 1 Lake Park', 'province': 'America', 'city': 'Washington, D.C.', 'zip': 100000 },
    { 'name': 'Joe Black', 'age': 30, 'address': 'Sydney No. 1 Lake Park', 'province': 'Australian', 'city': 'Sydney', 'zip': 100000 },
    { 'name': 'Jon Snow', 'age': 26, 'address': 'Ottawa No. 2 Lake Park', 'province': 'Canada', 'city': 'Ottawa', 'zip': 100000 }
]
```

:::

## Column Width

::: raw

<CodeRunner title="Column Width">
    <ShadcnTable :columns="widthColumns" :data="data"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTable :columns="columns" :data="data"/>    
</template>

<script setup lang="ts">
const columns = [
  { label: 'Name', key: 'name', width: 100 },
  { label: 'Address', key: 'address', width: 200 },
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

## Row Click

::: raw

<CodeRunner title="Row Click">
    <ShadcnTable :columns="columns" :data="data" @on-row-click="click"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnTable :columns="columns" :data="data" @on-row-click="rowClick"/>
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

const rowClick = (row: any, index: number) => {
    this.$Message.info({
      content: `Click [ ${row.name} ] - [ ${index} ]`,
    })
}
</script>
```

:::

## Props

<ApiTable title="Table Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['columns', 'The columns of the table', 'array', '-', '-'],
        ['data', 'The data of the table', 'array', '-', '-'],
        ['stripe', 'Whether the table is striped', 'boolean', 'false', '-'],
        ['border', 'Whether the table is bordered', 'boolean', 'false', '-'],
        ['width', 'The width of the table', 'string | number', '100%', '-'],
        ['height', 'The height of the table', 'string | number', 'auto', '-'],
        ['maxHeight', 'The maximum height of the table', 'string | number', '300', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Column Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['label', 'The label of the column', 'string', '-', '-'],
        ['key', 'The key of the column', 'string', '${label}', '-'],
        ['slot', 'The slot of the column', 'string', '-', '-'],
        ['fixed', 'Whether the column is fixed, must be set width', 'Enum', '-', 'left | right'],
        ['width', 'The width of the column', 'string | number', 'auto', '-'],
    ]">
</ApiTable>

## Events

<ApiTable title="Table Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-row-click', 'Triggered when the user clicks on a row', '{row: object, index: number}'],
    ]">
</ApiTable>

<script lang="ts">
const columns = [
  { 'label': 'Name', 'key': 'name' },
  { 'label': 'Age', 'key': 'age' },
  { 'label': 'Province', 'key': 'province' },
  { 'label': 'City', 'key': 'city' },
  { 'label': 'Address', 'key': 'address' },
  { 'label': 'Postcode', 'key': 'zip' },
  { 'label': 'Action', 'key': 'action' }
]
const slotColumns = [
  { label: 'Name', key: 'name' },
  { label: 'Address', key: 'address' },
  { label: 'Age', key: 'age' },
  { label: 'Actions', key: 'actions', slot: 'actions' }
]
const fixedColumns = [
  { label: 'Name', key: 'name', fixed: 'left' },
  { label: 'Address', key: 'address', width: 500 },
  { label: 'Age', key: 'age' },
  { label: 'Actions', key: 'actions', fixed: 'right' }
]
const widthColumns = [
  { label: 'Name', key: 'name' },
  { label: 'Address', key: 'address', width: 1000 },
  { label: 'Age', key: 'age' },
  { label: 'Actions', key: 'actions' }
]
const fixedMultiColumns = [
  { 'label': 'Name', 'key': 'name', 'width': 100, 'fixed': 'left' },
  { 'label': 'Age', 'key': 'age', 'width': 100, 'fixed': 'left' },
  { 'label': 'Province', 'key': 'province', 'width': 100 },
  { 'label': 'City', 'key': 'city', 'width': 100 },
  { 'label': 'Address', 'key': 'address', 'width': 200 },
  { 'label': 'Postcode', 'key': 'zip', 'width': 100, 'fixed': 'right' },
  { 'label': 'Action', 'key': 'action', 'fixed': 'right', 'width': 160 }
]
const data = [
  { 'name': 'John Brown', 'age': 18, 'address': 'New York No. 1 Lake Park', 'province': 'America', 'city': 'New York', 'zip': 100000 },
  { 'name': 'Jim Green', 'age': 24, 'address': 'Washington, D.C. No. 1 Lake Park', 'province': 'America', 'city': 'Washington, D.C.', 'zip': 100000 },
  { 'name': 'Joe Black', 'age': 30, 'address': 'Sydney No. 1 Lake Park', 'province': 'Australian', 'city': 'Sydney', 'zip': 100000 },
  { 'name': 'Jon Snow', 'age': 26, 'address': 'Ottawa No. 2 Lake Park', 'province': 'Canada', 'city': 'Ottawa', 'zip': 100000 }
]

export default {
    data() {
      return {
        columns,
        slotColumns,
        fixedColumns,
        widthColumns,
        fixedMultiColumns,
        data
      }
    },
    methods: {
      click(row: any, index: number) {
        this.$Message.info({
          content: `Click [ ${row.name} ] - [ ${index} ]`,
        })
      }
    }
}
</script>
