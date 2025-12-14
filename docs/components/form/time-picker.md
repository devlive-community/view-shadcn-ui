---
title: 时间选择器 (Time Picker)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTimePicker` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnTimePicker v-model="value"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value"  :dark="darkMode" />
</template>
```

:::

## 占位符 (placeholder)

::: raw

<CodeRunner title="占位符 (placeholder)">
    <ShadcnTimePicker v-model="value" placeholder="Enter string"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" placeholder="Enter string"  :dark="darkMode" />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnTimePicker v-model="value" disabled  :dark="darkMode" />
    <ShadcnTimePicker v-model="value" :disabled="false"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" disabled  :dark="darkMode" />
    <ShadcnTimePicker v-model="value" :disabled="false"  :dark="darkMode" />
</template>
```

:::

## 清空 (clearable)

::: raw

<CodeRunner title="清空 (clearable)">
    <ShadcnTimePicker v-model="value" clearable  :dark="darkMode" />
    <ShadcnTimePicker v-model="value" :clearable="false"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" clearable  :dark="darkMode" />
    <ShadcnTimePicker v-model="value" :clearable="false"  :dark="darkMode" />
</template>
```

:::

## 快捷时间 (quick-times)

::: raw

<CodeRunner title="快捷时间 (quick-times)">
    <ShadcnTimePicker v-model="value" :quickTimes="['09:00', '12:00', '18:00']"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" :quickTimes="['09:00', '12:00', '18:00']"  :dark="darkMode" />
</template>
```

:::

## 格式 (format)

::: raw

<CodeRunner title="格式 (format)">
    <ShadcnTimePicker v-model="value" format="HH:mm"  :dark="darkMode" />
    <ShadcnTimePicker v-model="value" format="HH:mm:ss"  :dark="darkMode" />
    <ShadcnTimePicker v-model="value" format="hh:mm A"  :dark="darkMode" />
    <ShadcnTimePicker v-model="value" format="hh:mm:ss A"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" format="HH:mm"  :dark="darkMode" />
    <ShadcnTimePicker v-model="value" format="HH:mm:ss"  :dark="darkMode" />
    <ShadcnTimePicker v-model="value" format="hh:mm A"  :dark="darkMode" />
    <ShadcnTimePicker v-model="value" format="hh:mm:ss A"  :dark="darkMode" />
</template>
```

:::

## 时间选择器 (Time Picker) 属性

<ApiTable title="时间选择器 (Time Picker) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前选择的时间', 'string', '', '-'],
        ['placeholder', '占位符内容', 'string', '-', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['clearable', '是否显示清空按钮', 'boolean', 'true', '-'],
        ['quickTimes', '快捷时间', 'string\[\]', '-', '-'],
        ['format', '格式', 'HH:mm | HH:mm:ss | hh:mm A | hh:mm:ss A', 'HH:mm', 'HH:mm | HH:mm:ss | hh:mm A | hh:mm:ss A']
    ]">
</ApiTable>

## 时间选择器 (Time Picker) 事件

<ApiTable title="时间选择器 (Time Picker) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', '当时间被更新时触发', 'value: string'],
        ['on-change', '当时间被更新时触发', 'value: string'],
        ['on-clear', '当清空按钮被点击时触发', '-']
    ]">
</ApiTable>

## 时间选择器 (Time Picker) 插槽

<ApiTable title="Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['icon', '图标插槽'],
        ['clear', '清空按钮插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref , computed } from 'vue';

const value = ref('')
</script>