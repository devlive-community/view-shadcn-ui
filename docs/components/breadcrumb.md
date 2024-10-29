---
title: Shadcn Breadcrumb
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnBreadcrumb component.

- ShadcnBreadcrumb
- ShadcnBreadcrumbItem

## Usage

::: raw

<CodeRunner title="Usage">
  <ShadcnBreadcrumb>
    <ShadcnBreadcrumbItem href="#">Home</ShadcnBreadcrumbItem>
    <ShadcnBreadcrumbItem href="#">Products</ShadcnBreadcrumbItem>
    <ShadcnBreadcrumbItem>Summary</ShadcnBreadcrumbItem>
  </ShadcnBreadcrumb>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnBreadcrumb>
        <ShadcnBreadcrumbItem href="#">Home</ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbItem href="#">Products</ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbItem>Summary</ShadcnBreadcrumbItem>
    </ShadcnBreadcrumb>
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Item Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['href', 'The href of the breadcrumb item', 'String', '-', '-'],
    ]">
</ApiTable>
