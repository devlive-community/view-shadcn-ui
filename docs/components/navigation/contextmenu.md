---
title: Shadcn Context Menu
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnContextMenu component.

- ShadcnContextMenu
- ShadcnContextMenuItem
- ShadcnContextMenuSub

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

::: details 查看代码

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

## Sub menu

::: raw

<CodeRunner title="Sub menu">
  <ShadcnContextMenu v-model="subMenu">
    <template #trigger>
      <div class="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
        Right click in this area to show menu
      </div>
    </template>
    <ShadcnContextMenuItem @click="onItemClick('edit')">Edit</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('delete')">Delete</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
    <ShadcnContextMenuSub label="More actions">
      <ShadcnContextMenuItem @click="onItemClick('move')">Move</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('print')">Print</ShadcnContextMenuItem>
      <ShadcnContextMenuSub>
        <template #title>
          <ShadcnIcon icon="Save" class="mr-2"/>
          More options
        </template>
        <ShadcnContextMenuItem @click="onItemClick('duplicate')">Duplicate</ShadcnContextMenuItem>
        <ShadcnContextMenuItem @click="onItemClick('duplicate-with-images-and-text')">Duplicate with images and text</ShadcnContextMenuItem>
      </ShadcnContextMenuSub>
    </ShadcnContextMenuSub>
    <ShadcnContextMenuItem @click="onItemClick('print')">Print</ShadcnContextMenuItem>
  </ShadcnContextMenu>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnContextMenu v-model="showMenu">
    <template #trigger>
      <div class="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
        Right click in this area to show menu
      </div>
    </template>
    <ShadcnContextMenuItem @click="onItemClick('edit')">Edit</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('delete')">Delete</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
    <ShadcnContextMenuSub label="More actions">
      <ShadcnContextMenuItem @click="onItemClick('move')">Move</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @click="onItemClick('print')">Print</ShadcnContextMenuItem>
      <ShadcnContextMenuSub>
        <template #title>
          <ShadcnIcon icon="Save" class="mr-2"/>
          More options
        </template>
        <ShadcnContextMenuItem @click="onItemClick('duplicate')">Duplicate</ShadcnContextMenuItem>
        <ShadcnContextMenuItem @click="onItemClick('duplicate-with-images-and-text')">Duplicate with images and text</ShadcnContextMenuItem>
      </ShadcnContextMenuSub>
    </ShadcnContextMenuSub>
    <ShadcnContextMenuItem @click="onItemClick('print')">Print</ShadcnContextMenuItem>
  </ShadcnContextMenu>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

const onItemClick = (action) => console.log(`Clicked: ${action}`)
</script>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled">
  <ShadcnContextMenu v-model="disabledMenu">
    <template #trigger>
      <div class="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
        Right click in this area to show menu
      </div>
    </template>
    <ShadcnContextMenuItem disabled @on-click="onItemClick('edit')">Edit</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @on-click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
    <ShadcnContextMenuSub label="More actions">
      <ShadcnContextMenuItem @on-click="onItemClick('move')">Move</ShadcnContextMenuItem>
    </ShadcnContextMenuSub>
    <ShadcnContextMenuSub disabled label="Disabled">
      <ShadcnContextMenuItem @on-click="onItemClick('duplicate')">Duplicate</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @on-click="onItemClick('duplicate-with-images-and-text')">Duplicate with images and text</ShadcnContextMenuItem>
    </ShadcnContextMenuSub>
    <ShadcnContextMenuItem @on-click="onItemClick('print')">Print</ShadcnContextMenuItem>
  </ShadcnContextMenu>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnContextMenu v-model="showMenu">
    <template #trigger>
      <div class="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
        Right click in this area to show menu
      </div>
    </template>
    <ShadcnContextMenuItem disabled @on-click="onItemClick('edit')">Edit</ShadcnContextMenuItem>
    <ShadcnContextMenuItem @on-click="onItemClick('copy')">Copy</ShadcnContextMenuItem>
    <ShadcnContextMenuSub label="More actions">
      <ShadcnContextMenuItem @on-click="onItemClick('move')">Move</ShadcnContextMenuItem>
    </ShadcnContextMenuSub>
    <ShadcnContextMenuSub disabled label="Disabled">
      <ShadcnContextMenuItem @on-click="onItemClick('duplicate')">Duplicate</ShadcnContextMenuItem>
      <ShadcnContextMenuItem @on-click="onItemClick('duplicate-with-images-and-text')">Duplicate with images and text</ShadcnContextMenuItem>
    </ShadcnContextMenuSub>
    <ShadcnContextMenuItem @on-click="onItemClick('print')">Print</ShadcnContextMenuItem>
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
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['modelValue', 'The model value of the context menu', 'boolean', 'false'],
        ['position', 'The position of the context menu', '{x: number, y: number}', 'trigger position'],
    ]">
</ApiTable>

<br />

<ApiTable title="Context Menu Item Props"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['disabled', 'Whether the context menu item is disabled', 'boolean', 'false'],
    ]">
</ApiTable>

<br />

<ApiTable title="Context Menu Sub Props"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['label', 'The label of the context menu sub item', 'string', '-'],
        ['disabled', 'Whether the context menu sub item is disabled', 'boolean', 'false'],
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
    :headers="['插槽', '描述']" 
    :columns="[ 
        ['trigger', 'The trigger slot of the context menu'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)
const subMenu = ref(false)
const disabledMenu = ref(false)

const onItemClick = (action) => console.log(`Clicked: ${action}`)
</script>
