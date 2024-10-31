---
title: Shadcn Tag
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnTag component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnSpace wrap>
      <ShadcnTag text="Text"/>
      <ShadcnTag>Slot</ShadcnTag>
    </ShadcnSpace>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnSpace wrap>
    <ShadcnTag text="Text"/>
    <ShadcnTag>Slot</ShadcnTag>
  </ShadcnSpace>
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['text', 'The content of the tag', 'String', '-', '-', '-'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['Name', 'Description', 'Props Reference']"
    :columns="[
        ['default', 'The content of the tag', 'text'],
    ]">
</ApiTable>
