---
title: 选项卡 (Tabs)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTab` 和 `ShadcnTabItem` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
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

## 禁用 (disabled)

<CodeRunner title="禁用 (disabled)">
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

## 类型 (type)

<CodeRunner title="类型 (type)">
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

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
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

## 图标 (icon)

<CodeRunner title="图标 (icon)">
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

## 线型 (line)

<CodeRunner title="线型 (line)">
    <ShadcnTab type="primary" line>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTab type="primary" line>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
</template>

<script setup lang="ts">
</script>
```

:::

## 可关闭 (closeable)

<CodeRunner title="可关闭 (closeable)">
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

## 附加信息 (extra)

<CodeRunner title="附加信息 (extra)">
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

## 方向 (direction)

<CodeRunner title="方向 (direction)">
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

## 位置 (position)

<CodeRunner title="位置 (position)">
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

## 动态选项卡

<CodeRunner title="动态选项卡">
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

## 选项卡 (Tabs) 属性

<ApiTable title="选项卡 (Tabs) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前激活选项卡的值', 'string', '-', '-'],
        ['type', '选项卡的类型', 'string', 'primary', 'primary | success | warning | error'],
        ['size', '选项卡的大小', 'string', 'default', 'default | small'],
        ['line', '选项卡是否为线性', 'boolean', 'false', '-'],
        ['closable', '选项卡是否可关闭', 'boolean', 'false', '-'],
        ['direction', '选项卡的方向', 'string', 'horizontal', 'horizontal | vertical'],
        ['position', '选项卡的位置', 'string', 'top', 'left | right'],
        ['showScrollButtons', '是否显示滚动按钮', 'boolean', 'true', '-'],
    ]">
</ApiTable>

## 选项卡选项 (Tabs Item) 属性

<ApiTable title="选项卡选项 (Tabs Item) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['label', '选项卡的标签', 'string', '-'],
        ['value', '选项卡的值', 'string', '-'],
        ['disabled', '选项卡是否禁用', 'boolean', 'false'],
        ['icon', '选项卡的图标', 'string', '-'],
    ]">
</ApiTable>

## 选项卡 (Tabs) 事件

<ApiTable title="选项卡 (Tabs) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '活动选项卡更改时发出', 'String'],
        ['on-tab-remove', '删除选项卡时发出', 'String'],
    ]">
</ApiTable>

## 选项卡选项 (Tabs Item) 事件

<ApiTable title="选项卡选项 (Tabs Item) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-click', '点击选项卡时发出', 'String'],
    ]">
</ApiTable>

## 选项卡 (Tabs) 插槽

<ApiTable title="选项卡 (Tabs) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['extra', '额外内容'],
    ]">
</ApiTable>

## 选项卡选项 (Tabs Item) 插槽

<ApiTable title="选项卡选项 (Tabs Item) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['label', '选项卡的标签'],
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