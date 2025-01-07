---
title: Shadcn QrCode
---

# 介绍

This document describes the features and usage of the ShadcnQrCode component.

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

## Padding

::: raw

<CodeRunner title="Padding">
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

## Margin

::: raw

<CodeRunner title="Margin">
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

## Level

::: raw

<CodeRunner title="Level">
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

## Background

::: raw

<CodeRunner title="Background">
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

## Foreground

::: raw

<CodeRunner title="Foreground">
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

## Rounded

::: raw

<CodeRunner title="Rounded">
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
## QrCode Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '-', '-'],
        ['size', 'size value', 'number', '200', '-'],
        ['padding', 'padding value', 'number', '0', '-'],
        ['margin', 'margin value', 'number', '0', '-'],
        ['level', 'level value', 'L | M | Q | H', 'H', 'L, M, Q, H'],
        ['background', 'background value', 'string', '#ffffff', '-'],
        ['foreground', 'foreground value', 'string', '#000000', '-'],
        ['rounded', 'rounded value', 'boolean', 'false', '-']
    ]">
</ApiTable>

## QrCode Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-complete', 'Triggered when on complete', '-']
    ]">
</ApiTable>

## QrCode Slots

<ApiTable title="Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['img', 'Slot for img']
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('Hello View Shadcn UI')
</script>
