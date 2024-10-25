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

## Title

<CodeRunner title="Title">
    <ShadcnSkeleton :title="{ width: '30%' }" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSkeleton :title="{ width: '30%' }" />
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
        ['title', 'The title of the skeleton', '{ width: xx% }', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Skeleton Item Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['animation', 'Whether to use animation', 'Boolean', 'false', '-', '-'],
        ['width', 'The width of the skeleton item', 'Number | String', '-', '-', '-'],
    ]">
</ApiTable>
