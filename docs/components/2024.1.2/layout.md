---
title: Shadcn Layout
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnLayout component.

- ShadcnLayout
- ShadcnLayoutHeader
- ShadcnLayoutContent
- ShadcnLayoutFooter

## Usage

<CodeRunner title="Usage">
    <ShadcnLayout>
        <ShadcnLayoutHeader class="bg-blue-200">Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-gray-200 h-32">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-emerald-100">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnLayout>
        <ShadcnLayoutHeader class="bg-blue-200">Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-gray-200 h-32">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-emerald-100">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>
</template>

<script setup lang="ts">
</script>
```

:::
