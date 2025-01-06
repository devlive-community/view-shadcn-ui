~~---
title: Shadcn Image
---

# 介绍

本文介绍了 ShadcnImage 组件的功能和用法。

## 源 (src)

::: raw

<CodeRunner title="源" codeKey="image-src">
    <ShadcnImage src="https://picsum.photos/800/400" />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://picsum.photos/800/400" />
</template>
```

:::

## 提示 (alt)

::: raw

<CodeRunner title="提示">
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" />
</template>
```

:::

## 宽度 (width)

::: raw

<CodeRunner title="宽度" codeKey="image-width">
    <ShadcnImage src="https://picsum.photos/800/400" width="300" />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://picsum.photos/800/400" width="300" />
</template>
```

:::

## 高度 (height)

::: raw

<CodeRunner title="高度" codeKey="image-height">
    <ShadcnImage src="https://picsum.photos/800/400" height="300" />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://picsum.photos/800/400" height="300" />
</template>
```

:::

## 填充方式 (fit)

::: raw

<CodeRunner title="填充方式" codeKey="image-fit">
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="cover"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="contain"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="fill"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="none"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="scale-down"/>
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="cover"/>
  <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="contain"/>
  <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="fill"/>
  <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="none"/>
  <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="scale-down"/>
</template>
```

:::

## 懒加载 (lazy)

::: raw

<CodeRunner title="懒加载" codeKey="image-lazy">
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" />
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" lazy />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" />
  <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" lazy />
</template>
```

:::

## 边框 (border)

::: raw

<CodeRunner title="边框" codeKey="image-border">
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" border />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" border />
</template>
```

:::

## 图片组 (group)

::: raw

<CodeRunner title="图片组" codeKey="image-group">
    <ShadcnImageGroup :images="images" :columns="8" :gap="4" preview/>
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImageGroup :images="images" :columns="8" :gap="4" preview/>
</template>
```

:::

## Image 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值', '列表']"
    :columns="[
        ['src', '图片的路径', 'string', '-', '-'],
        ['alt', '图片的提示', 'string', '-', '-'],
        ['width', '图片的宽度', 'string | number', '200', '-'],
        ['height', '图片的高度', 'string | number', '200', '-'],
        ['fit', '图片的填充方式', 'enum', 'cover', 'cover | contain | fill | none | scale-down'],
        ['lazy', '是否懒加载', 'boolean', 'false'],
        ['border', '是否显示边框', 'boolean', 'false']
    ]">
</ApiTable>

## Image Group 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值', '列表']"
    :columns="[
        ['images', '图片列表，配置参考 Image', 'array', '-', '-'],
        ['columns', '列数', 'number', '6', '-'],
        ['gap', '列间距', 'number', '2', '-'],
        ['preview', '是否显示预览', 'boolean', 'false']
    ]">
</ApiTable>

## Image Preview 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值', '列表']"
    :columns="[
        ['images', '图片列表，配置参考 Image', 'array', '-', '-'],
        ['visible', '是否显示预览', 'boolean', 'false'],
        ['current', '当前预览的图片索引', 'number', '0']
    ]">
</ApiTable>

## Image 事件

<ApiTable title="事件"
    :headers="['事件', '描述', '参数']"
    :columns="[
        ['on-load', '加载时触发', '-'],
        ['on-error', '加载失败时触发', '-']
    ]">
</ApiTable>

## Image 插槽

<ApiTable title="插槽"
    :headers="['插槽', '描述']"
    :columns="[
        ['fallback', '加载失败时显示的内容']
    ]">
</ApiTable>

<script setup lang="ts">
const images = [] as any[]

for (let i = 0; i < 100; i++) {
  images.push({ src: `https://picsum.photos/800/400?random=${ i }`, alt: `Image ${ i }` })
}
</script>