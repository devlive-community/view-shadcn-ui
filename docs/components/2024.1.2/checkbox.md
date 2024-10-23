---
title: Shadcn Checkbox
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnCheckbox component.

## Usage

<CodeRunner title="Usage">
    <p>Checkbox Value: {{ checked }}</p>
    <ShadcnCheckbox v-model="checked" value="Vue">Vue</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Nuxt">Nuxt</ShadcnCheckbox>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Vue">Vue</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Nuxt">Nuxt</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Vue')
</script>
```

:::

## API Attributes

<ApiTable title="Checkbox Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'You can use v-model to bind data in both directions', 'Any', '-', '-', '-'],
        ['value', 'The value of the checkbox', 'Any', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Checkbox Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-change', 'Triggered when the value of the checkbox is changed', 'boolean'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Vue')
</script>
