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

## Show Max Page

<CodeRunner title="Show Max Page">
    Default Page : {{defaultValue}}
    <ShadcnPage v-model="defaultValue" total="100" max-show-page="8"/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnPage total="100" max-show-page="8"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## Show Total Count

<CodeRunner title="Show Total Count">
    Default Page : {{defaultValue}}
    <ShadcnPage v-model="defaultValue" total="100" show-total/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnPage total="100" show-total/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## Show Sizer

<CodeRunner title="Show Sizer">
    Default Page : {{defaultValue}}
    <ShadcnPage v-model="defaultValue" total="100" show-sizer/>
    Custom
    <ShadcnPage v-model="defaultValue" total="100" show-sizer :sizer-options="[5, 10, 20]"/>
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnPage v-model="defaultValue" total="100" show-sizer/>
  <ShadcnPage v-model="defaultValue" total="100" show-sizer :sizer-options="[5, 10, 20]"/>
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
        ['pageSize', 'The number of items per page', 'Number | String', '10', ''],
        ['prevText', 'The text of the previous page button', 'String', 'Prev Page', ''],
        ['nextText', 'The text of the next page button', 'String', 'Next Page', ''],
        ['maxShowPage', 'The maximum number of pages to display', 'Number | String', '5', ''],
        ['showTotal', 'Whether to display the total number of items', 'Boolean', 'false', ''],
        ['showSizer', 'Whether to display the page size selector', 'Boolean', 'false', ''],
        ['sizerOptions', 'The options of the page size selector', 'Array', '[10, 20, 50, 100]', ''],
    ]">
</ApiTable>

<br />

<ApiTable title="Page Events"
    :headers="['Event', 'Description', 'Parameters']"
    :columns="[
        ['on-change', 'Triggered when the page number is changed', 'Number'],
        ['on-prev', 'Triggered when the previous page button is clicked', 'Number'],
        ['on-next', 'Triggered when the next page button is clicked', 'Number'],
        ['on-change-size', 'Triggered when the page size is changed', 'Number'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
