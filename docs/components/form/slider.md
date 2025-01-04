---
title: Shadcn Slider
---

# Introduction

This document describes the features and usage of the ShadcnSlider component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnSlider v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSlider v-model="value" />
</template>
```

:::

## Min

::: raw

<CodeRunner title="Min">
    <ShadcnSlider v-model="value" :min="0" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSlider v-model="value" :min="0" />
</template>
```

:::

## Max

::: raw

<CodeRunner title="Max">
    <ShadcnSlider v-model="value" :max="10" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnSlider v-model="value" :max="10" />
</template>
```

:::

## Step

::: raw

<CodeRunner title="Step">
    <ShadcnSlider v-model="value" :step="10" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnSlider v-model="value" :step="10" />
</template>
```

:::

## Show tip

::: raw

<CodeRunner title="Show tip">
    <ShadcnSlider v-model="value" showTip />
    <ShadcnSlider v-model="value" :showTip="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSlider v-model="value" showTip />
    <ShadcnSlider v-model="value" :showTip="false" />
</template>
```

:::

## Show step

::: raw

<CodeRunner title="Show step">
    <ShadcnSlider v-model="value" :step="10" showStep />
    <ShadcnSlider v-model="value" :showStep="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSlider v-model="value" showStep />
    <ShadcnSlider v-model="value" :showStep="false" />
</template>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled">
    <ShadcnSlider v-model="value" disabled />
    <ShadcnSlider v-model="value" :disabled="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSlider v-model="value" disabled />
    <ShadcnSlider v-model="value" :disabled="false" />
</template>
```

:::

## Type

::: raw

<CodeRunner title="Type">
    <ShadcnSlider v-model="value" type="primary" />
    <ShadcnSlider v-model="value" type="warning" />
    <ShadcnSlider v-model="value" type="success" />
    <ShadcnSlider v-model="value" type="error" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnSlider v-model="value" type="primary" />
  <ShadcnSlider v-model="value" type="warning" />
  <ShadcnSlider v-model="value" type="success" />
  <ShadcnSlider v-model="value" type="error" />
</template>
```

:::
## Slider Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'modelValue value', 'number | number\[\]', '-', 'number, number\[\]'],
        ['min', 'min value', 'number', '0', 'number'],
        ['max', 'max value', 'number', '100', 'number'],
        ['step', 'step value', 'number', '1', 'number'],
        ['showTip', 'showTip value', 'boolean', 'false', '-'],
        ['showStep', 'showStep value', 'boolean', 'false', '-'],
        ['disabled', 'disabled value', 'boolean', 'false', '-'],
        ['type', 'type value', 'keyof typeof ButtonBackgroundType', 'primary', '-']
    ]">
</ApiTable>

## Slider Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when update:modelValue', 'value: number | number\[\]'],
        ['on-change', 'Triggered when on change', 'value: number | number\[\]']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
