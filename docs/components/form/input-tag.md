---
title: Shadcn InputTag
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnInputTag component.

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnText>Value: {{ tags }}</ShadcnText>
    <ShadcnInputTag v-model="tags" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnInputTag v-model="tags" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref([])
</script>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnInputTag v-model="tags" disabled />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnInputTag v-model="tags" disabled />
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)">
    <ShadcnInputTag v-model="tags" size="small" />
    <ShadcnInputTag v-model="tags" size="default" />
    <ShadcnInputTag v-model="tags" size="large" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnInputTag v-model="tags" size="small" />
    <ShadcnInputTag v-model="tags" size="default" />
    <ShadcnInputTag v-model="tags" size="large" />
</template>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型 (type)">
    <ShadcnInputTag v-model="value" type="primary"/>
    <ShadcnInputTag v-model="value" type="error"/>
    <ShadcnInputTag v-model="value" type="warning"/>
    <ShadcnInputTag v-model="value" type="success"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnInputTag v-model="value" type="primary"/>
    <ShadcnInputTag v-model="value" type="error"/>
    <ShadcnInputTag v-model="value" type="warning"/>
    <ShadcnInputTag v-model="value" type="success"/>
</template>
```

:::

## Max

::: raw

<CodeRunner title="Max">
    <ShadcnInputTag v-model="tags" max="3" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnInputTag v-model="tags" max="3" />
</template>
```

:::

## Form

::: raw

<CodeRunner title="Form">
    <ShadcnForm ref="formRef" v-model="formState">
      <ShadcnFormItem name="tags"
                      label="Tags"
                      :rules="[ { required: true, message: 'Please input tags!' } ]">
        <ShadcnInputTag v-model="formState.tags" name="tags"/>
      </ShadcnFormItem>
      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnForm ref="formRef" v-model="formState">
      <ShadcnFormItem name="tags"
                      label="Tags"
                      :rules="[ { required: true, message: 'Please input tags!' } ]">
        <ShadcnInputTag v-model="formState.tags" name="tags"/>
      </ShadcnFormItem>
      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
</template>
```

:::

## InputTag Props

<ApiTable title="Props"
        :headers="['属性', '描述', '类型', '默认值', '支持列表']"
        :columns="[
            ['modelValue', 'You can use v-model to bind data in both directions', 'any\[\]', '-', '-'],
            ['placeholder', 'Placeholder of the input', 'string', '-', '-'],
            ['name', 'The name of the input, support on form', 'string', '-', '-'],
            ['disabled', 'Whether the input is disabled', 'boolean', 'false', '-'],
            ['size', 'The size of the input', 'string', 'default', 'small | default | large'],
            ['type', 'The type of the input', 'string', 'primary', 'primary | error | warning | success'],
            ['max', 'The maximum number of tags', 'number', 'Infinity', '-'],
        ]">
</ApiTable>

## InputTag Events

<ApiTable title="Events"
        :headers="['事件', '描述', '回调参数']"
        :columns="[
            ['on-add', 'Triggered when the tag is added', 'string'],
            ['on-remove', 'Triggered when the tag is removed', 'string'],
            ['on-change', 'Triggered when the input value is changed', 'string[]'],
        ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref([])

const formState = ref({
    tags: []
})
</script>
