---
title: 计划任务 (Cron)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnCron` 组件的特性和用法。

基于 [vue3-vCrontab](https://github.com/dongchacha/vue3-vCrontab) 修改

## 用法

::: raw

<CodeRunner title="用法">
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

## 计划任务 (Cron) 属性

<ApiTable title="计划任务 (Cron) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '计划任务表达式', 'string', '* * * * * ?', '-']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>