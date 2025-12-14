---
title: 抽屉 (Drawer)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnDrawer` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnButton @click="defaultValue = !defaultValue" :dark="darkMode">Open</ShadcnButton>
    <ShadcnDrawer v-model="defaultValue" title="Title" :dark="darkMode">Content</ShadcnDrawer>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnButton @click="defaultValue = !defaultValue" :dark="darkMode">Open</ShadcnButton>
  <ShadcnDrawer v-model="defaultValue" title="Title" :dark="darkMode">Content</ShadcnDrawer>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const defaultValue = ref(false)
</script>
```

:::

## 可关闭 (closeable)

<CodeRunner title="可关闭 (closeable)">
    <ShadcnButton @click="closableValue = !closableValue" :dark="darkMode">Open</ShadcnButton>
    <ShadcnDrawer v-model="closableValue" closable title="Title" :dark="darkMode">Content</ShadcnDrawer>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnDrawer closable title="Title" :dark="darkMode">Content</ShadcnDrawer>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const defaultValue = ref(false)
</script>
```

:::

## 背景关闭 (mask-closable)

<CodeRunner title="背景关闭 (mask-closable)">
    <ShadcnButton @click="maskClosableValue = !maskClosableValue" :dark="darkMode">Open</ShadcnButton>
    <ShadcnDrawer v-model="maskClosableValue" mask-closable title="Title" :dark="darkMode">Content</ShadcnDrawer>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnDrawer v-model="defaultValue" mask-closable title="Title" :dark="darkMode">Content</ShadcnDrawer>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const defaultValue = ref(false)
</script>
```

:::

## 位置 (position)

<CodeRunner title="位置 (position)">
        <ShadcnSpace :dark="darkMode">
      <ShadcnButton @click="topValue = !topValue" :dark="darkMode">Top</ShadcnButton>
      <ShadcnButton @click="buttomValue = !buttomValue" :dark="darkMode">Buttom</ShadcnButton>
      <ShadcnButton @click="leftValue = !leftValue" :dark="darkMode">Left</ShadcnButton>
      <ShadcnButton @click="rightValue = !rightValue" :dark="darkMode">Right</ShadcnButton>
    </ShadcnSpace>
    <ShadcnDrawer v-model="topValue" title="Top" position="top" :dark="darkMode" />
    <ShadcnDrawer v-model="buttomValue" title="Buttom" position="bottom" :dark="darkMode" />
    <ShadcnDrawer v-model="leftValue" title="Left" position="left" :dark="darkMode" />
    <ShadcnDrawer v-model="rightValue" title="Right" position="right" :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnSpace :dark="darkMode">
    <ShadcnButton @click="topValue = !topValue" :dark="darkMode">Top</ShadcnButton>
    <ShadcnButton @click="buttomValue = !buttomValue" :dark="darkMode">Buttom</ShadcnButton>
    <ShadcnButton @click="leftValue = !leftValue" :dark="darkMode">Left</ShadcnButton>
    <ShadcnButton @click="rightValue = !rightValue" :dark="darkMode">Right</ShadcnButton>
  </ShadcnSpace>
  <ShadcnDrawer v-model="topValue" title="Top" position="top" :dark="darkMode" />
  <ShadcnDrawer v-model="buttomValue" title="Buttom" position="bottom" :dark="darkMode" />
  <ShadcnDrawer v-model="leftValue" title="Left" position="left" :dark="darkMode" />
  <ShadcnDrawer v-model="rightValue" title="Right" position="right" :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const topValue = ref(false)
const buttomValue = ref(false)
const leftValue = ref(false)
const rightValue = ref(false)
</script>
```

:::

## 宽度 (width) & 高度 (height)

<CodeRunner title="宽度 (width) & 高度 (height)">
    <ShadcnButton @click="widthValue = !widthValue" :dark="darkMode">Width 400</ShadcnButton>
    <ShadcnButton @click="heightValue = !heightValue" :dark="darkMode">Height 400</ShadcnButton>
    <ShadcnDrawer v-model="widthValue" title="Width 400" width="400" :dark="darkMode" />
    <ShadcnDrawer v-model="heightValue" title="Height 400" position="top" height="400" :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnButton @click="widthValue = !widthValue" :dark="darkMode">Width 400</ShadcnButton>
  <ShadcnButton @click="heightValue = !heightValue" :dark="darkMode">Height 400</ShadcnButton>
  <ShadcnDrawer v-model="widthValue" title="Width 400" width="400" :dark="darkMode" />
  <ShadcnDrawer v-model="heightValue" title="Height 400" position="top" height="400" :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const widthValue = ref(false)
const heightValue = ref(false)
</script>
```

:::

## 抽屉 (Drawer) 属性

<ApiTable title="抽屉 (Drawer) 属性"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', '是否显示', 'boolean', 'false', '-', '-'],
        ['title', '组件标题', 'string', '-', '-', '-'],
        ['closable', '是否显示关闭按钮', 'boolean', 'false', '-', '-'],
        ['maskClosable', '是否可以点击遮罩关闭抽屉', 'boolean', 'false', '-', '-'],
        ['position', '抽屉位置', 'string', 'bottom', '-', 'top, bottom, left, right'],
        ['width', '组件的宽度', 'string | number', '300', 'position = left || right', '-'],
        ['height', '组件的高度', 'string | number', '300', 'position = top || bottom', '-'],
    ]">
</ApiTable>

## 抽屉 (Drawer) 事件

<ApiTable title="抽屉 (Drawer) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-close', '关闭时触发', 'boolean'],
    ]">
</ApiTable>

## 抽屉 (Drawer) 插槽

<ApiTable title="抽屉 (Drawer) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '组件内容区域'],
        ['header', '组件头部区域'],
        ['footer', '组件底部区域'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue'

const defaultValue = ref(false)
const closableValue = ref(false)
const maskClosableValue = ref(false)
const topValue = ref(false)
const buttomValue = ref(false)
const leftValue = ref(false)
const rightValue = ref(false)
const widthValue = ref(false)
const heightValue = ref(false)
</script>