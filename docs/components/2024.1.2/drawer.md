---
title: Shadcn Drawer
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnDrawer component.

## Usage

<CodeRunner title="Usage">
    Default Value : {{defaultValue}}
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

## API Attributes

<ApiTable title="Drawer Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'Whether the drawer is visible', 'Boolean', 'false', '', ''],
        ['title', 'The title of the drawer', 'String', '-', '', ''],
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
</script>