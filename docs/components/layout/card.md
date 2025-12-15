---
title: 卡片 (Card)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnCard` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnCard title="用法" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnCard title="Title">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## 描述 (description)

<CodeRunner title="描述 (description)">
    <ShadcnCard title="Title" description="Description" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnCard title="Title" description="Description">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## 阴影 (shadow)

<CodeRunner title="阴影 (shadow)">
    <div class="space-y-4">
        <ShadcnCard title="Shadow Never" shadow="never" :dark="darkMode"/>
        <ShadcnCard title="Shadow Always" shadow="always" :dark="darkMode"/>
        <ShadcnCard title="Shadow Hover" shadow="hover" :dark="darkMode"/>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div class="space-y-4">
        <ShadcnCard title="Shadow Never" shadow="never"/>
        <ShadcnCard title="Shadow Always" shadow="always"/>
        <ShadcnCard title="Shadow Hover" shadow="hover"/>
    </div>
</template>

<script setup lang="ts">
</script>
```

:::

## 加载 (loading)

::: raw

<CodeRunner title="加载 (loading)">
    <ShadcnCard title="Loading" :loading="true" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
    <ShadcnCard title="Only Content Loading" :loading="true" only-content-loading :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</CodeRunner>

:::


::: details 查看代码

```vue
<template>
  <ShadcnCard title="Loading" :loading="true">
    <div class="flex items-center justify-center h-32">Content</div>
  </ShadcnCard>
  <ShadcnCard title="Only Content Loading" :loading="true" only-content-loading>
    <div class="flex items-center justify-center h-32">Content</div>
  </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## 边框 (border)

<CodeRunner title="边框 (border)">
    <ShadcnCard title="Border" border :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
    <ShadcnCard title="No Border" :border="false" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnCard title="Border" border>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
    <ShadcnCard title="No Border" :border="false">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## 液态玻璃效果 (Glass)

::: raw

<CodeRunner title="液态玻璃效果 (Glass)">
  <div :class="['h-64 rounded-lg flex items-center justify-center p-6', darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
    <ShadcnCard glass :dark="darkMode" title="Glass Card" description="Card with liquid glass effect">
      <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCard glass title="Glass Card" description="Card with liquid glass effect">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## 卡片 (Card) 属性

<ApiTable title="卡片 (Card)"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['title', '卡片标题', 'string', '-', '-', '-'],
        ['description', '卡片描述', 'string', '-', 'title', '-'],
        ['shadow', '卡片阴影模式', 'enum', 'never', '-', 'never | always | hover'],
        ['loading', '是否显示加载', 'boolean', 'false', '-', '-'],
        ['border', '是否显示边框', 'boolean', 'true', '-', '-'],
        ['onlyContentLoading', '是否仅显示内容加载，设置后加载状态不会显示在标题上', 'boolean', 'false', '-', '-'],
        ['dark', '暗黑模式', 'boolean', 'false', '-', '-'],
        ['glass', '液态玻璃效果', 'boolean', 'false', '-', '-'],
    ]">
</ApiTable>

## 卡片 (Card) 插槽

<ApiTable title="卡片 (Card) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['title', '卡片标题插槽'],
        ['description', '卡片描述插槽'],
        ['extra', '卡片额外信息插槽，在标题的右侧显示'],
        ['content', '卡片内容插槽'],
        ['footer', '卡片底部插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>