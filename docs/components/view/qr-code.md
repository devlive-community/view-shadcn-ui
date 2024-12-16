---
title: Shadcn QrCode
---

# Introduction

This document describes the features and usage of the ShadcnQrCode component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnQrCode v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnQrCode v-model="value" />
</template>
```

:::

## Size

::: raw

<CodeRunner title="Size">
    <ShadcnQrCode v-model="value" :size="187" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnQrCode v-model="value" :size="187" />
</template>
```

:::

## Padding

::: raw

<CodeRunner title="Padding">
    <ShadcnQrCode v-model="value" :padding="40" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnQrCode v-model="value" :padding="40" />
</template>
```

:::

## Level

::: raw

<CodeRunner title="Level">
    <ShadcnQrCode v-model="value" level="L" />
    <ShadcnQrCode v-model="value" level="M" />
    <ShadcnQrCode v-model="value" level="Q" />
    <ShadcnQrCode v-model="value" level="H" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnQrCode v-model="value" level="L" />
    <ShadcnQrCode v-model="value" level="M" />
    <ShadcnQrCode v-model="value" level="Q" />
    <ShadcnQrCode v-model="value" level="H" />
</template>
```

:::

## Background

::: raw

<CodeRunner title="Background">
    <ShadcnQrCode v-model="value" background="#a90c71" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnQrCode v-model="value" background="#a90c71" />
</template>
```

:::

## Foreground

::: raw

<CodeRunner title="Foreground">
    <ShadcnQrCode v-model="value" foreground="#88aa70" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnQrCode v-model="value" foreground="#88aa70" />
</template>
```

:::

## Rounded

::: raw

<CodeRunner title="Rounded">
    <ShadcnQrCode v-model="value" rounded="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnQrCode v-model="value" rounded="false" />
</template>
```

:::
## QrCode Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '-', '-'],
        ['size', 'size value', 'number', '200', '-'],
        ['padding', 'padding value', 'number', '0', '-'],
        ['level', 'level value', 'L | M | Q | H', 'M', 'L, M, Q, H'],
        ['background', 'background value', 'string', '#ffffff', '-'],
        ['foreground', 'foreground value', 'string', '#000000', '-'],
        ['rounded', 'rounded value', 'boolean', 'false', '-']
    ]">
</ApiTable>

## QrCode Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-complete', 'Triggered when on complete', '-']
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('Hello View Shadcn UI')
</script>
