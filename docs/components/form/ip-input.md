---
title: IP输入框 (IP Input)
---

# 介绍

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

## IP输入框 (IP Input) 属性

<ApiTable title="IP输入框 (IP Input) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '双向绑定的值', 'string', '-', '-']
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
</script>
