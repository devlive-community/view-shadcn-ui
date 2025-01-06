---
title: Shadcn Rate
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnRate component.

## Usage

<CodeRunner title="Usage">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## Maximum Value

<CodeRunner title="Maximum Value">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" max="10" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" max="10" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## Allow Half

<CodeRunner title="Allow Half">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" allow-half />
    <p>Custom Character</p>
    <ShadcnRate v-model="rate" allow-half>
        <template #character>Love</template>
    </ShadcnRate>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" allow-half />
    <ShadcnRate v-model="rate" allow-half>
        <template #character>Love</template>
    </ShadcnRate>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## Type

<CodeRunner title="Type">
    Rate Value: {{ rate }}
    <ShadcnSpace wrap>
        <ShadcnRate v-model="rate" max="10" type="primary"/>
        <ShadcnRate v-model="rate" max="10" type="success"/>
        <ShadcnRate v-model="rate" max="10" type="warning"/>
        <ShadcnRate v-model="rate" max="10" allow-half type="error"/>
    </ShadcnSpace>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" max="10" type="primary"/>
    <ShadcnRate v-model="rate" max="10" type="success"/>
    <ShadcnRate v-model="rate" max="10" type="warning"/>
    <ShadcnRate v-model="rate" max="10" allow-half type="error"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## Disabled

<CodeRunner title="Disabled">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" disabled />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## Show Text

<CodeRunner title="Show Text">
    Rate Value: {{ rate }}
    <ShadcnRate v-model="rate" show-text />
    <p>Custom Text</p>
    <ShadcnRate v-model="rate" show-text>
        <template #text>Love</template>
    </ShadcnRate>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRate v-model="rate" show-text />
    <ShadcnRate v-model="rate" show-text>
        <template #text>Love</template>
    </ShadcnRate>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
```

:::

## API Attributes

<ApiTable title="Rate Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'Rate value', 'number', '0', '-'],
        ['max', 'Maximum value', 'number', '5', '-'],
        ['allowHalf', 'Allow half', 'boolean', 'false', '-'],
        ['type', 'Rate type', 'string', 'default', 'primary, success, warning, error'],
        ['disabled', 'Disabled', 'boolean', 'false', '-'],
        ['showText', 'Show text', 'boolean', 'false', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Rate Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['character', 'Rate character slot'],
        ['text', 'Rate text slot'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const rate = ref(1)
</script>
