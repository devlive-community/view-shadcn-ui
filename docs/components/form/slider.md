---
title: 滑块 (Slider)
---

# 介绍

<br />

本文档描述了 `ShadcnSlider` 组件的特性和使用方法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnSlider v-model="value"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSlider v-model="value"  :dark="darkMode" />
</template>
```

:::

## 最小值 (min)

::: raw

<CodeRunner title="最小值 (min)">
    <ShadcnSlider v-model="value" :min="0"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSlider v-model="value" :min="0"  :dark="darkMode" />
</template>
```

:::

## 最大值 (max)

::: raw

<CodeRunner title="最大值 (max)">
    <ShadcnSlider v-model="value" :max="10"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSlider v-model="value" :max="10"  :dark="darkMode" />
</template>
```

:::

## 间隔 (step)

::: raw

<CodeRunner title="间隔 (step)">
    <ShadcnSlider v-model="value" :step="10"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSlider v-model="value" :step="10"  :dark="darkMode" />
</template>
```

:::

## 显示提示 (show-tip)

::: raw

<CodeRunner title="显示提示 (show-tip)">
    <ShadcnSlider v-model="value" showTip  :dark="darkMode" />
    <ShadcnSlider v-model="value" :showTip="false"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSlider v-model="value" showTip  :dark="darkMode" />
    <ShadcnSlider v-model="value" :showTip="false"  :dark="darkMode" />
</template>
```

:::

## 显示间隔 (show-step)

::: raw

<CodeRunner title="显示间隔 (show-step)">
    <ShadcnSlider v-model="value" :step="10" showStep  :dark="darkMode" />
    <ShadcnSlider v-model="value" :showStep="false"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSlider v-model="value" showStep  :dark="darkMode" />
    <ShadcnSlider v-model="value" :showStep="false"  :dark="darkMode" />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnSlider v-model="value" disabled  :dark="darkMode" />
    <ShadcnSlider v-model="value" :disabled="false"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSlider v-model="value" disabled  :dark="darkMode" />
    <ShadcnSlider v-model="value" :disabled="false"  :dark="darkMode" />
</template>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型 (type)">
    <ShadcnSlider v-model="value" type="primary"  :dark="darkMode" />
    <ShadcnSlider v-model="value" type="warning"  :dark="darkMode" />
    <ShadcnSlider v-model="value" type="success"  :dark="darkMode" />
    <ShadcnSlider v-model="value" type="error"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSlider v-model="value" type="primary"  :dark="darkMode" />
  <ShadcnSlider v-model="value" type="warning"  :dark="darkMode" />
  <ShadcnSlider v-model="value" type="success"  :dark="darkMode" />
  <ShadcnSlider v-model="value" type="error"  :dark="darkMode" />
</template>
```

:::

## 液态玻璃效果 (glass)

::: raw

<div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-indigo-900 to-purple-900' : 'bg-gradient-to-r from-indigo-400 to-purple-400']">
<CodeRunner title="液态玻璃效果" class="bg-transparent">
    <div class="space-y-6">
      <ShadcnSlider v-model="glassValue1" glass :dark="darkMode"/>
      <ShadcnSlider v-model="glassValue2" glass :dark="darkMode" show-tip/>
      <ShadcnSlider v-model="glassValue3" glass :dark="darkMode" show-step :step="10"/>
    </div>
</CodeRunner>
</div>

:::

::: details 查看代码

```vue
<template>
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-indigo-900 to-purple-900' : 'bg-gradient-to-r from-indigo-400 to-purple-400']">
      <div class="space-y-6">
        <ShadcnSlider v-model="glassValue1" glass :dark="darkMode"/>
        <ShadcnSlider v-model="glassValue2" glass :dark="darkMode" show-tip/>
        <ShadcnSlider v-model="glassValue3" glass :dark="darkMode" show-step :step="10"/>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const glassValue1 = ref(50)
const glassValue2 = ref(75)
const glassValue3 = ref(30)
</script>
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
        ['type', '组件的类型', 'keyof typeof ButtonBackgroundType', 'primary', '-'],
        ['dark', '暗黑模式', 'boolean', 'false', '-'],
        ['glass', '液态玻璃效果', 'boolean', 'false', '-']
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
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref , computed } from 'vue';

const value = ref('')
const glassValue1 = ref(50)
const glassValue2 = ref(75)
const glassValue3 = ref(30)
</script>