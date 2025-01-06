---
title: Shadcn Tab
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnTab and ShadcnTabItem component.

## Usage

<CodeRunner title="Usage">
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">
            <p>Tab 1 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">
            <p>Tab 2 content</p>
        </ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">
            <p>Tab 1 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">
            <p>Tab 2 content</p>
        </ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Disabled

<CodeRunner title="Disabled">
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">
            <p>Tab 1 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>
            <p>Tab 2 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">
            <p>Tab 3 content</p>
        </ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">
            <p>Tab 1 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>
            <p>Tab 2 content</p>
        </ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">
            <p>Tab 3 content</p>
        </ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Type

<CodeRunner title="Type">
    <ShadcnSpace wrap>
        <ShadcnTab type="primary">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
        <ShadcnTab type="success">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
        <ShadcnTab type="warning">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
        <ShadcnTab type="error">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
    </ShadcnSpace>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab type="primary">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab type="success">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab type="warning">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab type="error">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Size

<CodeRunner title="Size">
    <ShadcnTab size="default">
        <ShadcnTabItem label="Default 1" value="Default 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Default 2" value="Default 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Default 3" value="Default 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab size="small">
        <ShadcnTabItem label="Small 1" value="Small 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Small 2" value="Small 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Small 3" value="Small 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab size="default">
        <ShadcnTabItem label="Default 1" value="Default 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Default 2" value="Default 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Default 3" value="Default 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab size="small">
        <ShadcnTabItem label="Small 1" value="Small 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Small 2" value="Small 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Small 3" value="Small 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Icon

<CodeRunner title="Icon">
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" icon="Save" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" icon="Save" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Card

<CodeRunner title="Card">
    <ShadcnTab type="primary" card>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab type="primary" card>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Closeable

<CodeRunner title="Closeable">
    <ShadcnTab closable>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab closable>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Extra

<CodeRunner title="Extra">
    <ShadcnTab>
        <template #extra>Close</template>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab>
        <template #extra>Close</template>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Direction

<CodeRunner title="Direction">
    <ShadcnTab direction="vertical">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab direction="vertical">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Position

<CodeRunner title="Position">
    <ShadcnTab direction="vertical" position="left">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab direction="vertical" position="right">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab direction="vertical" position="left">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab direction="vertical" position="right">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## Dynamic Tabs

<CodeRunner title="Dynamic Tabs">
    Tab Value: {{ defaultValue }}
    <ShadcnTab v-model="defaultValue" size="small" card closable>
      <template #extra>
        <ShadcnButton @click="addTab">Add</ShadcnButton>
      </template>
      <ShadcnTabItem v-for="item in tabs" :label="item.label" :value="item.value" :icon="item.icon" :disabled="item.disabled">
        This is {{ item.label }}
      </ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab v-model="defaultValue" size="small" card closable>
      <template #extra>
        <ShadcnButton @click="addTab">Add</ShadcnButton>
      </template>
      <ShadcnTabItem v-for="item in tabs" :label="item.label" :value="item.value" :icon="item.icon" :disabled="item.disabled">
        This is {{ item.label }}
      </ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tabs = ref([
    { label: 'Tab 1', value: 'Tab 1', icon: 'tabler:home', disabled: false },
    { label: 'Tab 2', value: 'Tab 2', icon: 'tabler:home', disabled: false },
    { label: 'Tab 3', value: 'Tab 3', icon: 'tabler:home', disabled: false },
])
const defaultValue = ref('Tab 1')

const addTab = () => {
    const tab = `Tab ${tabs.value.length + 1}`
    tabs.value.push({
        label: tab,
        value: tab,
        disabled: false,
    })
    defaultValue.value = tab
}
</script>
```

:::

## Tabs Props

<ApiTable title="Tab Props"
    :headers="['属性', '描述', '类似', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', 'The value of the active tab', 'String', '-', '-', '-'],
        ['type', 'The type of the tab', 'String', 'primary', '-', 'primary | success | warning | error'],
        ['size', 'The size of the tab', 'String', 'default', '-', 'default | small'],
        ['card', 'Whether the tab is a card', 'Boolean', 'false', '-', '-'],
        ['closable', 'Whether the tab is closable', 'Boolean', 'false', '-', '-'],
        ['direction', 'The direction of the tab', 'String', 'horizontal', '-', 'horizontal | vertical'],
        ['position', 'The position of the tab', 'String', 'top', '-', 'left | right'],
    ]">
</ApiTable>

<br />

<ApiTable title="Tab Item Props"
    :headers="['属性', '描述', '类似', '默认值', '依赖', '支持列表']"
    :columns="[
        ['label', 'The label of the tab', 'String', '-', '-', '-'],
        ['value', 'The value of the tab', 'String', '-', '-', '-'],
        ['disabled', 'Whether the tab is disabled', 'Boolean', 'false', '-', '-'],
        ['icon', 'The icon of the tab', 'String', '-', '-', '-'],
    ]">
</ApiTable>

## Tabs Events

<ApiTable title="Tab Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', 'Emitted when the active tab changes', 'String'],
        ['on-tab-remove', 'Emitted when the tab is removed', 'String'],
    ]">
</ApiTable>

<br />

<ApiTable title="Tab Item Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-click', 'Emitted when the tab is clicked', 'String'],
    ]">
</ApiTable>

## Tabs Slots

<ApiTable title="Tab Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['extra', 'Extra slot'],
    ]">
</ApiTable>

<br />

<ApiTable title="Tab Item Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['label', 'Label slot'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue' 

const defaultValue = ref('Tab 1')

const tabs = ref([
    { label: 'Tab 1', value: 'Tab 1', icon: 'tabler:home', disabled: false },
    { label: 'Tab 2', value: 'Tab 2', icon: 'tabler:home', disabled: false },
    { label: 'Tab 3', value: 'Tab 3', icon: 'tabler:home', disabled: false },
])

const addTab = () => {
    const tab = `Tab ${tabs.value.length + 1}`
    tabs.value.push({
      label: tab,
      value: tab,
      disabled: false,
    })
    defaultValue.value = tab
}
</script>
