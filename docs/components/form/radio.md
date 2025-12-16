---
title: 单选框 (Radio)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnRadio` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnRadio v-model="checked" value="ON" :dark="darkMode">ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF" :dark="darkMode">OFF</ShadcnRadio>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRadio v-model="checked" value="ON" :dark="darkMode">ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF" :dark="darkMode">OFF</ShadcnRadio>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)


const checked = ref('ON')
</script>
```

:::

## 禁用 (disabled)

<CodeRunner title="禁用 (disabled)">
    <ShadcnRadio v-model="checked" value="ON" disabled :dark="darkMode">ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF" :dark="darkMode">OFF</ShadcnRadio>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRadio v-model="checked" value="ON" disabled :dark="darkMode">ON</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="OFF" :dark="darkMode">OFF</ShadcnRadio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('ON')
</script>
```

:::

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
    <ShadcnRadio v-model="checked" value="Default" size="default" :dark="darkMode">Default</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Small" size="small" :dark="darkMode">Small</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Large" size="large" :dark="darkMode">Large</ShadcnRadio>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRadio v-model="checked" value="Default" size="default" :dark="darkMode">Default</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Small" size="small" :dark="darkMode">Small</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Large" size="large" :dark="darkMode">Large</ShadcnRadio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Default')
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <ShadcnRadio v-model="checked" value="Primary" type="primary" :dark="darkMode">Primary</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Success" type="success" :dark="darkMode">Success</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Warning" type="warning" :dark="darkMode">Warning</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Error" type="error" :dark="darkMode">Error</ShadcnRadio>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRadio v-model="checked" value="Primary" type="primary" :dark="darkMode">Primary</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Success" type="success" :dark="darkMode">Success</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Warning" type="warning" :dark="darkMode">Warning</ShadcnRadio>
    <ShadcnRadio v-model="checked" value="Error" type="error" :dark="darkMode">Error</ShadcnRadio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Primary')
</script>
```

:::

## 组 (group)

<CodeRunner title="组 (group)">
    Checkbox Group Value: {{ checkedGroup }}
    <ShadcnRadioGroup v-model="checkedGroup" :dark="darkMode">
        <ShadcnRadio value="ON" :dark="darkMode">ON</ShadcnRadio>
        <ShadcnRadio value="OFF" :dark="darkMode">OFF</ShadcnRadio>
        <ShadcnRadio value="Disabled" disabled :dark="darkMode">Disabled</ShadcnRadio>
    </ShadcnRadioGroup>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRadioGroup v-model="checkedGroup" :dark="darkMode">
        <ShadcnRadio value="ON" :dark="darkMode">ON</ShadcnRadio>
        <ShadcnRadio value="OFF" :dark="darkMode">OFF</ShadcnRadio>
        <ShadcnRadio value="Disabled" disabled :dark="darkMode">Disabled</ShadcnRadio>
    </ShadcnRadioGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkedGroup = ref('ON')
</script>
```

:::

## 液态玻璃效果 (glass)

::: raw

<CodeRunner title="液态玻璃效果">
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
        <ShadcnRadioGroup v-model="glassValue" glass :dark="darkMode">
            <ShadcnRadio value="1">选项 1</ShadcnRadio>
            <ShadcnRadio value="2" type="success">选项 2</ShadcnRadio>
            <ShadcnRadio value="3" type="warning">选项 3</ShadcnRadio>
            <ShadcnRadio value="4" type="error">选项 4</ShadcnRadio>
        </ShadcnRadioGroup>
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
        <ShadcnRadioGroup v-model="radioValue" glass :dark="isDark">
            <ShadcnRadio value="1">选项 1</ShadcnRadio>
            <ShadcnRadio value="2" type="success">选项 2</ShadcnRadio>
            <ShadcnRadio value="3" type="warning">选项 3</ShadcnRadio>
            <ShadcnRadio value="4" type="error">选项 4</ShadcnRadio>
        </ShadcnRadioGroup>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)
const radioValue = ref('1')
</script>
```

:::

## 单选框 (Radio) 属性

<ApiTable title="单选框 (Radio) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'any', '-', '-'],
        ['value', '组件项的值', 'any', '-', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['size', '组件的尺寸', 'enum', 'default', 'small | default | large'],
        ['type', '组件的类型', 'enum', 'primary', 'primary | success | warning | error'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-']
    ]">
</ApiTable>

## 单选框组 (Radio Group) 属性

<ApiTable title="单选框组 (Radio Group) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['modelValue', '当前组件的值', 'any', '-'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false']
    ]">
</ApiTable>

## 单选框 (Radio) 事件

<ApiTable title="单选框 (Radio) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '当组件的值修改时触发', 'boolean'],
    ]">
</ApiTable>

## 单选框组 (Radio Group) 事件

<ApiTable title="单选框组 (Radio Group) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '当组件的值修改时触发', 'boolean'],
    ]">
</ApiTable>

## 单选框 (Radio) 插槽

<ApiTable title="单选框 (Radio) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['label', '组件的文本'],
        ['default', '默认插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

import { useData } from 'vitepress'
import { computed } from 'vue'
const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const checked = ref('ON')
const checkedGroup = ref('ON')
const glassValue = ref('1')
</script>