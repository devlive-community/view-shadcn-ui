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

::: details 查看代码

```vue
<template>
    <ShadcnCron v-model="value" />
</template>
```

:::
## Cron Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '* * * * * ?', '-']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
