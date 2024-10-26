---
title: Shadcn Page
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnPage component.

## Usage

<CodeRunner title="Usage">
    Default Page : {{defaultValue}}
    <ShadcnPage v-model="defaultValue" total="100"/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnPage total="100"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## Page Size

<CodeRunner title="Page Size">
    Default Page : {{defaultValue}}
    <ShadcnPage v-model="defaultValue" total="100" page-size="20"/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnPage total="100" page-size="20"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## Prev and Next

<CodeRunner title="Prev and Next">
    Default Page : {{defaultValue}}
    <ShadcnPage v-model="defaultValue" total="100" prev-text="P" next-text="N"/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnPage total="100" prev-text="P" next-text="N"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## API Attributes

<ApiTable title="Page Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'The current page number', 'Number | String', '1', ''],
        ['total', 'The total number of data count', 'Number | String', '100', ''],
        ['page-size', 'The number of items per page', 'Number | String', '10', ''],
        ['prev-text', 'The text of the previous page button', 'String', 'Prev Page', ''],
        ['next-text', 'The text of the next page button', 'String', 'Next Page', ''],
    ]">
</ApiTable>

<br />

<ApiTable title="Page Events"
    :headers="['Event', 'Description', 'Parameters']"
    :columns="[
        ['on-change', 'Triggered when the page number is changed', 'Number'],
        ['on-prev', 'Triggered when the previous page button is clicked', 'Number'],
        ['on-next', 'Triggered when the next page button is clicked', 'Number'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
