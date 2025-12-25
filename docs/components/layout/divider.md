---
title: 分隔线 (Divider)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnDivider` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <div>Hello, View Shadcn UI, Divider</div>
    <ShadcnDivider :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div>Hello, View Shadcn UI, Divider</div>
    <ShadcnDivider />
</template>

<script setup lang="ts">
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <div>Horizontal</div>
    <ShadcnDivider type="horizontal"  :dark="darkMode" />
    <div class="flex space-x-2 mt-2">
        <div>Vertical</div>
        <ShadcnDivider type="vertical" :dark="darkMode" />
        <a href="#">Link</a>
        <ShadcnDivider type="vertical" :dark="darkMode" />
        <div>Vertical</div>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div>Horizontal</div>
    <ShadcnDivider type="horizontal" />
    <div class="flex space-x-2">
        <div>Vertical</div>
        <ShadcnDivider type="vertical" />
        <a href="#">Link</a>
        <ShadcnDivider type="vertical" />
        <div>Vertical</div>
    </div>
</template>

<script setup lang="ts">
</script>
```

:::

## 位置 (position)

<CodeRunner title="位置 (position)">
    <ShadcnDivider orientation="left" :dark="darkMode">Left</ShadcnDivider>
    <ShadcnDivider orientation="center" :dark="darkMode">Center</ShadcnDivider>
    <ShadcnDivider orientation="right" :dark="darkMode">Right</ShadcnDivider>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnDivider orientation="left">Left</ShadcnDivider>
    <ShadcnDivider orientation="center">Center</ShadcnDivider>
    <ShadcnDivider orientation="right">Right</ShadcnDivider>
</template>

<script setup lang="ts">
</script>
```

:::

## 虚线 (dashed)

<CodeRunner title="虚线 (dashed)">
    <ShadcnDivider dashed :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnDivider dashed />
</template>

<script setup lang="ts">
</script>
```

:::

## 液态玻璃效果 (glass)

::: raw

<div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-teal-900 to-cyan-900' : 'bg-gradient-to-r from-teal-400 to-cyan-400']">
<CodeRunner title="液态玻璃效果" class="bg-transparent">
  <div :class="['p-8 rounded-lg', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
    <div class="space-y-6">
      <div>
        <h4 :class="['text-base font-semibold mb-3', darkMode ? 'text-gray-200' : 'text-gray-800']">基础分割线</h4>
        <ShadcnDivider glass :dark="darkMode"/>
      </div>
      <div>
        <h4 :class="['text-base font-semibold mb-3', darkMode ? 'text-gray-200' : 'text-gray-800']">带文字分割线</h4>
        <ShadcnDivider text="文本内容" glass :dark="darkMode"/>
      </div>
      <div>
        <h4 :class="['text-base font-semibold mb-3', darkMode ? 'text-gray-200' : 'text-gray-800']">不同位置</h4>
        <div class="space-y-3">
          <ShadcnDivider text="左侧文本" orientation="left" glass :dark="darkMode"/>
          <ShadcnDivider text="居中文本" orientation="center" glass :dark="darkMode"/>
          <ShadcnDivider text="右侧文本" orientation="right" glass :dark="darkMode"/>
        </div>
      </div>
      <div>
        <h4 :class="['text-base font-semibold mb-3', darkMode ? 'text-gray-200' : 'text-gray-800']">虚线样式</h4>
        <ShadcnDivider text="虚线分割" dashed glass :dark="darkMode"/>
      </div>
    </div>
  </div>
</CodeRunner>
</div>

:::

::: details 查看代码

```vue
<template>
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-teal-900 to-cyan-900' : 'bg-gradient-to-r from-teal-400 to-cyan-400']">
      <div :class="['p-8 rounded-lg', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
        <div class="space-y-6">
          <div>
            <h4 :class="['text-base font-semibold mb-3', darkMode ? 'text-gray-200' : 'text-gray-800']">基础分割线</h4>
            <ShadcnDivider glass :dark="darkMode"/>
          </div>
          <div>
            <h4 :class="['text-base font-semibold mb-3', darkMode ? 'text-gray-200' : 'text-gray-800']">带文字分割线</h4>
            <ShadcnDivider text="文本内容" glass :dark="darkMode"/>
          </div>
          <div>
            <h4 :class="['text-base font-semibold mb-3', darkMode ? 'text-gray-200' : 'text-gray-800']">不同位置</h4>
            <div class="space-y-3">
              <ShadcnDivider text="左侧文本" orientation="left" glass :dark="darkMode"/>
              <ShadcnDivider text="居中文本" orientation="center" glass :dark="darkMode"/>
              <ShadcnDivider text="右侧文本" orientation="right" glass :dark="darkMode"/>
            </div>
          </div>
          <div>
            <h4 :class="['text-base font-semibold mb-3', darkMode ? 'text-gray-200' : 'text-gray-800']">虚线样式</h4>
            <ShadcnDivider text="虚线分割" dashed glass :dark="darkMode"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>
```

:::

## 分隔线 (Divider) 属性

<ApiTable title="分隔线 (Divider) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['text', '文本内容', 'string', '-', '-'],
        ['type', '分隔线类型', 'enum', '-', 'horizontal | vertical'],
        ['orientation', '分割线标题的位置', 'enum', '-', 'left | center | right'],
        ['dashed', '分隔线是否为虚线', 'boolean', 'false', '-'],
        ['glass', '液态玻璃效果', 'boolean', 'false', '-'],
        ['dark', '暗黑模式', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 分隔线 (Divider) 插槽

<ApiTable title="分隔线 (Divider) 插槽"
    :headers="['插槽', '描述', '参数']"
    :columns="[
        ['default', '默认文本插槽', 'text'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>