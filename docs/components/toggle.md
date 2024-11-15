---
title: Shadcn Toggle
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnToggle component.

## Usage

::: raw

<CodeRunner title="Usage">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggle v-model="defaultValue" value="B">B</ShadcnToggle>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggle v-model="defaultValue" value="B">B</ShadcnToggle>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(null)
</script>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled">
    <ShadcnToggle v-model="defaultValue" value="B">B</ShadcnToggle>
    <ShadcnToggle v-model="disabledValue" disabled value="D">D</ShadcnToggle>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnToggle value="B">B</ShadcnToggle>
    <ShadcnToggle disabled value="D">D</ShadcnToggle>
</template>
```

:::

## Toggle Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['modelValue', 'You can use v-model to bind data in both directions', 'any', '-'],
        ['value', 'The value of the toggle', 'any', '-'],
        ['disabled', 'Whether the toggle is disabled', 'boolean', 'false'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(null)
const disabledValue = ref(null)
</script>
