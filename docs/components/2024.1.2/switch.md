---
title: Shadcn Switch
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnSwitch component.

## Usage

<CodeRunner title="Usage">
    <ShadcnSwitch v-model="checked" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSwitch v-model="checked" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>
```

:::

## Type

<CodeRunner title="Type">
    <ShadcnSwitch v-model="checked" type="success" />
    <ShadcnSwitch v-model="checked" type="warning" />
    <ShadcnSwitch v-model="checked" type="error" />
    <ShadcnSwitch v-model="checked" type="primary" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSwitch v-model="checked" type="success" />
    <ShadcnSwitch v-model="checked" type="warning" />
    <ShadcnSwitch v-model="checked" type="error" />
    <ShadcnSwitch v-model="checked" type="primary" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>
```

:::

## API Attributes

<ApiTable title="Switch Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'The value of the switch', 'Boolean', 'false', '-', '-'],
        ['type', 'The type of the switch', 'String', '-', '-', 'success, warning, error, primary'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false)
</script>
