---
title: 面包屑 (Breadcrumb)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnBreadcrumb` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
  <ShadcnBreadcrumb>
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
  <ShadcnBreadcrumb separator="&">
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

## 面包屑 (Breadcrumb) 属性

<ApiTable title="面包屑 (Breadcrumb) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['href', '面包屑项目的链接', 'string', '-'],
        ['separator', '面包屑项目之间的分隔符', 'string', '/'],
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