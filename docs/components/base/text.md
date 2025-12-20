---
title: 文本 (Text)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnText` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnText color-type="default" :dark="darkMode">Default</ShadcnText>
    <ShadcnText color-type="primary" :dark="darkMode">Primary</ShadcnText>
    <ShadcnText color-type="success" :dark="darkMode">Success</ShadcnText>
    <ShadcnText color-type="warning" :dark="darkMode">Warning</ShadcnText>
    <ShadcnText color-type="error" :dark="darkMode">Error</ShadcnText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnText color-type="default">Default</ShadcnText>
    <ShadcnText color-type="primary">Primary</ShadcnText>
    <ShadcnText color-type="success">Success</ShadcnText>
    <ShadcnText color-type="warning">Warning</ShadcnText>
    <ShadcnText color-type="error">Error</ShadcnText>
</template>
```

:::

## 颜色 (color)

::: raw

<CodeRunner title="颜色">
      <ShadcnText color="#18A058" :dark="darkMode">#18A058</ShadcnText>
      <ShadcnText color="#F59E0B" :dark="darkMode">#F59E0B</ShadcnText>
      <ShadcnText color="#EF4444" :dark="darkMode">#EF4444</ShadcnText>
      <ShadcnText color="rgba(43, 79, 81, 1)" :dark="darkMode">rgba(43, 79, 81, 1)</ShadcnText>
      <ShadcnText color="rgba(43, 79, 81, 0.5)" :dark="darkMode">rgba(43, 79, 81, 0.5)</ShadcnText>
      <ShadcnText color="rgba(43, 22, 81, 0.5)" :dark="darkMode">rgba(43, 22, 81, 0.5)</ShadcnText>
      <ShadcnText color="red" :dark="darkMode">red</ShadcnText>
      <ShadcnText color="blue" :dark="darkMode">blue</ShadcnText>
      <ShadcnText color="green" :dark="darkMode">green</ShadcnText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
      <ShadcnText color="#18A058">#18A058</ShadcnText>
      <ShadcnText color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText color="#EF4444">#EF4444</ShadcnText>
      <ShadcnText color="rgba(43, 79, 81, 1)">rgba(43, 79, 81, 1)</ShadcnText>
      <ShadcnText color="rgba(43, 79, 81, 0.5)">rgba(43, 79, 81, 0.5)</ShadcnText>
      <ShadcnText color="rgba(43, 22, 81, 0.5)">rgba(43, 22, 81, 0.5)</ShadcnText>
      <ShadcnText color="red">red</ShadcnText>
      <ShadcnText color="blue">blue</ShadcnText>
      <ShadcnText color="green">green</ShadcnText>
</template>
```

:::

## 粗体 (strong)

::: raw

<CodeRunner title="粗体">
      <ShadcnText strong color="#18A058" :dark="darkMode">#18A058</ShadcnText>
      <ShadcnText strong color="#F59E0B" :dark="darkMode">#F59E0B</ShadcnText>
      <ShadcnText strong color="#EF4444" :dark="darkMode">#EF4444</ShadcnText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
      <ShadcnText strong color="#18A058">#18A058</ShadcnText>
      <ShadcnText strong color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText strong color="#EF4444">#EF4444</ShadcnText>
</template>
```

:::

## 斜体 (italic)

::: raw

<CodeRunner title="斜体">
      <ShadcnText italic color="#18A058" :dark="darkMode">#18A058</ShadcnText>
      <ShadcnText italic color="#F59E0B" :dark="darkMode">#F59E0B</ShadcnText>
      <ShadcnText italic color="#EF4444" :dark="darkMode">#EF4444</ShadcnText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
      <ShadcnText italic color="#18A058">#18A058</ShadcnText>
      <ShadcnText italic color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText italic color="#EF4444">#EF4444</ShadcnText>
</template>
```

:::

## 下划线 (underline)

::: raw

<CodeRunner title="下划线">
      <ShadcnText underline color="#18A058" :dark="darkMode">#18A058</ShadcnText>
      <ShadcnText underline color="#F59E0B" :dark="darkMode">#F59E0B</ShadcnText>
      <ShadcnText underline color="#EF4444" :dark="darkMode">#EF4444</ShadcnText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
      <ShadcnText underline color="#18A058">#18A058</ShadcnText>
      <ShadcnText underline color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText underline color="#EF4444">#EF4444</ShadcnText>
</template>
```

:::

## 删除线 (deleted)

::: raw

<CodeRunner title="删除线">
      <ShadcnText deleted color="#18A058" :dark="darkMode">#18A058</ShadcnText>
      <ShadcnText deleted color="#F59E0B" :dark="darkMode">#F59E0B</ShadcnText>
      <ShadcnText deleted color="#EF4444" :dark="darkMode">#EF4444</ShadcnText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
      <ShadcnText deleted color="#18A058">#18A058</ShadcnText>
      <ShadcnText deleted color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText deleted color="#EF4444">#EF4444</ShadcnText>
