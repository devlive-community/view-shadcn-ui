---
title: 悬浮卡片 (Hover Card)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnHoverCard` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnHoverCard content="This is a hover card" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="This is a hover card" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 延迟 (delay)

::: raw

<CodeRunner title="延迟 (delay)">
    <ShadcnHoverCard content="This is a hover card" :delay="500" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Delay 500ms</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="This is a hover card" :delay="500" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 位置 (position)

::: raw

<CodeRunner title="位置 (position)">
    <ShadcnHoverCard content="Position" position="top" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Top</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="bottom" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Bottom</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="left" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Left</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="right" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Right</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="Position" position="top" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Top</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="bottom" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Bottom</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="left" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Left</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="right" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Right</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 箭头 (arrow)

::: raw

<CodeRunner title="箭头 (arrow)">
    <ShadcnHoverCard content="Hello Shadcn UI" arrow :dark="darkMode">
        <ShadcnButton :dark="darkMode">Arrow</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Hello Shadcn UI" :arrow="false" :dark="darkMode">
        <ShadcnButton :dark="darkMode">No Arrow</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="Hello Shadcn UI" arrow :dark="darkMode">
        <ShadcnButton :dark="darkMode">Arrow</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Hello Shadcn UI" :arrow="false" :dark="darkMode">
        <ShadcnButton :dark="darkMode">No Arrow</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 宽度 (width)

::: raw

<CodeRunner title="Width">
    <ShadcnHoverCard content="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." width="200" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." width="200" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 标题和底部 (title & footer)

::: raw

<CodeRunner title="标题和底部 (title & footer)">
    <ShadcnHoverCard content="This is a hover card" :dark="darkMode">
      <template #title>Title</template>
      <template #footer>Footer</template>
      <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="This is a hover card" :dark="darkMode">
      <template #title>Title</template>
      <template #footer>Footer</template>
      <ShadcnButton :dark="darkMode">Add Column</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 悬浮卡片 (Hover Card) 属性

<ApiTable title="悬浮卡片 (Hover Card) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['content', '显示的内容', 'object', '-', '-'],
        ['delay', '延迟时间（以毫秒为单位）', 'number', '0', '-'],
        ['position', '显示的位置', 'enum', 'top', 'top | bottom | left | right'],
        ['arrow', '是否显示箭头', 'boolean', 'true', '-'],
        ['maxWidth', '如果宽度为 auto，则最大宽度自动调整', 'number | string', '200', '-']
    ]">
</ApiTable>

## 悬浮卡片 (Hover Card) 插槽

<ApiTable title="悬浮卡片 (Hover Card) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '触发器'],
        ['content', '显示的内容'],
        ['title', '显示的标题'],
        ['footer', '显示的底部'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>