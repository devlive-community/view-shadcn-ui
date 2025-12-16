---
title: 返回顶部 (Back Top)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnBackTop` 组件的一些特性和使用方法。

## 用法

::: raw

<CodeRunner title="用法">
  <div class="p-8">
    <div v-for="n in 3" :key="n" class="mb-8 p-4 bg-gray-100 rounded" :class="darkMode ? 'bg-gray-800' : 'bg-white'">
      <h2 class="text-xl font-bold mb-2">Section {{ n }}</h2>
      <p>This is test content。</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <ShadcnBackTop  :dark="darkMode"/>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="p-8">
    <div v-for="n in 20" :key="n" class="mb-8 p-4 bg-gray-100 rounded">
      <h2 class="text-xl font-bold mb-2">Section {{ n }}</h2>
      <p>This is test content。</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    
    <ShadcnBackTop  :dark="darkMode"/>
  </div>
</template>
```

:::

## 容器内滚动 (target)

通过设置 `target` 属性，可以指定滚动容器，实现在容器内的返回顶部功能。

::: raw

<CodeRunner title="容器内滚动 (target)">
  <div>
    <div id="my-container" style="height: 300px; position: relative;" :class="['overflow-y-auto rounded-lg border', darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50']">
      <div class="p-8">
        <div v-for="n in 20" :key="n" class="mb-8 p-4 rounded" :class="darkMode ? 'bg-gray-800' : 'bg-white'">
          <h2 :class="['text-xl font-bold mb-2', darkMode ? 'text-gray-100' : 'text-gray-900']">Section {{ n }}</h2>
          <p :class="[darkMode ? 'text-gray-300' : 'text-gray-700']">这是测试内容。向下滚动查看返回顶部按钮。</p>
          <p :class="[darkMode ? 'text-gray-400' : 'text-gray-600']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <ShadcnBackTop target="#my-container" :dark="darkMode" />
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div id="my-container" class="relative h-96 overflow-y-auto rounded-lg border bg-gray-50">
    <div class="p-8">
      <div v-for="n in 20" :key="n" class="mb-8 p-4 rounded bg-white">
        <h2 class="text-xl font-bold mb-2 text-gray-900">Section {{ n }}</h2>
        <p class="text-gray-700">这是测试内容。向下滚动查看返回顶部按钮。</p>
        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <ShadcnBackTop target="#my-container" />
</template>
```

:::

## 液态玻璃效果 (glass)

液态玻璃效果通过半透明背景和背景模糊创建现代化的视觉效果，在彩色背景上表现最佳。

::: raw

<CodeRunner title="液态玻璃效果 (glass)">
  <div style="position: relative;">
    <div id="glass-container" style="height: 300px" :class="['overflow-y-auto rounded-lg border', darkMode ? 'border-gray-700 bg-gradient-to-b from-indigo-900 to-purple-900' : 'border-gray-200 bg-gradient-to-b from-indigo-400 to-purple-400']">
      <div class="p-8">
        <div v-for="n in 20" :key="n" class="mb-8 p-4 rounded" :class="darkMode ? 'bg-gray-800/50' : 'bg-white/50'">
          <h2 :class="['text-xl font-bold mb-2', darkMode ? 'text-gray-100' : 'text-gray-900']">Section {{ n }}</h2>
          <p :class="[darkMode ? 'text-gray-300' : 'text-gray-700']">这是测试内容。向下滚动查看液态玻璃效果的返回顶部按钮。</p>
          <p :class="[darkMode ? 'text-gray-400' : 'text-gray-600']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <ShadcnBackTop target="#glass-container" glass :dark="darkMode" />
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div id="glass-container" class="relative h-96 overflow-y-auto rounded-lg border bg-gradient-to-b from-indigo-400 to-purple-400">
    <div class="p-8">
      <div v-for="n in 20" :key="n" class="mb-8 p-4 rounded bg-white/50">
        <h2 class="text-xl font-bold mb-2 text-gray-900">Section {{ n }}</h2>
        <p class="text-gray-700">这是测试内容。向下滚动查看液态玻璃效果的返回顶部按钮。</p>
        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <ShadcnBackTop target="#glass-container" glass />
</template>
```

:::

## 返回顶部 (Back Top) 属性

<ApiTable title="返回顶部 (Back Top) 属性"
:headers="['属性', '描述', '类型', '默认值']"
:columns="[
['visibilityHeight', '到达该高度后显示返回顶部按钮', 'number', '200'],
['right', '距离右侧的距离', 'number', '40'],
['bottom', '距离底部的距离', 'number', '40'],
['duration', '动画持续时间', 'number', '500'],
['target', '滚动容器，支持 CSS 选择器或 HTMLElement', 'string | HTMLElement', '-'],
['dark', '是否启用深色模式', 'boolean', 'false'],
['glass', '是否启用液态玻璃效果', 'boolean', 'false'],
]">
</ApiTable>

## 返回顶部 (Back Top) 事件

<ApiTable title="返回顶部 (Back Top) 事件"
:headers="['事件', '描述', '回调参数']"
:columns="[
['click', '组件点击事件', 'event'],
]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>
