---
title: Shadcn Space
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnSpace component.

## Usage

<CodeRunner title="Usage">
    <ShadcnSpace>
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
        <ShadcnButton>Button 3</ShadcnButton>
    </ShadcnSpace>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSpace>
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
        <ShadcnButton>Button 3</ShadcnButton>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## Size

<CodeRunner title="Size">
    <ShadcnSpace size="large">
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
    </ShadcnSpace>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSpace size="large">
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## Wrap

<CodeRunner title="Wrap">
    <ShadcnSpace wrap>
        <ShadcnButton v-for="i in 20" type="primary">Wrap {{ i }}</ShadcnButton>
    </ShadcnSpace>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSpace wrap>
        <ShadcnButton v-for="i in 20" type="primary">Wrap {{ i }}</ShadcnButton>
    </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Space Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['size', 'Space size', 'Enum | String | Number', 'default', 'small, default, large'],
        ['wrap', 'Whether to wrap', 'Boolean', 'false', '']
    ]">
</ApiTable>
