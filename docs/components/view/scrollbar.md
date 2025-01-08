---
title: Shadcn Scrollbar
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnScrollbar component.

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnScrollbar>
      <div class="space-y-4">
        <p v-for="i in 100">This is a scrollbar component example index {{ i }}</p>
      </div>
    </ShadcnScrollbar>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnScrollbar>
    <div class="space-y-4">
      <p v-for="i in 100">This is a scrollbar component example index {{ i }}</p>
    </div>
  </ShadcnScrollbar>
</template>
```

:::

## Height

::: raw

<CodeRunner title="Height">
    <ShadcnScrollbar height="100">
      <div class="space-y-4">
        <p v-for="i in 100">This is a scrollbar component example index {{ i }}</p>
      </div>
    </ShadcnScrollbar>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnScrollbar height="100">
    <div class="space-y-4">
      <p v-for="i in 100">This is a scrollbar component example index {{ i }}</p>
    </div>
  </ShadcnScrollbar>
</template>
```

:::

## 位置 (position)

::: raw

<CodeRunner title="位置 (position)">
    <ShadcnScrollbar position="left">
      <div class="space-y-4">
        <p v-for="i in 100">This is a scrollbar component example index {{ i }}</p>
      </div>
    </ShadcnScrollbar>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnScrollbar position="left">
    <div class="space-y-4">
      <p v-for="i in 100">This is a scrollbar component example index {{ i }}</p>
    </div>
  </ShadcnScrollbar>
</template>
```

:::

## Custom Scrollbar

::: raw

<CodeRunner title="Custom Scrollbar">
    <ShadcnScrollbar class="custom-scrollbar">
      <div class="space-y-4">
        <p v-for="i in 100">This is a scrollbar component example index {{ i }}</p>
      </div>
    </ShadcnScrollbar>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnScrollbar class="custom-scrollbar">
    <div class="space-y-4">
      <p v-for="i in 100">This is a scrollbar component example index {{ i }}</p>
    </div>
  </ShadcnScrollbar>
</template>

<style>
  .custom-scrollbar ::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  .custom-scrollbar ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  .custom-scrollbar ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
```

:::

## Scrollbar Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['height', 'The height of the scrollbar', 'string | number', '300'],
        ['position', 'The position of the scrollbar', 'left | right', 'right'],
    ]">
</ApiTable>

<style>
.custom-scrollbar ::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar ::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.custom-scrollbar ::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.custom-scrollbar ::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
