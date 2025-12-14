---
title: 省略 (Ellipsis)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnEllipsis` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnEllipsis :dark="darkMode" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnEllipsis text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</template>

<script setup lang="ts">
</script>
```

:::

## 行数 (line)

<CodeRunner title="行数 (line)">
    <ShadcnEllipsis :dark="darkMode" line="4" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnEllipsis line="4" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</template>

<script setup lang="ts">
</script>
```

:::

## 提示 (tooltip)

<CodeRunner title="提示 (tooltip)">
    <ShadcnEllipsis :dark="darkMode" tooltip line="3" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnEllipsis line="4" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</template>
```

:::

## 长度 (length)

<CodeRunner title="长度 (length)">
    <ShadcnEllipsis :dark="darkMode" tooltip length="120" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnEllipsis tooltip length="120" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</template>

<script setup lang="ts">
</script>
```

:::

## 省略 (Ellipsis) 属性

<ApiTable title="省略 (Ellipsis) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['text', '文本内容', 'string', '-'],
        ['line', '行数', 'number | string', '1'],
        ['tooltip', '是否显示提示', 'boolean', 'false'],
        ['length', '文本长度', 'number | string', '-'],
    ]">
</ApiTable>

## 省略 (Ellipsis) 插槽

<ApiTable title="省略 (Ellipsis) 插槽"
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