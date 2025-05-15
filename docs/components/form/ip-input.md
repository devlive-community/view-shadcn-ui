---
title: IP输入框 (IP Input)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnIPInput` 组件的特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnIPInput v-model="value" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIPInput v-model="value" />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用">
    <ShadcnIPInput v-model="value" disabled />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIPInput v-model="value" disabled />
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸">
    <ShadcnIPInput v-model="value" size="small" />
    <ShadcnIPInput v-model="value" size="default" />
    <ShadcnIPInput v-model="value" size="large" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIPInput v-model="value" size="small" />
    <ShadcnIPInput v-model="value" size="default" />
    <ShadcnIPInput v-model="value" size="large" />
</template>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型">
    <ShadcnIPInput v-model="value" type="primary"/>
    <ShadcnIPInput v-model="value" type="error"/>
    <ShadcnIPInput v-model="value" type="success"/>
    <ShadcnIPInput v-model="value" type="warning"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIPInput v-model="value" type="primary"/>
    <ShadcnIPInput v-model="value" type="error"/>
    <ShadcnIPInput v-model="value" type="success"/>
    <ShadcnIPInput v-model="value" type="warning"/>
</template>
```

:::

## 分隔符 (separator)

::: raw

<CodeRunner title="分隔符">
    <ShadcnIPInput v-model="value" separator="."/>
    <ShadcnIPInput v-model="value" separator="-"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnIPInput v-model="value" separator="."/>
    <ShadcnIPInput v-model="value" separator="-"/>
</template>
```

:::

## 表单 (form)

::: raw

<CodeRunner title="表单">
    <ShadcnForm v-model="formState">
      <ShadcnFormItem name="ip" label="IP 地址" :rules="[{ required: true, message: '请输入IP地址' }]">
        <ShadcnIPInput v-model="formState.ip" name="ip"/>
      </ShadcnFormItem>
    </ShadcnForm>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnForm v-model="formState">
      <ShadcnFormItem name="ip" label="IP 地址" :rules="[{ required: true, message: '请输入IP地址' }]">
        <ShadcnIPInput v-model="formState.ip" name="ip"/>
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
import { ref } from 'vue';

const value = ref('192.168.1.1')
const formState = ref({ ip: null })
</script>
