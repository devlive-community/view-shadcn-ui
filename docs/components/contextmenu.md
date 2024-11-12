---
title: Shadcn Context Menu
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnContextMenu component.

- ShadcnContextMenu
- ShadcnContextMenuItem

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnContextMenu v-model="showMenu">
      <template #trigger>
        <div class="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
          Right click in this area to show menu
        </div>
      </template>
      <ShadcnContextMenuItem @click="onItemClick('edit')">Edit</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('delete')">Delete</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('share')">Share</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('move')">Move</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('print')">Print</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('duplicate')">Duplicate</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('duplicate-with-images-and-text')">Duplicate with images and text</ShadcnContextMenuItem>
    </ShadcnContextMenu>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnContextMenu v-model="showMenu">
    <template #trigger>
      <div class="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        Right click in this area to show menu
      </div>
    </template>

    <ShadcnContextMenuItem @click="onItemClick('edit')">Edit</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('delete')">Delete</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('share')">Share</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('move')">Move</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('print')">Print</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('duplicate')">Duplicate</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('duplicate-with-images-and-text')">Duplicate with images and text</ShadcnContextMenuItem>
  </ShadcnContextMenu>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

const onItemClick = (action) => console.log(`Clicked: ${action}`)
</script>
```

:::

## Context Menu Props

<ApiTable title="Context Menu Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'The model value of the context menu', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## Context Menu Events

<ApiTable title="Context Menu Events"
    :headers="['Event', 'Description', 'Parameters']"
    :columns="[
        ['update:modelValue', 'Update the model value of the context menu', 'boolean'],
        ['on-open', 'Emit when the context menu is opened', '-'],
        ['on-close', 'Emit when the context menu is closed', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Context Menu Item Events"
    :headers="['Event', 'Description', 'Parameters']"
    :columns="[
        ['on-click', 'Emit when the context menu item is clicked', '-'],
    ]">
</ApiTable>

## Context Menu Slots

<ApiTable title="Context Menu Slots"
    :headers="['Slot', 'Description']"
    :columns="[ 
        ['trigger', 'The trigger slot of the context menu'],
    ]">
</ApiTable>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

const onItemClick = (action) => console.log(`Clicked: ${action}`)
</script>
