---
title: Shadcn Ellipsis
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnEllipsis.

## Usage

<CodeRunner title="Simple Ellipsis">
    <ShadcnEllipsis text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnEllipsis text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</template>

<script setup lang="ts">
</script>
```

:::

## Multiple lines

<CodeRunner title="Multiple lines">
    <ShadcnEllipsis line="4" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnEllipsis line="4" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</template>

<script setup lang="ts">
</script>
```

:::

## Tooltip

<CodeRunner title="Tooltip">
    <ShadcnEllipsis tooltip line="3" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnEllipsis line="4" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</template>
```

:::

## Length

<CodeRunner title="Length">
    <ShadcnEllipsis tooltip length="120" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />
</CodeRunner>

## API Attributes

<ApiTable title="Ellipsis Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['text', 'Text content', 'String', '-', '-'],
        ['line', 'Number of lines', 'Number | String', '1', '-'],
        ['tooltip', 'Show tooltip', 'Boolean', 'false', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Ellipsis Slots"
    :headers="['Slot', 'Description', 'Props Reference']"
    :columns="[
        ['default', 'Default slot', 'text'],
    ]">
</ApiTable>
