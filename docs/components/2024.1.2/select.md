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

## API Attributes

<ApiTable title="Select Props"
    :headers="['Attribute', 'Description', 'Type', 'Default']"
    :columns="[
        ['modelValue', 'The value of the select', 'Any', '-'],
        ['options', 'The options of the select, format is { label: string, value: any, disabled?: boolean, selected?: boolean }', 'Array', '-'],
        ['disabled', 'Whether the select is disabled', 'Boolean', 'false'],
    ]">
</ApiTable>

<br />

<ApiTable title="Select Option Props"
    :headers="['Attribute', 'Description', 'Type', 'Default']"
    :columns="[
        ['label', 'The label of the option', 'String', '-'],
        ['value', 'The value of the option', 'Any', '-'],
        ['disabled', 'Whether the option is disabled', 'Boolean', 'false'],
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
