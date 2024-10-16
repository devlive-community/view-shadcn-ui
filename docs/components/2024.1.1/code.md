---
title: Shadcn Code
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnCode component.

## Basic Usage

<CodeRunner title="Basic Usage"
    description="Create a simple code.">
    <ShadcnCode code="console.log('Hello Shadcn UI')"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCode code="console.log('Hello Shadcn UI')"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Theme

<CodeRunner title="Theme"
    description="Change the theme of the code.">
    <ShadcnCode code="console.log('Hello Shadcn UI')" theme="pojoaque"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCode code="console.log('Hello Shadcn UI')" theme="pojoaque"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Language

<CodeRunner title="Language"
    description="Change the language of the code.">
    <ShadcnCode code="System.out.println('Hello Shadcn UI')" language="java"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCode code="System.out.println('Hello Shadcn UI')" language="javascript"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Show Line Numbers

<CodeRunner title="Show Line Numbers"
    description="Show line numbers.">
    <ShadcnCode code="console.log('Hello Shadcn UI')" theme="pojoaque" show-line-numbers/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnCode code="console.log('Hello Shadcn UI')" theme="pojoaque" show-line-numbers/>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Code Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['code', 'The content of the code', 'String', '-', '-', '-'],
        ['language', 'The language of the code', 'String', 'javascript', '-', 'javascript, typescript, java ...'],
        ['theme', 'The theme of the code', 'String', 'github', '-', 'default, pojoaque ...'],
        ['showLineNumbers', 'Show line numbers', 'Boolean', 'false', '-', '-'],
    ]">
</ApiTable>
