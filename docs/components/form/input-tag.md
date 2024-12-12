---
title: Shadcn InputTag
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnInputTag component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnText>Value: {{ tags }}</ShadcnText>
    <ShadcnInputTag v-model="tags" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnInputTag v-model="tags" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref([])
</script>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled">
    <ShadcnInputTag v-model="tags" disabled />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnInputTag v-model="tags" disabled />
</template>
```

:::

## Size

::: raw

<CodeRunner title="Size">
    <ShadcnInputTag v-model="tags" size="small" />
    <ShadcnInputTag v-model="tags" size="default" />
    <ShadcnInputTag v-model="tags" size="large" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnInputTag v-model="tags" size="small" />
    <ShadcnInputTag v-model="tags" size="default" />
    <ShadcnInputTag v-model="tags" size="large" />
</template>
```

:::

## Type

::: raw

<CodeRunner title="Type">
    <ShadcnInputTag v-model="value" type="primary"/>
    <ShadcnInputTag v-model="value" type="error"/>
    <ShadcnInputTag v-model="value" type="warning"/>
    <ShadcnInputTag v-model="value" type="success"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnInputTag v-model="value" type="primary"/>
    <ShadcnInputTag v-model="value" type="error"/>
    <ShadcnInputTag v-model="value" type="warning"/>
    <ShadcnInputTag v-model="value" type="success"/>
</template>
```

:::

## Max

::: raw

<CodeRunner title="Max">
    <ShadcnInputTag v-model="tags" max="3" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnInputTag v-model="tags" max="3" />
</template>
```

:::

## Form

::: raw

<CodeRunner title="Form">
    <ShadcnForm ref="formRef" v-model="formState">
      <ShadcnFormItem name="tags"
                      label="Tags"
                      :rules="[ { required: true, message: 'Please input tags!' } ]">
        <ShadcnInputTag v-model="formState.tags" name="tags"/>
      </ShadcnFormItem>
      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnForm ref="formRef" v-model="formState">
      <ShadcnFormItem name="tags"
                      label="Tags"
                      :rules="[ { required: true, message: 'Please input tags!' } ]">
        <ShadcnInputTag v-model="formState.tags" name="tags"/>
      </ShadcnFormItem>
      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
</template>
```

:::

## InputTag Props

<ApiTable title="Props"
        :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
        :columns="[
            ['modelValue', 'You can use v-model to bind data in both directions', 'any\[\]', '-', '-'],
            ['placeholder', 'Placeholder of the input', 'string', '-', '-'],
            ['name', 'The name of the input, support on form', 'string', '-', '-'],
            ['disabled', 'Whether the input is disabled', 'boolean', 'false', '-'],
            ['size', 'The size of the input', 'string', 'default', 'small | default | large'],
            ['type', 'The type of the input', 'string', 'primary', 'primary | error | warning | success'],
            ['max', 'The maximum number of tags', 'number', 'Infinity', '-'],
        ]">
</ApiTable>

## InputTag Events

<ApiTable title="Events"
        :headers="['Event', 'Description', 'Callback Parameters']"
        :columns="[
            ['on-add', 'Triggered when the tag is added', 'string'],
            ['on-remove', 'Triggered when the tag is removed', 'string'],
            ['on-change', 'Triggered when the input value is changed', 'string[]'],
        ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref([])

const formState = ref({
    tags: []
})
</script>
