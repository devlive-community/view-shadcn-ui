---
title: 警告提示 (Alert)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnAlert` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnAlert :dark="darkMode">Alert</ShadcnAlert>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert :dark="darkMode">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 标题 (title)

<CodeRunner title="标题 (title)">
    <ShadcnAlert title="Title" :dark="darkMode">Alert</ShadcnAlert>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert title="Title" :dark="darkMode">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <div class="space-y-2">
        <ShadcnAlert type="primary" :dark="darkMode">Alert</ShadcnAlert>
        <ShadcnAlert type="success" :dark="darkMode">Alert</ShadcnAlert>
        <ShadcnAlert type="warning" :dark="darkMode">Alert</ShadcnAlert>
        <ShadcnAlert type="error" :dark="darkMode">Alert</ShadcnAlert>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert type="primary" :dark="darkMode">Alert</ShadcnAlert>
    <ShadcnAlert type="success" :dark="darkMode">Alert</ShadcnAlert>
    <ShadcnAlert type="warning" :dark="darkMode">Alert</ShadcnAlert>
    <ShadcnAlert type="error" :dark="darkMode">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 图标 (icon)

<CodeRunner title="图标 (icon)">
    <ShadcnAlert title="Title" show-icon :dark="darkMode">Alert</ShadcnAlert>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert title="Title" show-icon :dark="darkMode">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 横幅 (banner)

<CodeRunner title="横幅 (banner)">
    <ShadcnAlert title="Title" banner :dark="darkMode">Alert</ShadcnAlert>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert title="Title" banner :dark="darkMode">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 可关闭 (closable)

<CodeRunner title="可关闭 (closable)">
    <ShadcnAlert title="Title" closable :dark="darkMode">Alert</ShadcnAlert>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnAlert title="Title" closable :dark="darkMode">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 警告提示 (Alert) 属性

<ApiTable title="警告提示 (Alert) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['title', '组件的标题', 'string', '-', '-'],
        ['type', '组件的类型', 'enum', 'primary', 'primary | success | warning | error'],
        ['show-icon', '是否显示图标', 'boolean', 'false', '-'],
        ['banner', '是否为横幅', 'boolean', 'false', '-'],
        ['closable', '是否可关闭', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 警告提示 (Alert) 事件

<ApiTable title="警告提示 (Alert) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['close', '点击关闭按钮时触发', 'true | false'],
    ]">
</ApiTable>

## 警告提示 (Alert) 插槽

<ApiTable title="警告提示 (Alert) 插槽"
    :headers="['插槽', '描述', '回调参数']"
    :columns="[
        ['default', '内容文本区域', '-'],
        ['icon', '图标区域', '-'],
        ['close', '关闭按钮区域', '-'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>