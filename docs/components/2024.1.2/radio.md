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

## Disabled

<CodeRunner title="Disabled">
    <ShadcnRadio v-model="checked" value="ON" disabled>ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF">OFF</ShadcnRadio>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRadio v-model="checked" value="ON" disabled>ON</ShadcnRadio>
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
        ['modelValue', 'The value of the radio', 'Any', '-', '-', '-'],
        ['value', 'The value of the radio', 'Any', '-', '-', '-'],
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
        ['label', 'Radio label'],
        ['default', 'Radio label'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('ON')
</script>
