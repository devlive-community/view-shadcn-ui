---
title: 下拉菜单 (Dropdown)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnDropdown` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
  <ShadcnDropdown trigger="click">
    <template #trigger>
      <ShadcnButton>Click Open</ShadcnButton>
    </template>
    <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
    <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
    <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
  </ShadcnDropdown>
  <ShadcnDropdown trigger="hover">
    <template #trigger>
      <ShadcnButton>Hover Open</ShadcnButton>
    </template>
    <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
    <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
    <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
  </ShadcnDropdown>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnDropdown trigger="click">
    <template #trigger>
      <ShadcnButton>Click Open</ShadcnButton>
    </template>
    <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
    <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
    <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
  </ShadcnDropdown>
  <ShadcnDropdown trigger="hover">
    <template #trigger>
      <ShadcnButton>Hover Open</ShadcnButton>
    </template>
    <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
    <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
    <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
  </ShadcnDropdown>
</template>

<script setup lang="ts">
</script>
```

:::

## 分割线 (divided)

::: raw

<CodeRunner title="分割线 (divided)">
  <ShadcnDropdown trigger="hover">
    <template #trigger>
      <ShadcnButton>Hover Open</ShadcnButton>
    </template>
    <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
    <ShadcnDropdownItem divided>Option 2</ShadcnDropdownItem>
    <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
  </ShadcnDropdown>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnDropdown trigger="click" divided>
    <template #trigger>
      <ShadcnButton>Click Open</ShadcnButton>
    </template>
    <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
    <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
    <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
  </ShadcnDropdown>
</template>

<script setup lang="ts">
</script>
```

:::

## 位置 (position)

::: raw

<CodeRunner title="位置 (position)">
    <ShadcnDropdown trigger="hover" position="left">
      <template #trigger>
        <ShadcnButton>Left</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>
    <ShadcnDropdown trigger="click" position="right">
      <template #trigger>
        <ShadcnButton>Right</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>
    <ShadcnDropdown trigger="hover" position="top">
      <template #trigger>
        <ShadcnButton>Hover Open</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>
    <ShadcnDropdown trigger="hover" position="bottom">
      <template #trigger>
        <ShadcnButton>Hover Open</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDropdown trigger="hover" position="left">
      <template #trigger>
        <ShadcnButton>Left</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>

    <ShadcnDropdown trigger="click" position="right">
      <template #trigger>
        <ShadcnButton>Right</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>

    <ShadcnDropdown trigger="hover" position="top">
      <template #trigger>
        <ShadcnButton>Hover Open</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>

    <ShadcnDropdown trigger="hover" position="bottom">
      <template #trigger>
        <ShadcnButton>Hover Open</ShadcnButton>
      </template>
      <ShadcnDropdownItem>Option 1</ShadcnDropdownItem>
      <ShadcnDropdownItem active>Option 2</ShadcnDropdownItem>
      <ShadcnDropdownItem disabled>Option 3</ShadcnDropdownItem>
    </ShadcnDropdown>
</template>

<script setup lang="ts">
</script>
```

:::

## 下拉菜单 (Dropdown) 属性

<ApiTable title="下拉菜单 (Dropdown) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['trigger', '下拉菜单触发方式', 'enum', 'click', 'click | hover'],
        ['position', '下拉菜单位置', 'enum', 'left', 'left | right | top | bottom'],
    ]">
</ApiTable>

## 下拉菜单项 (DropdownItem) 属性

<ApiTable title="下拉菜单项 (DropdownItem) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['name', '下拉项的名称', 'string', '-'],
        ['active', '下拉项是否处于激活状态', 'boolean', 'false'],
        ['disabled', '下拉项是否被禁用', 'boolean', 'false'],
        ['divided', '下拉项是否为分割线', 'boolean', 'false'],
    ]">
</ApiTable>

## 下拉菜单 (Dropdown) 插槽

<ApiTable title="下拉菜单 (Dropdown) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['trigger', '下拉菜单触发器'],
        ['list', '下拉菜单列表'],
    ]">
</ApiTable>

## 下拉菜单 (Dropdown) 事件

<ApiTable title="下拉菜单 (Dropdown) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-open', '打开下拉列表时触发', 'boolean'],
        ['on-close', '关闭下拉列表时触发', 'boolean'],
        ['on-click-outside', '在外部单击下拉列表时触发', 'boolean'],
    ]">
</ApiTable>

## 下拉菜单项 (DropdownItem) 事件

<ApiTable title="下拉菜单项 (DropdownItem) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-click', '单击下拉项时触发', 'boolean'],
    ]">
</ApiTable>