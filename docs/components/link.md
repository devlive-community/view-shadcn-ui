---
title: Shadcn Link
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnLink.

## Usage

::: raw

<CodeRunner title="Usage" warning="Must bu use vue-router">
  <ShadcnLink link="/link">Router Link</ShadcnLink>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnLink link="/link">Router Link</ShadcnLink>
</template>

<script setup lang="ts">
</script>
```

:::

## External

::: raw

<CodeRunner title="External">
  <ShadcnLink link="https://github.com/devlive-community/view-shadcn-ui" external>External Link</ShadcnLink>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnLink link="https://github.com/devlive-community/view-shadcn-ui" external>External Link</ShadcnLink>
</template>

<script setup lang="ts">
</script>
```

:::

## Target

::: raw

<CodeRunner title="Target">
  <ShadcnLink link="https://github.com/devlive-community/view-shadcn-ui" external target="_blank">Router Link</ShadcnLink>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnLink link="https://github.com/devlive-community/view-shadcn-ui" external target="_blank">Router Link</ShadcnLink>
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['link', 'The link of the link', 'string', '-', '-', ''],
        ['external', 'Whether the link is external', 'boolean', 'false', '-', ''],
        ['target', 'The target of the link', 'string', '_self', '-', '_self | _blank | _parent | _top']
    ]">
</ApiTable>
