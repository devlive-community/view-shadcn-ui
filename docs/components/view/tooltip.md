---
title: 提示 (Tooltip)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTooltip` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnTooltip content="This is a tooltip">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTooltip content="This is a tooltip">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
</script>
```

:::

## 延迟 (delay)

<CodeRunner title="延迟 (delay)">
    <ShadcnTooltip content="This is a tooltip" :delay="500">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTooltip content="This is a tooltip" :delay="500">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
</script>
```

:::

## 位置 (position)

<CodeRunner title="位置 (position)">
    <ShadcnTooltip content="Position" position="top">
        <ShadcnButton>Top</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="bottom">
        <ShadcnButton>Bottom</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="left">
        <ShadcnButton>Left</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="right">
        <ShadcnButton>Right</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTooltip content="Position" position="top">
        <ShadcnButton>Top</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="bottom">
        <ShadcnButton>Bottom</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="left">
        <ShadcnButton>Left</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="right">
        <ShadcnButton>Right</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
</script>
```

:::

## 箭头 (arrow)

<CodeRunner title="箭头 (arrow)">
    <ShadcnTooltip content="Hello Shadcn UI" arrow>
        <ShadcnButton>Arrow</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Hello Shadcn UI" :arrow="false">
        <ShadcnButton>No Arrow</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTooltip content="Hello Shadcn UI" arrow>
        <ShadcnButton>Arrow</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Hello Shadcn UI" :arrow="false">
        <ShadcnButton>No Arrow</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
</script>
```

:::

## 宽度 (width)

<CodeRunner title="宽度 (width)">
    <ShadcnTooltip content="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." width="200">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTooltip content="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." width="200">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
</script>
```

:::

## 提示 (Tooltip) 属性

<ApiTable title="提示 (Tooltip) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['content', '内容文本', 'object', '-', '-'],
        ['delay', '延迟时间 (以毫秒为单位)', 'number', '0', '-'],
        ['position', '组件的位置', 'enum', 'top', 'top | bottom | left | right'],
        ['arrow', '是否显示箭头', 'boolean', 'true', '-'],
        ['maxWidth', '如果宽度为 auto，则提示工具的最大宽度', 'number | string', '200', '-'],
    ]">
</ApiTable>

## 提示 (Tooltip) 插槽

<ApiTable title="提示 (Tooltip) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '提示器区域'],
        ['content', '提示内容区域'],
    ]">
</ApiTable>