---
title: Shadcn Watermark
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnWatermark component.

## Usage

::: raw

<CodeRunner title="Usage">
  <ShadcnWatermark>
    <div style="height: 24rem;"/>
  </ShadcnWatermark>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnWatermark>
    <div style="height: 24rem;"/>
  </ShadcnWatermark>
</template>

<script setup lang="ts">
</script>
```

:::

## Array

::: raw

<CodeRunner title="Array">
  <ShadcnWatermark :content="['Company', 'Name', 'Time']">
    <div class="h-96"/>
  </ShadcnWatermark>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnWatermark :content="['Company', 'Name', 'Time']">
    <div class="h-96"/>
  </ShadcnWatermark>
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['content', 'The text content of the watermark', 'string | string[]', '-', '-', '-'],
        ['width', 'The width of each watermark unit', 'number', '120', '-', '-'],
        ['height', 'The height of each watermark unit', 'number', '64', '-', '-'],
        ['gapX', 'The horizontal spacing between watermarks', 'number', '100', '-', '-'],
        ['gapY', 'The vertical spacing between watermarks', 'number', '100', '-', '-'],
        ['rotate', 'The rotation angle of the watermark text', 'number', '-22', '-', '-'],
        ['fontSize', 'The font size of the watermark text', 'number', '14', '-', '-'],
        ['fontColor', 'The color of the watermark text', 'string', 'rgba(0, 0, 0, 0.15)', '-', '-'],
        ['fontFamily', 'The font family of the watermark text', 'string', 'sans-serif', '-', '-'],
        ['opacity', 'The opacity of the entire watermark layer', 'number', '1', '-', '-'],
        ['antiTamperLayers', 'Number of anti-tampering layers', 'number', '2', '-', '-'],
        ['fontWeight', 'The font weight of the watermark text', 'number | string', '400', '-', '-'],
        ['zIndex', 'The z-index of the watermark layer', 'number', '9', '-', '-']
    ]">
</ApiTable>
