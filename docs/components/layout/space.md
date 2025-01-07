---
title: Shadcn Space
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnSpace component.

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

## Wrap

<CodeRunner title="Wrap">
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

## API Attributes

<ApiTable title="Space Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['size', 'Space size, If it is an array parameter, it is passed as \[x, y\]', 'Enum | String | Number | Array', 'default', 'small, default, large'],
        ['wrap', 'Whether to wrap', 'Boolean', 'false', '']
    ]">
</ApiTable>
