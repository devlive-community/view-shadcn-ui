---
title: Shadcn Data Builder
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnDataBuilder component.

- ShadcnDataBuilderPanel
- ShadcnDataBuilderEditor
- ShadcnDataBuilderConfigure
- ShadcnDataBuilderContent

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

<ApiTable title="DataBuilder Content Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['showGrid', 'Whether to show the grid', 'boolean', 'true', '-', '-'],
        ['snapToGrid', 'Whether to snap to the grid', 'boolean', 'true', '-', '-'],
        ['gridSize', 'The size of the grid', 'number', '20', '-', '-'],
        ['showRuler', 'Whether to show the ruler', 'boolean', 'true', '-', '-'],
    ]">
</ApiTable>

## DataBuilder Events

<ApiTable title="DataBuilder Editor Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update-config', 'Triggered when the configuration is updated', 'any\[\]'],
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
