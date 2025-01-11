---
title: 复选框 (Checkbox)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnCheckbox` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
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

## 禁用 (disabled)

<CodeRunner title="禁用 (disabled)">
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

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
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

## 类型 (type)

<CodeRunner title="类型 (type)">
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

## 组 (group)

<CodeRunner title="组 (group)">
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

## 复选框 (Checkbox) 属性

<ApiTable title="复选框 (Checkbox) 属性"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'any', '-', '-', '-'],
        ['value', '组件项的值', 'any', '-', '-', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-', '-'],
        ['size', '组件的尺寸', 'enum', 'default', '-', 'small | default | large'],
        ['type', '组件的类型', 'enum', 'primary', '-', 'primary | success | warning | error'],
    ]">
</ApiTable>

## 复选框组 (Checkbox Group) 属性

<ApiTable title="复选框组 (Checkbox Group) 属性"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'any\[\]', '-', '-', '-'],
    ]">
</ApiTable>

## 复选框 (Checkbox) 事件

<ApiTable title="复选框 (Checkbox) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '当前选中的值更改时触发', 'boolean'],
    ]">
</ApiTable>

## 复选框组 (Checkbox Group) 事件

<ApiTable title="复选框组 (Checkbox Group) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '当前选中的值更改时触发', '\[\]'],
    ]">
</ApiTable>

## 复选框 (Checkbox) 插槽

<ApiTable title="复选框 (Checkbox) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['label', '组件的文本'],
        ['default', '默认插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Vue')
const checkedGroup = ref(['Vue'])
</script>