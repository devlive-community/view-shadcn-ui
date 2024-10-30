---
title: Shadcn Trend
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnTrend component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnTrend :value="10" />
    <ShadcnTrend :value="-10" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnTrend :value="10" />
    <ShadcnTrend :value="-10" />
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['value', 'The value of the trend, if > 0, rise, if < 0, descend', 'number', '0', '-', '-'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Value slot'],
        ['rise', 'Rise slot'],
        ['descend', 'Descend slot'],
    ]">
</ApiTable>
