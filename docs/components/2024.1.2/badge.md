---
title: Shadcn Badge
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnBadge component.

## Usage

<CodeRunner title="Usage">
    <ShadcnBadge>Badge</ShadcnBadge>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnBadge>Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## Type

<CodeRunner title="Type">
    <ShadcnBadge type="primary">Primary</ShadcnBadge>
    <ShadcnBadge type="success">Success</ShadcnBadge>
    <ShadcnBadge type="warning">Warning</ShadcnBadge>
    <ShadcnBadge type="danger">Danger</ShadcnBadge>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnBadge type="primary">Primary</ShadcnBadge>
    <ShadcnBadge type="success">Success</ShadcnBadge>
    <ShadcnBadge type="warning">Warning</ShadcnBadge>
    <ShadcnBadge type="danger">Danger</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## Text

<CodeRunner title="Text">
    <ShadcnBadge text="Text" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnBadge text="Text"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Dot

<CodeRunner title="Dot">
    <ShadcnBadge dot />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnBadge dot />
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Badge Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['type', 'The type of the badge', 'Enum', 'primary', 'primary, success, warning, danger, info, text'],
        ['text', 'The content of the badge', 'String', '-', '-'],
        ['dot', 'Whether to display a dot', 'Boolean', 'false', '-'],
    ]">
</ApiTable>

<br /> 

<ApiTable title="Badge Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Content text'],
        ['text', 'Content text'],
    ]">
</ApiTable>
