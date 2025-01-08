---
title: 轮播 (Carousel)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnCarousel` 组件的特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnCarousel :items="items" />
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
    <ShadcnCarousel :items="items" :interval="405" />
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
    <ShadcnCarousel :items="items" showArrows />
    不显示箭头
    <ShadcnCarousel :items="items" :showArrows="false" />
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
    <ShadcnCarousel :items="items" showIndicators />
    不显示指示器
    <ShadcnCarousel :items="items" :showIndicators="false" />
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

## 轮播 (Carousel) 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['items', '要显示的项数组', 'any\[\]', '-'],
        ['interval', '自动播放间隔（以毫秒为单位）', 'number', '3000'],
        ['showArrows', '是否显示箭头', 'boolean', 'true'],
        ['showIndicators', '是否显示指示器', 'boolean', 'true']
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
        ['prev', '上一个插槽', '-'],
        ['next', '下一个插槽', '-']
    ]">
</ApiTable>

<script setup lang="ts">
const items = [
  { text: 'Slide 1', src: 'https://picsum.photos/800/400' },
  { text: 'Slide 2', src: 'https://picsum.photos/800/400' },
  { text: 'Slide 3', src: 'https://picsum.photos/800/400' }
]

const handleChange = (index: number) => {
  console.log('Current slide:', index)
}
</script>