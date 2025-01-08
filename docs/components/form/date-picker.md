---
title: Shadcn DatePicker
---

# 介绍

This document describes the features and usage of the ShadcnDatePicker component.

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnDatePicker v-model="value" />
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
    <ShadcnDatePicker v-model="value" type="date" />
    <ShadcnDatePicker v-model="value" type="range" />
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

## Placeholder

::: raw

<CodeRunner title="Placeholder">
    <ShadcnDatePicker v-model="value" placeholder="Enter string" />
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
    <ShadcnDatePicker v-model="value" disabled />
    <ShadcnDatePicker v-model="value" :disabled="false" />
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

## Readonly

::: raw

<CodeRunner title="Readonly">
    <ShadcnDatePicker v-model="value" readonly />
    <ShadcnDatePicker v-model="value" :readonly="false" />
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

## Format

::: raw

<CodeRunner title="Format">
    <ShadcnDatePicker v-model="value" format="YYYY-MM-DD" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDatePicker v-model="value" format="YYYY-MM-DD" />
</template>
```

:::

## Clearable

::: raw

<CodeRunner title="Clearable">
    <ShadcnDatePicker v-model="value" clearable />
    <ShadcnDatePicker v-model="value" :clearable="false" />
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

## Show shortcuts

::: raw

<CodeRunner title="Show shortcuts">
    <ShadcnDatePicker v-model="value" showShortcuts />
    <ShadcnDatePicker v-model="value" :showShortcuts="false" />
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
## DatePicker Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'modelValue value', 'Date | string', '-', 'Date, string'],
        ['type', 'type value', 'date | range', 'date', 'date, range'],
        ['placeholder', 'placeholder value', 'string', '-', '-'],
        ['disabled', 'disabled value', 'boolean', 'false', '-'],
        ['readonly', 'readonly value', 'boolean', 'false', '-'],
        ['format', 'format value', 'string', 'YYYY-MM-DD', '-'],
        ['clearable', 'clearable value', 'boolean', 'true', '-'],
        ['showShortcuts', 'showShortcuts value', 'boolean', 'true', '-']
    ]">
</ApiTable>

## DatePicker Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', 'Triggered when update:modelValue', 'value: string | [string, string]'],
        ['on-change', 'Triggered when on change', 'value: string | [string, string]']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
