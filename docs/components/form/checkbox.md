---
title: 复选框 (Checkbox)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnCheckbox` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <p>Checkbox Value: {{ checked }}</p>
    <ShadcnCheckbox v-model="checked" value="Vue" :dark="darkMode">Vue</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Nuxt" :dark="darkMode">Nuxt</ShadcnCheckbox>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Vue" :dark="darkMode">Vue</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Nuxt" :dark="darkMode">Nuxt</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)


const checked = ref('Vue')
</script>
```

:::

## 禁用 (disabled)

<CodeRunner title="禁用 (disabled)">
    <ShadcnCheckbox v-model="checked" value="Vue" disabled :dark="darkMode">Vue</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Nuxt" :dark="darkMode">Nuxt</ShadcnCheckbox>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Vue" disabled :dark="darkMode">Vue</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Nuxt" :dark="darkMode">Nuxt</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Vue')
</script>
```

:::

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
    <ShadcnCheckbox v-model="checked" value="Default" size="default" @on-change="onChange" :dark="darkMode">Default</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Small" size="small" @on-change="onChange" :dark="darkMode">Small</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Large" size="large" @on-change="onChange" :dark="darkMode">Large</ShadcnCheckbox>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Default" size="default" @on-change="onChange" :dark="darkMode">Default</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Small" size="small" @on-change="onChange" :dark="darkMode">Small</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Large" size="large" @on-change="onChange" :dark="darkMode">Large</ShadcnCheckbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref('Default')
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <ShadcnCheckbox v-model="checked" value="Primary" type="primary" :dark="darkMode">Primary</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Success" type="success" :dark="darkMode">Success</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Warning" type="warning" :dark="darkMode">Warning</ShadcnCheckbox>
    <ShadcnCheckbox v-model="checked" value="Error" type="error" :dark="darkMode">Error</ShadcnCheckbox>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnCheckbox v-model="checked" value="Primary" type="primary" :dark="darkMode">Primary</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Success" type="success" :dark="darkMode">Success</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Warning" type="warning" :dark="darkMode">Warning</ShadcnCheckbox>
  <ShadcnCheckbox v-model="checked" value="Error" type="error" :dark="darkMode">Error</ShadcnCheckbox>
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
    <ShadcnCheckboxGroup v-model="checkedGroup" :dark="darkMode">
        <ShadcnCheckbox value="Vue" :dark="darkMode">Vue</ShadcnCheckbox>
        <ShadcnCheckbox value="Nuxt" :dark="darkMode">Nuxt</ShadcnCheckbox>
    </ShadcnCheckboxGroup>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnCheckboxGroup v-model="checkedGroup" :dark="darkMode">
    <ShadcnCheckbox value="Vue" :dark="darkMode">Vue</ShadcnCheckbox>
    <ShadcnCheckbox value="Nuxt" :dark="darkMode">Nuxt</ShadcnCheckbox>
  </ShadcnCheckboxGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkedGroup = ref(['Vue'])
</script>
```

:::

## 全选 / 半选 (indeterminate)

::: raw

<CodeRunner title="全选 / 半选 (indeterminate)" codeKey="checkbox-indeterminate">
    <ShadcnCheckbox :modelValue="checkAll"
                    :value="true"
                    :indeterminate="isIndeterminate"
                    @update:modelValue="onCheckAllChange" :dark="darkMode">全选
    </ShadcnCheckbox>
    <ShadcnDivider :dark="darkMode" />
    <ShadcnCheckboxGroup v-model="checkedGroup" :dark="darkMode">
      <ShadcnCheckbox value="Vue" :dark="darkMode">Vue</ShadcnCheckbox>
      <ShadcnCheckbox value="Nuxt" :dark="darkMode">Nuxt</ShadcnCheckbox>
    </ShadcnCheckboxGroup>
</CodeRunner>

:::

## 液态玻璃效果 (glass)

::: raw

