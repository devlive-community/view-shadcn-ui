---
title: Shadcn Data Builder
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnDataBuilder component.

- ShadcnDataBuilderPanel
- ShadcnDataBuilderEditor
- ShadcnDataBuilderConfigure
- ShadcnDataBuilderCanvas

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="panels"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    group: 'Basic Components',
    children: [
      {type: 'text', label: 'Text'},
      {type: 'image', label: 'Image'},
      {type: 'chart', label: 'Chart'},
    ]
  }
])
```

:::

## Width and Height

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="panels" :width="800" :height="600"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :width="800" :height="600"/>
</template>
```

:::

## Toolbar

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="panels" :show-toolbar="false" :width="800" :height="600" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :show-toolbar="false" :width="800" :height="600" />
</template>
```

:::

## DataBuilder Props

<ApiTable title="DataBuilder Editor Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['items', 'The data of the data builder', '\[\]', '-', '-', '-'],
        ['panelWidth', 'The width of the panel', 'number', '200', '-', '-'],
        ['showGrid', 'Whether to show the grid', 'boolean', 'true', '-', '-'],
        ['snapToGrid', 'Whether to snap to the grid', 'boolean', 'true', '-', '-'],
        ['gridSize', 'The size of the grid', 'number', '20', '-', '-'],
        ['showRuler', 'Whether to show the ruler', 'boolean', 'true', '-', '-'],
        ['width', 'The width of the content', 'number', '1920', '-', '-'],
        ['height', 'The height of the content', 'number', '1080', '-', '-'],
        ['showToolbar', 'Whether to show the toolbar', 'boolean', 'true', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="DataBuilder Panel Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['width', 'The width of the panel', 'number', '200', '-', '-'],
        ['items', 'The data of the data builder', '\[\]', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="DataBuilder Canvas Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['showGrid', 'Whether to show the grid', 'boolean', 'true', '-', '-'],
        ['snapToGrid', 'Whether to snap to the grid', 'boolean', 'true', '-', '-'],
        ['gridSize', 'The size of the grid', 'number', '20', '-', '-'],
        ['showRuler', 'Whether to show the ruler', 'boolean', 'true', '-', '-'],
        ['width', 'The width of the content', 'number', '1920', '-', '-'],
        ['height', 'The height of the content', 'number', '1080', '-', '-'],
        ['showToolbar', 'Whether to show the toolbar', 'boolean', 'true', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="DataBuilder Configure Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['selectedComponent', 'The selected component', 'any', '-', '-', '-'],
        ['canvasWidth', 'The width of the canvas', 'number', '1920', '-', '-'],
        ['canvasHeight', 'The height of the canvas', 'number', '1080', '-', '-'],
        ['gridSize', 'The size of the grid', 'number', '20', '-', '-'],
    ]">
</ApiTable>

## DataBuilder Events

<ApiTable title="DataBuilder Editor Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update-config', 'Triggered when the configuration is updated', 'any\[\]'],
    ]">
</ApiTable>

<br />

<ApiTable title="DataBuilder Canvas Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:components', 'Triggered when the components are updated', 'any\[\]'],
        ['select', 'Triggered when the component is selected', 'any\[\]'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const panels = ref([
  {
    group: 'Basic Components',
    children: [
      {type: 'text', label: 'Text'},
      {type: 'image', label: 'Image'},
      {type: 'chart', label: 'Chart'},
    ]
  }
])
</script>
