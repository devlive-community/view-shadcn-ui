---
title: Row and Col
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnRow and ShadcnCol.

## Usage

<CodeRunner title="Simple Row and Col"
    description="Created a simple row and col with 4 cols">
    <ShadcnRow>
        <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
    </ShadcnRow>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRow>
        <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
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
        <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
    </ShadcnRow>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRow :gutter="30">
        <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
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

## Justify

<CodeRunner title="Justify"
    description="Created a simple row and col with justify">
    <div class="space-y-2">
        <ShadcnRow justify="start">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
        <ShadcnRow justify="center">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
        <ShadcnRow justify="end">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
        <ShadcnRow justify="between">
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
    <ShadcnRow justify="start">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow justify="center">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow justify="end">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow justify="between">
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

## Wrap

<CodeRunner title="Wrap"
    description="Created a simple row and col with wrap">
    <div class="space-y-2 p-3">
        <ShadcnRow wrap :gutter="2">
            <ShadcnCol v-for="i in 40" class="bg-blue-200 h-12"/>
        </ShadcnRow>
    </div>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRow wrap :gutter="2">
        <ShadcnCol v-for="i in 40" class="bg-blue-200"/>
    </ShadcnRow>
</template>

<script setup lang="ts">
</script>
```

:::

## Col span

<CodeRunner title="Col span"
    description="Created a simple row and col with col span">
    <div class="space-y-2 p-3">
        <ShadcnRow>
            <ShadcnCol class="bg-blue-200 h-12" span="2"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-12" span="1"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-12" span="3"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-12" span="1"></ShadcnCol>
        </ShadcnRow>
        <ShadcnRow>
            <ShadcnCol class="bg-blue-200 h-12" span="8"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-12" span="3"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-12" span="3"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-12" span="1"></ShadcnCol>
        </ShadcnRow>
    </div>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRow>
        <ShadcnCol class="bg-blue-200 h-12" span="2"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12" span="1"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12" span="3"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12" span="1"></ShadcnCol>
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
        ['align', 'Vertical alignment under layout', 'Enum', '-', 'top | middle | bottom'],
        ['justify', 'Horizontal alignment under layout', 'Enum', '-', 'start | center | end | between | around | evenly | normal | stretch'],
        ['wrap', 'Whether to automatically wrap', 'Boolean', 'false', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Col Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['span', 'The number of placeholders for the grid. The optional value is an integer from 1 to 12. For example, if the child element under the same ShadcnRow exceeds 12, it will automatically wrap.', 'String | Number', '1', '1 - 12'],
    ]">
</ApiTable>
