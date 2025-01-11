---
title: 表格 (Table)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTable` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnTable :columns="columns" :data="data"/>
</CodeRunner>

:::

::: details 查看代码

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
</script>
```

:::

## 条纹 (stripe)

::: raw

<CodeRunner title="条纹 (stripe)">
    <ShadcnTable :columns="columns" :data="data" stripe/>
</CodeRunner>

:::

::: details 查看代码

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
</script>
```

:::

## 边框 (border)

::: raw

<CodeRunner title="边框 (border)">
    <ShadcnTable :columns="columns" :data="data" border/>
</CodeRunner>

:::

::: details 查看代码

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
</script>
```

:::

## 宽度 (width)

::: raw

<CodeRunner title="宽度 (width)">
    <ShadcnTable :columns="columns" :data="data" width="300"/>
</CodeRunner>

:::

::: details 查看代码

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
</script>
```

:::

## 高度 (height)

::: raw

<CodeRunner title="高度 (height)">
    <ShadcnTable :columns="columns" :data="data" height="300"/>
</CodeRunner>

:::

::: details 查看代码

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
</script>
```

:::

## 自定义列 (column)

::: raw

<CodeRunner title="自定义列">
    <ShadcnTable :columns="slotColumns" :data="data">
      <template #actions="{ row, index }">
        <ShadcnButton @click="click(row, index)">Edit</ShadcnButton>
      </template>
    </ShadcnTable>
</CodeRunner>

:::

::: details 查看代码

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

## 固定列 (fixed)

::: raw

<CodeRunner title="固定列 (fixed)">
    <ShadcnTable :columns="fixedColumns" :data="data" width="300"/>
</CodeRunner>

:::

::: details 查看代码

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
</script>
```

:::

## 多个固定列 (multiple-fixed)

::: raw

<CodeRunner title="多个固定列 (multiple-fixed)">
    <ShadcnTable :columns="fixedMultiColumns" :data="data"/>
</CodeRunner>

:::

::: details 查看代码

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
</script>
```

:::

## 列宽度 (width)

::: raw

<CodeRunner title="列宽度 (width)">
    <ShadcnTable :columns="widthColumns" :data="data"/>
</CodeRunner>

:::

::: details 查看代码

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
</script>
```

:::

## 行点击 (on-row-click)

::: raw

<CodeRunner title="行点击 (on-row-click)">
    <ShadcnTable :columns="columns" :data="data" @on-row-click="click"/>
</CodeRunner>

:::

::: details 查看代码

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

## 表格 (Table) 属性

<ApiTable title="表格 (Table) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['columns', '列头数据', 'array', '-', '-'],
        ['data', '数据', 'array', '-', '-'],
        ['stripe', '表是否为条带化', 'boolean', 'false', '-'],
        ['border', '表是否显示边框', 'boolean', 'false', '-'],
        ['width', '组件的宽度', 'string | number', '100%', '-'],
        ['height', '组件的高度', 'string | number', 'auto', '-'],
        ['maxHeight', '组件的最大高度', 'string | number', '300', '-'],
        ['size', '组件的尺寸', 'enum', 'default', 'small | default | large'],
    ]">
</ApiTable>

## 列 (Column) 属性

<ApiTable title="列 (Column) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['label', '列标签', 'string', '-', '-'],
        ['key', '列的唯一标识', 'string', '${label}', '-'],
        ['slot', '列的插槽，配置后，必须实现', 'string', '-', '-'],
        ['fixed', '列是否固定，必须设置宽度', 'enum', '-', 'left | right'],
        ['width', '列的宽度', 'string | number', 'auto', '-'],
    ]">
</ApiTable>

## 表格 (Table) 事件

<ApiTable title="表格 (Table) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-row-click', '行点击时触发', '{row: object, index: number}'],
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