---
title: Shadcn Select
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnSelect and ShadcnSelectOption component.

## Usage

<CodeRunner title="Usage">
    <p>Select Value: {{ defaultSelect }}</p>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt' },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## API Attributes

<ApiTable title="Select Props"
    :headers="['Attribute', 'Description', 'Type', 'Default']"
    :columns="[
        ['modelValue', 'The value of the select', 'Any', '-'],
        ['options', 'The options of the select, format is { label: string, value: any }', 'Array', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Select Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-change', 'Triggered when the value of the select is changed', 'any'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt' },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
