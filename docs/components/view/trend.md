---
title: 趋势 (Trend)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTrend` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnTrend :value="10"  :dark="darkMode" />
    <ShadcnTrend :value="-10"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTrend :value="10"  :dark="darkMode" />
    <ShadcnTrend :value="-10"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 反转 (reverse)

::: raw

<CodeRunner title="反转 (reverse)">
    <ShadcnTrend :value="10" reverse  :dark="darkMode" />
    <ShadcnTrend :value="-10" reverse  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTrend :value="10" reverse  :dark="darkMode" />
    <ShadcnTrend :value="-10" reverse  :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 文本颜色 (text-color)

::: raw

<CodeRunner title="文本颜色 (text-color)">
    <ShadcnTrend :value="10" text-color :dark="darkMode" />
    <ShadcnTrend :value="-10" text-color :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTrend :value="10" text-color :dark="darkMode" />
    <ShadcnTrend :value="-10" text-color :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 趋势 (Trend) 属性

<ApiTable title="趋势 (Trend) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['value', '趋势值，如果> 0，则上升，如果< 0，则下降', 'number', '0'],
        ['reverse', '反转趋势方向', 'boolean', 'false'],
        ['text-color', '是否使用文本颜色', 'boolean', 'false'],
    ]">
</ApiTable>

## 趋势 (Trend) 插槽

<ApiTable title="趋势 (Trend) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '默认插槽'],
        ['rise', '上升趋势'],
        ['descend', '下降趋势'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>