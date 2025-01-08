---
title: Shadcn Exception
slug: exception
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnException component.

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnSpace wrap>
        <ShadcnException />
        <ShadcnException type="500" />
        <ShadcnException type="403" />
    </ShadcnSpace>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSpace wrap>
    <ShadcnException />
    <ShadcnException type="500" />
    <ShadcnException type="403" />
  </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## Slot

::: raw

<CodeRunner title="Slot">
  <ShadcnException type="500">
    <template #icon>
      <ShadcnIcon icon="TriangleAlert" class="text-gray-400" :size="80"/>
    </template>
    <template #actions>
      <ShadcnButton type="primary">Home</ShadcnButton>
    </template>
  </ShadcnException>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnException type="500">
    <template #icon>
      <ShadcnIcon icon="TriangleAlert" class="text-gray-400" :size="80"/>
    </template>
    <template #actions>
      <ShadcnButton type="primary">Home</ShadcnButton>
    </template>
  </ShadcnException>
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['type', 'The type of the exception', 'Enum', '404', '-', '404 | 403 | 500'],
        ['title', 'The title of the exception', 'String', 'Page not found', '-', '-'],
        ['description', 'The description of the exception', 'String', 'Sorry, the page you visited does not exist.', '-', '-'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['icon', 'Icon slot'],
        ['actions', 'The actions of the exception'],
    ]">
</ApiTable>
