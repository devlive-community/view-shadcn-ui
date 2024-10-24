---
title: Shadcn Select
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnSelect and ShadcnSelectOption component.

## Usage

<CodeRunner title="Usage">
    <p>Select Value: {{ defaultSelect }}</p>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt' },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## Disabled

<CodeRunner title="Disabled">
    <p>Select Value: {{ defaultSelect }}</p>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" disabled />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## Slot

<CodeRunner title="Slot">
    <p>Select Value: {{ slotSelect }}</p>
    <ShadcnSelect v-model="slotSelect">
        <template #options>
            <ShadcnSelectOption v-for="i in 10"
                :key="i"
                :selected="defaultSelect === `Value ${i}`"
                :disabled="i % 2 === 0"
                :value="`Value ${i}`"
                :label="`Option ${i}`"/>
        </template>
    </ShadcnSelect>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnSelect v-model="defaultSelect">
        <template #options>
            <ShadcnSelectOption v-for="i in 10"
                :key="i"
                :selected="defaultSelect === `Value ${i}`"
                :disabled="i % 2 === 0"
                :value="`Value ${i}`"
                :label="`Option ${i}`"/>
        </template>
    </ShadcnSelect>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref(null)
</script>
```

:::

## Size

<CodeRunner title="Size">
    <div class="space-y-2">
        <p>Select Value: {{ defaultSelect }}</p>
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="small" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="default" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="large" />
    </div>
</CodeRunner>

::: details Show code

```vue
<template>
    <p>Select Value: {{ defaultSelect }}</p>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="small" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="default" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## Type

<CodeRunner title="Type">
    <div class="space-y-2">
        <p>Select Value: {{ defaultSelect }}</p>
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="primary" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="success" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="warning" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="error" />
    </div>
</CodeRunner>

::: details Show code

```vue
<template>
    <p>Select Value: {{ defaultSelect }}</p>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="primary" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="success" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="warning" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="error" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## API Attributes

<ApiTable title="Select Props"
    :headers="['Attribute', 'Description', 'Type', 'Default', 'List']"
    :columns="[
        ['modelValue', 'The value of the select', 'Any', '-', '-'],
        ['options', 'The options of the select, format is { label: string, value: any, disabled?: boolean, selected?: boolean }', 'Array', '-', '-'],
        ['disabled', 'Whether the select is disabled', 'Boolean', 'false', 'true | false'],
        ['size', 'The size of the select', 'Enum', 'default', 'small | default | large'],
        ['type', 'The type of the select', 'Enum', 'default', 'primary | success | warning | error'],
    ]">
</ApiTable>

<br />

<ApiTable title="Select Option Props"
    :headers="['Attribute', 'Description', 'Type', 'Default']"
    :columns="[
        ['label', 'The label of the option', 'String', '-'],
        ['value', 'The value of the option', 'Any', '-'],
        ['disabled', 'Whether the option is disabled', 'Boolean', 'false'],
        ['selected', 'Whether the option is selected', 'Boolean', 'false'],
    ]">
</ApiTable>

<br />

<ApiTable title="Select Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['options', 'Option slot'],
    ]">
</ApiTable>

<br />

<ApiTable title="Select Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-change', 'Triggered when the value of the select is changed', 'any'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
const slotSelect = ref(null)
</script>
