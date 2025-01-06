---
title: Shadcn Divider
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnDivider.

## Usage

<CodeRunner title="Simple Divider"
    description="Created a simple divider">
    <div>Hello, View Shadcn UI, Divider</div>
    <ShadcnDivider />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div>Hello, View Shadcn UI, Divider</div>
    <ShadcnDivider />
</template>

<script setup lang="ts">
</script>
```

:::

## Type

<CodeRunner title="Type"
    description="Created a type divider">
    <div>Horizontal</div>
    <ShadcnDivider type="horizontal" />
    <div class="flex space-x-2 mt-2">
        <div>Vertical</div>
        <ShadcnDivider type="vertical" />
        <a href="#">Link</a>
        <ShadcnDivider type="vertical" />
        <div>Vertical</div>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div>Horizontal</div>
    <ShadcnDivider type="horizontal" />
    <div class="flex space-x-2">
        <div>Vertical</div>
        <ShadcnDivider type="vertical" />
        <a href="#">Link</a>
        <ShadcnDivider type="vertical" />
        <div>Vertical</div>
    </div>
</template>

<script setup lang="ts">
</script>
```

:::

## Position

<CodeRunner title="Position"
    description="Created a position divider">
    <ShadcnDivider orientation="left">Left</ShadcnDivider>
    <ShadcnDivider orientation="center">Center</ShadcnDivider>
    <ShadcnDivider orientation="right">Right</ShadcnDivider>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnDivider orientation="left">Left</ShadcnDivider>
    <ShadcnDivider orientation="center">Center</ShadcnDivider>
    <ShadcnDivider orientation="right">Right</ShadcnDivider>
</template>

<script setup lang="ts">
</script>
```

:::

## Dashed

<CodeRunner title="Dashed"
    description="Created a dashed divider">
    <ShadcnDivider dashed />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnDivider dashed />
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Divider Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['text', 'Text content', 'String', '-', '-'],
        ['type', 'Divider type', 'Enum', '-', 'horizontal | vertical'],
        ['orientation', 'The position of the dividing line title', 'Enum', '-', 'left | center | right'],
        ['dashed', 'Whether the divider is dashed', 'Boolean', 'false', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Divider Slots"
    :headers="['Slot', 'Description', 'Props Reference']"
    :columns="[
        ['default', 'Default slot', 'text'],
    ]">
</ApiTable>
