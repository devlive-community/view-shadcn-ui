---
title: Shadcn DatePicker
---

# Introduction

This document describes the features and usage of the ShadcnDatePicker component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnDatePicker v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnDatePicker v-model="value" />
</template>
```

:::

## Placeholder

::: raw

<CodeRunner title="Placeholder">
    <ShadcnDatePicker v-model="value" placeholder="Enter string" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnDatePicker v-model="value" placeholder="Enter string" />
</template>
```

:::
## DatePicker Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'modelValue value', 'Date', '-', '-'],
        ['placeholder', 'placeholder value', 'string', '-', '-']
    ]">
</ApiTable>

## DatePicker Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when update:modelValue', 'value: Date'],
        ['on-change', 'Triggered when on change', 'value: Date']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
