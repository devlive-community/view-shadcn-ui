---
title: Shadcn Map
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnMap component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnMap v-model="value"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnMap v-model="value"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## Size

::: raw

<CodeRunner title="Size">
    <ShadcnMap v-model="value" size="small"/>
    <ShadcnMap v-model="value" size="default"/>
    <ShadcnMap v-model="value" size="large"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnMap v-model="value" size="small"/>
    <ShadcnMap v-model="value" size="default"/>
    <ShadcnMap v-model="value" size="large"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## Type

::: raw

<CodeRunner title="Type">
    <ShadcnMap v-model="value" type="primary"/>
    <ShadcnMap v-model="value" type="success"/>
    <ShadcnMap v-model="value" type="warning"/>
    <ShadcnMap v-model="value" type="error"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnMap v-model="value" type="primary"/>
    <ShadcnMap v-model="value" type="success"/>
    <ShadcnMap v-model="value" type="warning"/>
    <ShadcnMap v-model="value" type="error"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled">
    <ShadcnMap v-model="value" disabled/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnMap v-model="value" disabled/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## Map Props

<ApiTable title="Map Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'The value of the map', 'array', '\[\]', '', ''],
        ['size', 'The size of the map', 'enum', 'default', '', 'small | default | large'],
        ['type', 'The type of the map', 'enum', 'primary', '', 'primary | success | warning | error'],
        ['disabled', 'Disable the map', 'boolean', 'false', '', ''],
    ]">
</ApiTable>

<script setup lang="ts">
import {ref} from "vue"; 

const value = ref([{key: 'key', value: 'value'}])
</script>
