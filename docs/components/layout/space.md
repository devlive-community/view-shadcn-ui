---
title: 间距 (Space)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnSpace` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnSpace>
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
        <ShadcnButton>Button 3</ShadcnButton>
    </ShadcnSpace>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSpace>
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
        <ShadcnButton>Button 3</ShadcnButton>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
    <ShadcnSpace size="large">
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
    </ShadcnSpace>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSpace size="large">
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## 自动换行 (wrap)

<CodeRunner title="自动换行 (wrap)">
    <ShadcnSpace wrap>
        <ShadcnButton v-for="i in 20" type="primary">Wrap {{ i }}</ShadcnButton>
    </ShadcnSpace>
    <p>Array Size</p>
    <ShadcnSpace wrap :size="[40, 80]">
        <ShadcnButton v-for="i in 20">Wrap {{ i }}</ShadcnButton>
    </ShadcnSpace>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSpace wrap>
        <ShadcnButton v-for="i in 20" type="primary">Wrap {{ i }}</ShadcnButton>
    </ShadcnSpace>
    <p>Array Size</p>
    <ShadcnSpace wrap :size="[40, 80]">
        <ShadcnButton v-for="i in 20">Wrap {{ i }}</ShadcnButton>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## 间距 (Space) 属性

<ApiTable title="间距 (Space) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['size', '空间大小，如果是数组参数，则作为 \[x， y\] 传递', 'enum | string | number | array', 'default', 'small, default, large'],
        ['wrap', '是否自动换行', 'boolean', 'false', '-']
    ]">
</ApiTable>