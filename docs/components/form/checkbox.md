---
title: Shadcn Checkbox
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnCheckbox component.

## Usage

<CodeRunner title="Usage">
    <p>Checkbox Value: {{ checked }}</p>
    <ShadcnCheckbox v-model="checked" value="Vue">Vue</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Nuxt">Nuxt</ShadcnCheckbox>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Vue">Vue</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Nuxt">Nuxt</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Vue')
</script>
```

:::

## Disabled

<CodeRunner title="Disabled">
    <ShadcnCheckbox v-model="checked" value="Vue" disabled>Vue</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Nuxt">Nuxt</ShadcnCheckbox>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Vue" disabled>Vue</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Nuxt">Nuxt</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Vue')
</script>
```

:::

## Size

<CodeRunner title="Size">
    <ShadcnCheckbox v-model="checked" value="Default" size="default" @on-change="onChange">Default</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Small" size="small" @on-change="onChange">Small</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Large" size="large" @on-change="onChange">Large</ShadcnCheckbox>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Default" size="default" @on-change="onChange">Default</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Small" size="small" @on-change="onChange">Small</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Large" size="large" @on-change="onChange">Large</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Default')
</script>
```

:::

## Type

<CodeRunner title="Type">
    <ShadcnCheckbox v-model="checked" value="Primary" type="primary">Primary</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Success" type="success">Success</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Warning" type="warning">Warning</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Error" type="error">Error</ShadcnCheckbox>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Primary" type="primary">Primary</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Success" type="success">Success</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Warning" type="warning">Warning</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Error" type="error">Error</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Primary')
</script>
```

:::

## Group

<CodeRunner title="Group">
    Checkbox Group Value: {{ checkedGroup }}
    <ShadcnCheckboxGroup v-model="checkedGroup">
        <ShadcnCheckbox value="Vue">Vue</ShadcnCheckbox>
        <ShadcnCheckbox value="Nuxt">Nuxt</ShadcnCheckbox>
    </ShadcnCheckboxGroup>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnCheckboxGroup v-model="checkedGroup">
    <ShadcnCheckbox value="Vue">Vue</ShadcnCheckbox>
    <ShadcnCheckbox value="Nuxt">Nuxt</ShadcnCheckbox>
  </ShadcnCheckboxGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkedGroup = ref(['Vue'])
</script>
```

:::

## API Attributes

<ApiTable title="Checkbox Props"
    :headers="['属性', '描述', '类似', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', 'You can use v-model to bind data in both directions', 'Any', '-', '-', '-'],
        ['value', 'The value of the checkbox', 'Any', '-', '-', '-'],
        ['disabled', 'Whether the checkbox is disabled', 'boolean', 'false', '-', '-'],
        ['size', 'The size of the checkbox', 'Enum', 'default', '-', 'small | default | large'],
        ['type', 'The type of the checkbox', 'Enum', 'primary', '-', 'primary | success | warning | error'],
    ]">
</ApiTable>

<br />

<ApiTable title="Checkbox Group Props"
    :headers="['属性', '描述', '类似', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', 'You can use v-model to bind data in both directions', 'Any[]', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Checkbox Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', 'Triggered when the value of the checkbox is changed', 'boolean'],
    ]">
</ApiTable>

<br />

<ApiTable title="Checkbox Group Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', 'Triggered when the value of the checkbox group is changed', '[]'],
    ]">
</ApiTable>

<br />

<ApiTable title="Checkbox Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['label', 'Checkbox label'],
        ['default', 'Default slot'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Vue')
const checkedGroup = ref(['Vue'])
</script>
