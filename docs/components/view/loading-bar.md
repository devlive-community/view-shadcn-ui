---
title: 加载条 (Loading Bar)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnLoadingBar` 组件的一些特性和使用方法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnLoadingBar v-model="progress" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnLoadingBar v-model="progress" :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import {ref} from "vue"

const progress = ref(50)
</script>
```

:::

## 状态 (status)

::: raw

<CodeRunner title="状态 (status)">
    Default
    <ShadcnLoadingBar v-model="progress" :duration="500" :dark="darkMode" />
    Error
    <ShadcnLoadingBar v-model="progress" :duration="500" status="error" :dark="darkMode" />
    Success
    <ShadcnLoadingBar v-model="progress" :duration="500" status="success" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnLoadingBar v-model="progress" :duration="500" status="error" :dark="darkMode" />
    <ShadcnLoadingBar v-model="progress" :duration="500" status="success" :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import {ref} from "vue"

const progress = ref(50)
</script>
```

:::

## 服务调用 (service)

::: raw

<CodeRunner title="服务调用 (service)">
  <div class="space-x-4">
    <ShadcnButton @click="LoadingBar?.start" :dark="darkMode">Start</ShadcnButton>
    <ShadcnButton @click="LoadingBar?.done" :dark="darkMode">Done</ShadcnButton>
    <ShadcnButton type="success" @click="LoadingBar?.success()" :dark="darkMode">Success</ShadcnButton>
    <ShadcnButton type="error" @click="LoadingBar?.error()" :dark="darkMode">Error</ShadcnButton>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="space-x-4">
    <ShadcnButton @click="LoadingBar.start" :dark="darkMode">Start</ShadcnButton>
    <ShadcnButton @click="LoadingBar.done" :dark="darkMode">Done</ShadcnButton>
    <ShadcnButton type="success" @click="LoadingBar.success()" :dark="darkMode">Success</ShadcnButton>
    <ShadcnButton type="error" @click="LoadingBar.error()" :dark="darkMode">Error</ShadcnButton>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

  import { LoadingBar } from 'view-shadcn-ui'
</script>
```

:::

## 加载条 (Loading Bar) 属性

<ApiTable title="加载条 (Loading Bar) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['progress', '加载条的进度', 'number', '0', '-'],
        ['height', '加载条的高度', 'number | string', '2', '-'],
        ['color', '加载条的颜色', 'string', '#2563eb', '-'],
        ['duration', '加载条的持续时间', 'number | string', '300', '-'],
        ['animate', '是否启用加载条动画', 'Boolean', 'true', '-'],
        ['status', '加载条的状态', 'string', 'default', 'default | error | success'],
    ]">
</ApiTable>

## 加载条 (Loading Bar) 事件

<ApiTable title="加载条 (Loading Bar) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-complete', '加载条完成时触发', 'void'],
    ]">
</ApiTable>

## 加载条服务 (Loading Bar Service)

<ApiTable title="加载条服务 (Loading Bar Service)"
    :headers="['方法', '描述', '回调参数']"
    :columns="[
        ['start', '开始加载', '-'],
        ['done', '完成加载', 'success | error | default'],
        ['success', '成功完成加载', '-'],
        ['error', '失败完成加载', '-'],
        ['enabledNetwork', '是否启用网络监控', 'boolean'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref, onMounted, onBeforeUnmount, shallowRef } from "vue"

const progress = ref(50)
let timer: NodeJS.Timer | null = null
const LoadingBar = shallowRef()

onMounted(async () => {
  const module = await import('view-shadcn-ui')
  LoadingBar.value = module.LoadingBar

  timer = setInterval(() => {
    progress.value = Math.floor(Math.random() * 100)
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>