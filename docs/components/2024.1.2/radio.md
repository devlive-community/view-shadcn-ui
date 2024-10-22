---
title: Shadcn Radio
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnRadio component.

## Usage

<CodeRunner title="Usage">
    <ShadcnRadio v-model="checked" value="ON">ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF">OFF</ShadcnRadio>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRadio v-model="checked" value="ON">ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF">OFF</ShadcnRadio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('ON')
</script>
```

:::

## API Attributes

<ApiTable title="Radio Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'The value of the radio', 'Boolean', 'false', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Radio Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when the value of the radio is changed', 'boolean'],
        ['on-change', 'Triggered when the value of the radio is changed', 'boolean'],
    ]">
</ApiTable>

<br />

<ApiTable title="Radio Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['open', 'Open label'],
        ['close', 'Close label'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('ON')
</script>
