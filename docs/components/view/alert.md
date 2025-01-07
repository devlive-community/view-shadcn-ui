---
title: Shadcn Alert
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnAlert component.

## 用法

<CodeRunner title="用法">
    <ShadcnAlert>Alert</ShadcnAlert>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert>Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## Title

<CodeRunner title="Title">
    <ShadcnAlert title="Title">Alert</ShadcnAlert>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert title="Title">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <div class="space-y-2">
        <ShadcnAlert type="primary">Alert</ShadcnAlert>
        <ShadcnAlert type="success">Alert</ShadcnAlert>
        <ShadcnAlert type="warning">Alert</ShadcnAlert>
        <ShadcnAlert type="error">Alert</ShadcnAlert>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert type="primary">Alert</ShadcnAlert>
    <ShadcnAlert type="success">Alert</ShadcnAlert>
    <ShadcnAlert type="warning">Alert</ShadcnAlert>
    <ShadcnAlert type="error">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## 图标 (icon)

<CodeRunner title="图标 (icon)">
    <ShadcnAlert title="Title" show-icon>Alert</ShadcnAlert>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert title="Title" show-icon>Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## Banner

<CodeRunner title="Banner">
    <ShadcnAlert title="Title" banner>Alert</ShadcnAlert>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert title="Title" banner>Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## Closable

<CodeRunner title="Closable">
    <ShadcnAlert title="Title" closable>Alert</ShadcnAlert>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert title="Title" closable>Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Alert Props"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['title', 'The title of the alert', 'String', '-', '-', '-'],
        ['type', 'The type of the alert', 'Enum', 'primary', '-', 'primary, success, warning, error'],
        ['show-icon', 'Whether to show the icon', 'Boolean', 'false', '-', '-'],
        ['banner', 'Whether to create a banner alert', 'Boolean', 'false', '-', '-'],
        ['closable', 'Whether to show the close button', 'Boolean', 'false', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Alert Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['close', 'Close event', 'true | false'],
    ]">
</ApiTable>

<br />

<ApiTable title="Alert Slots"
    :headers="['Name', 'Description', 'Props Reference']"
    :columns="[
        ['default', 'Default slot', '-'],
        ['icon', 'Icon slot', '-'],
        ['close', 'Close slot', '-'],
    ]">
</ApiTable>
