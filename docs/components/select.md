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

## Border

::: raw

<CodeRunner title="Border">
    <div class="space-y-2">
        <p>Select Value: {{ defaultSelect }}</p>
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" :border="false" />
    </div>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <p>Select Value: {{ defaultSelect }}</p>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" :border="false" />
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

## Group

::: raw

<CodeRunner title="Group">
    <ShadcnSelect v-model="defaultSelect">
      <template #options>
        <ShadcnSelectGroup label="Group 1">
          <ShadcnSelectOption v-for="i in 2"
            :key="i"
            :label="`Option ${i}`"
            :value="`Value ${i}`"/>
        </ShadcnSelectGroup>
        <ShadcnSelectOption v-for="i in 2"
                            :key="i"
                            :label="`Option ${i}`"
                            :value="`Value ${i}`"/>
      </template>
    </ShadcnSelect>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSelect v-model="defaultSelect">
      <template #options>
        <ShadcnSelectGroup label="Group 1">
          <ShadcnSelectOption v-for="i in 2"
            :key="i"
            :label="`Option ${i}`"
            :value="`Value ${i}`"/>
        </ShadcnSelectGroup>
        <ShadcnSelectOption v-for="i in 2"
                            :key="i"
                            :label="`Option ${i}`"
                            :value="`Value ${i}`"/>
      </template>    
    </ShadcnSelect>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
</script>
```

:::

## Multiple

::: raw

<CodeRunner title="Multiple">
    <ShadcnSelect v-model="defaultSelect" multiple :options="defaultSelectOptions" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnSelect v-model="defaultSelect" multiple :options="defaultSelectOptions" />
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

## Lazy data

::: raw

<CodeRunner title="Lazy data">
  <ShadcnSelect v-model="lazySelect"
                lazy
                :options="options"
                :load-data="loadMoreData"
                @update:options="handleOptionsUpdate"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnSelect v-model="selectedValue"
                lazy
                :options="options"
                :load-data="loadMoreData"
                @update:options="handleOptionsUpdate"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedValue = ref()
const options = ref<any[]>([])
let page = 1

const generateChildNodes = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    value: `value-${ page }-${ index }`,
    label: `Option ${ page }-${ index }`,
    disabled: false,
    type: 'primary'
  }))
}

const handleOptionsUpdate = (newOptions: SelectOptionProps[]) => {
  options.value = newOptions
}

const loadMoreData = (callback: (children: any[]) => void) => {
  setTimeout(() => {
    console.log('Loading page:', page)
    const children = generateChildNodes()
    callback(children)
    page++
  }, 1000)
}

loadMoreData((children) => {
  options.value = children
})
</script>
```

:::

::: raw

<CodeRunner title="Lazy data (v-model)">
  <ShadcnSelect v-model="lazySelect"
                v-model:options="options"
                lazy
                :options="options"
                :load-data="loadMoreData"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnSelect v-model="selectedValue"
                v-model:options="options"
                lazy
                :options="options"
                :load-data="loadMoreData"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedValue = ref()
const options = ref<any[]>([])
let page = 1

const generateChildNodes = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    value: `value-${ page }-${ index }`,
    label: `Option ${ page }-${ index }`,
    disabled: false,
    type: 'primary'
  }))
}

const loadMoreData = (callback: (children: any[]) => void) => {
  setTimeout(() => {
    console.log('Loading page:', page)
    const children = generateChildNodes()
    callback(children)
    page++
  }, 1000)
}

loadMoreData((children) => {
  options.value = children
})
</script>
```

:::

## API Attributes

<ApiTable title="Select Props"
    :headers="['Attribute', 'Description', 'Type', 'Default', 'List']"
    :columns="[
        ['modelValue', 'The value of the select', 'any | any\[\]', '-', '-'],
        ['options', 'The options of the select, format is { label: string, value: any, disabled?: boolean, selected?: boolean }', 'array', '-', '-'],
        ['disabled', 'Whether the select is disabled', 'boolean', 'false', 'true | false'],
        ['size', 'The size of the select', 'enum', 'default', 'small | default | large'],
        ['type', 'The type of the select', 'enum', 'default', 'primary | success | warning | error'],
        ['placeholder', 'The placeholder of the select', 'string', '-', '-'],
        ['multiple', 'Whether the select is multiple', 'boolean', 'false', 'true | false'],
        ['border', 'Whether the select has border', 'boolean', 'true', 'true | false'],
        ['lazy', 'Whether the select is lazy', 'boolean', 'false', 'true | false'],
        ['loadData', 'Load data when the select is lazy', 'function', '-', '-'],
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

<ApiTable title="Select Group Props"
    :headers="['Attribute', 'Description', 'Type', 'Default']"
    :columns="[
        ['label', 'The label of the group', 'String', '-'],
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
        ['onChange', 'Triggered when the value of the select is changed', 'any'],
        ['onClickOutside', 'Triggered when the click outside the select is triggered', 'boolean'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('Value 1')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
const slotSelect = ref(null)

const lazySelect = ref()
const lazySelect2 = ref()
const options = ref<any[]>([])
let page = 1

const generateChildNodes = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    value: `value-${ page }-${ index }`,
    label: `Option ${ page }-${ index }`,
    disabled: false,
    type: 'primary'
  }))
}

const handleOptionsUpdate = (newOptions: any[]) => options.value = newOptions

const loadMoreData = (callback: (children: any[]) => void) => {
  setTimeout(() => {
    console.log('Loading page:', page)
    const children = generateChildNodes()
    callback(children)
    page++
  }, 1000)
}

loadMoreData((children) => {
  options.value = children
})
</script>
