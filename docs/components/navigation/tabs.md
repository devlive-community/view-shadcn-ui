---
title: 选项卡 (Tabs)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTab` 和 `ShadcnTabItem` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnTab :dark="darkMode">
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
    <ShadcnTab :dark="darkMode">
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
    <ShadcnSpace wrap :dark="darkMode">
        <ShadcnTab type="primary" :dark="darkMode">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
        <ShadcnTab type="success" :dark="darkMode">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
        <ShadcnTab type="warning" :dark="darkMode">
            <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 2" value="Tab 2" disabled>Tab 2 content</ShadcnTabItem>
            <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
        </ShadcnTab>
        <ShadcnTab type="error" :dark="darkMode">
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
    <ShadcnTab size="default" :dark="darkMode">
        <ShadcnTabItem label="Default 1" value="Default 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Default 2" value="Default 2" disabled>Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Default 3" value="Default 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab size="small" :dark="darkMode">
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
    <ShadcnTab :dark="darkMode">
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
    <ShadcnTab type="primary" line :dark="darkMode">
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
    <ShadcnTab closable :dark="darkMode">
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
    <ShadcnTab :dark="darkMode">
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
    <ShadcnTab direction="vertical" :dark="darkMode">
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
    <ShadcnTab direction="vertical" position="left" :dark="darkMode">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
    </ShadcnTab>
    <ShadcnTab direction="vertical" position="right" :dark="darkMode">
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
## 液态玻璃效果 (glass)
<CodeRunner title="液态玻璃效果 (glass)">
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
    <div class="p-8 rounded-lg bg-white/50 flex flex-col items-center gap-6">
      <ShadcnTab glass :dark="darkMode">
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
      </ShadcnTab>
      <ShadcnTab glass :dark="darkMode" type="success">
        <ShadcnTabItem label="Success 1" value="Success 1">Success content</ShadcnTabItem>
        <ShadcnTabItem label="Success 2" value="Success 2">Success content</ShadcnTabItem>
        <ShadcnTabItem label="Success 3" value="Success 3">Success content</ShadcnTabItem>
      </ShadcnTab>
      <ShadcnTab glass :dark="darkMode" type="warning" closable>
        <ShadcnTabItem label="Warning 1" value="Warning 1">Warning content</ShadcnTabItem>
        <ShadcnTabItem label="Warning 2" value="Warning 2">Warning content</ShadcnTabItem>
        <ShadcnTabItem label="Warning 3" value="Warning 3">Warning content</ShadcnTabItem>
      </ShadcnTab>
    </div>
  </div>
</CodeRunner>
:::

::: details 查看代码
```vue
<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
    <div class="p-8 rounded-lg bg-white/50 flex flex-col items-center gap-6">
      <ShadcnTab glass>
        <ShadcnTabItem label="Tab 1" value="Tab 1">Tab 1 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 2" value="Tab 2">Tab 2 content</ShadcnTabItem>
        <ShadcnTabItem label="Tab 3" value="Tab 3">Tab 3 content</ShadcnTabItem>
      </ShadcnTab>
      <ShadcnTab glass type="success">
        <ShadcnTabItem label="Success 1" value="Success 1">Success content</ShadcnTabItem>
        <ShadcnTabItem label="Success 2" value="Success 2">Success content</ShadcnTabItem>
        <ShadcnTabItem label="Success 3" value="Success 3">Success content</ShadcnTabItem>
      </ShadcnTab>
      <ShadcnTab glass type="warning" closable>
        <ShadcnTabItem label="Warning 1" value="Warning 1">Warning content</ShadcnTabItem>
        <ShadcnTabItem label="Warning 2" value="Warning 2">Warning content</ShadcnTabItem>
        <ShadcnTabItem label="Warning 3" value="Warning 3">Warning content</ShadcnTabItem>
      </ShadcnTab>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
```
:::
## 动态选项卡

<CodeRunner title="动态选项卡">
    Tab Value: {{ defaultValue }}
    <ShadcnTab v-model="defaultValue" size="small" card closable :dark="darkMode">
      <template #extra>
        <ShadcnButton @click="addTab" :dark="darkMode">Add</ShadcnButton>
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
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-'],
        ['dark', '是否启用暗黑模式', 'boolean', 'false', '-'],
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
import { useData } from 'vitepress'
import { ref, computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

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