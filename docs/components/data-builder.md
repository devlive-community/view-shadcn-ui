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

## Show Grid

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="panels" :show-grid="false" :width="800" :height="600" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :show-grid="false" :width="800" :height="600" />
</template>
```

:::

## Snap to Grid

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="panels" :snap-to-grid="false" :width="800" :height="600" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :snap-to-grid="false" :width="800" :height="600" />
</template>
```

:::

## Canvas Center

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="panels" is-center />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" is-center />
</template>
```

:::

## Resize

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="panels" :resize="false" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :resize="false" />
</template>
```

:::

## Canvas Style

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="panels" :canvas-style="{backgroundColor: '#e01a1a'}" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items":canvas-style="{backgroundColor: '#e01a1a'}" />
</template>
```

:::

## Guidelines

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="panels" show-guidelines />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" show-guidelines />
</template>
```

:::

## Slot

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="panels2" :config-width="300" :height="300" :width="1080" @update-config="console.log($event)">
      <template #text="{ configure, isSelected }">
        <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
          {{ getConfigValue(configure, 'Text Group', 'Text Component') }}
        </ShadcnText>
      </template>
    </ShadcnDataBuilderEditor>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :config-width="300" @update-config="console.log($event)">
    <template #text="{ configure, isSelected }">
      <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
        {{ getConfigValue(configure, 'Text Group', 'Text Component') }}
      </ShadcnText>
    </template>
  </ShadcnDataBuilderEditor>
</template>
```

:::

## DataBuilder Props

<ApiTable title="DataBuilder Editor Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['items', 'The data of the data builder', '\[\]', '-', '-', '-'],
        ['panelWidth', 'The width of the panel', 'number', '200', '-', '-'],
        ['configWidth', 'The width of the config', 'number', '200', '-', '-'],
        ['showGrid', 'Whether to show the grid', 'boolean', 'true', '-', '-'],
        ['snapToGrid', 'Whether to snap to the grid', 'boolean', 'true', '-', '-'],
        ['gridSize', 'The size of the grid', 'number', '20', '-', '-'],
        ['showRuler', 'Whether to show the ruler', 'boolean', 'true', '-', '-'],
        ['width', 'The width of the content', 'number', '1920', '-', '-'],
        ['height', 'The height of the content', 'number', '1080', '-', '-'],
        ['showToolbar', 'Whether to show the toolbar', 'boolean', 'true', '-', '-'],
        ['isCenter', 'Whether to center the canvas', 'boolean', 'false', '-', '-'],
        ['resize', 'Whether to enable resize', 'boolean', 'true', '-', '-'],
        ['canvasStyle', 'The style of the canvas', 'object', '-', '-', '-'],
        ['showGuidelines', 'Whether to show the guidelines', 'boolean', 'false', '-', '-'],
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
        ['isCenter', 'Whether to center the canvas', 'boolean', 'false', '-', '-'],
        ['resize', 'Whether to enable resize', 'boolean', 'true', '-', '-'],
        ['canvasStyle', 'The style of the canvas', 'object', '-', '-', '-'],
        ['showGuidelines', 'Whether to show the guidelines', 'boolean', 'false', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="DataBuilder Configure Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['width', 'The width of the content', 'number', '200', '-', '-'],
        ['selectedComponent', 'The selected component', 'any', '-', '-', '-'],
        ['canvasWidth', 'The width of the canvas', 'number', '1920', '-', '-'],
        ['canvasHeight', 'The height of the canvas', 'number', '1080', '-', '-'],
        ['gridSize', 'The size of the grid', 'number', '20', '-', '-'],
    ]">
</ApiTable>

## DataBuilder Slots

<ApiTable title="DataBuilder Editor Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['slots', 'Render the corresponding slot according to the component type, for example, if item.type=text, render the text slot, { component, configure, isSelected }'],
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
        ['update:selectedId', 'Triggered when the component is selected', 'string | undefined'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const panels = ref([
  {
    group: 'Basic Components',
    children: [
      {
        type: 'text', label: 'Text', configure: [
          {
            group: 'Text Group',
            items: [
              { type: 'text', label: 'Text Component', description: 'Description', value: 'Hello, View Shadcn UI' },
              { type: 'number', label: 'Number Component', value: 12, min: 0, max: 100 },
              { type: 'textarea', label: 'Textarea Component', value: 'Hello, View Shadcn UI' },
              { type: 'password', label: 'Password Component', value: '123456789' },
              { type: 'switch', label: 'Switch Component', value: false, trueValue: 'On', falseValue: 'Off' },
              { type: 'radio', label: 'Radio Component', value: 'Option 1', options: [{ label: 'Option 1', value: 'Option 1' }, { label: 'Option 2', value: 'Option 2' }] },
              {
                type: 'checkbox',
                label: 'Checkbox Component',
                value: ['Option 1', 'Option 2', 'Option 3'],
                options: [{ label: 'Option 1', value: 'Option 1' }, { label: 'Option 2', value: 'Option 2' }]
              },
              { type: 'select', label: 'Select Component', value: 'Option 1', options: [{ label: 'Option 1', value: 'Option 1' }, { label: 'Option 2', value: 'Option 2' }] },
              { type: 'slider', label: 'Slider Component', value: 50, min: 0, max: 100, showTip: true },
              { type: 'rate', label: 'Rate Component', value: 3, max: 5 }
            ]
          },
          {
            group: 'Text Group 2',
            items: [
              { type: 'text', label: 'Text', value: 'Hello, View Shadcn UI' },
              { type: 'title', label: 'Title' },
              { type: 'paragraph', label: 'Paragraph' }
            ]
          }
        ]
      },
      { type: 'image', label: 'Image' },
      { type: 'chart', label: 'Chart' }
    ]
  }
])

const panels2 = ref([
  {
    group: 'Basic Components',
    children: [
      {
        type: 'text', label: 'Text', configure: [
          {
            group: 'Text Group',
            items: [
              { type: 'text', label: 'Text Component', description: 'Description', value: 'Hello, View Shadcn UI' },
            ]
          },
          {
            group: 'Text Group 2',
            items: [
              { type: 'text', label: 'Text', value: 'Hello, View Shadcn UI' },
              { type: 'title', label: 'Title' },
              { type: 'paragraph', label: 'Paragraph' }
            ]
          }
        ]
      }
    ]
  }
])

const getConfigValue = (configure, groupName, label) => {
  if (!configure) {
    return null
  }
  const group = configure.find(g => g.group === groupName)
  if (!group) {
    return null
  }
  const item = group.items?.find(item => item.label === label)
  return item?.value
}
</script>
