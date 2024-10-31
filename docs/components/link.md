---
title: Shadcn Link
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnLink.

## Usage

::: raw

<CodeRunner title="Usage">
  <ShadcnLink link="/link">Router Link</ShadcnLink>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnLink link="/link">Router Link</ShadcnLink>
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['link', 'The link of the link', 'string', '-', '-', ''],
    ]">
</ApiTable>
