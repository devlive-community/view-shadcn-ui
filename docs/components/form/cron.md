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
    <ShadcnCron v-model="value" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCron v-model="value" />
</template>
```

:::

## 液态玻璃效果 (glass)

::: raw

<CodeRunner title="液态玻璃效果">
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
        <ShadcnCron v-model="glassValue" glass :dark="darkMode" />
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
        <ShadcnCron v-model="cronValue" glass :dark="isDark" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)
const cronValue = ref('0 0 12 * * ?')
</script>
```

:::

## 计划任务 (Cron) 属性

<ApiTable title="计划任务 (Cron) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '计划任务表达式', 'string', '* * * * * ?', '-'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-']
    ]">
</ApiTable>


<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const value = ref('')
const glassValue = ref('0 0 12 * * ?')
</script>