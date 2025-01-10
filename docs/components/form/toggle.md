---
title: Shadcn Toggle
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnToggle component.

## 用法

::: raw

<CodeRunner title="用法">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggle v-model="defaultValue" value="B">B</ShadcnToggle>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggle v-model="defaultValue" value="B">B</ShadcnToggle>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(null)
</script>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnToggle v-model="defaultValue" value="B">B</ShadcnToggle>
    <ShadcnToggle v-model="disabledValue" disabled value="D">D</ShadcnToggle>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnToggle value="B">B</ShadcnToggle>
    <ShadcnToggle disabled value="D">D</ShadcnToggle>
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)">
    <ShadcnSpace>
      <ShadcnToggle v-model="defaultValue" size="small" value="S">S</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="default" value="D">D</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="large" value="L">L</ShadcnToggle>
    </ShadcnSpace>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSpace>
      <ShadcnToggle v-model="defaultValue" size="small" value="S">S</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="default" value="D">D</ShadcnToggle>
      <ShadcnToggle v-model="defaultValue" size="large" value="L">L</ShadcnToggle>
    </ShadcnSpace>
</template>
```

:::

## 组 (group)

::: raw

<CodeRunner title="组 (group)">
  <div class="space-y-2">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggleGroup v-model="defaultValue" size="small">
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
    </ShadcnToggleGroup>
    <ShadcnToggleGroup v-model="defaultValue" size="default">
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
    </ShadcnToggleGroup>
    <ShadcnToggleGroup v-model="defaultValue" size="large">
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
    </ShadcnToggleGroup>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="space-y-2">
    <p>Default Value: {{ selected }}</p>
    <ShadcnToggleGroup v-model="defaultValue" size="small">
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
    </ShadcnToggleGroup>
    <ShadcnToggleGroup v-model="defaultValue" size="default">
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
    </ShadcnToggleGroup>
    <ShadcnToggleGroup v-model="defaultValue" size="large">
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
    </ShadcnToggleGroup>
  </div>
</template>
```

:::

## 多选 (multiple)

::: raw

<CodeRunner title="多选 (multiple)">
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggleGroup v-model="defaultValue" multiple>
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
      <ShadcnToggle value="3">O3</ShadcnToggle>
      <ShadcnToggle value="4">O4</ShadcnToggle>
    </ShadcnToggleGroup>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <p>Default Value: {{ defaultValue }}</p>
    <ShadcnToggleGroup v-model="defaultValue" multiple>
      <ShadcnToggle value="1">O1</ShadcnToggle>
      <ShadcnToggle value="2">O2</ShadcnToggle>
      <ShadcnToggle value="3">O3</ShadcnToggle>
      <ShadcnToggle value="4">O4</ShadcnToggle>
    </ShadcnToggleGroup>
</template>
```

:::

## Image

::: raw

<CodeRunner title="Image">
    <ShadcnToggleGroup v-model="defaultValue" multiple>
      <ShadcnToggle class="w-20 h-20 px-1 py-1" value="1">
        <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg">
      </ShadcnToggle>
      <ShadcnToggle class="w-20 h-20 px-1 py-1" value="2">
        <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg">
      </ShadcnToggle>
    </ShadcnToggleGroup>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnToggleGroup v-model="defaultValue" multiple>
      <ShadcnToggle class="w-20 h-20 px-1 py-1" value="1">
        <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg">
      </ShadcnToggle>
      <ShadcnToggle class="w-20 h-20 px-1 py-1" value="2">
        <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg">
      </ShadcnToggle>
    </ShadcnToggleGroup>
</template>
```

:::

## Toggle Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'You can use v-model to bind data in both directions', 'any', '-', '-'],
        ['value', 'The value of the toggle', 'any', '-', '-'],
        ['disabled', 'Whether the toggle is disabled', 'boolean', 'false', '-'],
        ['size', 'The size of the toggle', 'string', 'default', 'small | default | large'],
    ]">
</ApiTable>

<br />

<ApiTable title="Group Props"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', 'You can use v-model to bind data in both directions', 'any', '-', '-'],
        ['disabled', 'Whether the toggle is disabled', 'boolean', 'false', '-'],
        ['size', 'The size of the toggle', 'string', 'default', 'small | default | large'],
        ['multiple', 'Whether to allow multiple selection', 'boolean', 'false', '-'],
        ['orientation', 'The orientation of the toggle', 'string', 'horizontal', 'horizontal | vertical'],
    ]">
</ApiTable>

## Toggle Events

<ApiTable title="Events"
    :headers="['事件', '描述', '类型']"
    :columns="[
        ['update:modelValue', 'The value of the toggle', 'any'],
        ['on-change', 'Triggered when the value of the toggle is changed', 'any'],
    ]">
</ApiTable>

<br />

<ApiTable title="Group Events"
    :headers="['事件', '描述', '类型']"
    :columns="[
        ['update:modelValue', 'The value of the toggle', 'any[]'],
        ['on-change', 'Triggered when the value of the toggle is changed', 'any[]'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const defaultValue = ref(null)
const disabledValue = ref(null)
</script>
