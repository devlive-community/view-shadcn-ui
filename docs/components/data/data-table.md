---
title: 数据表格 (Data Table)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnDataTable` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法" codeKey="usage">
    <ShadcnDataTable :columns="columns" :data="data">
    </ShadcnDataTable>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDataTable :columns="columns" :data="data">
    </ShadcnDataTable>
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)" codeKey="size">
  <div class="space-y-4">
    <div>
      <ShadcnDivider orientation="left">小尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns"
                       :data="data"
                       size="small">
      </ShadcnDataTable>
    </div>
    <div>
      <ShadcnDivider orientation="left">默认尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns" :data="data">
      </ShadcnDataTable>
    </div>
    <div>
      <ShadcnDivider orientation="left">大尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns"
                       :data="data" 
                       size="large">
      </ShadcnDataTable>
    </div>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="space-y-4">
    <div>
      <ShadcnDivider orientation="left">小尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns"
                       :data="data"
                       size="small">
      </ShadcnDataTable>
    </div>
    <div>
      <ShadcnDivider orientation="left">默认尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns" :data="data">
      </ShadcnDataTable>
    </div>
    <div>
      <ShadcnDivider orientation="left">大尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns"
                       :data="data"
                       size="large">
      </ShadcnDataTable>
    </div>
  </div>
</template>
```

:::

## 排序 (sort)

::: raw

<CodeRunner title="排序 (sort)" codeKey="sort">
    <ShadcnDataTable :columns="sortColumns" :data="data">
    </ShadcnDataTable>
</CodeRunner>

:::

## 数据表格 (Data Table) 属性

<ApiTable title="数据表格 (Data Table) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['columns', '表格列数据', '\[\]', '\[\]', '-'],
        ['data', '表格数据', '\[\]', '\[\]', '-'],
        ['size', '表格尺寸', 'enum', 'default', 'default | small | large'],
    ]">
</ApiTable>

<br />

<ApiTable title="数据表格列 (Data Table Column) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['key', '列的 key 值', 'string', '-', '-'],
        ['label', '列的标签', 'string', '-', '-'],
        ['sort', '列的排序状态', 'enum', '-', 'asc | desc'],
        ['sortable', '列是否可排序', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 数据表格 (Data Table) 事件

<ApiTable title="数据表格 (Data Table) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-sort', '当表格排序发生变化时触发', '排序列的列表'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref<any[]>([
  { key: 'name', label: '姓名' },
  { key: 'age', label: '年龄' },
  { key: 'address', label: '地址' }
])

const sortColumns = ref<any[]>([
  { key: 'name', label: '姓名' },
  { key: 'age', label: '年龄', sortable: true },
  { key: 'address', label: '地址' }
])

const data = ref([
  { name: '张三', age: 18, address: '北京' },
  { name: '李四', age: 20, address: '上海' }
])

const handleChange = () => {
  console.log('表格数据发生变化')
}
</script>