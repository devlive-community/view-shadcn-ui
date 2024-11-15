---
title: Shadcn Toggle
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnToggle component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnToggle v-model="defaultValue">B</ShadcnToggle>
</CodeRunner>

:::

::: details Show code

```vue
<template>
     <ShadcnToggle v-model="defaultValue">B</ShadcnToggle>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(false)
</script>
```

:::

## Toggle Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['modelValue', 'You can use v-model to bind data in both directions', 'any', '-'],
        ['value', 'The value of the toggle', 'any', '-'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(false)
</script>
