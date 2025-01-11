---
title: 二维码 (Qr Code)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnQrCode` 组件的特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnQrCode v-model="value" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" />
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)">
    <ShadcnQrCode v-model="value" :size="177" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" :size="177" />
</template>
```

:::

## 填充 (padding)

::: raw

<CodeRunner title="填充 (padding)">
    <ShadcnQrCode v-model="value" :padding="86" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" :padding="86" />
</template>
```

:::

## 边距 (margin)

::: raw

<CodeRunner title="边距 (margin)">
    <ShadcnQrCode v-model="value" :margin="79" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" :margin="79" />
</template>
```

:::

## 等级 (level)

::: raw

<CodeRunner title="等级 (level)">
    <ShadcnQrCode v-model="value" level="L" />
    <ShadcnQrCode v-model="value" level="M" />
    <ShadcnQrCode v-model="value" level="Q" />
    <ShadcnQrCode v-model="value" level="H" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" level="L" />
    <ShadcnQrCode v-model="value" level="M" />
    <ShadcnQrCode v-model="value" level="Q" />
    <ShadcnQrCode v-model="value" level="H" />
</template>
```

:::

## 背景 (background)

::: raw

<CodeRunner title="背景 (background)">
    <ShadcnQrCode v-model="value" background="#adaaff" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" background="#adaaff" />
</template>
```

:::

## 前景 (foreground)

::: raw

<CodeRunner title="前景 (foreground)">
    <ShadcnQrCode v-model="value" foreground="#450827" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" foreground="#450827" />
</template>
```

:::

## 圆角 (rounded)

::: raw

<CodeRunner title="圆角 (rounded)">
    <ShadcnQrCode v-model="value" rounded="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnQrCode v-model="value" rounded="false" />
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
import { ref } from 'vue';

const value = ref('Hello View Shadcn UI')
</script>