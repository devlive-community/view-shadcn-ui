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

## Size

::: raw

<CodeRunner title="Size">
    <ShadcnSpace>
      <ShadcnToggle v-model="defaultValue" size="small" value="S">S</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="default" value="D">D</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="large" value="L">L</ShadcnToggle>
    </ShadcnSpace>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSpace>
      <ShadcnToggle v-model="defaultValue" size="small" value="S">S</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="default" value="D">D</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="large" value="L">L</ShadcnToggle>
    </ShadcnSpace>
</template>
```

:::

## Toggle Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'You can use v-model to bind data in both directions', 'any', '-', '-'],
        ['value', 'The value of the toggle', 'any', '-', '-'],
        ['disabled', 'Whether the toggle is disabled', 'boolean', 'false', '-'],
        ['size', 'The size of the toggle', 'string', 'default', 'small | default | large'],
    ]">
</ApiTable>

## Toggle Events

<ApiTable title="Events"
    :headers="['Attribute', 'Description', 'Type']"
    :columns="[
        ['update:modelValue', 'The value of the toggle', 'any'],
        ['on-change', 'Triggered when the value of the toggle is changed', 'any'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(null)
const disabledValue = ref(null)
</script>
