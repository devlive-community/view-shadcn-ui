---
title: 滚动条 (Scroll Bar)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnScrollbar` 组件的一些特性和用法。

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

## 高度 (height)

::: raw

<CodeRunner title="高度 (height)">
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

## 自定义滚动条 (scrollbar)

::: raw

<CodeRunner title="自定义滚动条 (scrollbar)">
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

## 滚动条 (Scroll Bar) 属性

<ApiTable title="滚动条 (Scroll Bar) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['height', '组件的高度', 'string | number', '300'],
        ['position', '组件的位置', 'left | right', 'right'],
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