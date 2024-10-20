---
title: Shadcn Avatar
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnAvatar component.

## Usage

<CodeRunner title="Usage">
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Alt Text

<CodeRunner title="Alt Text">
    <ShadcnAvatar src="" alt="UI" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnAvatar src="" alt="UI" />
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Avatar Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['src', 'Image URL', 'String', '-', '-'],
        ['alt', 'Alternative text', 'String', '-', '-'],
    ]">
</ApiTable>
