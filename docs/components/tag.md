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

## Type

::: raw

<CodeRunner title="Type">
    <ShadcnSpace wrap>
      <ShadcnTag text="Text"/>
      <ShadcnTag text="Text" type="primary"/>
      <ShadcnTag text="Text" type="success"/>
      <ShadcnTag text="Text" type="warning"/>
      <ShadcnTag text="Text" type="error"/>
    </ShadcnSpace>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSpace wrap>
      <ShadcnTag text="Text"/>
      <ShadcnTag text="Text" type="primary"/>
      <ShadcnTag text="Text" type="success"/>
      <ShadcnTag text="Text" type="warning"/>
      <ShadcnTag text="Text" type="error"/>
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
        ['text', 'The content of the tag', 'string', '-', '-', '-'],
        ['type', 'The type of the tag', 'enum', 'default', '-', 'default | primary | success | warning | error'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['Name', 'Description', 'Props Reference']"
    :columns="[
        ['default', 'The content of the tag', 'text'],
    ]">
</ApiTable>
