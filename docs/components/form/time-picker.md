---
title: Shadcn TimePicker
---

# 介绍

This document describes the features and usage of the ShadcnTimePicker component.

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnTimePicker v-model="value" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" />
</template>
```

:::

## Placeholder

::: raw

<CodeRunner title="Placeholder">
    <ShadcnTimePicker v-model="value" placeholder="Enter string" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" placeholder="Enter string" />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnTimePicker v-model="value" disabled />
    <ShadcnTimePicker v-model="value" :disabled="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" disabled />
    <ShadcnTimePicker v-model="value" :disabled="false" />
</template>
```

:::

## Clearable

::: raw

<CodeRunner title="Clearable">
    <ShadcnTimePicker v-model="value" clearable />
    <ShadcnTimePicker v-model="value" :clearable="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" clearable />
    <ShadcnTimePicker v-model="value" :clearable="false" />
</template>
```

:::

## Quick times

::: raw

<CodeRunner title="Quick times">
    <ShadcnTimePicker v-model="value" :quickTimes="['09:00', '12:00', '18:00']" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" :quickTimes="['09:00', '12:00', '18:00']" />
</template>
```

:::

## Format

::: raw

<CodeRunner title="Format">
    <ShadcnTimePicker v-model="value" format="HH:mm" />
    <ShadcnTimePicker v-model="value" format="HH:mm:ss" />
    <ShadcnTimePicker v-model="value" format="hh:mm A" />
    <ShadcnTimePicker v-model="value" format="hh:mm:ss A" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimePicker v-model="value" format="HH:mm" />
    <ShadcnTimePicker v-model="value" format="HH:mm:ss" />
    <ShadcnTimePicker v-model="value" format="hh:mm A" />
    <ShadcnTimePicker v-model="value" format="hh:mm:ss A" />
</template>
```

:::
## TimePicker Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '', '-'],
        ['placeholder', 'placeholder value', 'string', '-', '-'],
        ['disabled', 'disabled value', 'boolean', 'false', '-'],
        ['clearable', 'clearable value', 'boolean', 'true', '-'],
        ['quickTimes', 'see format', 'string[]', '-', '-'],
        ['format', 'format value', 'HH:mm | HH:mm:ss | hh:mm A | hh:mm:ss A', 'HH:mm', 'HH:mm, HH:mm:ss, hh:mm A, hh:mm:ss A']
    ]">
</ApiTable>

## TimePicker Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', 'Triggered when update:modelValue', 'value: string'],
        ['on-change', 'Triggered when on change', 'value: string'],
        ['on-clear', 'Triggered when on clear', '-']
    ]">
</ApiTable>

## TimePicker Slots

<ApiTable title="Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['icon', 'Slot for icon'],
        ['clear', 'Slot for clear']
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
