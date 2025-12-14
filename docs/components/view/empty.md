---
title: 空数据 (Empty)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnEmpty` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnEmpty  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnEmpty  :dark="darkMode" />
</template>
```

:::

## 自定义 (slot)

::: raw

<CodeRunner title="自定义插槽 (slot)">
  <ShadcnEmpty :dark="darkMode">
    <template #image>
      <ShadcnIcon icon="User" size="80" :dark="darkMode" />
    </template>
    <template #title>
      <h3 class="text-lg font-semibold">Custom Title</h3>
    </template>
    <template #description>
      <p>Custom Description</p>
    </template>
    <template #actions>
      <div class="flex gap-2">
        <ShadcnButton :dark="darkMode">Button 1</ShadcnButton>
        <ShadcnButton :dark="darkMode">Button 2</ShadcnButton>
      </div>
    </template>
  </ShadcnEmpty>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnEmpty :dark="darkMode">
    <template #image>
      <ShadcnIcon icon="User" size="80" :dark="darkMode" />
    </template>

    <template #title>
      <h3 class="text-lg font-semibold">Custom Title</h3>
    </template>

    <template #description>
      <p>Custom Description</p>
    </template>

    <template #actions>
      <div class="flex gap-2">
        <ShadcnButton :dark="darkMode">Button 1</ShadcnButton>
        <ShadcnButton :dark="darkMode">Button 2</ShadcnButton>
      </div>
    </template>
  </ShadcnEmpty>
</template>
```

:::

## 空数据 (Empty) 插槽

<ApiTable title="空数据 (Empty) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['image', '图片插槽'],
        ['title', '标题插槽'],
        ['description', '描述插槽'],
        ['actions', '操作插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>
