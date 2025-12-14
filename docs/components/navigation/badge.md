---
title: 徽章 (Badge)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnBadge` 组件的一些功能和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnBadge text="Badge" :dark="darkMode">Badge</ShadcnBadge>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnBadge text="Badge">Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <ShadcnBadge type="primary" text="Badge" :dark="darkMode">Primary</ShadcnBadge>
    <ShadcnBadge type="success" text="Badge" :dark="darkMode">Success</ShadcnBadge>
    <ShadcnBadge type="warning" text="Badge" :dark="darkMode">Warning</ShadcnBadge>
    <ShadcnBadge type="danger" text="Badge" :dark="darkMode">Danger</ShadcnBadge>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnBadge type="primary" text="Badge">Primary</ShadcnBadge>
    <ShadcnBadge type="success" text="Badge">Success</ShadcnBadge>
    <ShadcnBadge type="warning" text="Badge">Warning</ShadcnBadge>
    <ShadcnBadge type="danger" text="Badge">Danger</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## 文本 (text)

<CodeRunner title="文本 (text)">
    <ShadcnBadge text="Text" :dark="darkMode">Badge</ShadcnBadge>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnBadge text="Text">Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## 点 (dot)

<CodeRunner title="点 (dot)">
    <ShadcnBadge dot :dark="darkMode">Badge</ShadcnBadge>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnBadge dot>Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## 最大值 (max)

<CodeRunner title="最大值 (max)">
    <ShadcnBadge text="10" max="5" :dark="darkMode">Badge</ShadcnBadge>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnBadge text="10" max="5">Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## 徽章 (Badge) 属性

<ApiTable title="徽章 (Badge) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['type', '徽章类型', 'enum', 'primary', 'primary | success | warning | danger'],
        ['text', '徽章文本', 'string', '-', '-'],
        ['dot', '是否显示为点', 'boolean', 'false', '-'],
        ['max', '最大点数，只有文本是数字时生效', 'number', '-', '-'],
    ]">
</ApiTable>

## 徽章 (Badge) 插槽

<ApiTable title="徽章 (Badge) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '默认插槽'],
        ['text', '文本插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>