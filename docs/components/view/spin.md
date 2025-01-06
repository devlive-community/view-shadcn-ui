---
title: Shadcn Spin
---

# Inroduction

This document is mainly used to describe some features and usage of the ShadcnSpin component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnSpin />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpin v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(false);
</script>
```

:::

## Type

::: raw

<CodeRunner title="Type">
    <ShadcnSpin type="primary"/>
    <ShadcnSpin type="success"/>
    <ShadcnSpin type="error"/>
    <ShadcnSpin type="warning"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpin type="primary"/>
    <ShadcnSpin type="success"/>
    <ShadcnSpin type="error"/>
    <ShadcnSpin type="warning"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Size

::: raw

<CodeRunner title="Size">
    <ShadcnSpin type="primary" size="small"/>
    <ShadcnSpin type="success" size="default"/>
    <ShadcnSpin type="error" size="large"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpin type="primary" size="small"/>
    <ShadcnSpin type="success" size="default"/>
    <ShadcnSpin type="error" size="large"/>
</template>

<script setup lang="ts">
</script>
```

:::

## Slot

::: raw

<CodeRunner title="Slot">
    <ShadcnSpin>
      <div class="ml-3 p-2">
        <p class="text-gray-700">Processing</p>
        <p class="text-sm text-gray-500">Please wait...</p>
      </div>
    </ShadcnSpin>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpin>
      <div class="ml-3 p-2">
        <p class="text-gray-700">Processing</p>
        <p class="text-sm text-gray-500">Please wait...</p>
      </div>
    </ShadcnSpin>
</template>

<script setup lang="ts">
</script>
```

:::

## Center

::: raw

<CodeRunner title="Center" warning="If fixed is set, the parent component must use position: relative">
    <ShadcnCard title="Spin">
      <div class="relative min-h-[200px]">
        <ShadcnSpin fixed/>
      </div>
    </ShadcnCard>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCard title="Spin">
      <div class="relative min-h-[200px]">
        <ShadcnSpin fixed/>
      </div>
    </ShadcnCard>
</template>

<script setup lang="ts">
</script>
```

:::

## $Spin

::: raw

<CodeRunner title="$Spin">
    <ShadcnButton @click="showSpin">Show Spin</ShadcnButton>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="showSpin">Show Spin</ShadcnButton>
</template>

<script lang="ts">
export default {
    methods: {
          showSpin()
          {
                this.$Spin.show()
                setTimeout(() => {
                    this.$Spin.hide()
                }, 3000)
          }
    }
}
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'Spin value', 'boolean', 'false', '-'],
        ['type', 'Spin type', 'enum', 'primary', 'primary | success | warning | error'],
        ['size', 'Spin size', 'enum', 'default', 'default | small | large'],
        ['fixed', 'Whether to fix the spin, the parent component must use position: relative', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Slots"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', 'Content, If set, type and size will not work'],
    ]">
</ApiTable>

## Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', 'Spin value', 'boolean'],
    ]">
</ApiTable>

<script lang="ts">
export default {
    methods: {
          showSpin()
          {
                this.$Spin.show()
                setTimeout(() => {
                    this.$Spin.hide()
                }, 3000)
          }
    }
}
</script>
