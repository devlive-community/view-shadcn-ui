---
title: 数据过滤 (Data Filter)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnDataFilter` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnDataFilter v-model="value" :fields="fields" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDataFilter v-model="value" :fields="fields" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const value = ref([])
  const fields = [
    { label: 'Name', value: 'name', type: 'string' },
    { label: 'Age', value: 'age', type: 'number' },
    { label: 'Created At', value: 'created_at', type: 'date' },
    { label: 'Is Active', value: 'is_active', type: 'boolean' }
  ]
</script>
```

:::

## 分层数据过滤器 (Hierarchical Data Filter)

::: raw

<CodeRunner title="分层数据过滤器 (Hierarchical Data Filter)">
    <ShadcnHierarchicalDataFilter v-model="hValue" :fields="fields" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHierarchicalDataFilter v-model="value" :fields="fields" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const value = ref([])
  const fields = [
    { label: 'Name', value: 'name', type: 'string' },
    { label: 'Age', value: 'age', type: 'number' },
    { label: 'Created At', value: 'created_at', type: 'date' }
  ]
</script>
```

:::

## 数据过滤 (Data Filter) 结构

<ApiTable title="过滤条件 (Filter Condition)"
    :headers="['属性', '描述', '是否必须']"
    :columns="[
        ['field', '筛选条件的字段', 'true'],
        ['operator', '筛选条件的运算符', 'true'],
        ['value', '筛选条件的值', 'false'],
    ]">
</ApiTable>

<br />

<ApiTable title="属性 (Field)"
    :headers="['属性', '描述', '是否必须', '支持列表']"
    :columns="[
        ['value', '字段的值', 'true', '-'],
        ['label', '字段的标签', 'false', '-'],
        ['type', '字段的类型', 'false', 'string | number | date | boolean'],
    ]">
</ApiTable>

<br />

<ApiTable title="运算符 (Operator)"
    :headers="['属性', '描述', '是否必须', '支持列表']"
    :columns="[
        ['value', '运算符的值', 'true', '-'],
        ['label', '运算符的标签', 'true', '-'],
        ['scope', '运算符的作用域,用于限制字段类型 field.type', 'true', 'string\[\]'],
    ]">
</ApiTable>

<br />

<ApiTable title="验证错误 (ValidationError)"
    :headers="['属性', '描述', '是否必须']"
    :columns="[
        ['fieldIndex', '条件的索引', 'true'],
        ['field', '条件的字段', 'true'],
        ['message', '条件的错误消息', 'true'],
    ]">
</ApiTable>

<br />

<ApiTable title="验证结果 (ValidationResult)"
    :headers="['属性', '描述', '是否必须']"
    :columns="[
        ['isValid', '数据过滤器是否有效', 'true'],
        ['errors', '数据筛选器的错误消息，参考 ValidationError', 'true'],
    ]">
</ApiTable>

## 数据过滤 (Data Filter) 属性

<ApiTable title="数据过滤 (Data Filter) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['modelValue', '数据筛选条件的值', 'array', '\[\]'],
        ['fields', '数据筛选器的字段', 'array', '\[\]'],
        ['operators', '数据筛选器的运算符', 'array', '\[\]'],
    ]">
</ApiTable>

## 数据过滤 (Data Filter) 事件

<ApiTable title="数据过滤 (Data Filter) 事件"
    :headers="['事件', '描述', '参数']"
    :columns="[
        ['update:modelValue', '数据筛选条件的值', 'FilterCondition\[\]'],
        ['on-change', '更改数据筛选的值时触发', 'FilterCondition\[\]'],
        ['on-add-condition', '添加新条件时触发', 'FilterCondition'],
        ['on-remove-condition', '删除条件时触发', 'FilterCondition'],
        ['on-validation-change', '更改数据筛选器的验证时触发', 'ValidationResult'],
    ]">
</ApiTable>

## 分层数据过滤器 (Hierarchical Data Filter) 结构

<ApiTable title="过滤项 (FilterItem)"
    :headers="['属性', '描述', '是否必须', '支持列表']"
    :columns="[
        ['type', '筛选项的类型', 'true', 'condition | group | sub'],
        ['value', '筛选项的值', 'false', '-'],
        ['operator', '筛选项的运算符', 'false', 'and | or'],
        ['isValid', '筛选项是否有效', 'false', 'true | false'],
    ]">
</ApiTable>

<br />

<ApiTable title="过滤组 (FilterGroup)"
    :headers="['属性', '描述', '是否必须', '支持列表']"
    :columns="[
        ['operator', '筛选条件组的运算符', 'true', 'and | or'],
        ['items', '筛选组的项目', 'true', 'FilterItem\[\]'],
    ]">
</ApiTable>

## 分层数据过滤器 (Hierarchical Data Filter) 属性

<ApiTable title="分层数据过滤器 (Hierarchical Data Filter) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['modelValue', '数据筛选条件的值', 'array', 'FilterGroup\[\]'],
        ['fields', '数据筛选器的字段', 'array', 'Field\[\]'],
    ]">
</ApiTable>

## 分层数据过滤器 (Hierarchical Data Filter) 事件

<ApiTable title="分层数据过滤器 (Hierarchical Data Filter) 事件"
    :headers="['事件', '描述', '参数']"
    :columns="[
        ['update:modelValue', '数据筛选条件的值', 'FilterGroup\[\]'],
        ['on-validation-change', '更改数据筛选器的验证时触发', 'ValidationResult'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const value = ref([])
const hValue = ref([])
const fields = [
  { label: 'Name', value: 'name', type: 'string' },
  { label: 'Age', value: 'age', type: 'number' },
  { label: 'Created At', value: 'created_at', type: 'date' },
  { label: 'Is Active', value: 'is_active', type: 'boolean' }
]
</script>