---
title: 输入标签 (Input Tag)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnInputTag` 组件的一些特性和用法。

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

## 最大值 (max)

::: raw

<CodeRunner title="最大值 (max)">
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

## 表单 (form)

::: raw

<CodeRunner title="表单 (form)">
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

## 输入标签 (Input Tag) 属性

<ApiTable title="输入标签 (Input Tag) 属性"
        :headers="['属性', '描述', '类型', '默认值', '支持列表']"
        :columns="[
            ['modelValue', '当前组件的值', 'any\[\]', '-', '-'],
            ['placeholder', '占位符内容', 'string', '-', '-'],
            ['name', '表单的名称', 'string', '-', '-'],
            ['disabled', '是否为禁用', 'boolean', 'false', '-'],
            ['size', '组件的尺寸', 'string', 'default', 'small | default | large'],
            ['type', '组件的类型', 'string', 'primary', 'primary | error | warning | success'],
            ['max', '最大的数量', 'number', 'Infinity', '-'],
        ]">
</ApiTable>

## 输入标签 (Input Tag) 事件

<ApiTable title="输入标签 (Input Tag) 事件"
        :headers="['事件', '描述', '回调参数']"
        :columns="[
            ['on-add', '当添加新的标签时触发', 'string'],
            ['on-remove', '当删除标签时触发', 'string'],
            ['on-change', '当值被更新时触发', 'string\[\]'],
        ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref([])

const formState = ref({
    tags: []
})
</script>