---
title: Shadcn Number
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnNumber component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnNumber v-model="basicValue" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnNumber v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## Size

::: raw

<CodeRunner title="Size">
    <div class="space-y-2">
        <ShadcnNumber v-model="basicValue" size="small" />
        <ShadcnNumber v-model="basicValue" size="default" />
        <ShadcnNumber v-model="basicValue" size="large" />
    </div>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnNumber v-model="value" size="small" />
    <ShadcnNumber v-model="value" size="default" />
    <ShadcnNumber v-model="value" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## Type

::: raw

<CodeRunner title="Type">
    <div class="space-y-2">
        <ShadcnNumber v-model="value" size="small" type="primary"/>
        <ShadcnNumber v-model="value" size="default" type="warning"/>
        <ShadcnNumber v-model="value" size="large" type="success"/>
        <ShadcnNumber v-model="value" size="large" type="error"/>
    </div>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnNumber v-model="value" size="small" type="primary"/>
    <ShadcnNumber v-model="value" size="default" type="warning"/>
    <ShadcnNumber v-model="value" size="large" type="success"/>
    <ShadcnNumber v-model="value" size="large" type="error"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled">
    <div class="space-y-2">
        <ShadcnNumber v-model="basicValue"/>
        <ShadcnNumber v-model="basicValue" disabled />
    </div>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnNumber v-model="value"/>
    <ShadcnNumber v-model="value" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## Placeholder

::: raw

<CodeRunner title="Placeholder">
    <ShadcnNumber v-model="placeholderValue" placeholder="Enter Number"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnNumber v-model="value" placeholder="Enter Number"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## Min & Max

::: raw

<CodeRunner title="Min & Max">
    <ShadcnNumber v-model="minAndMaxValue" min="0" max="10"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnNumber v-model="value" min="0" max="10"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## Props

<ApiTable title="Number Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'Number value', 'number | string', '-', '-'],
        ['size', 'Size of the number', 'string', 'default', 'small | default | large'],
        ['type', 'Type of the number', 'string', 'default', 'primary | warning | success | error'],
        ['disabled', 'Whether the number is disabled', 'boolean', 'false', '-'],
        ['placeholder', 'Placeholder of the number', 'string', '-', '-'],
        ['min', 'Minimum value of the number', 'number | string', '-', '-'],
        ['max', 'Maximum value of the number', 'number | string', '-', '-'],
    ]">
</ApiTable>

## Events

<ApiTable title="Number Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-change', 'Emitted when the number value changes', 'number'],
        ['on-blur', 'Emitted when the number loses focus', '-'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const basicValue = ref(0)
const placeholderValue = ref(undefined)
const minAndMaxValue = ref(0)
</script>