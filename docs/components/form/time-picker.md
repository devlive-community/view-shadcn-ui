---
title: Shadcn TimePicker
---

# Introduction

This document describes the features and usage of the ShadcnTimePicker component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnTimePicker v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnTimePicker v-model="value" />
</template>
```

:::

## Placeholder

::: raw

<CodeRunner title="Placeholder">
    <ShadcnTimePicker v-model="value" placeholder="Enter string" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnTimePicker v-model="value" placeholder="Enter string" />
</template>
```

:::
## TimePicker Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '', '-'],
        ['placeholder', 'placeholder value', 'string', '-', '-']
    ]">
</ApiTable>

## TimePicker Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when update:modelValue', 'value: string'],
        ['on-change', 'Triggered when on change', 'value: string']
    ]">
</ApiTable>

## TimePicker Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['icon', 'Slot for icon']
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
