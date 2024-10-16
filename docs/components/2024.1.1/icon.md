---
title: Shadcn Icon
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnIcon component.

## Basic Usage

<CodeRunner title="Basic Usage"
    description="Create a simple icon.">
    <ShadcnIcon icon="Save"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnIcon icon="Save"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Size

<CodeRunner title="Icon Size"
    description="Create icons with different sizes.">
    <ShadcnIcon icon="Save"/>
    <ShadcnIcon icon="Save" :size="30"/>
    <ShadcnIcon icon="Save" :size="40"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnIcon icon="Save"/>
    <ShadcnIcon icon="Save" :size="30"/>
    <ShadcnIcon icon="Save" :size="40"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Color

<CodeRunner title="Icon Color"
    description="Create icons with different colors.">
    <ShadcnIcon icon="Save" color="red"/>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnIcon icon="Save" color="red"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Custom

<CodeRunner title="Custom"
    description="Create a custom icon.">
    <ShadcnIcon>
        <template #icon>
            <Ban/>
        </template>
    </ShadcnIcon>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnIcon>
        <template #icon>
            <Ban/>
        </template>
    </ShadcnIcon>
</template>

<script setup lang="ts">
  import { Ban } from 'lucide-vue-next'
</script>
```

:::

<script setup lang="ts">
import { Ban } from 'lucide-vue-next';
</script>

## API Attributes

<ApiTable title="Icon Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['icon', 'The icon name', 'String', '-', '-', '-'],
        ['size', 'The size of the icon', 'Number', '20', '-', '-'],
        ['color', 'The color of the icon', 'String', '-', '-', 'All supported color values'],
    ]">
</ApiTable>

<br />

<ApiTable title="Icon Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['click', 'Click event', 'event'],
    ]">
</ApiTable>

<br />

<ApiTable title="Icon Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['icon', 'Icon slot'],
    ]">
</ApiTable>