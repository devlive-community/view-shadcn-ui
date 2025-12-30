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

## 液态玻璃效果 (glass)
::: raw
<div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-indigo-900 to-purple-900' : 'bg-gradient-to-r from-indigo-400 to-purple-400']">
<CodeRunner title="液态玻璃效果" class="bg-transparent">
  <div class="space-y-4">
    <ShadcnTimePicker v-model="glassValue1" glass :dark="darkMode" />
    <ShadcnTimePicker v-model="glassValue2" glass :dark="darkMode" format="HH:mm:ss" />
    <ShadcnTimePicker v-model="glassValue3" glass :dark="darkMode" :quickTimes="['09:00', '12:00', '18:00']" />
  </div>
</CodeRunner>
</div>
:::
::: details 查看代码
```vue
<template>
  <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-indigo-900 to-purple-900' : 'bg-gradient-to-r from-indigo-400 to-purple-400']">
    <div class="space-y-4">
      <ShadcnTimePicker v-model="glassValue1" glass :dark="darkMode" />
      <ShadcnTimePicker v-model="glassValue2" glass :dark="darkMode" format="HH:mm:ss" />
      <ShadcnTimePicker v-model="glassValue3" glass :dark="darkMode" :quickTimes="['09:00', '12:00', '18:00']" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const glassValue1 = ref('09:00')
const glassValue2 = ref('12:30:45')
const glassValue3 = ref('14:00')
</script>
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
        ['format', '格式', 'HH:mm | HH:mm:ss | hh:mm A | hh:mm:ss A', 'HH:mm', 'HH:mm | HH:mm:ss | hh:mm A | hh:mm:ss A'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-'],
        ['dark', '是否启用暗黑模式', 'boolean', 'false', '-']
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
const glassValue1 = ref('09:00')
const glassValue2 = ref('12:30:45')
const glassValue3 = ref('14:00')
</script>