---
title: 图标 (Icon)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnIcon` 组件的使用方法。

图标使用的是 [Lucide](https://lucide.dev/) 图标库。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnIcon icon="Save" :dark="darkMode"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIcon icon="Save"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="图标尺寸">
    <ShadcnIcon icon="Save" :dark="darkMode"/>
    <ShadcnIcon icon="Save" :size="30" :dark="darkMode"/>
    <ShadcnIcon icon="Save" :size="40" :dark="darkMode"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIcon icon="Save"/>
    <ShadcnIcon icon="Save" :size="30"/>
    <ShadcnIcon icon="Save" :size="40"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 颜色 (color)

::: raw

<CodeRunner title="图标颜色">
    <ShadcnIcon icon="Save" color="red" :dark="darkMode"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIcon icon="Save" color="red"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 带背景 (background)

::: raw

<CodeRunner title="带背景图标">
    <ShadcnIcon icon="Home" :size="40" background :dark="darkMode"/>
    <ShadcnIcon icon="Settings" :size="40" background :dark="darkMode"/>
    <ShadcnIcon icon="User" :size="40" background :dark="darkMode"/>
    <ShadcnIcon icon="Bell" :size="40" background :dark="darkMode"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIcon icon="Home" :size="40" background :dark="darkMode"/>
    <ShadcnIcon icon="Settings" :size="40" background :dark="darkMode"/>
    <ShadcnIcon icon="User" :size="40" background :dark="darkMode"/>
    <ShadcnIcon icon="Bell" :size="40" background :dark="darkMode"/>
</template>
```

:::

## 液态玻璃效果 (glass)

::: raw

<div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-orange-900 to-red-900' : 'bg-gradient-to-r from-orange-400 to-red-400']">
<CodeRunner title="液态玻璃效果" class="bg-transparent">
    <div class="flex gap-4 flex-wrap">
      <ShadcnIcon icon="Home" :size="40" background glass :dark="darkMode"/>
      <ShadcnIcon icon="Settings" :size="40" background glass :dark="darkMode"/>
      <ShadcnIcon icon="User" :size="40" background glass :dark="darkMode"/>
      <ShadcnIcon icon="Bell" :size="40" background glass :dark="darkMode"/>
      <ShadcnIcon icon="Mail" :size="40" background glass :dark="darkMode"/>
      <ShadcnIcon icon="Heart" :size="40" background glass :dark="darkMode"/>
      <ShadcnIcon icon="Star" :size="40" background glass :dark="darkMode"/>
      <ShadcnIcon icon="Search" :size="40" background glass :dark="darkMode"/>
    </div>
</CodeRunner>
</div>

:::

::: details 查看代码

```vue
<template>
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-orange-900 to-red-900' : 'bg-gradient-to-r from-orange-400 to-red-400']">
      <div class="flex gap-4 flex-wrap">
        <ShadcnIcon icon="Home" :size="40" background glass :dark="darkMode"/>
        <ShadcnIcon icon="Settings" :size="40" background glass :dark="darkMode"/>
        <ShadcnIcon icon="User" :size="40" background glass :dark="darkMode"/>
        <ShadcnIcon icon="Bell" :size="40" background glass :dark="darkMode"/>
        <ShadcnIcon icon="Mail" :size="40" background glass :dark="darkMode"/>
        <ShadcnIcon icon="Heart" :size="40" background glass :dark="darkMode"/>
        <ShadcnIcon icon="Star" :size="40" background glass :dark="darkMode"/>
        <ShadcnIcon icon="Search" :size="40" background glass :dark="darkMode"/>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>
```

:::

## 图标 (Icon) 属性

<ApiTable title="图标 (Icon) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['icon', '图标名称', 'string', '-', '-'],
        ['size', '图标尺寸', 'number | string', '20', '-'],
        ['color', '图标颜色', 'string', '-', '所有支持的颜色值'],
        ['dark', '暗黑模式', 'boolean', 'false', '-'],
        ['glass', '液态玻璃效果', 'boolean', 'false', '-'],
        ['background', '显示背景', 'boolean', 'false', '-']
    ]">
</ApiTable>

## 图标 (Icon) 事件

<ApiTable title="图标 (Icon) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['click', '点击图标时触发', 'event'],
    ]">
</ApiTable>

## 图标 (Icon) 插槽

<ApiTable title="图标 (Icon) 插槽"
    :headers="['插槽', '描述']"
    :columns="[
        ['icon', '图标插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>