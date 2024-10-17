---
title: Row and Col
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnRow and ShadcnCol.

## Usage

<CodeRunner title="Button Type"
    description="Create buttons of different styles by setting type, not setting it to the default style.">
    <ShadcnRow>
        <ShadcnCol class="bg-blue-200"></ShadcnCol>
        <ShadcnCol class="bg-blue-300"></ShadcnCol>
        <ShadcnCol class="bg-blue-400"></ShadcnCol>
        <ShadcnCol class="bg-blue-500"></ShadcnCol>
    </ShadcnRow>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRow>
        <ShadcnCol class="bg-blue-200"></ShadcnCol>
        <ShadcnCol class="bg-blue-300"></ShadcnCol>
        <ShadcnCol class="bg-blue-400"></ShadcnCol>
        <ShadcnCol class="bg-blue-500"></ShadcnCol>
    </ShadcnRow>
</template>

<script setup lang="ts">
</script>
```

:::

