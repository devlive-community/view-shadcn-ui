---
title: Shadcn Slider
---

# 介绍

This document describes the features and usage of the ShadcnSlider component.

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnSlider v-model="value" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSlider v-model="value" />
</template>
```

:::

## Min

::: raw

<CodeRunner title="Min">
    <ShadcnSlider v-model="value" :min="0" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSlider v-model="value" :min="0" />
</template>
```

:::

## 最大值 (max)

::: raw

<CodeRunner title="最大值 (max)">
    <ShadcnSlider v-model="value" :max="10" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSlider v-model="value" :max="10" />
</template>
```

:::

## Step

::: raw

<CodeRunner title="Step">
    <ShadcnSlider v-model="value" :step="10" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSlider v-model="value" :step="10" />
</template>
```

:::

## Show tip

::: raw

<CodeRunner title="Show tip">
    <ShadcnSlider v-model="value" showTip />
    <ShadcnSlider v-model="value" :showTip="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSlider v-model="value" showTip />
    <ShadcnSlider v-model="value" :showTip="false" />
</template>
```

:::

## Show step

::: raw

<CodeRunner title="Show step">
    <ShadcnSlider v-model="value" :step="10" showStep />
    <ShadcnSlider v-model="value" :showStep="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSlider v-model="value" showStep />
    <ShadcnSlider v-model="value" :showStep="false" />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnSlider v-model="value" disabled />
    <ShadcnSlider v-model="value" :disabled="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSlider v-model="value" disabled />
    <ShadcnSlider v-model="value" :disabled="false" />
</template>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型 (type)">
    <ShadcnSlider v-model="value" type="primary" />
    <ShadcnSlider v-model="value" type="warning" />
    <ShadcnSlider v-model="value" type="success" />
    <ShadcnSlider v-model="value" type="error" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSlider v-model="value" type="primary" />
  <ShadcnSlider v-model="value" type="warning" />
  <ShadcnSlider v-model="value" type="success" />
  <ShadcnSlider v-model="value" type="error" />
</template>
```

:::
## Slider Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'modelValue value', 'number | number\[\]', '-', 'number, number\[\]'],
        ['min', 'min value', 'number', '0', 'number'],
        ['max', 'max value', 'number', '100', 'number'],
        ['step', 'step value', 'number', '1', 'number'],
        ['showTip', 'showTip value', 'boolean', 'false', '-'],
        ['showStep', 'showStep value', 'boolean', 'false', '-'],
        ['disabled', 'disabled value', 'boolean', 'false', '-'],
        ['type', 'type value', 'keyof typeof ButtonBackgroundType', 'primary', '-']
    ]">
</ApiTable>

## Slider Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', 'Triggered when update:modelValue', 'value: number | number\[\]'],
        ['on-change', 'Triggered when on change', 'value: number | number\[\]']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
