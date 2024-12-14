---
title: Shadcn LoadingBar
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnLoadingBar component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnLoadingBar v-model="progress"/>
</CodeRunner>

:::

::: details Show code

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

::: details Show code

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
    <ShadcnButton @click="LoadingBar.start">Start</ShadcnButton>
    <ShadcnButton @click="LoadingBar.done">Done</ShadcnButton>
    <ShadcnButton type="success" @click="LoadingBar.success()">Success</ShadcnButton>
    <ShadcnButton type="error" @click="LoadingBar.error()">Error</ShadcnButton>
  </div>
</CodeRunner>

:::

::: details Show code

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
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
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
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-complete', 'Triggered when the loading bar completes.', 'void'],
    ]">
</ApiTable>

<script setup lang="ts">
import {ref} from "vue"
import { LoadingBar } from 'view-shadcn-ui' 

const progress = ref(50)

setInterval(() => {
  progress.value = Math.floor(Math.random() * 100)
}, 1000)
</script>
