---
title: Shadcn Alert
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnAlert component.

## Usage

<CodeRunner title="Usage">
    <ShadcnAlert>Alert</ShadcnAlert>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnAlert>Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## Title

<CodeRunner title="Title">
    <ShadcnAlert title="Title">Alert</ShadcnAlert>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnAlert title="Title">Alert</ShadcnAlert>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Alert Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['title', 'The title of the alert', 'String', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Alert Slots"
    :headers="['Name', 'Description', 'Props Reference']"
    :columns="[
        ['default', 'Default slot', '-'],
    ]">
</ApiTable>
