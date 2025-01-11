---
title: 空数据 (Empty)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnEmpty` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnEmpty />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnEmpty />
</template>
```

:::

## 自定义 (slot)

::: raw

<CodeRunner title="自定义插槽 (slot)">
  <ShadcnEmpty>
    <template #image>
      <ShadcnIcon icon="User" size="80"/>
    </template>
    <template #title>
      <h3 class="text-lg font-semibold">Custom Title</h3>
    </template>
    <template #description>
      <p>Custom Description</p>
    </template>
    <template #actions>
      <div class="flex gap-2">
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
      </div>
    </template>
  </ShadcnEmpty>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnEmpty>
    <template #image>
      <ShadcnIcon icon="User" size="80"/>
    </template>

    <template #title>
      <h3 class="text-lg font-semibold">Custom Title</h3>
    </template>

    <template #description>
      <p>Custom Description</p>
    </template>

    <template #actions>
      <div class="flex gap-2">
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
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