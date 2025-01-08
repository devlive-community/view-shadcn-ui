---
title: 右键菜单 (Contextmenu)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnContextMenu` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
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

## 子菜单 (Sub menu)

::: raw

<CodeRunner title="子菜单 (Sub menu)">
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

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
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

## 右键菜单 (Contextmenu) 属性

<ApiTable title="右键菜单 (Contextmenu) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['modelValue', '右键菜单的值', 'boolean', 'false'],
        ['position', '右键菜单的位置', '{x: number, y: number}', 'trigger position'],
    ]">
</ApiTable>

## 右键菜单项 (Contextmenu Item) 属性

<ApiTable title="右键菜单项 (Contextmenu Item) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['disabled', '右键菜单项是否处于禁用状态', 'boolean', 'false'],
    ]">
</ApiTable>

## 右键菜单子项 (Contextmenu Sub) 属性

<ApiTable title="右键菜单子项 (Contextmenu Sub) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['label', '右键菜单子项的标签', 'string', '-'],
        ['disabled', '右键菜单子项是否处于禁用状态', 'boolean', 'false'],
    ]">
</ApiTable>

## 右键菜单 (Contextmenu) 事件

<ApiTable title="右键菜单 (Contextmenu) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', '更新右键菜单的值', 'boolean'],
        ['on-open', '打开右键菜单时发出', '-'],
        ['on-close', '关闭右键菜单时发出', '-'],
    ]">
</ApiTable>

## 右键菜单项 (Contextmenu Item) 事件

<ApiTable title="右键菜单项 (Contextmenu Item) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-click', '点击右键菜单项时发出', '-'],
    ]">
</ApiTable>

## 右键菜单 (Contextmenu) 插槽

<ApiTable title="右键菜单 (Contextmenu) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[ 
        ['trigger', '触发右键菜单的元素'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)
const subMenu = ref(false)
const disabledMenu = ref(false)

const onItemClick = (action) => console.log(`Clicked: ${action}`)
</script>