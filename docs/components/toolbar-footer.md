---
title: Shadcn Toolbar Footer
---

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnToolbarFooter>
      <template #left>
        Left
      </template>
    </ShadcnToolbarFooter>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnToolbarFooter>
      <template #left>
        Left
      </template>
    </ShadcnToolbarFooter>
</template>

<script setup lang="ts">
</script>
```

:::

## Auto Hide

::: raw

<CodeRunner title="Auto Hide">
    <ShadcnToolbarFooter auto-hide />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnToolbarFooter auto-hide />
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['auto-hide', 'Whether to auto hide', 'boolean', 'false'],
    ]">
</ApiTable>

## Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-cancel', 'Triggered when the drawer is closed', 'boolean'],
        ['on-ok', 'Triggered when the drawer is closed', 'boolean'],
    ]">
</ApiTable>
