---
title: 水印 (Watermark)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnWatermark` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法">
  <ShadcnWatermark :dark="darkMode">
    <div style="height: 24rem;"/>
  </ShadcnWatermark>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnWatermark>
    <div style="height: 24rem;"/>
  </ShadcnWatermark>
</template>
```

:::

## 内容 (content)

::: raw

<CodeRunner title="内容">
  <ShadcnWatermark :content="['Company', 'Name', 'Time']" :dark="darkMode">
    <div style="height: 24rem;"/>
  </ShadcnWatermark>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnWatermark :content="['Company', 'Name', 'Time']">
    <div class="h-96"/>
  </ShadcnWatermark>
</template>
```

:::

## 全屏 (fullscreen)

::: raw

<CodeRunner title="全屏">
  <ShadcnWatermark :content="['Company', 'Name', 'Time']" :fullscreen="fullScreen" :dark="darkMode"/>
  <ShadcnButton @click="fullScreen = !fullScreen" :dark="darkMode">全屏 {{ fullScreen ? '[ 关闭 ]' : '[ 打开 ]' }}</ShadcnButton>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnWatermark :content="['Company', 'Name', 'Time']" :fullscreen="fullScreen"/>
  <ShadcnButton @click="fullScreen = !fullScreen">FullScreen</ShadcnButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fullScreen = ref(false)
</script>
```

:::

## 水印 (Watermark) 属性

<ApiTable title="水印 (Watermark) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['content', '水印的文本内容', 'string | string\[\]', '-'],
        ['width', '每个水印单元的宽度', 'number', '120'],
        ['height', '每个水印单位的高度', 'number', '64'],
        ['gapX', '水印之间的水平间距', 'number', '100'],
        ['gapY', '水印之间的垂直间距', 'number', '100'],
        ['rotate', '水印文本的旋转角度', 'number', '-22'],
        ['fontSize', '水印文本的字体大小', 'number', '14'],
        ['fontColor', '水印文本的颜色', 'string', 'rgba(0, 0, 0, 0.15)'],
        ['fontFamily', '水印文本的字体系列', 'string', 'sans-serif'],
        ['opacity', '整个水印图层的不透明度', 'number', '1'],
        ['antiTamperLayers', '防篡改层数', 'number', '2'],
        ['fontWeight', '水印文本的字体粗细', 'number | string', '400'],
        ['zIndex', '水印图层的 z-index', 'number', '9'],
        ['fullScreen', '是否启用全屏模式', 'boolean', 'false'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, ref } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const fullScreen = ref(false)
</script>