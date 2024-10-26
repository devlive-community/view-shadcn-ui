---
title: Shadcn Drawer
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnDrawer component.

## Usage

<CodeRunner title="Usage">
    <ShadcnButton @click="defaultValue = !defaultValue">Open</ShadcnButton>
    <ShadcnDrawer v-model="defaultValue" title="Title">Content</ShadcnDrawer>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnButton @click="defaultValue = !defaultValue">Open</ShadcnButton>
  <ShadcnDrawer v-model="defaultValue" title="Title">Content</ShadcnDrawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(false)
</script>
```

:::

## Closeable

<CodeRunner title="Closeable">
    <ShadcnButton @click="closableValue = !closableValue">Open</ShadcnButton>
    <ShadcnDrawer v-model="closableValue" closable title="Title">Content</ShadcnDrawer>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnDrawer closable title="Title">Content</ShadcnDrawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(false)
</script>
```

:::

## Mask Closable

<CodeRunner title="Mask Closable">
    <ShadcnButton @click="maskClosableValue = !maskClosableValue">Open</ShadcnButton>
    <ShadcnDrawer v-model="maskClosableValue" mask-closable title="Title">Content</ShadcnDrawer>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnDrawer v-model="defaultValue" mask-closable title="Title">Content</ShadcnDrawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(false)
</script>
```

:::

## Position

<CodeRunner title="Position">
        <ShadcnSpace>
      <ShadcnButton @click="topValue = !topValue">Top</ShadcnButton>
      <ShadcnButton @click="buttomValue = !buttomValue">Buttom</ShadcnButton>
      <ShadcnButton @click="leftValue = !leftValue">Left</ShadcnButton>
      <ShadcnButton @click="rightValue = !rightValue">Right</ShadcnButton>
    </ShadcnSpace>
    <ShadcnDrawer v-model="topValue" title="Top" position="top"/>
    <ShadcnDrawer v-model="buttomValue" title="Buttom" position="bottom"/>
    <ShadcnDrawer v-model="leftValue" title="Left" position="left"/>
    <ShadcnDrawer v-model="rightValue" title="Right" position="right"/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnSpace>
    <ShadcnButton @click="topValue = !topValue">Top</ShadcnButton>
    <ShadcnButton @click="buttomValue = !buttomValue">Buttom</ShadcnButton>
    <ShadcnButton @click="leftValue = !leftValue">Left</ShadcnButton>
    <ShadcnButton @click="rightValue = !rightValue">Right</ShadcnButton>
  </ShadcnSpace>
  <ShadcnDrawer v-model="topValue" title="Top" position="top"/>
  <ShadcnDrawer v-model="buttomValue" title="Buttom" position="bottom"/>
  <ShadcnDrawer v-model="leftValue" title="Left" position="left"/>
  <ShadcnDrawer v-model="rightValue" title="Right" position="right"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const topValue = ref(false)
const buttomValue = ref(false)
const leftValue = ref(false)
const rightValue = ref(false)
</script>
```

:::

## API Attributes

<ApiTable title="Drawer Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'Whether the drawer is visible', 'Boolean', 'false', '', ''],
        ['title', 'The title of the drawer', 'String', '-', '', ''],
        ['closable', 'Whether the drawer can be closed', 'Boolean', 'false', '', ''],
        ['maskClosable', 'Whether the mask can be clicked to close the drawer', 'Boolean', 'false', '', ''],
        ['position', 'The position of the drawer', 'String', 'bottom', '', 'top, bottom, left, right'],
    ]">
</ApiTable>

<br />

<ApiTable title="Drawer Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-close', 'Triggered when the drawer is closed', 'boolean'],
    ]">
</ApiTable>

<br />

<ApiTable title="Drawer Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Drawer content'],
        ['header', 'Drawer header'],
        ['footer', 'Drawer footer'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(false)
const closableValue = ref(false)
const maskClosableValue = ref(false)
const topValue = ref(false)
const buttomValue = ref(false)
const leftValue = ref(false)
const rightValue = ref(false)
</script>