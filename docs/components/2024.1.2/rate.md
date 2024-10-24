---
title: Shadcn Rate
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnRate component.

## Usage

<CodeRunner title="Usage">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRate v-model="rate" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## Maximum Value

<CodeRunner title="Maximum Value">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" max="10" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRate v-model="rate" max="10" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## Allow Half

<CodeRunner title="Allow Half">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" allow-half />
    <p>Custom Character</p>
    <ShadcnRate v-model="rate" allow-half>
        <template #character>Love</template>
    </ShadcnRate>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRate v-model="rate" allow-half />
    <ShadcnRate v-model="rate" allow-half>
        <template #character>Love</template>
    </ShadcnRate>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## Type

<CodeRunner title="Type">
    Rate Value: {{ rate }}
    <ShadcnSpace wrap>
        <ShadcnRate v-model="rate" max="10" type="primary"/>
        <ShadcnRate v-model="rate" max="10" type="success"/>
        <ShadcnRate v-model="rate" max="10" type="warning"/>
        <ShadcnRate v-model="rate" max="10" allow-half type="error"/>
    </ShadcnSpace>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnRate v-model="rate" max="10" type="primary"/>
    <ShadcnRate v-model="rate" max="10" type="success"/>
    <ShadcnRate v-model="rate" max="10" type="warning"/>
    <ShadcnRate v-model="rate" max="10" allow-half type="error"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## API Attributes

<ApiTable title="Rate Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'Rate value', 'number', '0', '-'],
        ['max', 'Maximum value', 'number', '5', '-'],
        ['allowHalf', 'Allow half', 'boolean', 'false', '-'],
        ['type', 'Rate type', 'string', 'default', 'primary, success, warning, error'],
    ]">
</ApiTable>

<br />

<ApiTable title="Rate Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['character', 'Rate slot'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
