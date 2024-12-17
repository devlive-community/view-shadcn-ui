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

## Reverse

::: raw

<CodeRunner title="Reverse">
    <ShadcnTrend :value="10" reverse />
    <ShadcnTrend :value="-10" reverse />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnTrend :value="10" reverse />
    <ShadcnTrend :value="-10" reverse />
</template>

<script setup lang="ts">
</script>
```

:::

## Text Color

::: raw

<CodeRunner title="Text Color">
    <ShadcnTrend :value="10" text-color/>
    <ShadcnTrend :value="-10" text-color/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnTrend :value="10" text-color/>
    <ShadcnTrend :value="-10" text-color/>
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
        ['reverse', 'Reverse the trend direction', 'boolean', 'false', '-', '-'],
        ['text-color', 'Text color', 'boolean', 'false', '-', '-'],
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
