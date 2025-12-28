---
title: 进度条 (Progress)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnProgress` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnProgress v-model="value" :dark="darkMode">Progress</ShadcnProgress>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnProgress v-model="value" :dark="darkMode">Progress</ShadcnProgress>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const value = ref(10)
</script>
```

:::

## 状态 (status)

<CodeRunner title="状态 (status)">
    <div class="space-y-2">
        <ShadcnProgress v-model="value" status="success" :dark="darkMode">Success</ShadcnProgress>
        <ShadcnProgress v-model="value" status="error" :dark="darkMode">Error</ShadcnProgress>
        <ShadcnProgress v-model="value" status="warning" :dark="darkMode">Warning</ShadcnProgress>
        <ShadcnProgress v-model="value" status="info" :dark="darkMode">Info</ShadcnProgress>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnProgress v-model="value" status="success" :dark="darkMode">Success</ShadcnProgress>
    <ShadcnProgress v-model="value" status="error" :dark="darkMode">Error</ShadcnProgress>
    <ShadcnProgress v-model="value" status="warning" :dark="darkMode">Warning</ShadcnProgress>
    <ShadcnProgress v-model="value" status="info" :dark="darkMode">Info</ShadcnProgress>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const value = ref(10)
</script>
```

:::

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
    <div class="space-y-2">
        <ShadcnProgress v-model="value" size="default" :dark="darkMode">Default</ShadcnProgress>
        <ShadcnProgress v-model="value" size="large" :dark="darkMode">Large</ShadcnProgress>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnProgress v-model="value" size="default" :dark="darkMode">Default</ShadcnProgress>
    <ShadcnProgress v-model="value" size="large" :dark="darkMode">Large</ShadcnProgress>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const value = ref(10)
</script>
```

:::

## 显示标签 (show-label)

<CodeRunner title="显示标签 (show-label)">
    <ShadcnProgress v-model="value" size="large" show-label :dark="darkMode">Progress</ShadcnProgress>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnProgress v-model="value" size="large" show-label :dark="darkMode">Progress</ShadcnProgress>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const value = ref(10)
</script>
```

:::

## 液态玻璃效果 (glass)

<CodeRunner title="液态玻璃效果 (glass)">
    <div class="p-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400">
        <div class="p-8 rounded-lg bg-white/50 space-y-4">
            <ShadcnProgress v-model="value" glass>Basic Glass</ShadcnProgress>
            <ShadcnProgress :model-value="75" glass status="success" show-label>Success</ShadcnProgress>
            <ShadcnProgress :model-value="45" glass status="warning" show-label>Warning</ShadcnProgress>
            <ShadcnProgress :model-value="30" glass status="error" show-label>Error</ShadcnProgress>
            <ShadcnProgress v-model="value" glass size="large" show-label>Large</ShadcnProgress>
        </div>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div class="p-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400">
        <div class="p-8 rounded-lg bg-white/50 space-y-4">
            <ShadcnProgress v-model="value" glass>Basic Glass</ShadcnProgress>
            <ShadcnProgress :model-value="75" glass status="success" show-label>Success</ShadcnProgress>
            <ShadcnProgress :model-value="45" glass status="warning" show-label>Warning</ShadcnProgress>
            <ShadcnProgress :model-value="30" glass status="error" show-label>Error</ShadcnProgress>
            <ShadcnProgress v-model="value" glass size="large" show-label>Large</ShadcnProgress>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(60)
</script>
```

:::

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const value = ref(10)
</script>

## 进度条 (Progress) 属性

<ApiTable title="进度条 (Progress) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '详细数据，小于 0 重置为 0，大于 100 重置为 100', 'number', '0', '-'],
        ['status', '组件的状态', 'enum', '-', 'success | error | warning | info'],
        ['size', '组件的尺寸', 'enum', '-', 'default | large'],
        ['showLabel', '是否显示标签, 将显示在组件的内部', 'boolean', 'false', '-'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-'],
        ['dark', '是否启用暗黑模式', 'boolean', 'false', '-'],
    ]">
</ApiTable>