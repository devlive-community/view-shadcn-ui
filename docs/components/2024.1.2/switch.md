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

## Size

<CodeRunner title="Size">
    <ShadcnSwitch v-model="checked" size="small" />
    <ShadcnSwitch v-model="checked" size="default" />
    <ShadcnSwitch v-model="checked" size="large" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSwitch v-model="checked" size="small" />
    <ShadcnSwitch v-model="checked" size="default" />
    <ShadcnSwitch v-model="checked" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>
```

:::

## Disabled

<CodeRunner title="Disabled">
    <ShadcnSwitch v-model="checked" disabled />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSwitch v-model="checked" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>
```

:::

## Slot

<CodeRunner title="Slot">
    <ShadcnSwitch v-model="checked">
        <template #open>ON</template>
        <template #close>OFF</template>
    </ShadcnSwitch>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSwitch v-model="checked">
        <template #open>ON</template>
        <template #close>OFF</template>
    </ShadcnSwitch>
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
        ['size', 'The size of the switch', 'String', '-', '-', 'small, default, large'],
        ['disabled', 'Whether the switch is disabled', 'Boolean', 'false', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Switch Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:modelValue', 'Triggered when the value of the switch is changed', 'boolean'],
        ['on-change', 'Triggered when the value of the switch is changed', 'boolean'],
    ]">
</ApiTable>

<br />

<ApiTable title="Switch Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['open', 'Open label'],
        ['close', 'Close label'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false)
</script>
