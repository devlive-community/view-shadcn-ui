---
title: Shadcn Data Builder
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnDataBuilder component.

- ShadcnDataBuilderPanel
- ShadcnDataBuilderEditor
- ShadcnDataBuilderConfigure
- ShadcnDataBuilderCanvas
- ShadcnDataBuilderView

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
        <template #panel-label="{ item }">
          {{ item.label }} - {{ item.type }}
        </template>
        <template #text="{ configure, isSelected }">
            <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
              {{ getConfigValue(configure, 'text', 'Text Component') }}
            </ShadcnText>
        </template>
    </ShadcnDataBuilderEditor>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :config-width="300" @update-config="console.log($event)">
    <template #panel-label="{ item }">
      {{ item.label }} - {{ item.type }}
    </template>

    <template #text="{ configure, isSelected }">
      <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
        {{ getConfigValue(configure, 'text', 'Text Component') }}
      </ShadcnText>
    </template>
  </ShadcnDataBuilderEditor>
</template>

<script setup lang="ts">
  const getConfigValue = (configure, groupKey, label) => {
    if (!configure) {
      return null
    }
    const group = configure.find(g => g.key === groupKey)
    if (!group) {
      return null
    }
    const item = group.items?.find(item => item.label === label)
    return item?.value
  }
</script>
```

:::

## Style

::: raw

<CodeRunner title="Usage">
    <ShadcnDataBuilderEditor :items="stylePanels" :config-width="300" :height="300" :width="1080" @update-config="console.log($event)">
        <template #panel-label="{ item }">
          {{ item.label }} - {{ item.type }}
        </template>
        <template #text="{ configure, isSelected }">
            <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
              {{ getConfigValue(configure, 'text', 'Text Component') }}
            </ShadcnText>
        </template>
    </ShadcnDataBuilderEditor>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :config-width="300" @update-config="console.log($event)">
    <template #panel-label="{ item }">
      {{ item.label }} - {{ item.type }}
    </template>
    
    <template #text="{ configure, isSelected }">
      <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
        {{ getConfigValue(configure, 'text', 'Text Component') }}
      </ShadcnText>
    </template>
  </ShadcnDataBuilderEditor>
</template>

<script setup lang="ts">
  const getConfigValue = (configure, groupKey, label) => {
    if (!configure) {
      return null
    }
    const group = configure.find(g => g.key === groupKey)
    if (!group) {
      return null
    }
    const item = group.items?.find(item => item.label === label)
    return item?.value
  }
</script>
```

:::

## View

::: raw

