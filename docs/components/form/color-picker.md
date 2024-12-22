---
title: Shadcn ColorPicker
---

# Introduction

This document describes the features and usage of the ShadcnColorPicker component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnColorPicker v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" />
</template>
```

:::

## Color

::: raw

<CodeRunner title="Color">
    <ShadcnColorPicker v-model="value" color="undefined" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" color="undefined" />
</template>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled">
    <ShadcnColorPicker v-model="value" disabled />
    <ShadcnColorPicker v-model="value" :disabled="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" disabled />
    <ShadcnColorPicker v-model="value" :disabled="false" />
</template>
```

:::

## Readonly

::: raw

<CodeRunner title="Readonly">
    <ShadcnColorPicker v-model="value" readonly />
    <ShadcnColorPicker v-model="value" :readonly="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" readonly />
    <ShadcnColorPicker v-model="value" :readonly="false" />
</template>
```

:::

## Preset colors

::: raw

<CodeRunner title="Preset colors">
    <ShadcnColorPicker v-model="value" :presetColors="['#fbbf24', '#737373', '#38bdf8', '#818cf8', '#e879f9', '#475569', '#c084fc', '#2dd4bf', '#34d399', '#fb7185', '#fb923c']" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" :presetColors="['#fbbf24', '#737373', '#38bdf8', '#818cf8', '#e879f9', '#475569', '#c084fc', '#2dd4bf', '#34d399', '#fb7185', '#fb923c']" />
</template>
```

:::

## Format

::: raw

<CodeRunner title="Format">
    <ShadcnColorPicker v-model="value" format="auto" />
    <ShadcnColorPicker v-model="value" format="hex" />
    <ShadcnColorPicker v-model="value" format="rgb" />
    <ShadcnColorPicker v-model="value" format="hsl" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" format="auto" />
    <ShadcnColorPicker v-model="value" format="hex" />
    <ShadcnColorPicker v-model="value" format="rgb" />
    <ShadcnColorPicker v-model="value" format="hsl" />
</template>
```

:::

## Show panel

::: raw

<CodeRunner title="Show panel">
    <ShadcnColorPicker v-model="value" showPanel />
    <ShadcnColorPicker v-model="value" :showPanel="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" showPanel />
    <ShadcnColorPicker v-model="value" :showPanel="false" />
</template>
```

:::

## Show dropper

::: raw

<CodeRunner title="Show dropper">
    <ShadcnColorPicker v-model="value" showDropper />
    <ShadcnColorPicker v-model="value" :showDropper="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" showDropper />
    <ShadcnColorPicker v-model="value" :showDropper="false" />
</template>
```

:::

## Show transparency

::: raw

<CodeRunner title="Show transparency">
    <ShadcnColorPicker v-model="value" showTransparency />
    <ShadcnColorPicker v-model="value" :showTransparency="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" showTransparency />
    <ShadcnColorPicker v-model="value" :showTransparency="false" />
</template>
```

:::

## Show format

::: raw

<CodeRunner title="Show format">
    <ShadcnColorPicker v-model="value" showFormat />
    <ShadcnColorPicker v-model="value" :showFormat="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnColorPicker v-model="value" showFormat />
    <ShadcnColorPicker v-model="value" :showFormat="false" />
</template>
```

:::
## ColorPicker Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'Color values in HEX/RGB/HSL format are supported', 'string', '-', '-'],
        ['color', 'color value', 'string', '-', '-'],
        ['disabled', 'disabled value', 'boolean', 'false', '-'],
        ['readonly', 'readonly value', 'boolean', 'false', '-'],
        ['presetColors', 'presetColors value', 'string[]', '[#f87171, #fb923c, #fbbf24, #a3e635, #34d399, #2dd4bf, #38bdf8, #818cf8, #c084fc, #e879f9, #fb7185, #475569, #737373, #78716c, #ef4444]', '-'],
        ['format', 'Output format, default is `auto`', 'auto | hex | rgb | hsl', 'auto', 'auto, hex, rgb, hsl'],
        ['showPanel', 'showPanel value', 'boolean', 'true', '-'],
        ['showDropper', 'showDropper value', 'boolean', 'true', '-'],
        ['showTransparency', 'showTransparency value', 'boolean', 'true', '-'],
        ['showFormat', 'showFormat value', 'boolean', 'true', '-']
    ]">
</ApiTable>

## ColorPicker Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when update:modelValue', 'value: string'],
        ['on-change', 'Triggered when on change', 'value: string']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>
