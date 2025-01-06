---
title: 数据构建 (Data Builder)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnDataBuilder` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnDataBuilderEditor :items="panels"/>
</CodeRunner>

:::

::: details 查看代码

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

## 宽高 (width & height)

::: raw

<CodeRunner title="宽高">
    <ShadcnDataBuilderEditor :items="panels" :width="800" :height="600"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :width="800" :height="600"/>
</template>
```

:::

## 工具栏 (show-toolbar)

::: raw

<CodeRunner title="工具栏">
    <ShadcnDataBuilderEditor :items="panels" :show-toolbar="false" :width="800" :height="600" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :show-toolbar="false" :width="800" :height="600" />
</template>
```

:::

## 显示网格 (show-grid)

::: raw

<CodeRunner title="显示网格">
    <ShadcnDataBuilderEditor :items="panels" :show-grid="false" :width="800" :height="600" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :show-grid="false" :width="800" :height="600" />
</template>
```

:::

## 对齐网格 (snap-to-grid)

::: raw

<CodeRunner title="对齐网格">
    <ShadcnDataBuilderEditor :items="panels" :snap-to-grid="false" :width="800" :height="600" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :snap-to-grid="false" :width="800" :height="600" />
</template>
```

:::

## 居中 (is-center)

::: raw

<CodeRunner title="居中">
    <ShadcnDataBuilderEditor :items="panels" is-center />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" is-center />
</template>
```

:::

## 重置尺寸 (resize)

::: raw

<CodeRunner title="重置尺寸">
    <ShadcnDataBuilderEditor :items="panels" :resize="false" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" :resize="false" />
</template>
```

:::

## 画布样式 (canvas-style)

::: raw

<CodeRunner title="画布样式">
    <ShadcnDataBuilderEditor :items="panels" :canvas-style="{backgroundColor: '#e01a1a'}" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnDataBuilderEditor :items="items":canvas-style="{backgroundColor: '#e01a1a'}" />
</template>
```

:::

## 辅助线 (show-guidelines)

::: raw

<CodeRunner title="辅助线">
    <ShadcnDataBuilderEditor :items="panels" show-guidelines />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnDataBuilderEditor :items="items" show-guidelines />
</template>
```

:::

## 自定义面板插槽

::: raw

<CodeRunner title="自定义面板插槽">
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

::: details 查看代码

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

## 自定义面板样式

::: raw

<CodeRunner title="自定义面板样式">
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

::: details 查看代码

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

## 数据构建视图

::: raw

<CodeRunner title="数据构建视图">
  <ShadcnDataBuilderView :width="style.width" :height="style.height" :items="items" :canvas-style="style.canvasStyle">
    <template #text="{ configure, isSelected }">
      <ShadcnText type="h1" :class="isSelected ? 'text-blue-600' : 'text-gray-900'">
        {{ getConfigValue(configure, 'text', 'Text Component') }}
      </ShadcnText>
    </template>
  </ShadcnDataBuilderView>
</CodeRunner>

:::

::: details 查看代码

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

## 数据构建 (Data Builder) 属性

::: warning

让我们从一个例子开始：

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

有一个特殊的组 `key=style` 主要用于样式配置，默认自动生效。

`items` 中的项配置如下：

- **type**：组件类型（参考当前支持的所有表单组件）
- **label**：组件显示的名称
- **description**：组件显示的描述

有关其他属性，请参阅组件支持的配置。

如果是样式组，则必须配置以下内容才能生效：

- **key**：对应 CSS 属性的名称
- **value**：对应 CSS 属性的值
- **formatter**：用于格式化配置的函数

::: 

<ApiTable title="数据构建 (Data Builder) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['items', '数据构建器的数据', '\[\]', '-'],
        ['panelWidth', '面板的宽度', 'number', '200'],
        ['configWidth', '配置的宽度', 'number', '200'],
        ['showGrid', '是否显示网格', 'boolean', 'true'],
        ['snapToGrid', '是否对齐网格', 'boolean', 'true'],
        ['gridSize', '网格的大小', 'number', '20'],
        ['showRuler', '是否显示标尺', 'boolean', 'true'],
        ['width', '内容的宽度', 'number', '1920'],
        ['height', '内容的高度', 'number', '1080'],
        ['showToolbar', '是否显示工具栏', 'boolean', 'true'],
        ['isCenter', '是否将画布居中', 'boolean', 'false'],
        ['resize', '是否启用调整大小', 'boolean', 'true'],
        ['canvasStyle', '画布的样式', 'object', '-'],
        ['showGuidelines', '是否显示辅助线', 'boolean', 'false'],
    ]">
</ApiTable>

<br />

<ApiTable title="数据构建面板 (Data Builder Panel) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['width', '面板的宽度', 'number', '200'],
        ['items', '数据构建器的数据', '\[\]', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="数据构建画布 (Data Builder Canvas) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['showGrid', '是否显示网格', 'boolean', 'true'],
        ['snapToGrid', '是否对齐网格', 'boolean', 'true'],
        ['gridSize', '网格的大小', 'number', '20'],
        ['showRuler', '是否显示标尺', 'boolean', 'true'],
        ['width', '内容的宽度', 'number', '1920'],
        ['height', '内容的高度', 'number', '1080'],
        ['showToolbar', '是否显示工具栏', 'boolean', 'true'],
        ['isCenter', '是否将画布居中', 'boolean', 'false'],
        ['resize', '是否启用调整大小', 'boolean', 'true'],
        ['canvasStyle', '画布的样式', 'object', '-'],
        ['showGuidelines', '是否显示辅助线', 'boolean', 'false'],
    ]">
</ApiTable>

<br />

<ApiTable title="数据构建配置 (Data Builder Config) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['width', '内容的宽度', 'number', '200'],
        ['selectedComponent', '所选组件', 'any', '-'],
        ['canvasWidth', '画布的宽度', 'number', '1920'],
        ['canvasHeight', '画布的高度', 'number', '1080'],
        ['gridSize', '网格的大小', 'number', '20'],
    ]">
</ApiTable>

<br />

<ApiTable title="数据构建视图 (Data Builder View) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['width', '内容的宽度', 'number', '1920'],
        ['height', '内容的高度', 'number', '1080'],
        ['canvasStyle', '画布的样式', 'object', '-'],
        ['items', '数据构建器的数据', '\[\]', '-'],
    ]">
</ApiTable>

## 数据构建 (Data Builder) 插槽

<ApiTable title="数据构建 (Data Builder) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['slots', '根据组件类型渲染对应的槽位，例如如果 item.type=text，则渲染文本槽位，{ component， configure， isSelected }'],
        ['panel-label', '渲染面板标签 { item }'],
    ]">
</ApiTable>

<br />

<ApiTable title="数据构建面板 (Data Builder Panel) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['label' , '渲染面板标签 { item }'],
    ]">
</ApiTable>

## 数据构建 (Data Builder) 事件

<ApiTable title="数据构建 (Data Builder) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update-config', '更新配置时触发', 'any\[\]'],
    ]">
</ApiTable>

<br />

<ApiTable title="DataBuilder Canvas Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:components', 'Triggered when the components are updated', 'any\[\]'],
        ['select', 'Triggered when the component is selected', 'any\[\]'],
        ['update:selectedId', 'Triggered when the component is selected', 'string | undefined'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref, computed } from 'vue'

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

const fnToFunction = (formatterStr: string): Function | undefined => {
    if (!formatterStr) {
        return undefined
    }
    try {
        return new Function('value', `return ${ formatterStr }`)
    }
    catch (e) {
        console.error('Failed to parse formatter:', e)
        return undefined
    }
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