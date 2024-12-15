---
title: Shadcn Data Filter
---

# Inroduction

This document is mainly used to describe some features and usage of the ShadcnDataFilter component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnDataFilter v-model="value" :fields="fields" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnDataFilter v-model="value" :fields="fields" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const value = ref([])
  const fields = [
    { label: 'Name', value: 'name', type: 'string' },
    { label: 'Age', value: 'age', type: 'number' },
    { label: 'Created At', value: 'created_at', type: 'date' },
    { label: 'Is Active', value: 'is_active', type: 'boolean' }
  ]
</script>
```

:::

## Hierarchical Data Filter

::: raw

<CodeRunner title="Hierarchical Data Filter">
    <ShadcnHierarchicalDataFilter v-model="hValue" :fields="fields" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnHierarchicalDataFilter v-model="value" :fields="fields" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const value = ref([])
  const fields = [
    { label: 'Name', value: 'name', type: 'string' },
    { label: 'Age', value: 'age', type: 'number' },
    { label: 'Created At', value: 'created_at', type: 'date' }
  ]
</script>
```

:::

## Data Filter Structure

<ApiTable title="FilterCondition"
    :headers="['Attribute', 'Description', 'Required']"
    :columns="[
        ['field', 'The field of the filter condition', 'true'],
        ['operator', 'The operator of the filter condition', 'true'],
        ['value', 'The value of the filter condition', 'false'],
    ]">
</ApiTable>

<br />

<ApiTable title="Field"
    :headers="['Attribute', 'Description', 'Required', 'List']"
    :columns="[
        ['value', 'The value of the field', 'true', '-'],
        ['label', 'The label of the field', 'false', '-'],
        ['type', 'The type of the field', 'false', 'string | number | date | boolean'],
    ]">
</ApiTable>

<br />

<ApiTable title="Operator"
    :headers="['Attribute', 'Description', 'Required', 'List']"
    :columns="[
        ['value', 'The value of the operator', 'true', '-'],
        ['label', 'The label of the operator', 'true', '-'],
        ['scope', 'The scope of the operator, see Field.type', 'true', 'string\[\]'],
    ]">
</ApiTable>

<br />

<ApiTable title="ValidationError"
    :headers="['Attribute', 'Description', 'Required']"
    :columns="[
        ['fieldIndex', 'The index of the condition', 'true'],
        ['field', 'The field of the condition', 'true'],
        ['message', 'The error message of the condition', 'true'],
    ]">
</ApiTable>

<br />

<ApiTable title="ValidationResult"
    :headers="['Attribute', 'Description', 'Required']"
    :columns="[
        ['isValid', 'Whether the data filter is valid', 'true'],
        ['errors', 'The error message of the data filter see ValidationError', 'true'],
    ]">
</ApiTable>

## Data Filter Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['modelValue', 'The value of the data filter', 'array', '\[\]'],
        ['fields', 'The fields of the data filter', 'array', '\[\]'],
        ['operators', 'The operators of the data filter', 'array', '\[\]'],
    ]">
</ApiTable>

## Data Filter Events

<ApiTable title="Events"
    :headers="['Attribute', 'Description', 'Parameters']"
    :columns="[
        ['update:modelValue', 'The value of the data filter', 'FilterCondition\[\]'],
        ['on-change', 'Triggered when the value of the data filter is changed', 'FilterCondition\[\]'],
        ['on-add-condition', 'Triggered when a new condition is added', 'FilterCondition'],
        ['on-remove-condition', 'Triggered when a condition is removed', 'FilterCondition'],
        ['on-validation-change', 'Triggered when the validation of the data filter is changed', 'ValidationResult'],
    ]">
</ApiTable>

## Hierarchical Data Filter Structure

<ApiTable title="FilterItem"
    :headers="['Attribute', 'Description', 'Required', 'List']"
    :columns="[
        ['type', 'The type of the filter item', 'true', 'condition | group | sub'],
        ['value', 'The value of the filter item', 'false', '-'],
        ['operator', 'The operator of the filter item', 'false', 'and | or'],
        ['isValid', 'Whether the filter item is valid', 'false', 'true | false'],
    ]">
</ApiTable>

<br />

<ApiTable title="FilterGroup"
    :headers="['Attribute', 'Description', 'Required', 'List']"
    :columns="[
        ['operator', 'The operator of the filter group', 'true', 'and | or'],
        ['items', 'The items of the filter group', 'true', 'FilterItem\[\]'],
    ]">
</ApiTable>

## Hierarchical Data Filter Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['modelValue', 'The value of the data filter', 'array', 'FilterGroup\[\]'],
        ['fields', 'The fields of the data filter', 'array', 'Field\[\]'],
    ]">
</ApiTable>

## Hierarchical Data Filter Events

<ApiTable title="Events"
    :headers="['Attribute', 'Description', 'Parameters']"
    :columns="[
        ['update:modelValue', 'The value of the data filter', 'FilterGroup\[\]'],
        ['on-validation-change', 'Triggered when the validation of the data filter is changed', 'ValidationResult'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([])
const hValue = ref([])
const fields = [
  { label: 'Name', value: 'name', type: 'string' },
  { label: 'Age', value: 'age', type: 'number' },
  { label: 'Created At', value: 'created_at', type: 'date' },
  { label: 'Is Active', value: 'is_active', type: 'boolean' }
]
</script>
