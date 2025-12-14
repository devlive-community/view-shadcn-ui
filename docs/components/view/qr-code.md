---
title: 二维码 (Qr Code)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnQrCode` 组件的特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnQrCode v-model="value" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" :dark="darkMode" />
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)">
    <ShadcnQrCode v-model="value" :size="177" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" :size="177" :dark="darkMode" />
</template>
```

:::

## 填充 (padding)

::: raw

<CodeRunner title="填充 (padding)">
    <ShadcnQrCode v-model="value" :padding="86" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" :padding="86" :dark="darkMode" />
</template>
```

:::

## 边距 (margin)

::: raw

<CodeRunner title="边距 (margin)">
    <ShadcnQrCode v-model="value" :margin="79" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" :margin="79" :dark="darkMode" />
</template>
```

:::

## 等级 (level)

::: raw

<CodeRunner title="等级 (level)">
    <ShadcnQrCode v-model="value" level="L" :dark="darkMode" />
    <ShadcnQrCode v-model="value" level="M" :dark="darkMode" />
    <ShadcnQrCode v-model="value" level="Q" :dark="darkMode" />
    <ShadcnQrCode v-model="value" level="H" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" level="L" :dark="darkMode" />
    <ShadcnQrCode v-model="value" level="M" :dark="darkMode" />
    <ShadcnQrCode v-model="value" level="Q" :dark="darkMode" />
    <ShadcnQrCode v-model="value" level="H" :dark="darkMode" />
</template>
```

:::

## 背景 (background)

::: raw

<CodeRunner title="背景 (background)">
    <ShadcnQrCode v-model="value" background="#adaaff" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" background="#adaaff" :dark="darkMode" />
</template>
```

:::

## 前景 (foreground)

::: raw

<CodeRunner title="前景 (foreground)">
    <ShadcnQrCode v-model="value" foreground="#450827" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" foreground="#450827" :dark="darkMode" />
</template>
```

:::

## 圆角 (rounded)

::: raw

<CodeRunner title="圆角 (rounded)">
    <ShadcnQrCode v-model="value" rounded="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" rounded="false" :dark="darkMode" />
</template>
```

:::

## 二维码 (Qr Code) 属性

<ApiTable title="二维码 (Qr Code) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'string', '-', '-'],
        ['size', '组件的尺寸', 'number', '200', '-'],
        ['padding', '组件的填充', 'number', '0', '-'],
        ['margin', '组件的边距', 'number', '0', '-'],
        ['level', '组件的等级', 'L | M | Q | H', 'H', 'L, M, Q, H'],
        ['background', '背景颜色', 'string', '#ffffff', '-'],
        ['foreground', '前景颜色', 'string', '#000000', '-'],
        ['rounded', '是否添加圆角', 'boolean', 'false', '-']
    ]">
</ApiTable>

## 二维码 (Qr Code) 事件

<ApiTable title="二维码 (Qr Code) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-complete', '组件渲染完成后触发', '-']
    ]">
</ApiTable>

## 二维码 (Qr Code) 插槽

<ApiTable title="二维码 (Qr Code) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['img', '图片插槽']
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const value = ref('Hello View Shadcn UI')
</script>