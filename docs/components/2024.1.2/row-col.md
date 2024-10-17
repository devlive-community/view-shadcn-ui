---
title: Row and Col
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnRow and ShadcnCol.

## Usage

<CodeRunner title="Simple Row and Col"
    description="Created a simple row and col with 4 cols">
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

## Gutter

<CodeRunner title="Gutter"
    description="Created a simple row and col with gutter">
    <ShadcnRow :gutter="30">
        <ShadcnCol class="bg-blue-200"></ShadcnCol>
        <ShadcnCol class="bg-blue-300"></ShadcnCol>
        <ShadcnCol class="bg-blue-400"></ShadcnCol>
        <ShadcnCol class="bg-blue-500"></ShadcnCol>
    </ShadcnRow>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRow :gutter="30">
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

## Align

<CodeRunner title="Align"
    description="Created a simple row and col with align">
    <div class="space-y-2">
        Top
        <ShadcnRow align="top">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
        Middle
        <ShadcnRow align="middle">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
        Bottom
        <ShadcnRow align="bottom">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
    </div>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRow align="top">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow align="middle">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow align="bottom">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Row Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['gutter', 'Grid spacing, unit px, divided equally between left and right', 'Number', '0', '-'],
        ['align', 'Vertical alignment under layout', 'Enum', 'top', 'top, middle, bottom'],
    ]">
</ApiTable>
