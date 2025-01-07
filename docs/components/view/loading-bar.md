---
title: Shadcn LoadingBar
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnLoadingBar component.

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnLoadingBar v-model="progress"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnLoadingBar v-model="progress"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const progress = ref(50)
</script>
```

:::

## Status

::: raw

<CodeRunner title="Status">
    Default
    <ShadcnLoadingBar v-model="progress" :duration="500"/>
    Error
    <ShadcnLoadingBar v-model="progress" :duration="500" status="error"/>
    Success
    <ShadcnLoadingBar v-model="progress" :duration="500" status="success"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnLoadingBar v-model="progress" :duration="500" status="error"/>
    <ShadcnLoadingBar v-model="progress" :duration="500" status="success"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const progress = ref(50)
</script>
```

:::

## Service

::: raw

<CodeRunner title="Service">
  <div class="space-x-4">
    <ShadcnButton @click="LoadingBar?.start">Start</ShadcnButton>
    <ShadcnButton @click="LoadingBar?.done">Done</ShadcnButton>
    <ShadcnButton type="success" @click="LoadingBar?.success()">Success</ShadcnButton>
    <ShadcnButton type="error" @click="LoadingBar?.error()">Error</ShadcnButton>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="space-x-4">
    <ShadcnButton @click="LoadingBar.start">Start</ShadcnButton>
    <ShadcnButton @click="LoadingBar.done">Done</ShadcnButton>
    <ShadcnButton type="success" @click="LoadingBar.success()">Success</ShadcnButton>
    <ShadcnButton type="error" @click="LoadingBar.error()">Error</ShadcnButton>
  </div>
</template>

<script setup lang="ts">
  import { LoadingBar } from 'view-shadcn-ui'
</script>
```

:::

## LoadingBar Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['progress', 'The value of the loading bar.', 'number', '0', '-'],
        ['height', 'The height of the loading bar.', 'number | string', '2', '-'],
        ['color', 'The color of the loading bar.', 'string', '#2563eb', '-'],
        ['duration', 'The duration of the loading bar.', 'number | string', '300', '-'],
        ['animate', 'Whether to animate the loading bar.', 'Boolean', 'true', '-'],
        ['status', 'The status of the loading bar.', 'string', 'default', 'default | error | success'],
    ]">
</ApiTable>

## LoadingBar Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-complete', 'Triggered when the loading bar completes.', 'void'],
    ]">
</ApiTable>

## LoadingBar Service

<ApiTable title="Service"
    :headers="['Method', 'Description', 'Parameters']"
    :columns="[
        ['start', 'Start the loading bar', '-'],
        ['done', 'Complete the loading bar', 'success | error | default'],
        ['success', 'Complete the loading bar with success status'],
        ['error', 'Complete the loading bar with error status'],
        ['enabledNetwork', 'Enable network status monitoring', 'boolean'],
    ]">
</ApiTable>

<script setup lang="ts">
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
