---
title: Shadcn Page
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnPage component.

## Usage

<CodeRunner title="Usage">
    Default Page : {{defaultValue}}
    <ShadcnPage v-model="defaultValue" total="100"/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnPage total="100"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## API Attributes

<ApiTable title="Page Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'The current page number', 'Number | String', '1', ''],
        ['total', 'The total number of pages', 'Number | String', '100', ''],
    ]">
</ApiTable>

<br />

<ApiTable title="Page Events"
    :headers="['Event', 'Description', 'Parameters']"
    :columns="[
        ['on-change', 'Triggered when the page number is changed', 'Number'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
