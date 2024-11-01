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

## Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-cancel', 'Triggered when the drawer is closed', 'boolean'],
        ['on-ok', 'Triggered when the drawer is closed', 'boolean'],
    ]">
</ApiTable>
