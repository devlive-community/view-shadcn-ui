---
title: 日期选取器 (Date Picker)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnDatePicker` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnDatePicker v-model="value" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDatePicker v-model="value" />
</template>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型 (type)">
    <ShadcnDatePicker v-model="value" type="date" :dark="darkMode" />
    <ShadcnDatePicker v-model="value" type="range" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDatePicker v-model="value" type="date" />
    <ShadcnDatePicker v-model="value" type="range" />
</template>
```

:::

## 占位符 (placeholder)

::: raw

<CodeRunner title="占位符 (placeholder)">
    <ShadcnDatePicker v-model="value" placeholder="Enter string" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDatePicker v-model="value" placeholder="Enter string" />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnDatePicker v-model="value" disabled :dark="darkMode" />
    <ShadcnDatePicker v-model="value" :disabled="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDatePicker v-model="value" disabled />
    <ShadcnDatePicker v-model="value" :disabled="false" />
</template>
```

:::

## 只读 (readonly)

::: raw

<CodeRunner title="只读 (readonly)">
    <ShadcnDatePicker v-model="value" readonly :dark="darkMode" />
    <ShadcnDatePicker v-model="value" :readonly="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDatePicker v-model="value" readonly />
    <ShadcnDatePicker v-model="value" :readonly="false" />
</template>
```

:::

## 格式 (format)

::: raw

<CodeRunner title="格式 (format)">
    <ShadcnDatePicker v-model="value" format="YYYY-MM-DD" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDatePicker v-model="value" format="YYYY-MM-DD" />
</template>
```

:::

## 清空 (clearable)

::: raw

<CodeRunner title="清空 (clearable)">
    <ShadcnDatePicker v-model="value" clearable :dark="darkMode" />
    <ShadcnDatePicker v-model="value" :clearable="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDatePicker v-model="value" clearable />
    <ShadcnDatePicker v-model="value" :clearable="false" />
</template>
```

:::

## 显示快捷方式 (show-shortcuts)

::: raw

<CodeRunner title="显示快捷方式 (show-shortcuts)">
    <ShadcnDatePicker v-model="value" showShortcuts :dark="darkMode" />
    <ShadcnDatePicker v-model="value" :showShortcuts="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDatePicker v-model="value" showShortcuts />
    <ShadcnDatePicker v-model="value" :showShortcuts="false" />
</template>
```

:::

## 日期选取器 (Date Picker) 属性

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前的选择值', 'Date | string', '-', 'Date, string'],
        ['type', '类型', 'date | range', 'date', 'date, range'],
        ['placeholder', '占位符内容', 'string', '-', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['readonly', '是否为只读', 'boolean', 'false', '-'],
        ['format', '日期格式', 'string', 'YYYY-MM-DD', '-'],
        ['clearable', '是否显示清空按钮', 'boolean', 'true', '-'],
        ['showShortcuts', '是否显示快捷方式', 'boolean', 'true', '-']
    ]">
</ApiTable>

## 日期选取器 (Date Picker) 事件

<ApiTable title="日期选取器 (Date Picker) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', '当选择的值被更新时触发', 'value: string | \[string, string\]'],
        ['on-change', '当选择的值被更新时触发', 'value: string | \[string, string\]']
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const value = ref('')
</script>