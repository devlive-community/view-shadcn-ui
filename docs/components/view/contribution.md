---
title: Shadcn Contribution
---

# Introduction

This document describes the features and usage of the ShadcnContribution component.

## Data

::: raw

<CodeRunner title="Data">
    <ShadcnContribution :data="data" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution data="data" />
</template>
```

:::

## Color scheme

::: raw

<CodeRunner title="Color scheme">
    <ShadcnContribution :data="data" :color-scheme="['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution :colorScheme="['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']" />
</template>
```

:::

## Year count

::: raw

<CodeRunner title="Year count">
    <ShadcnContribution :data="data" :yearCount="1" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution :yearCount="1" />
</template>
```

:::
## Contribution Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['data', 'data value', 'Array<ContributionOption>', '-', '-'],
        ['colorScheme', 'colorScheme value', '[#ebedf0, #9be9a8, #40c463, #30a14e, #216e39]', '-'],
        ['yearCount', 'yearCount value', 'number', '1', '-']
    ]">
</ApiTable>

## Contribution Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-select', 'Triggered when on select', 'value: ContributionOption']
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  { date: '2024-01-01', count: 2 },
  { date: '2024-01-02', count: 5 },
  { date: '2024-01-03', count: 8 },
  { date: '2024-01-04', count: 12 },
  { date: '2024-01-05', count: 3 },
  { date: '2024-01-06', count: 0 },
  { date: '2024-01-07', count: 6 }
])

const customColorScheme = [
  '#ebedf0',    // 0 contributions
  '#bfd4f2',    // 1-3 contributions
  '#7fa8ed',    // 4-6 contributions
  '#4775c9',    // 7-9 contributions
  '#254e89'     // 10+ contributions
]
</script>