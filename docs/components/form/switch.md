---
title: Shadcn Switch
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnSwitch component.

## Usage

<CodeRunner title="Usage">
    <ShadcnSwitch v-model="checked" />
</CodeRunner>

::: details 查看代码

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

::: details 查看代码

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

::: details 查看代码

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

::: details 查看代码

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

::: details 查看代码

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

## True and False Value

::: raw

<CodeRunner title="True and False Value">
    <div>Null Value: {{ checked2 }}</div>
    <ShadcnSwitch v-model="checked2" true-value="ON" false-value="OFF">
      <template #open>OFF</template>
      <template #close>ON</template>
    </ShadcnSwitch>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <div>Null Value: {{ checked2 }}</div>
    <ShadcnSwitch v-model="checked2" true-value="ON" false-value="OFF">
        <template #open>OFF</template>
        <template #close>ON</template>
    </ShadcnSwitch>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked2 = ref(null)
</script>
```

:::

## API Attributes

<ApiTable title="Switch Props"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', 'The value of the switch', 'boolean', 'false', '-', '-'],
        ['type', 'The type of the switch', 'string', '-', '-', 'success, warning, error, primary'],
        ['size', 'The size of the switch', 'string', '-', '-', 'small, default, large'],
        ['disabled', 'Whether the switch is disabled', 'boolean', 'false', '-', '-'],
        ['trueValue', 'The value of the switch when it is checked', 'any', '-', '-', '-'],
        ['falseValue', 'The value of the switch when it is not checked', 'any', '-', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Switch Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', 'Triggered when the value of the switch is changed', 'boolean'],
        ['on-change', 'Triggered when the value of the switch is changed', 'boolean'],
    ]">
</ApiTable>

<br />

<ApiTable title="Switch Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['open', 'Open label'],
        ['close', 'Close label'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false)
const checked2 = ref(null)
</script>
