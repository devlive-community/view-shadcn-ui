---
title: 切换 (Toggle)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnToggle` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggle v-model="defaultValue" value="B" :dark="darkMode">B</ShadcnToggle>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggle v-model="defaultValue" value="B" :dark="darkMode">B</ShadcnToggle>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)


const defaultValue = ref(null)
</script>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnToggle v-model="defaultValue" value="B" :dark="darkMode">B</ShadcnToggle>
    <ShadcnToggle v-model="disabledValue" disabled value="D" :dark="darkMode">D</ShadcnToggle>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnToggle value="B" :dark="darkMode">B</ShadcnToggle>
    <ShadcnToggle disabled value="D" :dark="darkMode">D</ShadcnToggle>
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)">
    <ShadcnSpace :dark="darkMode">
      <ShadcnToggle v-model="defaultValue" size="small" value="S" :dark="darkMode">S</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="default" value="D" :dark="darkMode">D</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="large" value="L" :dark="darkMode">L</ShadcnToggle>
    </ShadcnSpace>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpace :dark="darkMode">
      <ShadcnToggle v-model="defaultValue" size="small" value="S" :dark="darkMode">S</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="default" value="D" :dark="darkMode">D</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="large" value="L" :dark="darkMode">L</ShadcnToggle>
    </ShadcnSpace>
</template>
```

:::

## 组 (group)

::: raw

<CodeRunner title="组 (group)">
  <div class="space-y-2">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggleGroup v-model="defaultValue" size="small" :dark="darkMode">
      <ShadcnToggle value="1" :dark="darkMode">O1</ShadcnToggle>
      <ShadcnToggle value="2" :dark="darkMode">O2</ShadcnToggle>
    </ShadcnToggleGroup>
    <ShadcnToggleGroup v-model="defaultValue" size="default" :dark="darkMode">
      <ShadcnToggle value="1" :dark="darkMode">O1</ShadcnToggle>
      <ShadcnToggle value="2" :dark="darkMode">O2</ShadcnToggle>
    </ShadcnToggleGroup>
    <ShadcnToggleGroup v-model="defaultValue" size="large" :dark="darkMode">
      <ShadcnToggle value="1" :dark="darkMode">O1</ShadcnToggle>
      <ShadcnToggle value="2" :dark="darkMode">O2</ShadcnToggle>
    </ShadcnToggleGroup>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="space-y-2">
    <p>Default Value: {{ selected }}</p>
    <ShadcnToggleGroup v-model="defaultValue" size="small" :dark="darkMode">
      <ShadcnToggle value="1" :dark="darkMode">O1</ShadcnToggle>
      <ShadcnToggle value="2" :dark="darkMode">O2</ShadcnToggle>
    </ShadcnToggleGroup>
    <ShadcnToggleGroup v-model="defaultValue" size="default" :dark="darkMode">
      <ShadcnToggle value="1" :dark="darkMode">O1</ShadcnToggle>
      <ShadcnToggle value="2" :dark="darkMode">O2</ShadcnToggle>
    </ShadcnToggleGroup>
    <ShadcnToggleGroup v-model="defaultValue" size="large" :dark="darkMode">
      <ShadcnToggle value="1" :dark="darkMode">O1</ShadcnToggle>
      <ShadcnToggle value="2" :dark="darkMode">O2</ShadcnToggle>
    </ShadcnToggleGroup>
  </div>
</template>
```

:::

## 多选 (multiple)

::: raw

<CodeRunner title="多选 (multiple)">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggleGroup v-model="defaultValue" multiple :dark="darkMode">
      <ShadcnToggle value="1" :dark="darkMode">O1</ShadcnToggle>
      <ShadcnToggle value="2" :dark="darkMode">O2</ShadcnToggle>
      <ShadcnToggle value="3" :dark="darkMode">O3</ShadcnToggle>
      <ShadcnToggle value="4" :dark="darkMode">O4</ShadcnToggle>
    </ShadcnToggleGroup>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggleGroup v-model="defaultValue" multiple :dark="darkMode">
      <ShadcnToggle value="1" :dark="darkMode">O1</ShadcnToggle>
      <ShadcnToggle value="2" :dark="darkMode">O2</ShadcnToggle>
      <ShadcnToggle value="3" :dark="darkMode">O3</ShadcnToggle>
      <ShadcnToggle value="4" :dark="darkMode">O4</ShadcnToggle>
    </ShadcnToggleGroup>
</template>
```

:::

## 自定义图片 (image)

::: raw

<CodeRunner title="自定义图片 (image)">
    <ShadcnToggleGroup v-model="defaultValue" multiple :dark="darkMode">
      <ShadcnToggle class="w-20 h-20 px-1 py-1" value="1" :dark="darkMode">
        <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg">
      </ShadcnToggle>
      <ShadcnToggle class="w-20 h-20 px-1 py-1" value="2" :dark="darkMode">
        <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg">
      </ShadcnToggle>
    </ShadcnToggleGroup>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnToggleGroup v-model="defaultValue" multiple :dark="darkMode">
      <ShadcnToggle class="w-20 h-20 px-1 py-1" value="1" :dark="darkMode">
        <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg">
      </ShadcnToggle>
      <ShadcnToggle class="w-20 h-20 px-1 py-1" value="2" :dark="darkMode">
        <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg">
      </ShadcnToggle>
    </ShadcnToggleGroup>
</template>
```

:::

## 切换 (Toggle) 属性

<ApiTable title="切换 (Toggle) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前选中的值', 'any', '-', '-'],
        ['value', '组件的值', 'any', '-', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['size', '组件的尺寸', 'string', 'default', 'small | default | large'],
    ]">
</ApiTable>

## 切换组 (Toggle Group) 属性

<ApiTable title="切换组 (Toggle Group) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前选中的值', 'any', '-', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false', '-'],
        ['size', '组件的尺寸', 'string', 'default', 'small | default | large'],
        ['multiple', '是否支持多选', 'boolean', 'false', '-'],
        ['orientation', '组件的方向', 'string', 'horizontal', 'horizontal | vertical'],
    ]">
</ApiTable>

## 切换 (Toggle) 事件

<ApiTable title="切换 (Toggle) 事件"
    :headers="['事件', '描述', '类型']"
    :columns="[
        ['update:modelValue', '当前选中的值更改时触发', 'any'],
        ['on-change', '当前选中的值更改时触发', 'any'],
    ]">
</ApiTable>

## 切换组 (Toggle Group) 事件

<ApiTable title="切换组 (Toggle Group) 事件"
    :headers="['事件', '描述', '类型']"
    :columns="[
        ['update:modelValue', '当前选中的值更改时触发', 'any[]'],
        ['on-change', '当前选中的值更改时触发', 'any[]'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress' 
import { computed } from 'vue' 
const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const defaultValue = ref(null)
const disabledValue = ref(null)
</script>