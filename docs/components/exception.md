---
title: Shadcn Exception
slug: exception
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnException component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnSpace wrap>
        <ShadcnException />
        <ShadcnException type="500" />
        <ShadcnException type="403" />
    </ShadcnSpace>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnSpace wrap>
    <ShadcnException />
    <ShadcnException type="500" />
    <ShadcnException type="403" />
  </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## Slot

::: raw

<CodeRunner title="Slot">
  <ShadcnException type="500">
    <template #icon>
      <ShadcnIcon icon="TriangleAlert" class="text-gray-400" :size="80"/>
    </template>
    <template #actions>
      <ShadcnButton type="primary">Home</ShadcnButton>
    </template>
  </ShadcnException>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnException type="500">
    <template #icon>
      <ShadcnIcon icon="TriangleAlert" class="text-gray-400" :size="80"/>
    </template>
    <template #actions>
      <ShadcnButton type="primary">Home</ShadcnButton>
    </template>
  </ShadcnException>
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['type', 'The type of the exception', 'Enum', '404', '-', '404 | 403 | 500'],
        ['title', 'The title of the exception', 'String', 'Page not found', '-', '-'],
        ['description', 'The description of the exception', 'String', 'Sorry, the page you visited does not exist.', '-', '-'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['icon', 'Icon slot'],
        ['actions', 'The actions of the exception'],
    ]">
</ApiTable>
