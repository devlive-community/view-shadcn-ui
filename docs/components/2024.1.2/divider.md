---
title: Shadcn Divider
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnDivider.

## Usage

<CodeRunner title="Simple Divider"
    description="Created a simple divider">
    <div>Hello, View Shadcn UI, Divider</div>
    <ShadcnDivider />
</CodeRunner>

::: details Show code

```vue
<template>
    <div>Hello, View Shadcn UI, Divider</div>
    <ShadcnDivider />
</template>

<script setup lang="ts">
</script>
```

:::

## Type

<CodeRunner title="Type"
    description="Created a type divider">
    <div>Horizontal</div>
    <ShadcnDivider type="horizontal" />
    <div class="flex space-x-2 mt-2">
        <div>Vertical</div>
        <ShadcnDivider type="vertical" />
        <a href="#">Link</a>
        <ShadcnDivider type="vertical" />
        <div>Vertical</div>
    </div>
</CodeRunner>

::: details Show code

```vue
<template>
    <div>Horizontal</div>
    <ShadcnDivider type="horizontal" />
    <div class="flex space-x-2">
        <div>Vertical</div>
        <ShadcnDivider type="vertical" />
        <a href="#">Link</a>
        <ShadcnDivider type="vertical" />
        <div>Vertical</div>
    </div>
</template>

<script setup lang="ts">
</script>
```

:::
