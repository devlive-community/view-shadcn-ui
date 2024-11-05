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


<script setup lang="ts">
import { ref } from 'vue'

const basicValue = ref(0)
</script>