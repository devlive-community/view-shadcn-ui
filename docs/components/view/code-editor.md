---
title: Shadcn CodeEditor
---

# Introduction

This document describes the features and usage of the ShadcnCodeEditor component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnCodeEditor v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnCodeEditor v-model="value" />
</template>
```

:::

## Height

::: raw

<CodeRunner title="Height">
    <ShadcnCodeEditor v-model="value" :height="216" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnCodeEditor v-model="value" :height="216" />
</template>
```

:::

## Config

::: raw

<CodeRunner title="Config">
    <ShadcnCodeEditor v-model="value" config="language: 'javascript" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnCodeEditor v-model="value" config="language: 'javascript" />
</template>
```

:::
## CodeEditor Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'modelValue value', 'string', '-', '-'],
        ['height', 'height value', 'number', '300', '-'],
        ['config', 'see monaco.editor.IStandaloneEditorConstructionOptions', 'any', '{}', '-']
    ]">
</ApiTable>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('Hello View Shadcn UI')
</script>
