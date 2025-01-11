---
title: 分隔线 (Divider)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnDivider` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <div>Hello, View Shadcn UI, Divider</div>
    <ShadcnDivider />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div>Hello, View Shadcn UI, Divider</div>
    <ShadcnDivider />
</template>

<script setup lang="ts">
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <div>Horizontal</div>
    <ShadcnDivider type="horizontal" />
    <div class="flex space-x-2 mt-2">
        <div>Vertical</div>
        <ShadcnDivider type="vertical" />
        <a href="#">Link</a>
        <ShadcnDivider type="vertical" />
        <div>Vertical</div>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div>Horizontal</div>
    <ShadcnDivider type="horizontal" />
    <div class="flex space-x-2">
        <div>Vertical</div>
        <ShadcnDivider type="vertical" />
        <a href="#">Link</a>
        <ShadcnDivider type="vertical" />
        <div>Vertical</div>
    </div>
</template>

<script setup lang="ts">
</script>
```

:::

## 位置 (position)

<CodeRunner title="位置 (position)">
    <ShadcnDivider orientation="left">Left</ShadcnDivider>
    <ShadcnDivider orientation="center">Center</ShadcnDivider>
    <ShadcnDivider orientation="right">Right</ShadcnDivider>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnDivider orientation="left">Left</ShadcnDivider>
    <ShadcnDivider orientation="center">Center</ShadcnDivider>
    <ShadcnDivider orientation="right">Right</ShadcnDivider>
</template>

<script setup lang="ts">
</script>
```

:::

## 虚线 (dashed)

<CodeRunner title="虚线 (dashed)">
    <ShadcnDivider dashed />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnDivider dashed />
</template>

<script setup lang="ts">
</script>
```

:::

## 分隔线 (Divider) 属性

<ApiTable title="分隔线 (Divider) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['text', '文本内容', 'string', '-', '-'],
        ['type', '分隔线类型', 'enum', '-', 'horizontal | vertical'],
        ['orientation', '分割线标题的位置', 'enum', '-', 'left | center | right'],
        ['dashed', '分隔线是否为虚线', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 分隔线 (Divider) 插槽

<ApiTable title="分隔线 (Divider) 插槽"
    :headers="['插槽', '描述', '参数']"
    :columns="[
        ['default', '默认文本插槽', 'text'],
    ]">
</ApiTable>