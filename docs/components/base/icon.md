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
    <ShadcnIcon icon="Save"/>
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
    <ShadcnIcon icon="Save"/>
    <ShadcnIcon icon="Save" :size="30"/>
    <ShadcnIcon icon="Save" :size="40"/>
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
    <ShadcnIcon icon="Save" color="red"/>
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

## 图标 (Icon) 属性

<ApiTable title="图标 (Icon) 属性"
    :headers="['属性', '描述', '类似', '默认值', '支持列表']"
    :columns="[
        ['icon', '图标名称', 'string', '-', '-'],
        ['size', '图标尺寸', 'number', '20', '-'],
        ['color', '图标颜色', 'string', '-', '所有支持的颜色值'],
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