---
title: Shadcn Input
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnInput component.

## Basic Usage

<CodeRunner title="Basic Usage"
    description="Create a simple input.">
    <ShadcnInput placeholder="Input" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('')
</script>
```

:::

## Clearable

<CodeRunner title="Clearable"
    description="Create a clearable input.">
    <ShadcnInput placeholder="Input" v-model="input" clearable />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" clearable />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## Size

<CodeRunner title="Size"
    description="Create a size input.">
    <div class="space-y-2">
        <ShadcnInput placeholder="Input" v-model="input" size="small" />
        <ShadcnInput placeholder="Input" v-model="input" size="default"/>
        <ShadcnInput placeholder="Input" v-model="input" size="large" />
    </div>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" size="small" />
    <ShadcnInput v-model="input" placeholder="Input" size="default"/>
    <ShadcnInput v-model="input" placeholder="Input" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## Word Count

<CodeRunner title="Word Count"
    description="Create a word count input.">
    <ShadcnInput placeholder="Input" v-model="input" word-count />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" word-count />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## Max Count

<CodeRunner title="Max Count"
    description="Create a max count input.">
    <ShadcnInput placeholder="Input" v-model="input" word-count :max-count="100" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" word-count :max-count="100" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## Prefix and Suffix

<CodeRunner title="Prefix and Suffix"
    description="Create a prefix and suffix input.">
    <ShadcnInput placeholder="Input" v-model="input">
        <template #prefix>
            <span class="text-xs text-gray-300">P</span>
        </template>
        <template #suffix>
            <span class="text-xs text-gray-300">S</span>
        </template>
    </ShadcnInput>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input">
        <template #prefix>
            <span class="text-xs text-gray-300">P</span>
        </template>
        <template #suffix>
            <span class="text-xs text-gray-300">S</span>
        </template>
    </ShadcnInput>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## Disabled

<CodeRunner title="Disabled">
    <ShadcnInput placeholder="Input" v-model="input" disabled />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## Password

<CodeRunner title="Password">
    <ShadcnInput placeholder="Input" v-model="input" type="password" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" type="password" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## Textarea

<CodeRunner title="Textarea">
    <ShadcnInput placeholder="Input" v-model="input" type="textarea" />
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" type="textarea" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## API Attributes

<ApiTable title="Input Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'Depend', 'List']"
    :columns="[
        ['modelValue', 'The value of the input', 'String', '-', '-', '-'],
        ['placeholder', 'The placeholder of the input', 'String', '-', '-', '-'],
        ['clearable', 'Show the clearable icon', 'Boolean', 'false', '-', '-'],
        ['size', 'The size of the input', 'String', 'default', '-', 'small, default, large'],
        ['wordCount', 'Show the word count', 'Boolean', 'false', '-', '-'],
        ['maxCount', 'The max count of the input', 'Number', '-', '-', '-'],
        ['disabled', 'Disable the input', 'Boolean', 'false', '-', '-'],
        ['type', 'The type of the input', 'String', 'text', '-', 'text, password, textarea'],
        ['rows', 'The rows of the textarea', 'Number', '3', '-', '-'],
        ['cols', 'The cols of the textarea', 'Number', '20', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Input Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-change', 'Triggered when the input value is changed', 'Object'],
        ['on-clear', 'Triggered when the clear icon is clicked', '-'],
        ['on-prefix-click', 'Triggered when the prefix icon is clicked', '-'],
        ['on-suffix-click', 'Triggered when the suffix icon is clicked', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Input Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['prefix', 'Input prefix'],
        ['suffix', 'Input suffix'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
