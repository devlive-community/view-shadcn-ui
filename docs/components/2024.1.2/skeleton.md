---
title: Shadcn Skeleton
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnSkeleton component.

## Usage

<CodeRunner title="Usage">
    <ShadcnSkeleton />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSkeleton />
</template>

<script setup lang="ts">
</script>
```

:::

## Animation

<CodeRunner title="Animation">
    <ShadcnSkeleton animation />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSkeleton animation />
</template>

<script setup lang="ts">
</script>
```

:::

## Paragraph

<CodeRunner title="Title">
    <ShadcnSkeleton :paragraph=" { rows: 5, width: [100, 200, '300px', '50%', '62%'] }"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSkeleton :paragraph=" { rows: 5, width: [100, 200, '300px', '50%', '62%'] }"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Item Type

<CodeRunner title="Item Type">
    <ShadcnSpace>
        <ShadcnSkeletonItem animation type="circle"/>
        <ShadcnSkeletonItem animation type="square"/>
        <ShadcnSkeletonItem animation type="image"/>
    </ShadcnSpace>
    <br />
    <ShadcnSkeletonItem animation type="rect"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSkeletonItem animation type="circle"/>
    <ShadcnSkeletonItem animation type="square"/>
    <ShadcnSkeletonItem animation type="rect"/>
    <ShadcnSkeletonItem animation type="image"/>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Skeleton Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['rows', 'The rows of the skeleton', 'Number | String', '4', '-', '-'],
        ['cols', 'The columns of the skeleton', 'Number | String', '1', '-', '-'],
        ['animation', 'Whether to use animation', 'Boolean', 'false', '-', '-'],
        ['paragraph', 'The paragraph of the skeleton', '{ rows: 5, width: \[100, 200, 300px, 50%, 62%\] }', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Skeleton Item Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['animation', 'Whether to use animation', 'Boolean', 'false', '-', '-'],
        ['width', 'The width of the skeleton item', 'Number | String', '-', '-', '-'],
        ['type', 'The type of the skeleton item', 'Enum', 'rect', '-', 'circle | square | rect | image'],
    ]">
</ApiTable>

<br />

<ApiTable title="Skeleton Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['template', 'Skeleton template slot'],
    ]">
</ApiTable>
