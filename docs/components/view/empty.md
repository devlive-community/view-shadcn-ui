---
title: Shadcn Empty
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnEmpty component.

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

## Custom Slot

::: raw

<CodeRunner title="Custom Slot">
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

## Empty Slots

<ApiTable title="Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['image', 'Image slot'],
        ['title', 'Title slot'],
        ['description', 'Description slot'],
        ['actions', 'The actions of the empty']
    ]">
</ApiTable>
