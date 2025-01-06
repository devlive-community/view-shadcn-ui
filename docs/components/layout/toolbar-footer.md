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

::: details 查看代码

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

::: details 查看代码

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

::: details 查看代码

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

## Full Width

::: raw

<CodeRunner title="Full Width">
    <ShadcnToolbarFooter v-model="defaultValue" full-width>
      <template #left>Full Width</template>
    </ShadcnToolbarFooter>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnToolbarFooter full-width>
    <template #left>Full Width</template>
  </ShadcnToolbarFooter>
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['modelValue', 'The value of the drawer', 'boolean', 'true'],
        ['autoHide', 'Whether to auto hide', 'boolean', 'false'],
        ['autoHideDelay', 'Auto hide delay', 'number', '3000'],
        ['hideOnScroll', 'Whether to hide on scroll', 'boolean', 'true'],
        ['scrollStopDelay', 'Scroll stop delay', 'number', '600'],
        ['fullWidth', 'Whether to full width', 'boolean', 'false'],
    ]">
</ApiTable>

## Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-cancel', 'Triggered when the drawer is closed', 'boolean'],
        ['on-ok', 'Triggered when the drawer is closed', 'boolean'],
    ]">
</ApiTable>
