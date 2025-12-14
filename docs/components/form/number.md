---
title: 数字输入框 (Number)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnNumber` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnNumber v-model="basicValue"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnNumber v-model="value"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)


const value = ref(0)
</script>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)">
    <div class="space-y-2">
        <ShadcnNumber v-model="basicValue" size="small"  :dark="darkMode" />
        <ShadcnNumber v-model="basicValue" size="default"  :dark="darkMode" />
        <ShadcnNumber v-model="basicValue" size="large"  :dark="darkMode" />
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnNumber v-model="value" size="small"  :dark="darkMode" />
    <ShadcnNumber v-model="value" size="default"  :dark="darkMode" />
    <ShadcnNumber v-model="value" size="large"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型 (type)">
    <div class="space-y-2">
        <ShadcnNumber v-model="value" size="small" type="primary" :dark="darkMode" />
        <ShadcnNumber v-model="value" size="default" type="warning" :dark="darkMode" />
        <ShadcnNumber v-model="value" size="large" type="success" :dark="darkMode" />
        <ShadcnNumber v-model="value" size="large" type="error" :dark="darkMode" />
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnNumber v-model="value" size="small" type="primary" :dark="darkMode" />
    <ShadcnNumber v-model="value" size="default" type="warning" :dark="darkMode" />
    <ShadcnNumber v-model="value" size="large" type="success" :dark="darkMode" />
    <ShadcnNumber v-model="value" size="large" type="error" :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <div class="space-y-2">
        <ShadcnNumber v-model="basicValue" :dark="darkMode" />
        <ShadcnNumber v-model="basicValue" disabled  :dark="darkMode" />
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnNumber v-model="value" :dark="darkMode" />
    <ShadcnNumber v-model="value" disabled  :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## 占位符 (placeholder)

::: raw

<CodeRunner title="占位符 (placeholder)">
    <ShadcnNumber v-model="placeholderValue" placeholder="Enter Number" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnNumber v-model="value" placeholder="Enter Number" :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## 最小值 (min) & 最大值 (max)

::: raw

<CodeRunner title="最小值 (min) & 最大值 (max)">
    <ShadcnNumber v-model="minAndMaxValue" min="0" max="10" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnNumber v-model="value" min="0" max="10" :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## 清空 (clearable)

::: raw

<CodeRunner title="清空 (clearable)">
    <div class="space-y-2">
    <ShadcnNumber v-model="clearableValue" clearable placeholder="Enter Number" :dark="darkMode" />
    <ShadcnNumber v-model="clearableValue" clearable placeholder="Enter Number" :dark="darkMode">
      <template #clear>
        <div class="h-4 w-4 p-2 flex items-center justify-center bg-gray-200 rounded-full text-sm text-gray-400 hover:bg-gray-300 hover:text-muted-foreground">X</div>
      </template>
    </ShadcnNumber>
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnNumber v-model="value" clearable placeholder="Enter Number" :dark="darkMode" />
    <ShadcnNumber v-model="value" clearable placeholder="Enter Number" :dark="darkMode">
      <template #clear>
        <div class="h-4 w-4 p-2 flex items-center justify-center bg-gray-200 rounded-full text-sm text-gray-400 hover:bg-gray-300 hover:text-muted-foreground">X</div>
      </template>
    </ShadcnNumber>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## 显示控制器 (control)

::: raw

<CodeRunner title="显示控制器 (control)">
    <div class="space-y-2">
        <ShadcnNumber v-model="controlValue" placeholder="Enter Number" :dark="darkMode" />
        <ShadcnNumber v-model="controlValue" placeholder="Enter Number" :dark="darkMode">
          <template #add>
            <div class="text-gray-300 w-4 h-4 m-1 flex items-center justify-center">A</div>
          </template>
          <template #minus>
            <div class="text-gray-300 w-4 h-4 m-1 flex items-center justify-center">M</div>
          </template>
        </ShadcnNumber>
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnNumber v-model="value" placeholder="Enter Number" :dark="darkMode" />
    <ShadcnNumber v-model="value" placeholder="Enter Number" :dark="darkMode">
      <template #add>
        <div class="text-gray-300 w-4 h-4 m-1 flex items-center justify-center">A</div>
      </template>
      <template #minus>
        <div class="text-gray-300 w-4 h-4 m-1 flex items-center justify-center">M</div>
      </template>
    </ShadcnNumber>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>
```

:::

## 表单 (form)

::: raw

<CodeRunner title="表单 (form)">
    <ShadcnForm v-model="formState" @on-submit="onSubmit" :dark="darkMode">
        <ShadcnFormItem name="value" label="输入数据" :rules="[{ required: true, message: '请输入数据' }]" :dark="darkMode">
            <ShadcnNumber v-model="formState.value" name="value"  :dark="darkMode" />
        </ShadcnFormItem>
        <ShadcnButton submit :dark="darkMode">提交</ShadcnButton>
    </ShadcnForm>
</CodeRunner>

:::

## 数字输入框 (Number) 属性

<ApiTable title="数字输入框 (Number) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'number | string', '-', '-'],
        ['size', '组件的尺寸', 'string', 'default', 'small | default | large'],
        ['type', '组件的类型', 'string', 'default', 'primary | warning | success | error'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['placeholder', '占位符内容', 'string', '-', '-'],
        ['min', '组件的最小值', 'number | string', '-', '-'],
        ['max', '组件的最大值', 'number | string', '-', '-'],
        ['clearable', '是否显示清空', 'boolean', 'false', '-'],
        ['formatter', '格式化函数', 'function', '-', '-'],
        ['parser', '解析函数', 'function', '-', '-'],
    ]">
</ApiTable>

## 数字输入框 (Number) 插槽

<ApiTable title="数字输入框 (Number) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['clear', '清空按钮'],
        ['add', '添加按钮'],
        ['minus', '减少按钮'],
    ]">
</ApiTable>

## 数字输入框 (Number) 事件

<ApiTable title="数字输入框 (Number) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '当数字值更改时触发', 'number'],
        ['on-blur', '当数字失去焦点时触发', '-'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { useData } from 'vitepress' 
import { computed } from 'vue' 
const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const basicValue = ref(0)
const placeholderValue = ref(undefined)
const minAndMaxValue = ref(0)
const clearableValue = ref(0)
const controlValue = ref(null)

const { proxy } = getCurrentInstance()! 
const formState = ref({ value: null })
const onSubmit = () => {
    proxy?.$Message.info({content: `提交的数据 ${JSON.stringify(formState.value)}`})
}
</script>