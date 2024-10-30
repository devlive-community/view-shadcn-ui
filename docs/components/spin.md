---
title: Shadcn Spin
---

# Inroduction

This document is mainly used to describe some features and usage of the ShadcnSpin component.

## Usage

::: raw

<CodeRunner title="Usage">
    Default Value: {{ value }}
    <ShadcnSpin v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSpin v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(false);
</script>
```

:::

## Type

::: raw

<CodeRunner title="Type">
    <ShadcnSpin type="primary"/>
    <ShadcnSpin type="success"/>
    <ShadcnSpin type="error"/>
    <ShadcnSpin type="warning"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSpin type="primary"/>
    <ShadcnSpin type="success"/>
    <ShadcnSpin type="error"/>
    <ShadcnSpin type="warning"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'Spin value', 'boolean', 'false', '-'],
        ['type', 'Spin type', 'enum', 'primary', 'primary | success | warning | error'],
    ]">
</ApiTable>

## Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-change', 'Spin value', 'boolean'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(true);
</script>
