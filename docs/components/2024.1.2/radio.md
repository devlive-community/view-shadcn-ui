---
title: Shadcn Radio
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnRadio component.

## Usage

<CodeRunner title="Usage">
    <ShadcnRadio v-model="checked" value="ON">ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF">OFF</ShadcnRadio>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRadio v-model="checked" value="ON">ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF">OFF</ShadcnRadio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('ON')
</script>
```

:::

## Disabled

<CodeRunner title="Disabled">
    <ShadcnRadio v-model="checked" value="ON" disabled>ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF">OFF</ShadcnRadio>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRadio v-model="checked" value="ON" disabled>ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF">OFF</ShadcnRadio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('ON')
</script>
```

:::

## Size

<CodeRunner title="Size">
    <ShadcnRadio v-model="checked" value="Default" size="default">Default</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Small" size="small">Small</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Large" size="large">Large</ShadcnRadio>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRadio v-model="checked" value="Default" size="default">Default</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Small" size="small">Small</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Large" size="large">Large</ShadcnRadio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Default')
</script>
```

:::

## Type

<CodeRunner title="Type">
    <ShadcnRadio v-model="checked" value="Primary" type="primary">Primary</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Success" type="success">Success</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Warning" type="warning">Warning</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Error" type="error">Error</ShadcnRadio>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRadio v-model="checked" value="Primary" type="primary">Primary</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Success" type="success">Success</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Warning" type="warning">Warning</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Error" type="error">Error</ShadcnRadio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Primary')
</script>
```

:::

## API Attributes

<ApiTable title="Radio Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'The value of the radio', 'Any', '-', '-', '-'],
        ['value', 'The value of the radio', 'Any', '-', '-', '-'],
        ['disabled', 'Whether the radio is disabled', 'boolean', 'false', '-', '-'],
        ['size', 'The size of the radio', 'Enum', 'default', '-', 'small | default | large'],
        ['type', 'The type of the radio', 'Enum', 'primary', '-', 'primary | success | warning | error'],
    ]">
</ApiTable>

<br />

<ApiTable title="Radio Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when the value of the radio is changed', 'boolean'],
        ['on-change', 'Triggered when the value of the radio is changed', 'boolean'],
    ]">
</ApiTable>

<br />

<ApiTable title="Radio Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['label', 'Radio label'],
        ['default', 'Radio label'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('ON')
</script>
