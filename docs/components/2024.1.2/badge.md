---
title: Shadcn Badge
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnBadge component.

## Usage

<CodeRunner title="Usage">
    <ShadcnBadge text="Badge">Badge</ShadcnBadge>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnBadge text="Badge">Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## Type

<CodeRunner title="Type">
    <ShadcnBadge type="primary" text="Badge">Primary</ShadcnBadge>
    <ShadcnBadge type="success" text="Badge">Success</ShadcnBadge>
    <ShadcnBadge type="warning" text="Badge">Warning</ShadcnBadge>
    <ShadcnBadge type="danger" text="Badge">Danger</ShadcnBadge>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnBadge type="primary" text="Badge">Primary</ShadcnBadge>
    <ShadcnBadge type="success" text="Badge">Success</ShadcnBadge>
    <ShadcnBadge type="warning" text="Badge">Warning</ShadcnBadge>
    <ShadcnBadge type="danger" text="Badge">Danger</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## Text

<CodeRunner title="Text">
    <ShadcnBadge text="Text">Badge</ShadcnBadge>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnBadge text="Text">Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## Dot

<CodeRunner title="Dot">
    <ShadcnBadge dot>Badge</ShadcnBadge>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnBadge dot>Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## Max

<CodeRunner title="Max">
    <ShadcnBadge text="10" max="5">Badge</ShadcnBadge>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnBadge text="10" max="5">Badge</ShadcnBadge>
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
        ['max', 'The maximum number of dots, only text is number', 'Number', '-', '-'],
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
