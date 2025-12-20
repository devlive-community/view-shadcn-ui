---
title: Markdown 编辑器 (Markdown)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnMarkdown` 组件的一些特性和用法。该组件基于成熟的 **marked** 库实现 Markdown 解析，使用 Tailwind CSS 样式。

## 用法

<CodeRunner title="用法">
    <ShadcnMarkdown v-model="basicContent" mode="preview" :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnMarkdown v-model="content" mode="preview"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnMarkdown } from '@/ui/markdown'

const content = ref(`# 标题

这是一个 Markdown 编辑器。`)
</script>
```

:::

## 编辑模式 (mode="edit")

<CodeRunner title="编辑模式">
    <ShadcnMarkdown v-model="editContent" mode="edit" :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnMarkdown v-model="content" mode="edit"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref('# 在这里编辑内容')
</script>
```

:::

## 分屏模式 (mode="split")

<CodeRunner title="分屏模式">
    <ShadcnMarkdown v-model="splitContent" mode="split" :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnMarkdown v-model="content" mode="split"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref(`# 分屏模式

左侧编辑，右侧实时预览。`)
</script>
```

:::

## 液态玻璃效果 (Glass)

::: raw

<CodeRunner title="液态玻璃效果 (Glass)">
  <div :class="['h-96 rounded-lg flex items-center justify-center p-6', darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
    <ShadcnMarkdown v-model="glassContent" mode="split" glass :dark="darkMode"/>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnMarkdown v-model="content" mode="split" glass/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref(`# 液态玻璃效果

支持液态玻璃效果的 Markdown 编辑器。`)
</script>
```

:::

## 自定义高度 (height)

<CodeRunner title="自定义高度">
    <ShadcnMarkdown v-model="heightContent" mode="split" height="300px" :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnMarkdown v-model="content" mode="split" height="300px"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref('# 自定义高度')
</script>
```

:::

## 占位符 (placeholder)

<CodeRunner title="占位符">
    <ShadcnMarkdown v-model="placeholderContent" mode="edit" placeholder="请输入您的内容..." :dark="darkMode"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnMarkdown v-model="content" mode="edit" placeholder="请输入您的内容..."/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref('')
</script>
```

:::

## Markdown 编辑器 属性

<ApiTable title="Markdown 编辑器"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '绑定值', 'string', '-', '-'],
        ['mode', '显示模式', 'enum', 'split', 'preview | edit | split'],
        ['dark', '暗黑模式', 'boolean', 'false', '-'],
        ['glass', '液态玻璃效果', 'boolean', 'false', '-'],
        ['height', '组件高度', 'string', '400px', '-'],
        ['placeholder', '编辑模式占位符', 'string', '请输入 Markdown 内容...', '-'],
    ]">
</ApiTable>

## Markdown 编辑器 事件

<ApiTable title="Markdown 编辑器 事件"
    :headers="['事件', '描述', '参数']"
    :columns="[
        ['update:modelValue', '值更新时触发', 'value: string'],
        ['on-change', '内容改变时触发', 'value: string'],
    ]">
</ApiTable>

## 功能特性

- ✅ 基于成熟的 **marked** 库解析 Markdown
- ✅ 使用 Tailwind CSS Typography 样式
- ✅ 支持 GFM（GitHub Flavored Markdown）
- ✅ 三种显示模式：预览、编辑、分屏
- ✅ 支持暗黑/浅色主题
- ✅ 支持液态玻璃效果
- ✅ 实时预览
- ✅ 自定义高度
- ✅ 自定义占位符

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, ref } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const basicContent = ref(`# 欢迎使用 ShadcnMarkdown

这是一个基于 **marked** 库的 Markdown 编辑器组件。

## 功能

- 支持**粗体**和*斜体*
- 支持\`行内代码\`
- 支持[链接](https://example.com)`)

const editContent = ref(`# 编辑模式

在这里输入您的 Markdown 内容...`)

const splitContent = ref(`# 分屏模式

左侧编辑，右侧实时预览。

## 代码示例

\`\`\`javascript
console.log('Hello World!')
\`\`\``)

const glassContent = ref(`# 液态玻璃效果

支持**液态玻璃效果**的 Markdown 编辑器。

## 特性

- 毛玻璃背景模糊
- 饱和度增强
- 优雅的视觉效果`)

const heightContent = ref(`# 自定义高度

可以通过 height 属性自定义组件高度。`)

const placeholderContent = ref('')
</script>
