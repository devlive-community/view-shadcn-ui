---
title: Shadcn Cron
---

# Introduction

This document describes the features and usage of the ShadcnCron component.

Modify by [vue3-vCrontab](https://github.com/dongchacha/vue3-vCrontab)

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnCron v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnCron v-model="value" />
</template>
```

:::
## Cron Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '* * * * * ?', '-']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
