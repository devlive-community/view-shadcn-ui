---
title: Shadcn Dropdown
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnDropdown component.

- ShadcnDropdown
- ShadcnDropdownItem

## 用法

::: raw

<CodeRunner title="Dropdown">
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

## Divided

::: raw

<CodeRunner title="Divided">
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

## Props

<ApiTable title="Dropdown Props"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['trigger', 'The trigger of the dropdown', 'enum', 'click', '-', 'click | hover'],
        ['position', 'The position of the dropdown', 'enum', 'left', '-', 'left | right | top | bottom'],
    ]">
</ApiTable>

<br />

<ApiTable title="DropdownItem Props"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['name', 'The name of the dropdown item', 'String', '', '-', '-'],
        ['active', 'Whether the dropdown item is active', 'boolean', 'false', '-', '-'],
        ['disabled', 'Whether the dropdown item is disabled', 'boolean', 'false', '-', '-'],
        ['divided', 'Whether the dropdown item is divided', 'boolean', 'false', '-', '-'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Dropdown Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['trigger', 'The trigger slot of the dropdown'],
        ['list', 'Dropdown list content'],
    ]">
</ApiTable>

## Events

<ApiTable title="Dropdown Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['onOpen', 'Triggered when the dropdown is opened', 'boolean'],
        ['onClose', 'Triggered when the dropdown is closed', 'boolean'],
        ['onClickOutside', 'Triggered when the dropdown is clicked outside', 'boolean'],
    ]">
</ApiTable>

<br />

<ApiTable title="DropdownItem Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['onClick', 'Triggered when the dropdown item is clicked', 'boolean'],
    ]">
</ApiTable>
