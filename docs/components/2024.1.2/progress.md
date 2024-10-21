---
title: Shadcn Progress
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnProgress component.

## Usage

<CodeRunner title="Usage">
    <ShadcnProgress v-model="value">Progress</ShadcnProgress>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnProgress v-model="value">Progress</ShadcnProgress>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(10)
</script>
```

:::

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(10)
</script>

## API Attributes

<ApiTable title="Progress Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'Detailed data, support port binding, less than 0 is reset to 0, greater than 100 is reset to 100.', 'number', '0', '—', '—'],
    ]">
</ApiTable>


