---
title: Shadcn Contribution
---

# Introduction

This document describes the features and usage of the ShadcnContribution component.

## Usage

::: raw

<CodeRunner title="Data">
    <ShadcnContribution :data="data" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution :data="data" />
</template>
```

:::

## Color scheme

::: raw

<CodeRunner title="Color scheme">
    <ShadcnContribution :data="data" :colorScheme="colorScheme" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution :data="data" :colorScheme="colorScheme" />
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
    <ShadcnContribution :data="data" :yearCount="1" />
</template>
```

:::

## Show legend

::: raw

<CodeRunner title="Show legend">
    <ShadcnContribution :data="data" showLegend />
    <ShadcnContribution :data="data" :showLegend="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution :data="data" showLegend />
    <ShadcnContribution :data="data" :showLegend="false" />
</template>
```

:::

## Show week

::: raw

<CodeRunner title="Show week">
    <ShadcnContribution :data="data" showWeek />
    <ShadcnContribution :data="data" :showWeek="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution :data="data" showWeek />
    <ShadcnContribution :data="data" :showWeek="false" />
</template>
```

:::

## Show month

::: raw

<CodeRunner title="Show month">
    <ShadcnContribution :data="data" showMonth />
    <ShadcnContribution :data="data" :showMonth="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution :data="data" showMonth />
    <ShadcnContribution :data="data" :showMonth="false" />
</template>
```

:::

## Cell size

::: raw

<CodeRunner title="Cell size">
    <ShadcnContribution :data="data" :cellSize="15" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution :data="data" :cellSize="15" />
</template>
```

:::

## Cell gap

::: raw

<CodeRunner title="Cell gap">
    <ShadcnContribution :data="data" :cellGap="4" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution :data="data" :cellGap="4" />
</template>
```

:::

## Year

::: raw

<CodeRunner title="Year">
    <ShadcnContribution :data="data" :year="2023" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnContribution :data="data" :year="2023" />
</template>
```

:::

## Contribution Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['data', 'data value', 'Array<ContributionOption>', '-', '-'],
        ['colorScheme', 'colorScheme value', 'Array<string>', '\[#ebedf0, #9be9a8, #40c463, #30a14e, #216e39\]', '-'],
        ['yearCount', 'yearCount value', 'number', '1', '-'],
        ['showLegend', 'showLegend value', 'boolean', 'true', '-'],
        ['showWeek', 'showWeek value', 'boolean', 'true', '-'],
        ['showMonth', 'showMonth value', 'boolean', 'true', '-'],
        ['cellSize', 'cellSize value', 'number', '16', '-'],
        ['cellGap', 'cellGap value', 'number', '4', '-'],
        ['year', 'year value', 'number', '-', '-']
    ]">
</ApiTable>

## Contribution Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-select', 'Triggered when on select', 'value: ContributionOption']
    ]">
</ApiTable>

## Contribution Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description', 'Parameters']"
    :columns="[
        ['cell', 'Slot for cell', 'ContributionCellSlotProps']
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

const colorScheme = [
  '#ebedf0',
  '#bfd4f2',
  '#7fa8ed',
  '#4775c9',
  '#254e89'
]

const handleSelect = (data: any) => {
  console.log(`Selected date: ${ data.date }, contributions: ${ data.count }`)
}
</script>
