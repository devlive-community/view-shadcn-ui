---
title: Shadcn Checkbox
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnCheckbox component.

## Usage

<CodeRunner title="Usage">
    <p>Checkbox Value: {{ checked }}</p>
    <ShadcnCheckbox v-model="checked" value="Vue">Vue</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Nuxt">Nuxt</ShadcnCheckbox>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Vue">Vue</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Nuxt">Nuxt</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Vue')
</script>
```

:::

## Disabled

<CodeRunner title="Disabled">
    <ShadcnCheckbox v-model="checked" value="Vue" disabled>Vue</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Nuxt">Nuxt</ShadcnCheckbox>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Vue" disabled>Vue</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Nuxt">Nuxt</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Vue')
</script>
```

:::

## Size

<CodeRunner title="Size">
    <ShadcnCheckbox v-model="checked" value="Default" size="default" @on-change="onChange">Default</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Small" size="small" @on-change="onChange">Small</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Large" size="large" @on-change="onChange">Large</ShadcnCheckbox>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Default" size="default" @on-change="onChange">Default</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Small" size="small" @on-change="onChange">Small</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Large" size="large" @on-change="onChange">Large</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Default')
</script>
```

:::

## Type

<CodeRunner title="Type">
    <ShadcnCheckbox v-model="checked" value="Primary" type="primary">Primary</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Success" type="success">Success</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Warning" type="warning">Warning</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Error" type="error">Error</ShadcnCheckbox>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Primary" type="primary">Primary</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Success" type="success">Success</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Warning" type="warning">Warning</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Error" type="error">Error</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Primary')
</script>
```

:::

## API Attributes

<ApiTable title="Checkbox Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'You can use v-model to bind data in both directions', 'Any', '-', '-', '-'],
        ['value', 'The value of the checkbox', 'Any', '-', '-', '-'],
        ['disabled', 'Whether the checkbox is disabled', 'boolean', 'false', '-', '-'],
        ['size', 'The size of the checkbox', 'Enum', 'default', '-', 'small | default | large'],
        ['type', 'The type of the checkbox', 'Enum', 'primary', '-', 'primary | success | warning | error'],
    ]">
</ApiTable>

<br />

<ApiTable title="Checkbox Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-change', 'Triggered when the value of the checkbox is changed', 'boolean'],
    ]">
</ApiTable>

<br />

<ApiTable title="Checkbox Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['label', 'Checkbox label'],
        ['default', 'Default slot'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Vue')
</script>