</template>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型">
    <div class="space-x-2">
        <ShadcnText type="code" :dark="darkMode">Code</ShadcnText>
        <ShadcnText type="pre" :dark="darkMode">Pre</ShadcnText>
        <ShadcnText type="p" :dark="darkMode">P</ShadcnText>
        <ShadcnText type="small" :dark="darkMode">Small</ShadcnText>
        <ShadcnText type="h1" :dark="darkMode">H1</ShadcnText>
        <ShadcnText type="h2" :dark="darkMode">H2</ShadcnText>
        <ShadcnText type="h3" :dark="darkMode">H3</ShadcnText>
        <ShadcnText type="h4" :dark="darkMode">H4</ShadcnText>
        <ShadcnText type="h5" :dark="darkMode">H5</ShadcnText>
        <ShadcnText type="h6" :dark="darkMode">H6</ShadcnText>
        <ShadcnText type="label" :dark="darkMode">Label</ShadcnText>
        <ShadcnText type="span" :dark="darkMode">Span</ShadcnText>
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <div class="space-x-2">
        <ShadcnText type="code">Code</ShadcnText>
        <ShadcnText type="pre">Pre</ShadcnText>
        <ShadcnText type="p">P</ShadcnText>
        <ShadcnText type="small">Small</ShadcnText> 
        <ShadcnText type="h1">H1</ShadcnText>
        <ShadcnText type="h2">H2</ShadcnText>
        <ShadcnText type="h3">H3</ShadcnText>
        <ShadcnText type="h4">H4</ShadcnText>
        <ShadcnText type="h5">H5</ShadcnText>
        <ShadcnText type="h6">H6</ShadcnText>
        <ShadcnText type="label">Label</ShadcnText>
        <ShadcnText type="span">Span</ShadcnText>
    </div>
</template>
```

:::

## 液态玻璃效果 (glass)

::: raw

<div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-purple-900 to-pink-900' : 'bg-gradient-to-r from-purple-400 to-pink-400']">
<CodeRunner title="液态玻璃效果" class="bg-transparent">
  <div :class="['p-8 rounded-lg', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
    <div class="space-y-4">
      <div>
        <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">标题样式</h4>
        <div class="space-y-2">
          <ShadcnText type="h3" background glass :dark="darkMode">这是一个H3标题</ShadcnText>
          <br/>
          <ShadcnText type="h5" background glass :dark="darkMode">这是一个H5标题</ShadcnText>
        </div>
      </div>
      <div>
        <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">文本样式</h4>
        <div class="space-y-2">
          <ShadcnText background glass :dark="darkMode" strong>加粗文本</ShadcnText>
          <br/>
          <ShadcnText background glass :dark="darkMode" italic>斜体文本</ShadcnText>
          <br/>
          <ShadcnText background glass :dark="darkMode" underline>下划线文本</ShadcnText>
        </div>
      </div>
      <div>
        <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">颜色类型</h4>
        <div class="space-y-2">
          <ShadcnText background glass :dark="darkMode" colorType="primary">主要颜色</ShadcnText>
          <br/>
          <ShadcnText background glass :dark="darkMode" colorType="success">成功颜色</ShadcnText>
          <br/>
          <ShadcnText background glass :dark="darkMode" colorType="warning">警告颜色</ShadcnText>
        </div>
      </div>
    </div>
  </div>
</CodeRunner>
</div>

:::

::: details 查看代码

```vue
<template>
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-purple-900 to-pink-900' : 'bg-gradient-to-r from-purple-400 to-pink-400']">
      <div :class="['p-8 rounded-lg', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
        <div class="space-y-4">
          <div>
            <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">标题样式</h4>
            <div class="space-y-2">
              <ShadcnText type="h3" background glass :dark="darkMode">这是一个H3标题</ShadcnText>
              <br/>
              <ShadcnText type="h5" background glass :dark="darkMode">这是一个H5标题</ShadcnText>
            </div>
          </div>
          <div>
            <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">文本样式</h4>
            <div class="space-y-2">
              <ShadcnText background glass :dark="darkMode" strong>加粗文本</ShadcnText>
              <br/>
              <ShadcnText background glass :dark="darkMode" italic>斜体文本</ShadcnText>
              <br/>
              <ShadcnText background glass :dark="darkMode" underline>下划线文本</ShadcnText>
            </div>
          </div>
          <div>
            <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">颜色类型</h4>
            <div class="space-y-2">
              <ShadcnText background glass :dark="darkMode" colorType="primary">主要颜色</ShadcnText>
              <br/>
              <ShadcnText background glass :dark="darkMode" colorType="success">成功颜色</ShadcnText>
              <br/>
              <ShadcnText background glass :dark="darkMode" colorType="warning">警告颜色</ShadcnText>
            </div>
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

## 文本 (Text) 属性

<ApiTable title="文本 (Text) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['colorType', '文本的颜色类型', 'enum', 'default', 'default | primary | success | warning | error'],
        ['color', '文本的颜色，如果设置了 colorType，将被忽略', 'string', 'default', '-'],
        ['strong', '文本是否加粗', 'boolean', 'false', '-'],
        ['italic', '文本是否斜体', 'boolean', 'false', '-'],
        ['underline', '文本是否下划线', 'boolean', 'false', '-'],
        ['deleted', '文本是否删除线', 'boolean', 'false', '-'],
        ['type', '文本类型', 'enum', 'p', 'p | code | pre | small | h1 | h2 | h3 | h4 | h5 | h6 | label | span'],
        ['background', '是否显示背景容器', 'boolean', 'false', '-'],
        ['glass', '液态玻璃效果（仅在 background 为 true 时生效）', 'boolean', 'false', '-'],
        ['dark', '暗黑模式', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 文本 (Text) 插槽

<ApiTable title="文本 (Text) 插槽"
    :headers="['插槽', '描述']"
    :columns="[
        ['default', '文本插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>