<CodeRunner title="液态玻璃效果 (glass)">
  <div class="space-y-6">
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-purple-900 to-pink-900' : 'bg-gradient-to-r from-purple-400 to-pink-400']">
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <ShadcnCheckbox v-model="glassValue1" value="1" glass :dark="darkMode">选项 1</ShadcnCheckbox>
          <ShadcnCheckbox v-model="glassValue2" value="2" glass type="success" :dark="darkMode">选项 2</ShadcnCheckbox>
          <ShadcnCheckbox v-model="glassValue3" value="3" glass type="warning" :dark="darkMode">选项 3</ShadcnCheckbox>
          <ShadcnCheckbox v-model="glassValue4" value="4" glass type="error" :dark="darkMode">选项 4</ShadcnCheckbox>
        </div>
        <div>
          <p :class="['text-sm mb-2', darkMode ? 'text-gray-200' : 'text-gray-700']">复选框组</p>
          <ShadcnCheckboxGroup v-model="glassGroupValue" glass :dark="darkMode">
            <ShadcnCheckbox value="apple">苹果</ShadcnCheckbox>
            <ShadcnCheckbox value="banana">香蕉</ShadcnCheckbox>
            <ShadcnCheckbox value="orange">橙子</ShadcnCheckbox>
            <ShadcnCheckbox value="grape">葡萄</ShadcnCheckbox>
          </ShadcnCheckboxGroup>
        </div>
      </div>
    </div>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="space-y-6">
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-purple-900 to-pink-900' : 'bg-gradient-to-r from-purple-400 to-pink-400']">
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <ShadcnCheckbox v-model="glassValue1" value="1" glass :dark="darkMode">选项 1</ShadcnCheckbox>
          <ShadcnCheckbox v-model="glassValue2" value="2" glass type="success" :dark="darkMode">选项 2</ShadcnCheckbox>
          <ShadcnCheckbox v-model="glassValue3" value="3" glass type="warning" :dark="darkMode">选项 3</ShadcnCheckbox>
          <ShadcnCheckbox v-model="glassValue4" value="4" glass type="error" :dark="darkMode">选项 4</ShadcnCheckbox>
        </div>
        <div>
          <p :class="['text-sm mb-2', darkMode ? 'text-gray-200' : 'text-gray-700']">复选框组</p>
          <ShadcnCheckboxGroup v-model="glassGroupValue" glass :dark="darkMode">
            <ShadcnCheckbox value="apple">苹果</ShadcnCheckbox>
            <ShadcnCheckbox value="banana">香蕉</ShadcnCheckbox>
            <ShadcnCheckbox value="orange">橙子</ShadcnCheckbox>
            <ShadcnCheckbox value="grape">葡萄</ShadcnCheckbox>
          </ShadcnCheckboxGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const glassValue1 = ref(null)
const glassValue2 = ref(null)
const glassValue3 = ref(null)
const glassValue4 = ref(null)
const glassGroupValue = ref([])
</script>
```

:::

## 复选框 (Checkbox) 属性

<ApiTable title="复选框 (Checkbox) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'any', '-', '-'],
        ['value', '组件项的值', 'any', '-', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['size', '组件的尺寸', 'enum', 'default', 'small | default | large'],
        ['type', '组件的类型', 'enum', 'primary', 'primary | success | warning | error'],
        ['indeterminate', '是否为半选/全选', 'boolean', 'false', '-'],
        ['dark', '暗黑模式', 'boolean', 'false', '-'],
        ['glass', '液态玻璃效果', 'boolean', 'false', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="复选框组 (Checkbox Group) 属性"
    :headers="['属性', '描述', '类型', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', '当前组件的值', 'any\[\]', '-', '-', '-'],
        ['dark', '暗黑模式', 'boolean', 'false', '-', '-'],
        ['glass', '液态玻璃效果', 'boolean', 'false', '-', '-'],
    ]">
</ApiTable>

## 复选框 (Checkbox) 事件

<ApiTable title="复选框 (Checkbox) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '当前选中的值更改时触发', 'boolean'],
    ]">
</ApiTable>

<br />

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
import { ref, computed } from 'vue'
const { isDark } = useData()
import { useData } from 'vitepress'
const darkMode = computed(() => isDark.value)
const checked = ref('Vue')
const checkedGroup = ref(['Vue'])

const glassValue1 = ref(null)
const glassValue2 = ref(null)
const glassValue3 = ref(null)
const glassValue4 = ref(null)
const glassGroupValue = ref([])

// 所有选项
const options = ['Vue', 'Nuxt']

// 全选状态
const checkAll = computed(() => {
  return checkedGroup.value.length === options.length
})

// 计算半选状态
const isIndeterminate = computed(() => {
  return checkedGroup.value.length > 0 && checkedGroup.value.length < options.length
})

// 全选/取消全选处理
const onCheckAllChange = (checked: boolean) => {
  checkedGroup.value = checked ? [...options] : []
}
</script>