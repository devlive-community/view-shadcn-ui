---
title: 滑块 (Slider)
---

# 介绍

<br />

本文档描述了 `ShadcnSlider` 组件的特性和使用方法。

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

## 最小值 (min)

::: raw

<CodeRunner title="最小值 (min)">
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

## 间隔 (step)

::: raw

<CodeRunner title="间隔 (step)">
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

## 显示提示 (show-tip)

::: raw

<CodeRunner title="显示提示 (show-tip)">
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

## 显示间隔 (show-step)

::: raw

<CodeRunner title="显示间隔 (show-step)">
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

## 滑块 (Slider) 属性

<ApiTable title="滑块 (Slider) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'number | number\[\]', '-', 'number, number\[\]'],
        ['min', '组件的最小值', 'number', '0', 'number'],
        ['max', '组件的最大值', 'number', '100', 'number'],
        ['step', '组件的间隔', 'number', '1', 'number'],
        ['showTip', '是否显示提示', 'boolean', 'false', '-'],
        ['showStep', '是否显示间隔', 'boolean', 'false', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['type', '组件的类型', 'keyof typeof ButtonBackgroundType', 'primary', '-']
    ]">
</ApiTable>

## 滑块 (Slider) 事件

<ApiTable title="滑块 (Slider) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', '组件的值被更新时触发', 'value: number | number\[\]'],
        ['on-change', '组件的值被更新时触发', 'value: number | number\[\]']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>