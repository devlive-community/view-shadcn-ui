---
title: 键值对 (Map)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnMap` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnMap v-model="value"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnMap v-model="value"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)">
    <ShadcnMap v-model="value" size="small"/>
    <ShadcnMap v-model="value" size="default"/>
    <ShadcnMap v-model="value" size="large"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnMap v-model="value" size="small"/>
    <ShadcnMap v-model="value" size="default"/>
    <ShadcnMap v-model="value" size="large"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型 (type)">
    <ShadcnMap v-model="value" type="primary"/>
    <ShadcnMap v-model="value" type="success"/>
    <ShadcnMap v-model="value" type="warning"/>
    <ShadcnMap v-model="value" type="error"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnMap v-model="value" type="primary"/>
    <ShadcnMap v-model="value" type="success"/>
    <ShadcnMap v-model="value" type="warning"/>
    <ShadcnMap v-model="value" type="error"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnMap v-model="value" disabled/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnMap v-model="value" disabled/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## 最大值 (max)

::: raw

<CodeRunner title="最大值 (max)">
    <ShadcnMap v-model="value" max="2"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnMap v-model="value" max="2"/>
</template>

<script setup lang="ts">
import {ref} from "vue"

const value = ref([])
</script>
```

:::

## 表单 (form)

::: raw

<CodeRunner title="表单 (form)">
    <ShadcnForm ref="formRef" v-model="formState" @on-submit="console.log($event)">
      <ShadcnFormItem name="map"
                      label="Map"
                      :rules="[ { required: true, message: 'Please add map!' } ]">
        <ShadcnMap v-model="formState.value" :max="3" name="map"/>
      </ShadcnFormItem>
      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnForm ref="formRef" v-model="formState" @on-submit="console.log($event)">
      <ShadcnFormItem name="map"
                      label="Map"
                      :rules="[ { required: true, message: 'Please add map!' } ]">
        <ShadcnMap v-model="formState.value" :max="3" name="map"/>
      </ShadcnFormItem>
      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
</template>

<script setup lang="ts">
import {ref} from "vue"

const formState = ref({
  value: []
})
</script>
```

:::

## 键值对 (Map) 属性

<ApiTable title="键值对 (Map) 属性"
    :headers="['属性', '描述', '类型', '默认值','支持列表']"
    :columns="[
        ['modelValue', '当前选中的值', 'array', '\[\]', '-'],
        ['size', '组件的尺寸', 'enum', 'default', 'small | default | large'],
        ['type', '组件的类型', 'enum', 'primary', 'primary | success | warning | error'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['max', '最大显示的数量', 'number', 'Infinity', '-'],
        ['name', '表单的名称', 'string', '-', '-'],
    ]">
</ApiTable>

## 键值对 (Map) 事件

<ApiTable title="键值对 (Map) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-add', '当添加新的键值对时触发', 'object'],
        ['on-remove', '当删除键值对时触发', 'object'],
        ['on-change', '当键值对发生变化时触发', 'object\[\]'],
    ]">
</ApiTable>

<script setup lang="ts">
import {ref} from "vue"; 

const value = ref([{key: 'key', value: 'value'}])
const formState = ref({
  value: []
})
</script>