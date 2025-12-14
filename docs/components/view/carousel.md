---
title: 轮播 (Carousel)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnCarousel` 组件的特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnCarousel :items="items" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCarousel items="-" />
</template>
```

:::

## 播放间隔 (interval)

::: raw

<CodeRunner title="播放间隔 (interval)">
    <ShadcnCarousel :items="items" :interval="405" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCarousel :interval="405" />
</template>
```

:::

## 显示箭头 (show-arrows)

::: raw

<CodeRunner title="显示箭头 (show-arrows)">
    显示箭头
    <ShadcnCarousel :items="items" showArrows :dark="darkMode" />
    不显示箭头
    <ShadcnCarousel :items="items" :showArrows="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCarousel showArrows />
    <ShadcnCarousel :showArrows="false" />
</template>
```

:::

## 显示指示器 (show-indicators)

::: raw

<CodeRunner title="显示指示器 (show-indicators)">
    显示指示器
    <ShadcnCarousel :items="items" showIndicators :dark="darkMode" />
    不显示指示器
    <ShadcnCarousel :items="items" :showIndicators="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCarousel :items="items" showIndicators />
    <ShadcnCarousel :items="items" :showIndicators="false" />
</template>
```

:::

## 轮播方向 (direction)

::: raw

<CodeRunner title="轮播方向 (direction)">
    <ShadcnCarousel :items="items" direction="vertical" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCarousel :items="items" direction="vertical" />
</template>
```

:::

## 自动播放 (auto-play)

::: raw

<CodeRunner title="自动播放 (auto-play)">
    <ShadcnCarousel :items="items" :auto-play="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCarousel :items="items" :auto-play="false" />
</template>
```

:::

## 高度 (height)

::: raw

<CodeRunner title="高度 (height)">
    <ShadcnCarousel :items="items" height="200px" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCarousel :items="items" height="200px" />
</template>
```

:::

## 轮播 (Carousel) 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['items', '要显示的项数组', 'any\[\]', '-'],
        ['interval', '自动播放间隔（以毫秒为单位）', 'number', '3000'],
        ['showArrows', '是否显示箭头', 'boolean', 'true'],
        ['showIndicators', '是否显示指示器', 'boolean', 'true'],
        ['direction', '轮播方向', 'horizontal | vertical', 'horizontal'],
        ['autoPlay', '是否自动播放', 'boolean', 'true'],
        ['height', '轮播高度', 'number | string', '300']
    ]">
</ApiTable>

## 轮播 (Carousel) 事件

<ApiTable title="轮播 (Carousel) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '当轮播切换时触发', 'index: number']
    ]">
</ApiTable>

## 轮播 (Carousel) 插槽

<ApiTable title="轮播 (Carousel) 插槽"
    :headers="['插槽', '描述', '回调参数']"
    :columns="[
        ['item', '要显示的项', 'item: any'],
        ['prev', '上一个插槽', '-'],
        ['next', '下一个插槽', '-']
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const items = [
  { text: 'Slide 1', src: 'https://picsum.photos/800/400' },
  { text: 'Slide 2', src: 'https://picsum.photos/800/400' },
  { text: 'Slide 3', src: 'https://picsum.photos/800/400' }
]

const handleChange = (index: number) => {
  console.log('Current slide:', index)
}
</script>