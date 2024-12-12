---
title: Shadcn Map
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnMap component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnMap v-model="value"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnMap v-model="value"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## Size

::: raw

<CodeRunner title="Size">
    <ShadcnMap v-model="value" size="small"/>
    <ShadcnMap v-model="value" size="default"/>
    <ShadcnMap v-model="value" size="large"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnMap v-model="value" size="small"/>
    <ShadcnMap v-model="value" size="default"/>
    <ShadcnMap v-model="value" size="large"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## Type

::: raw

<CodeRunner title="Type">
    <ShadcnMap v-model="value" type="primary"/>
    <ShadcnMap v-model="value" type="success"/>
    <ShadcnMap v-model="value" type="warning"/>
    <ShadcnMap v-model="value" type="error"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnMap v-model="value" type="primary"/>
    <ShadcnMap v-model="value" type="success"/>
    <ShadcnMap v-model="value" type="warning"/>
    <ShadcnMap v-model="value" type="error"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled">
    <ShadcnMap v-model="value" disabled/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnMap v-model="value" disabled/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## Max

::: raw

<CodeRunner title="Max">
    <ShadcnMap v-model="value" max="2"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnMap v-model="value" max="2"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## Form

::: raw

<CodeRunner title="Form">
    <ShadcnForm ref="formRef" v-model="formState" @on-submit="console.log($event)">
      <ShadcnFormItem name="map"
                      label="Map"
                      :rules="[ { required: true, message: 'Please add map!' } ]">
        <ShadcnMap v-model="formState.value" :max="3" name="map"/>
      </ShadcnFormItem>
      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnForm ref="formRef" v-model="formState" @on-submit="console.log($event)">
      <ShadcnFormItem name="map"
                      label="Map"
                      :rules="[ { required: true, message: 'Please add map!' } ]">
        <ShadcnMap v-model="formState.value" :max="3" name="map"/>
      </ShadcnFormItem>
      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
</template>

<script setup lang="ts">
import {ref} from "vue"

const formState = ref({
  value: []
})
</script>
```

:::

## Map Props

<ApiTable title="Map Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value','List']"
    :columns="[
        ['modelValue', 'The value of the map', 'array', '\[\]', '-'],
        ['size', 'The size of the map', 'enum', 'default', 'small | default | large'],
        ['type', 'The type of the map', 'enum', 'primary', 'primary | success | warning | error'],
        ['disabled', 'Disable the map', 'boolean', 'false', '-'],
        ['max', 'The maximum number of items', 'number', 'Infinity', '-'],
        ['name', 'The name of the key input, support on form', 'string', '-', '-'],
    ]">
</ApiTable>

## Map Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-add', 'Triggered when the map is added', 'object'],
        ['on-remove', 'Triggered when the map is removed', 'object'],
    ]">
</ApiTable>

<script setup lang="ts">
import {ref} from "vue"; 

const value = ref([{key: 'key', value: 'value'}])
const formState = ref({
  value: []
})
</script>
