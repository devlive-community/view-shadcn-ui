---
title: Shadcn Rate
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnRate component.

## Usage

<CodeRunner title="Usage">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRate v-model="rate" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## Maximum Value

<CodeRunner title="Maximum Value">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" max="10" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRate v-model="rate" max="10" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## API Attributes

<ApiTable title="Rate Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'Rate value', 'number', '0', '-'],
        ['max', 'Maximum value', 'number', '5', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Rate Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['icon', 'Icon slot'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
