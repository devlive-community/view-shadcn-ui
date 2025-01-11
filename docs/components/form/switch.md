---
title: 开关 (Switch)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnSwitch` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
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

## 类型 (type)

<CodeRunner title="类型 (type)">
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

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
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

## 禁用 (disabled)

<CodeRunner title="禁用 (disabled)">
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

## 自定义 (slot)

<CodeRunner title="自定义 (slot)">
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

## 自定义值 (true-value, false-value)

::: raw

<CodeRunner title="自定义值 (true-value, false-value)">
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

## 开关 (Switch) 属性

<ApiTable title="开关 (Switch) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'boolean', 'false', '-'],
        ['type', '组件的类型', 'string', '-', 'success | warning | error | primary'],
        ['size', '组件的尺寸', 'string', '-',  'small | default | large'],
        ['disabled', '是否为禁用', 'boolean', 'false',  '-'],
        ['trueValue', '选中组件时的值', 'any', '-', '-'],
        ['falseValue', '未选中组件时的值', 'any', '-', '-'],
    ]">
</ApiTable>

## 开关 (Switch) 事件

<ApiTable title="开关 (Switch) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', '当组件的值修改时触发', 'boolean'],
        ['on-change', '当组件的值修改时触发', 'boolean'],
    ]">
</ApiTable>

## 开关 (Switch) 插槽

<ApiTable title="开关 (Switch) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['open', '组件开启时的插槽'],
        ['close', '组件关闭时的插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false)
const checked2 = ref(null)
</script>