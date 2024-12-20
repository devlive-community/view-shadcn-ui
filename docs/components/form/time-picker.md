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

## Disabled

::: raw

<CodeRunner title="Disabled">
    <ShadcnTimePicker v-model="value" disabled />
    <ShadcnTimePicker v-model="value" :disabled="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnTimePicker v-model="value" disabled />
    <ShadcnTimePicker v-model="value" :disabled="false" />
</template>
```

:::

## Clearable

::: raw

<CodeRunner title="Clearable">
    <ShadcnTimePicker v-model="value" clearable />
    <ShadcnTimePicker v-model="value" :clearable="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnTimePicker v-model="value" clearable />
    <ShadcnTimePicker v-model="value" :clearable="false" />
</template>
```

:::

## Quick times

::: raw

<CodeRunner title="Quick times">
    <ShadcnTimePicker v-model="value" :quickTimes="['09:00', '12:00', '18:00']" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnTimePicker v-model="value" :quickTimes="['09:00', '12:00', '18:00']" />
</template>
```

:::

## Format

::: raw

<CodeRunner title="Format">
    <ShadcnTimePicker v-model="value" format="HH:mm" />
    <ShadcnTimePicker v-model="value" format="HH:mm:ss" />
    <ShadcnTimePicker v-model="value" format="hh:mm A" />
    <ShadcnTimePicker v-model="value" format="hh:mm:ss A" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnTimePicker v-model="value" format="HH:mm" />
    <ShadcnTimePicker v-model="value" format="HH:mm:ss" />
    <ShadcnTimePicker v-model="value" format="hh:mm A" />
    <ShadcnTimePicker v-model="value" format="hh:mm:ss A" />
</template>
```

:::
## TimePicker Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '', '-'],
        ['placeholder', 'placeholder value', 'string', '-', '-'],
        ['disabled', 'disabled value', 'boolean', 'false', '-'],
        ['clearable', 'clearable value', 'boolean', 'true', '-'],
        ['quickTimes', 'see format', 'string[]', '-', '-'],
        ['format', 'format value', 'HH:mm | HH:mm:ss | hh:mm A | hh:mm:ss A', 'HH:mm', 'HH:mm, HH:mm:ss, hh:mm A, hh:mm:ss A']
    ]">
</ApiTable>

## TimePicker Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when update:modelValue', 'value: string'],
        ['on-change', 'Triggered when on change', 'value: string'],
        ['on-clear', 'Triggered when on clear', '-']
    ]">
</ApiTable>

## TimePicker Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['icon', 'Slot for icon'],
        ['clear', 'Slot for clear']
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
