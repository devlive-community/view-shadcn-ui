---
title: Shadcn Mention
---

# 介绍

本文介绍了 ShadcnMention 组件的功能和用法。

## 列表 (items)

::: raw

<CodeRunner title="列表" codeKey="mention-items">
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

<CodeRunner title="提示词" codeKey="mention-placeholder">
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

<CodeRunner title="尺寸" codeKey="mention-size">
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

## 类型 (type)

::: raw

<CodeRunner title="类型" codeKey="mention-type">
  <ShadcnMention type="primary" :items="items" />
  <ShadcnMention type="success" :items="items" />
  <ShadcnMention type="warning" :items="items" />
  <ShadcnMention type="error" :items="items" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention type="primary" :items="items" />
  <ShadcnMention type="success" :items="items" />
  <ShadcnMention type="warning" :items="items" />    
  <ShadcnMention type="error" :items="items" />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用" codeKey="mention-disabled">
  <ShadcnMention disabled :items="items" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention disabled :items="items" />
</template>
```

:::

## 触发字符 (trigger)

::: raw

<CodeRunner title="触发字符" codeKey="mention-trigger">
  <ShadcnMention trigger="#" :items="items" placeholder="键入 # 以提及" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention trigger="#" :items="items" />
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
        ['type', '类型', 'enum', 'default', 'primary, success, warning, error'],
        ['disabled', '是否禁用', 'boolean', 'false', '-'],
        ['trigger', '触发字符', 'string', '@', '-'],
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