---
title: 面包屑 (Breadcrumb)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnBreadcrumb` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
  <ShadcnBreadcrumb :dark="darkMode">
    <ShadcnBreadcrumbItem href="#">Home</ShadcnBreadcrumbItem>
    <ShadcnBreadcrumbItem href="#">Products</ShadcnBreadcrumbItem>
    <ShadcnBreadcrumbItem>Summary</ShadcnBreadcrumbItem>
  </ShadcnBreadcrumb>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnBreadcrumb>
        <ShadcnBreadcrumbItem href="#">Home</ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbItem href="#">Products</ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbItem>Summary</ShadcnBreadcrumbItem>
    </ShadcnBreadcrumb>
</template>

<script setup lang="ts">
</script>
```

:::

## 分隔符 (separator)

::: raw

<CodeRunner title="分隔符 (separator)">
  <ShadcnBreadcrumb separator="&" :dark="darkMode">
    <ShadcnBreadcrumbItem href="#">Home</ShadcnBreadcrumbItem>
    <ShadcnBreadcrumbItem href="#">Products</ShadcnBreadcrumbItem>
    <ShadcnBreadcrumbItem>Summary</ShadcnBreadcrumbItem>
  </ShadcnBreadcrumb>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnBreadcrumb separator="&">
        <ShadcnBreadcrumbItem href="#">Home</ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbItem href="#">Products</ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbItem>Summary</ShadcnBreadcrumbItem>
    </ShadcnBreadcrumb>
</template>

<script setup lang="ts">
</script>
```

:::

## 液态玻璃效果 (Glass)

::: raw

<CodeRunner title="液态玻璃效果 (Glass)">
  <div :class="['h-32 rounded-lg flex items-center justify-center', darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
    <ShadcnBreadcrumb glass :dark="darkMode">
      <ShadcnBreadcrumbItem href="#">Home</ShadcnBreadcrumbItem>
      <ShadcnBreadcrumbItem href="#">Products</ShadcnBreadcrumbItem>
      <ShadcnBreadcrumbItem>Summary</ShadcnBreadcrumbItem>
    </ShadcnBreadcrumb>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnBreadcrumb glass>
        <ShadcnBreadcrumbItem href="#">Home</ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbItem href="#">Products</ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbItem>Summary</ShadcnBreadcrumbItem>
    </ShadcnBreadcrumb>
</template>

<script setup lang="ts">
</script>
```

:::

## 面包屑 (Breadcrumb) 属性

<ApiTable title="面包屑 (Breadcrumb) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['href', '面包屑项目的链接', 'string', '-'],
        ['separator', '面包屑项目之间的分隔符', 'string', '/'],
        ['dark', '暗黑模式', 'boolean', 'false'],
        ['glass', '液态玻璃效果', 'boolean', 'false'],
    ]">
</ApiTable>

## 面包屑 (Breadcrumb) 插槽

<ApiTable title="面包屑 (Breadcrumb) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '面包屑项目的内容'],
    ]">
</ApiTable>

## 面包屑项目 (Breadcrumb Item) 插槽

<ApiTable title="面包屑项目 (Breadcrumb Item) 插槽"
    :headers="['插槽', '描述']"
    :columns="[
        ['default', '面包屑项目的内容'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>