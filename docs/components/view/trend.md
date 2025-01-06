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

::: details 查看代码

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

::: details 查看代码

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

::: details 查看代码

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
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['value', 'The value of the trend, if > 0, rise, if < 0, descend', 'number', '0', '-', '-'],
        ['reverse', 'Reverse the trend direction', 'boolean', 'false', '-', '-'],
        ['text-color', 'Text color', 'boolean', 'false', '-', '-'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', 'Value slot'],
        ['rise', 'Rise slot'],
        ['descend', 'Descend slot'],
    ]">
</ApiTable>
