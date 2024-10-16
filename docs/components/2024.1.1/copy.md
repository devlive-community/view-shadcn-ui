---
title: Shadcn Copy
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnCopy component.

## Basic Usage

<CodeRunner title="Basic Usage"
    description="Create a simple copy.">
    <ShadcnCopy text="Hello Shadcn UI"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCopy text="Hello Shadcn UI"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Tooltip

<CodeRunner title="Tooltip"
    description="Create a copy with tooltip.">
    <ShadcnCopy text="Hello Shadcn UI"/>
    <ShadcnCopy text="Hello Shadcn UI" :tooltip="false"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCopy text="Hello Shadcn UI"/>
    <ShadcnCopy text="Hello Shadcn UI" :tooltip="false"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Position

<CodeRunner title="Position"
    description="Create a copy with custom position.">
    <ShadcnCopy text="Position" position="top"/>
    <ShadcnCopy text="Position" position="bottom"/>
    <ShadcnCopy text="Position" position="left"/>
    <ShadcnCopy text="Position" position="right"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCopy text="Position" position="top"/>
    <ShadcnCopy text="Position" position="bottom"/>
    <ShadcnCopy text="Position" position="left"/>
    <ShadcnCopy text="Position" position="right"/>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Copy Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['text', 'The content of the copy', 'String', '-', '-', '-'],
        ['tooltip', 'Show tooltip', 'Boolean', 'true', '-', '-'],
        ['position', 'The position of the copy', 'Enum', 'top', '-', 'top, bottom, left, right'],
    ]">
</ApiTable>

<br />

<ApiTable title="Copy Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-success', 'Triggered when the copy is successful', 'event'],
        ['on-failed', 'Triggered when the copy fails', 'event'],
    ]">
</ApiTable>

<br />

<ApiTable title="Copy Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['icon', 'Copy icon'],
    ]">
</ApiTable>