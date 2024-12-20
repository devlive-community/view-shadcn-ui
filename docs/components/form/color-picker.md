---
title: Shadcn ColorPicker
---

# Introduction

This document describes the features and usage of the ShadcnColorPicker component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnColorPicker v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" />
</template>
```

:::

## Color

::: raw

<CodeRunner title="Color">
    <ShadcnColorPicker v-model="value" color="undefined" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" color="undefined" />
</template>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled">
    <ShadcnColorPicker v-model="value" disabled />
    <ShadcnColorPicker v-model="value" :disabled="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" disabled />
    <ShadcnColorPicker v-model="value" :disabled="false" />
</template>
```

:::

## Readonly

::: raw

<CodeRunner title="Readonly">
    <ShadcnColorPicker v-model="value" readonly />
    <ShadcnColorPicker v-model="value" :readonly="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" readonly />
    <ShadcnColorPicker v-model="value" :readonly="false" />
</template>
```

:::
## ColorPicker Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '-', '-'],
        ['color', 'color value', 'string', '-', '-'],
        ['disabled', 'disabled value', 'boolean', 'false', '-'],
        ['readonly', 'readonly value', 'boolean', 'false', '-']
    ]">
</ApiTable>

## ColorPicker Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when update:modelValue', 'value: string'],
        ['on-change', 'Triggered when on change', 'value: string']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
