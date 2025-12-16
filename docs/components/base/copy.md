---
title: 复制 (Copy)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnCopy` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnCopy text="Hello Shadcn UI" :dark="darkMode"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCopy text="Hello Shadcn UI"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 提示 (tooltip)

::: raw

<CodeRunner title="提示">
    <div class="flex items-center gap-2">
        <span>显示提示</span>
        <ShadcnCopy text="Hello Shadcn UI" :dark="darkMode"/>
    </div>
    <div class="flex items-center gap-2">
        <span>不显示提示</span>
        <ShadcnCopy text="Hello Shadcn UI" :tooltip="false" :dark="darkMode"/>
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCopy text="Hello Shadcn UI"/>
    <ShadcnCopy text="Hello Shadcn UI" :tooltip="false"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 位置 (position)

<CodeRunner title="位置">
    <div class="flex items-center gap-2">
        <span>顶部</span>
        <ShadcnCopy text="Position" position="top" :dark="darkMode"/>
    </div>
    <div class="flex items-center gap-2">
        <span>底部</span>
        <ShadcnCopy text="Position" position="bottom" :dark="darkMode"/>
    </div>
    <div class="flex items-center gap-2">
        <span>左侧</span>
        <ShadcnCopy text="Position" position="left" :dark="darkMode"/>
    </div>
    <div class="flex items-center gap-2">
        <span>右侧</span>
        <ShadcnCopy text="Position" position="right" :dark="darkMode"/>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnCopy text="Position" position="top"/>
    <ShadcnCopy text="Position" position="bottom"/>
    <ShadcnCopy text="Position" position="left"/>
    <ShadcnCopy text="Position" position="right"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 液态玻璃效果 (glass)

::: raw

<CodeRunner title="液态玻璃效果">
    <div :class="['p-6 rounded-lg flex items-center gap-4', darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
        <span :class="darkMode ? 'text-gray-200' : 'text-white'">复制文本</span>
        <ShadcnCopy text="Hello Shadcn UI with Glass Effect" glass :dark="darkMode"/>
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <div :class="['p-6 rounded-lg flex items-center gap-4', isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
        <span :class="isDark ? 'text-gray-200' : 'text-white'">复制文本</span>
        <ShadcnCopy text="Hello Shadcn UI with Glass Effect" glass :dark="isDark"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)
</script>
```

:::

## 复制 (Copy) 属性

<ApiTable title="复制 (Copy) 属性"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['text', '复制的文本内容', 'string', '-', '-', '-'],
        ['tooltip', '是否显示提示', 'boolean', 'true', '-', '-'],
        ['position', '提示的位置', 'enum', 'top', '-', 'top | bottom | left | right'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-', '-'],
    ]">
</ApiTable>

## 复制 (Copy) 事件

<ApiTable title="复制 (Copy) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-success', '复制成功时触发', 'event'],
        ['on-failed', '复制失败时触发', 'event'],
    ]">
</ApiTable>

## 复制 (Copy) 插槽

<ApiTable title="复制 (Copy) 插槽"
    :headers="['插槽', '描述']"
    :columns="[
        ['icon', '复制图标'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>