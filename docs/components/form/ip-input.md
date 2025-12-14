---
title: IP输入框 (IP Input)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnIPInput` 组件的特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnIPInput v-model="value"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIPInput v-model="value"  :dark="darkMode" />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用">
    <ShadcnIPInput v-model="value" disabled  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIPInput v-model="value" disabled  :dark="darkMode" />
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸">
    <ShadcnIPInput v-model="value" size="small"  :dark="darkMode" />
    <ShadcnIPInput v-model="value" size="default"  :dark="darkMode" />
    <ShadcnIPInput v-model="value" size="large"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIPInput v-model="value" size="small"  :dark="darkMode" />
    <ShadcnIPInput v-model="value" size="default"  :dark="darkMode" />
    <ShadcnIPInput v-model="value" size="large"  :dark="darkMode" />
</template>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型">
    <ShadcnIPInput v-model="value" type="primary" :dark="darkMode" />
    <ShadcnIPInput v-model="value" type="error" :dark="darkMode" />
    <ShadcnIPInput v-model="value" type="success" :dark="darkMode" />
    <ShadcnIPInput v-model="value" type="warning" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIPInput v-model="value" type="primary" :dark="darkMode" />
    <ShadcnIPInput v-model="value" type="error" :dark="darkMode" />
    <ShadcnIPInput v-model="value" type="success" :dark="darkMode" />
    <ShadcnIPInput v-model="value" type="warning" :dark="darkMode" />
</template>
```

:::

## 分隔符 (separator)

::: raw

<CodeRunner title="分隔符">
    <ShadcnIPInput v-model="value" separator="." :dark="darkMode" />
    <ShadcnIPInput v-model="value" separator="-" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIPInput v-model="value" separator="." :dark="darkMode" />
    <ShadcnIPInput v-model="value" separator="-" :dark="darkMode" />
</template>
```

:::

## 表单 (form)

::: raw

<CodeRunner title="表单">
    <ShadcnForm v-model="formState" :dark="darkMode">
      <ShadcnFormItem name="ip" label="IP 地址" :rules="[{ required: true, message: '请输入IP地址' }]" :dark="darkMode">
        <ShadcnIPInput v-model="formState.ip" name="ip" :dark="darkMode" />
      </ShadcnFormItem>
    </ShadcnForm>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnForm v-model="formState" :dark="darkMode">
      <ShadcnFormItem name="ip" label="IP 地址" :rules="[{ required: true, message: '请输入IP地址' }]" :dark="darkMode">
        <ShadcnIPInput v-model="formState.ip" name="ip" :dark="darkMode" />
      </ShadcnFormItem>
    </ShadcnForm>
</template>
```

:::

## IP输入框 (IP Input) 属性

<ApiTable title="IP输入框 (IP Input) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '双向绑定的值', 'string', '-', '-'],
        ['disabled', '是否禁用', 'boolean', 'false', '-'],
        ['size', '尺寸', 'string', 'default', 'small, default, large'],
        ['type', '类型', 'string', 'primary', 'primary, error, success, warning'],
        ['separator', '分隔符', 'string', 'undefined', '-'],
        ['name', '输入框名称，用于表单', 'string', '-', '-']
    ]">
</ApiTable>

## IP输入框 (IP Input) 事件

<ApiTable title="IP输入框 (IP Input) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '数据被修改触发', 'value: string'],
        ['update:modelValue', '数据被修改触发', 'value: string']
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref , computed } from 'vue';

const value = ref('192.168.1.1')
const formState = ref({ ip: null })
</script>
