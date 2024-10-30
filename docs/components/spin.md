---
title: Shadcn Spin
---

# Inroduction

This document is mainly used to describe some features and usage of the ShadcnSpin component.

## Usage

::: raw

<CodeRunner title="Usage">
    Default Value: {{ value }}
    <ShadcnSpin v-model="value" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSpin v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(false);
</script>
```

:::

## Type

::: raw

<CodeRunner title="Type">
    <ShadcnSpin type="primary"/>
    <ShadcnSpin type="success"/>
    <ShadcnSpin type="error"/>
    <ShadcnSpin type="warning"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSpin type="primary"/>
    <ShadcnSpin type="success"/>
    <ShadcnSpin type="error"/>
    <ShadcnSpin type="warning"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Size

::: raw

<CodeRunner title="Size">
    <ShadcnSpin type="primary" size="small"/>
    <ShadcnSpin type="success" size="default"/>
    <ShadcnSpin type="error" size="large"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSpin type="primary" size="small"/>
    <ShadcnSpin type="success" size="default"/>
    <ShadcnSpin type="error" size="large"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Slot

::: raw

<CodeRunner title="Slot">
    <ShadcnSpin>
      <div class="ml-3 p-2">
        <p class="text-gray-700">Processing</p>
        <p class="text-sm text-gray-500">Please wait...</p>
      </div>
    </ShadcnSpin>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSpin>
      <div class="ml-3 p-2">
        <p class="text-gray-700">Processing</p>
        <p class="text-sm text-gray-500">Please wait...</p>
      </div>
    </ShadcnSpin>
</template>

<script setup lang="ts">
</script>
```

:::

## Center

::: raw

<CodeRunner title="Center" warning="If fixed is set, the parent component must use position: relative">
    <ShadcnCard title="Spin">
      <div class="relative min-h-[200px]">
        <ShadcnSpin fixed/>
      </div>
    </ShadcnCard>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnCard title="Spin">
      <div class="relative min-h-[200px]">
        <ShadcnSpin fixed/>
      </div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'Spin value', 'boolean', 'false', '-'],
        ['type', 'Spin type', 'enum', 'primary', 'primary | success | warning | error'],
        ['size', 'Spin size', 'enum', 'default', 'default | small | large'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Content, If set, type and size will not work'],
    ]">
</ApiTable>

## Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-change', 'Spin value', 'boolean'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(true);
</script>
