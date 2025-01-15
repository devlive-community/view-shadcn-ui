---
title: 输入框 (Input)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnInput` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnInput placeholder="Input" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('')
</script>
```

:::

## 清空 (clearable)

<CodeRunner title="清空 (clearable)">
    <ShadcnInput placeholder="Input" v-model="input" clearable />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" clearable />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
    <div class="space-y-2">
        <ShadcnInput placeholder="Input" v-model="input" size="small" />
        <ShadcnInput placeholder="Input" v-model="input" size="default"/>
        <ShadcnInput placeholder="Input" v-model="input" size="large" />
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" size="small" />
    <ShadcnInput v-model="input" placeholder="Input" size="default"/>
    <ShadcnInput v-model="input" placeholder="Input" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## 字数统计 (word-count)

<CodeRunner title="字数统计 (word-count)">
    <ShadcnInput placeholder="Input" v-model="input" word-count />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" word-count />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## 最大统计值 (max-count)

<CodeRunner title="最大统计值 (max-count)">
    <ShadcnInput placeholder="Input" v-model="input" word-count :max-count="100" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" word-count :max-count="100" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## 前缀 & 后缀 (prefix & suffix)

<CodeRunner title="前缀 & 后缀 (prefix & suffix)">
    <ShadcnInput placeholder="Input" v-model="input">
        <template #prefix>
            <span class="text-xs text-gray-300">P</span>
        </template>
        <template #suffix>
            <span class="text-xs text-gray-300">S</span>
        </template>
    </ShadcnInput>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input">
        <template #prefix>
            <span class="text-xs text-gray-300">P</span>
        </template>
        <template #suffix>
            <span class="text-xs text-gray-300">S</span>
        </template>
    </ShadcnInput>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnInput placeholder="Input" v-model="input" disabled />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## 密码 (password)

<CodeRunner title="密码 (password)">
    <ShadcnInput placeholder="Input" v-model="input" type="password" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" type="password" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## 多行文本 (textarea)

::: raw

<CodeRunner title="多行文本 (textarea)">
    <ShadcnInput placeholder="Input" v-model="input" type="textarea" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnInput v-model="input" placeholder="Input" type="textarea" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('Hello View Shadcn UI')
</script>
```

:::

## 表单 (form)

::: raw

<CodeRunner title="表单 (form)">
    <ShadcnForm v-model="formState" @on-submit="onSubmit">
        <ShadcnFormItem name="value" label="输入数据" :rules="[{ required: true, message: '请输入数据' }]">
            <ShadcnInput v-model="formState.value" name="value" />
        </ShadcnFormItem>
        <ShadcnButton submit>提交</ShadcnButton>
    </ShadcnForm>
</CodeRunner>

:::

## 输入框 (Input) 属性

<ApiTable title="输入框 (Input) 属性"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'string', '-', '-', '-'],
        ['placeholder', '占位符内容', 'string', '-', '-', '-'],
        ['clearable', '是否显示清空', 'boolean', 'false', '-', '-'],
        ['size', '组件的尺寸', 'string', 'default', '-', 'small | default | large'],
        ['wordCount', '是否显示字数统计', 'boolean', 'false', '-', '-'],
        ['maxCount', '最大字数统计值', 'number', '-', '-', '-'],
        ['disabled', '是否禁用', 'boolean', 'false', '-', '-'],
        ['type', '组件的类型', 'string', 'text', '-', 'text | password | textarea'],
        ['rows', '多行文本的行数', 'number', '3', '-', '-'],
        ['cols', '多行文本的列数', 'number', '20', '-', '-'],
        ['name', '在表单中的名称', 'string', '-', '-', '-'],
    ]">
</ApiTable>

## 输入框 (Input) 事件

<ApiTable title="输入框 (Input) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '当组件的值修改时触发', 'object'],
        ['on-clear', '当清空按钮被点击时触发', '-'],
        ['on-blur', '当输入框失去焦点时触发', '-'],
        ['on-prefix-click', '当组件的前缀被点击时触发', '-'],
        ['on-suffix-click', '当组件的后缀被点击时触发', '-'],
    ]">
</ApiTable>

## 输入框 (Input) 插槽

<ApiTable title="输入框 (Input) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['prefix', '组件的前缀'],
        ['suffix', '组件的后缀'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';

const input = ref('Hello View Shadcn UI')

const { proxy } = getCurrentInstance()! 
const formState = ref({ value: null })
const onSubmit = () => {
    proxy?.$Message.info({content: `提交的数据 ${JSON.stringify(formState.value)}`})
}
</script>