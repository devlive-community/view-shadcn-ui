---
title: 悬浮卡片 (Hover Card)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnHoverCard` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnHoverCard content="This is a hover card">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="This is a hover card">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Delay

::: raw

<CodeRunner title="Delay">
    <ShadcnHoverCard content="This is a hover card" :delay="500">
        <ShadcnButton>Delay 500ms</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="This is a hover card" :delay="500">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
</script>
```

:::

## 位置 (position)

::: raw

<CodeRunner title="位置 (position)">
    <ShadcnHoverCard content="Position" position="top">
        <ShadcnButton>Top</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="bottom">
        <ShadcnButton>Bottom</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="left">
        <ShadcnButton>Left</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="right">
        <ShadcnButton>Right</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="Position" position="top">
        <ShadcnButton>Top</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="bottom">
        <ShadcnButton>Bottom</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="left">
        <ShadcnButton>Left</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Position" position="right">
        <ShadcnButton>Right</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Arrow

::: raw

<CodeRunner title="Arrow">
    <ShadcnHoverCard content="Hello Shadcn UI" arrow>
        <ShadcnButton>Arrow</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Hello Shadcn UI" :arrow="false">
        <ShadcnButton>No Arrow</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="Hello Shadcn UI" arrow>
        <ShadcnButton>Arrow</ShadcnButton>
    </ShadcnHoverCard>
    <ShadcnHoverCard content="Hello Shadcn UI" :arrow="false">
        <ShadcnButton>No Arrow</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
</script>
```

:::

## 宽度 (width)

::: raw

<CodeRunner title="Width">
    <ShadcnHoverCard content="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." width="200">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." width="200">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Title and Footer

::: raw

<CodeRunner title="Title and Footer">
    <ShadcnHoverCard content="This is a hover card">
      <template #title>Title</template>
      <template #footer>Footer</template>
      <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard content="This is a hover card">
      <template #title>Title</template>
      <template #footer>Footer</template>
      <ShadcnButton>Add Column</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Custom Content

::: raw

<CodeRunner title="Custom Content">
    <ShadcnHoverCard>
        <template #content>Custom Content</template>
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnHoverCard>
        <template #content>Custom Content</template>
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</template>

<script setup lang="ts">
</script>
```

:::

## HoverCard Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List', 'Latest Version']"
    :columns="[
        ['content', 'The content of the tooltip', 'Object', '-', '-', '-', '-'],
        ['delay', 'Delay time, in milliseconds', 'Number', '0', '-', '-'],
        ['position', 'The position of the tooltip', 'Enum', 'top', '-', 'top, bottom, left, right', '-'],
        ['arrow', 'Show arrow', 'Boolean', 'true', '-', '-', '-'],
        ['maxWidth', 'The maximum width of the tooltip, if the width is auto', 'Number | String', '200', '-', '-', '2024.1.2'],
    ]">
</ApiTable>

## HoverCard Slots

<ApiTable title="Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', 'Tooltip trigger'],
        ['content', 'Tooltip content'],
        ['title', 'Tooltip title'],
        ['footer', 'Tooltip footer'],
    ]">
</ApiTable>
