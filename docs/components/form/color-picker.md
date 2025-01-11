---
title: 颜色选择器 (Color Picker)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnColorPicker` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnColorPicker v-model="value" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnColorPicker v-model="value" />
</template>
```

:::

## 颜色 (color)

::: raw

<CodeRunner title="颜色 (color)">
    <ShadcnColorPicker v-model="value" color="#DFDFDF" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnColorPicker v-model="value" color="undefined" />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnColorPicker v-model="value" disabled />
    <ShadcnColorPicker v-model="value" :disabled="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnColorPicker v-model="value" disabled />
    <ShadcnColorPicker v-model="value" :disabled="false" />
</template>
```

:::

## 只读 (readonly)

::: raw

<CodeRunner title="只读 (readonly)">
    <ShadcnColorPicker v-model="value" readonly />
    <ShadcnColorPicker v-model="value" :readonly="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnColorPicker v-model="value" readonly />
    <ShadcnColorPicker v-model="value" :readonly="false" />
</template>
```

:::

## 预设颜色 (preset-colors)

::: raw

<CodeRunner title="预设颜色 (preset-colors)">
    <ShadcnColorPicker v-model="value" :presetColors="['#fbbf24', '#737373', '#38bdf8', '#818cf8', '#e879f9', '#475569', '#c084fc', '#2dd4bf', '#34d399', '#fb7185', '#fb923c']" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnColorPicker v-model="value" :presetColors="['#fbbf24', '#737373', '#38bdf8', '#818cf8', '#e879f9', '#475569', '#c084fc', '#2dd4bf', '#34d399', '#fb7185', '#fb923c']" />
</template>
```

:::

## 格式 (format)

::: raw

<CodeRunner title="格式 (format)">
    <ShadcnColorPicker v-model="value" format="auto" />
    <ShadcnColorPicker v-model="value" format="hex" />
    <ShadcnColorPicker v-model="value" format="rgb" />
    <ShadcnColorPicker v-model="value" format="hsl" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnColorPicker v-model="value" format="auto" />
    <ShadcnColorPicker v-model="value" format="hex" />
    <ShadcnColorPicker v-model="value" format="rgb" />
    <ShadcnColorPicker v-model="value" format="hsl" />
</template>
```

:::

## 显示面板 (show-panel)

::: raw

<CodeRunner title="显示面板 (show-panel)">
    <ShadcnColorPicker v-model="value" showPanel />
    <ShadcnColorPicker v-model="value" :showPanel="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnColorPicker v-model="value" showPanel />
    <ShadcnColorPicker v-model="value" :showPanel="false" />
</template>
```

:::

## 显示吸管 (show-dropper)

::: raw

<CodeRunner title="显示吸管 (show-dropper)">
    <ShadcnColorPicker v-model="value" showDropper />
    <ShadcnColorPicker v-model="value" :showDropper="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnColorPicker v-model="value" showDropper />
    <ShadcnColorPicker v-model="value" :showDropper="false" />
</template>
```

:::

## 显示透明度 (show-transparency)

::: raw

<CodeRunner title="显示透明度 (show-transparency)">
    <ShadcnColorPicker v-model="value" showTransparency />
    <ShadcnColorPicker v-model="value" :showTransparency="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnColorPicker v-model="value" showTransparency />
    <ShadcnColorPicker v-model="value" :showTransparency="false" />
</template>
```

:::

## 显示格式 (show-format)

::: raw

<CodeRunner title="显示格式 (show-format)">
    <ShadcnColorPicker v-model="value" showFormat />
    <ShadcnColorPicker v-model="value" :showFormat="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnColorPicker v-model="value" showFormat />
    <ShadcnColorPicker v-model="value" :showFormat="false" />
</template>
```

:::

## 颜色选择器 (Color Picker) 属性

<ApiTable title="颜色选择器 (Color Picker) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '支持 HEX/RGB/HSL 格式的颜色值', 'string', '-', '-'],
        ['color', '颜色色值', 'string', '-', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['readonly', '是否为可读', 'boolean', 'false', '-'],
        ['presetColors', '预设颜色', 'string\[\]', '[#f87171, #fb923c, #fbbf24, #a3e635, #34d399, #2dd4bf, #38bdf8, #818cf8, #c084fc, #e879f9, #fb7185, #475569, #737373, #78716c, #ef4444]', '-'],
        ['format', '输出格式，默认为 <code>auto</code>', 'auto | hex | rgb | hsl', 'auto', 'auto, hex, rgb, hsl'],
        ['showPanel', '是否显示面板', 'boolean', 'true', '-'],
        ['showDropper', '是否显示吸管', 'boolean', 'true', '-'],
        ['showTransparency', '是否显示透明度', 'boolean', 'true', '-'],
        ['showFormat', '是否显示格式', 'boolean', 'true', '-']
    ]">
</ApiTable>

## 颜色选择器 (Color Picker) 事件

<ApiTable title="颜色选择器 (Color Picker) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', '当选择的值被更新时触发', 'value: string'],
        ['on-change', '当选择的值被更新时触发', 'value: string']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>