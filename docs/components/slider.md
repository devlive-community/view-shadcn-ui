---
title: Shadcn Slider
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnSlider component.

## Usage

::: raw

<CodeRunner title="Usage">
    Default Value: {{ value }}
    <ShadcnSlider v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSlider v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(50);
</script>
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

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(50);
</script>
```

:::

## Tip

::: raw

<CodeRunner title="Tip">
    <ShadcnSlider v-model="value" tip />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSlider v-model="value" tip />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(50);
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['modelValue', 'Slider value', 'number', '0'],
        ['min', 'Minimum value of the slider', 'number', '0'],
        ['max', 'Maximum value of the slider', 'number', '100'],
        ['step', 'Step value of the slider', 'number', '1'],
        ['tip', 'Display a tooltip', 'boolean', 'false'],
    ]">
</ApiTable>

## Events

<ApiTable title="Events"
    :headers="['Attribute', 'Description', 'Type']"
    :columns="[
        ['on-change', 'Triggered when the value of the slider is changed', 'number'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(50);
</script>
