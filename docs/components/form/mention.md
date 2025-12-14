---
title: 提及 (Mention)
---

# 介绍

<br />

本文介绍了 `ShadcnMention` 组件的功能和用法。

## 用法

::: raw

<CodeRunner title="用法" codeKey="mention-items">
    <ShadcnMention :items="items" :dark="darkMode" />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnMention :items="items" />
</template>
```

:::

## 提示词 (placeholder)

::: raw

<CodeRunner title="提示词" codeKey="mention-placeholder">
    <ShadcnMention placeholder="键入 @ 以提及" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention placeholder="键入 @ 以提及" />
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸" codeKey="mention-size">
  <ShadcnMention size="small" :items="items" :dark="darkMode" />
  <ShadcnMention size="default" :items="items" :dark="darkMode" />
  <ShadcnMention size="large" :items="items" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention size="small" :items="items" />
  <ShadcnMention size="default" :items="items" />
  <ShadcnMention size="large" :items="items" />
</template>
```

:::

## 类型 (type)

::: raw

<CodeRunner title="类型" codeKey="mention-type">
  <ShadcnMention type="primary" :items="items" :dark="darkMode" />
  <ShadcnMention type="success" :items="items" :dark="darkMode" />
  <ShadcnMention type="warning" :items="items" :dark="darkMode" />
  <ShadcnMention type="error" :items="items" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention type="primary" :items="items" />
  <ShadcnMention type="success" :items="items" />
  <ShadcnMention type="warning" :items="items" />    
  <ShadcnMention type="error" :items="items" />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用" codeKey="mention-disabled">
  <ShadcnMention disabled :items="items" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention disabled :items="items" />
</template>
```

:::

## 触发字符 (trigger)

::: raw

<CodeRunner title="触发字符" codeKey="mention-trigger">
  <ShadcnMention trigger="#" :items="items" placeholder="键入 # 以提及" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention trigger="#" :items="items" />
</template>
```

:::

## 自定义插槽 (item)

::: raw

<CodeRunner title="自定义插槽" codeKey="mention-item">
    <ShadcnMention v-model="value" :items="items" :dark="darkMode">
      <template #item="{ item, selected }">
        <div class="flex items-center gap-2">
          <div class="flex space-x-2 items-center">
            <div class="font-medium">{{ item.id }}</div>
            <div class="text-sm text-gray-500">{{ item.name }}</div>
          </div>
          <span v-if="selected" class="ml-auto">
            <ShadcnIcon icon="Check" :dark="darkMode" />
          </span>
        </div>
      </template>
    </ShadcnMention>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention v-model="value" :items="items">
    <template #item="{ item, selected }">
      <div class="flex items-center gap-2">
        <div class="flex space-x-2 items-center">
          <div class="font-medium">{{ item.id }}</div>
          <div class="text-sm text-gray-500">{{ item.name }}</div>
        </div>
        <span v-if="selected" class="ml-auto">
            <ShadcnIcon icon="Check"/>
        </span>
      </div>
    </template>
  </ShadcnMention>
</template>
```

:::

## 最大项目数 (max)

::: raw

<CodeRunner title="最大项目数" codeKey="mention-max">
  <ShadcnMention :items="items" max="2" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnMention :items="items" max="2" />
</template>
```

:::

## 表单 (form)

::: raw

<CodeRunner title="表单" codeKey="mention-form">
      <ShadcnForm v-model="formState" :dark="darkMode">
      <ShadcnFormItem name="mentions" label="提及对象" :rules="[{ required: true, message: '请选择提及对象' }]">
        <ShadcnMention v-model="formState.mentions" name="mentions" :items="items" :dark="darkMode" />
      </ShadcnFormItem>
    </ShadcnForm>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnForm v-model="formState">
      <ShadcnFormItem name="mentions" label="提及对象" :rules="[{ required: true, message: '请选择提及对象' }]">
        <ShadcnMention v-model="formState.mentions" name="mentions" :items="items" />
      </ShadcnFormItem>
    </ShadcnForm>
</template>
```

:::

## 提及 (Mention) 属性

<ApiTable title="提及 (Mention) 属性"
    :headers="['属性', '描述', '类型', '默认值', '列表']"
    :columns="[
        ['modelValue', '绑定值，这里返回的是数据的 id', 'any\[\]', '-', '-'],
        ['items', '提及的项目列表', 'MentionOption\[\]', '-', '-'],
        ['placeholder', '提示词', 'string', '-', '-'],
        ['size', '尺寸', 'enum', 'default', 'small ｜ default ｜ large'],
        ['type', '类型', 'enum', 'default', 'primary ｜ success ｜ warning ｜ error'],
        ['disabled', '是否禁用', 'boolean', 'false', '-'],
        ['trigger', '触发字符', 'string', '@', '-'],
        ['max', '最大项目数', 'number', 'Infinity', '-'],
        ['loadData', '异步加载数据', 'function', '-', '-'],
    ]">
</ApiTable>

## 提及 (Mention) 事件

<ApiTable title="提及 (Mention) 事件"
    :headers="['事件', '描述', '参数']"
    :columns="[
        ['update:modelValue', '更新值时触发', 'any\[\]'],
        ['on-select', '选择项目时触发', 'MentionOption'],
        ['on-change', '更改值时触发', 'any\[\]'],
        ['on-search', '搜索时触发', 'string'],
        ['on-load-data', '加载数据时触发', 'function']
    ]">
</ApiTable>

## 提及 (Mention) 插槽

<ApiTable title="提及 (Mention) 插槽"
    :headers="['插槽', '描述', '参数']"
    :columns="[
        ['item', '项目插槽', 'item: any, selected: boolean'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const formState = ref({
  mentions: []
})

const items =  [
    {id: 1, name: '测试数据 1'},
    {id: 2, name: '测试数据 2'}
]
</script>