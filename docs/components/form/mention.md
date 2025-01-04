---
title: Shadcn Mention
---

# 介绍

本文介绍了 ShadcnMention 组件的功能和用法。

## 列表 (items)

::: raw

<CodeRunner title="列表">
    <ShadcnMention :items="items" />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnMention :items="items" />
</template>
```

:::

## 提示词 (placeholder)

::: raw

<CodeRunner title="提示词">
    <ShadcnMention placeholder="键入 @ 以提及" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention placeholder="键入 @ 以提及" />
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸">
  <ShadcnMention size="small" :items="items" />
  <ShadcnMention size="default" :items="items" />
  <ShadcnMention size="large" :items="items" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention size="small" :items="items" />
  <ShadcnMention size="default" :items="items" />
  <ShadcnMention size="large" :items="items" />
</template>
```

:::

## Mention 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值', '列表']"
    :columns="[
        ['modelValue', '绑定值，这里返回的是数据的 id', 'any\[\]', '-', '-'],
        ['items', '提及的项目列表', 'MentionOption\[\]', '-', '-'],
        ['placeholder', '提示词', 'string', '-', '-'],
        ['size', '尺寸', 'enum', 'default', 'small, default, large'],
    ]">
</ApiTable>

## Mention 事件

<ApiTable title="事件"
    :headers="['事件', '描述', '参数']"
    :columns="[
        ['update:modelValue', '更新值时触发', 'any\[\]'],
        ['on-select', '选择项目时触发', 'MentionOption'],
        ['on-change', '更改值时触发', 'any\[\]'],
        ['on-search', '搜索时触发', 'string'],
    ]">
</ApiTable>

<script setup lang="ts">
const items =  [
    {id: 1, name: '测试数据 1'}, 
    {id: 2, name: '测试数据 2'}
]
</script>