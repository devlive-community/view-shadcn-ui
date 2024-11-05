---
title: Shadcn Number
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnNumber component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnNumber v-model="basicValue" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnNumber v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## Size

::: raw

<CodeRunner title="Size">
    <div class="space-y-2">
        <ShadcnNumber v-model="basicValue" size="small" />
        <ShadcnNumber v-model="basicValue" size="default" />
        <ShadcnNumber v-model="basicValue" size="large" />
    </div>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnNumber v-model="value" size="small" />
    <ShadcnNumber v-model="value" size="default" />
    <ShadcnNumber v-model="value" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## Type

::: raw

<CodeRunner title="Type">
    <div class="space-y-2">
        <ShadcnNumber v-model="value" size="small" type="primary"/>
        <ShadcnNumber v-model="value" size="default" type="warning"/>
        <ShadcnNumber v-model="value" size="large" type="success"/>
        <ShadcnNumber v-model="value" size="large" type="error"/>
    </div>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnNumber v-model="value" size="small" type="primary"/>
    <ShadcnNumber v-model="value" size="default" type="warning"/>
    <ShadcnNumber v-model="value" size="large" type="success"/>
    <ShadcnNumber v-model="value" size="large" type="error"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## Props

<ApiTable title="Number Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'Number value', 'number', '-', '-'],
        ['size', 'Size of the number', 'string', 'default', 'small | default | large'],
        ['type', 'Type of the number', 'string', 'default', 'primary | warning | success | error'],
    ]">
</ApiTable>

## Events

<ApiTable title="Number Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-change', 'Emitted when the number value changes', 'number'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const basicValue = ref(0)
</script>