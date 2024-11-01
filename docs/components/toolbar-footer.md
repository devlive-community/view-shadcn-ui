---
title: Shadcn Toolbar Footer
---

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnToolbarFooter>
      <template #left>Basic</template>
    </ShadcnToolbarFooter>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnToolbarFooter>
      <template #left>Basic</template>
    </ShadcnToolbarFooter>
</template>

<script setup lang="ts">
</script>
```

:::

## Auto Hide

::: raw

<CodeRunner title="Auto Hide">
    <ShadcnToolbarFooter auto-hide>
        <template #left>Auto Hide</template> 
    </ShadcnToolbarFooter>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnToolbarFooter auto-hide>
    <template #left>Auto Hide</template>
  </ShadcnToolbarFooter>
</template>

<script setup lang="ts">
</script>
```

:::

## Auto Hide Delay

::: raw

<CodeRunner title="Auto Hide Delay">
    <ShadcnToolbarFooter auto-hide auto-hide-delay="2000">
        <template #left>Auto Hide Delay</template>
    </ShadcnToolbarFooter>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnToolbarFooter auto-hide auto-hide-delay="2000">
    <template #left>Auto Hide Delay</template>
  </ShadcnToolbarFooter>
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
        ['auto-hide-delay', 'Auto hide delay', 'number', '3000'],
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
