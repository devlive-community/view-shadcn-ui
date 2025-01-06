---
title: Shadcn Page
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnPage component.

## Usage

<CodeRunner title="Usage">
    Default Page : {{defaultValue}}
    <ShadcnPagination v-model="defaultValue" total="100"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination total="100"/>
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
    <ShadcnPagination v-model="defaultValue" total="100" page-size="20"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination total="100" page-size="20"/>
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
    <ShadcnPagination v-model="defaultValue" total="100" prev-text="P" next-text="N"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination total="100" prev-text="P" next-text="N"/>
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
    <ShadcnPagination v-model="defaultValue" total="100" max-show-page="8"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination total="100" max-show-page="8"/>
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
    <ShadcnPagination v-model="defaultValue" total="100" show-total/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination total="100" show-total/>
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
    <ShadcnPagination v-model="defaultValue" total="100" show-sizer/>
    Custom
    <ShadcnPagination v-model="defaultValue" total="100" show-sizer :sizer-options="[5, 10, 20]"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnPagination v-model="defaultValue" total="100" show-sizer/>
  <ShadcnPagination v-model="defaultValue" total="100" show-sizer :sizer-options="[5, 10, 20]"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
```

:::

## API Attributes

<ApiTable title="Page Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'The current page number', 'Number | String', '1', ''],
        ['total', 'The total number of data count', 'Number | String', '100', ''],
        ['pageSize', 'The number of items per page', 'Number | String', '10', ''],
        ['prevText', 'The text of the previous page button', 'String', 'Prev Page', ''],
        ['nextText', 'The text of the next page button', 'String', 'Next Page', ''],
        ['maxShowPage', 'The maximum number of pages to display', 'Number | String', '5', ''],
        ['showTotal', 'Whether to display the total number of items', 'Boolean', 'false', ''],
        ['showSizer', 'Whether to display the page size selector', 'Boolean', 'false', ''],
        ['sizerOptions', 'The options of the page size selector', 'Array', '\[10, 20, 50, 100\]', ''],
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

<br />

<ApiTable title="Page Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['showTotal', 'The content of the total number of items'],
        ['sizer', 'The content of the page size selector'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(1)
</script>
