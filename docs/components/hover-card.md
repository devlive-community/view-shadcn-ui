---
title: Shadcn HoverCard
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnHoverCard component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnHoverCard content="This is a hover card">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details Show code

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

::: details Show code

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

## Position

::: raw

<CodeRunner title="Position">
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

::: details Show code

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

::: details Show code

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

## Width

::: raw

<CodeRunner title="Width">
    <ShadcnHoverCard content="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." width="200">
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details Show code

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

## Custom Content

::: raw

<CodeRunner title="Custom Content">
    <ShadcnHoverCard>
        <template #content>Custom Content</template>
        <ShadcnButton>Hover</ShadcnButton>
    </ShadcnHoverCard>
</CodeRunner>

:::

::: details Show code

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
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Tooltip trigger'],
        ['content', 'Tooltip content'],
    ]">
</ApiTable>