<CodeRunner title="Usage">
  <ShadcnDataBuilderView :width="style.width" :height="style.height" :items="items" :canvas-style="style.canvasStyle">
    <template #text="{ configure, isSelected }">
      <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
        {{ getConfigValue(configure, 'text', 'Text Component') }}
      </ShadcnText>
    </template>
  </ShadcnDataBuilderView>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnDataBuilderView :width="style.width"
                         :height="style.height"
                         :items="items"
                         :canvas-style="style.canvasStyle">
    <template #text="{ configure, isSelected }">
      <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
        {{ getConfigValue(configure, 'text', 'Text Component') }}
      </ShadcnText>
    </template>
  </ShadcnDataBuilderView>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { fnToFunction } from 'view-shadcn-ui'

  const getConfigValue = (configure, groupName, label) => {
    if (!configure) {
      return null
    }
    const group = configure.find(g => g.key === groupName)
    if (!group) {
      return null
    }
    const item = group.items?.find(item => item.label === label)
    return item?.value
  }

  const style = ref({
    'width': 1920,
    'height': 1080,
    'canvasStyle': { 'backgroundColor': '#ffffff', backgroundImage: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg', opacity: 1 },
    'items': [{
      'id': 1732028258612,
      'type': 'text',
      'label': 'Text',
      'x': 240,
      'y': 120,
      'width': 520,
      'height': 300,
      'zIndex': 1,
      'configure': [{
        'group': 'Style Group',
        'key': 'style',
        'items': [{ 'type': 'text', 'label': 'Background Color', 'key': 'backgroundColor', 'description': 'Description', 'value': '#FFF333' },
          { 'type': 'number', 'label': 'Border Radius', 'key': 'borderRadius', 'value': '12', 'min': 0, 'max': 100, 'formatter': '(value) => `${value}px`' }]
      }, {
        'group': 'Text Group',
        'key': 'text',
        'items': [{ 'type': 'text', 'label': 'Text Component', 'description': 'This is a long description', 'value': 'Hello, View Shadcn UI' }]
      }]
    }]
  })

  const items = computed(() => {
    return style.value.items?.map(item => ({
      ...item,
      configure: item.configure?.map(group => ({
        ...group,
        items: group.items?.map(configItem => ({
          ...configItem,
          formatter: typeof configItem.formatter === 'string'
              ? (fnToFunction(configItem.formatter) ?? (() => undefined))()
              : configItem.formatter
        }))
      }))
    }))
  })
</script>
```

:::

## DataBuilder Props

::: warning

Let's start with an example:

```json
{
    type: 'text', label: 'Text', configure: [
      {
        group: 'Style Group',
        key: 'style',
        items: [
          { type: 'text', label: 'Background Color', key: 'backgroundColor', description: 'Description', value: '#FFF333' },
          { type: 'number', label: 'Border Radius', key: 'borderRadius', value: '12', min: 0, max: 100, formatter: (value) => `${ value }px` }
        ]
      }
    ]
}
```

There is a special group `key=style` which is mainly used for style configuration, and it takes effect automatically by default.

The items in items are configured as follows:

- **type**: component type (refer to all currently supported form components)
- **label**: The name of the component display
- **description**: The description displayed by the component

For other properties, see Supported Configurations for Components.

If it's a style group, you must configure the following for it to take effect:

- **key**: corresponds to the name of the CSS property
- **value**: corresponds to the value of the CSS property
- **formatter**: A function used to format the configuration

::: 

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

<br />

<ApiTable title="DataBuilder View Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['width', 'The width of the content', 'number', '1920', '-', '-'],
        ['height', 'The height of the content', 'number', '1080', '-', '-'],
        ['canvasStyle', 'The style of the canvas', 'object', '-', '-', '-'],
        ['items', 'The data of the data builder', '\[\]', '-', '-', '-'],
    ]">
</ApiTable>

## DataBuilder Slots

<ApiTable title="DataBuilder Editor Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['slots', 'Render the corresponding slot according to the component type, for example, if item.type=text, render the text slot, { component, configure, isSelected }'],
        ['panel-label', 'Render the panel label, { item }'],
    ]">
</ApiTable>

<br />

<ApiTable title="DataBuilder Panel Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['label' , 'Render the panel label, { item }'],
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
import { ref, computed } from 'vue'
import { fnToFunction } from 'view-shadcn-ui' 

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
            key: 'text',
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

const stylePanels = ref([
  {
    group: 'Basic Components',
    children: [
      {
        type: 'text', label: 'Text', configure: [
          {
            group: 'Style Group',
            key: 'style',
            items: [
              { type: 'text', label: 'Background Color', key: 'backgroundColor', description: 'Description', value: '#FFF333' },
              { type: 'number', label: 'Border Radius', key: 'borderRadius', value: '12', min: 0, max: 100, formatter: (value) => `${ value }px` }
            ]
          },
          {
            group: 'Text Group',
            key: 'text',
            items: [
              {
                type: 'text',
                label: 'Text Component',
                description: 'This is a long description',
                value: 'Hello, View Shadcn UI'
              }
            ]
          }
        ]
      },
      { type: 'chart', label: 'Chart' }
    ]
  }
])

const getConfigValue = (configure, groupName, label) => {
  if (!configure) {
    return null
  }
  const group = configure.find(g => g.key === groupName)
  if (!group) {
    return null
  }
  const item = group.items?.find(item => item.label === label)
  return item?.value
}

const style = ref({
  'width': 1920,
  'height': 1080,
  'canvasStyle': { 'backgroundColor': '#ffffff', backgroundImage: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg', opacity: 1 },
  'items': [{
    'id': 1732028258612,
    'type': 'text',
    'label': 'Text',
    'x': 240,
    'y': 120,
    'width': 520,
    'height': 300,
    'zIndex': 1,
    'configure': [{
      'group': 'Style Group',
      'key': 'style',
      'items': [{ 'type': 'text', 'label': 'Background Color', 'key': 'backgroundColor', 'description': 'Description', 'value': '#FFF333' },
        { 'type': 'number', 'label': 'Border Radius', 'key': 'borderRadius', 'value': '12', 'min': 0, 'max': 100, 'formatter': '(value) => `${value}px`' }]
    }, {
      'group': 'Text Group',
      'key': 'text',
      'items': [{ 'type': 'text', 'label': 'Text Component', 'description': 'This is a long description', 'value': 'Hello, View Shadcn UI' }]
    }]
  }]
})

const items = computed(() => {
  return style.value.items?.map(item => ({
    ...item,
    configure: item.configure?.map(group => ({
      ...group,
      items: group.items?.map(configItem => ({
        ...configItem,
        formatter: typeof configItem.formatter === 'string'
            ? (fnToFunction(configItem.formatter) ?? (() => undefined))()
            : configItem.formatter
      }))
    }))
  }))
})
</script>
