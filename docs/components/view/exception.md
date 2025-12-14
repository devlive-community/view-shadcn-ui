---
title: 异常 (Exception)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnException` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnSpace wrap :dark="darkMode">
        <ShadcnException  :dark="darkMode" />
        <ShadcnException type="500"  :dark="darkMode" />
        <ShadcnException type="403"  :dark="darkMode" />
    </ShadcnSpace>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSpace wrap :dark="darkMode">
    <ShadcnException  :dark="darkMode" />
    <ShadcnException type="500"  :dark="darkMode" />
    <ShadcnException type="403"  :dark="darkMode" />
  </ShadcnSpace>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 异常 (Exception) 属性

<ApiTable title="异常 (Exception) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['type', '异常的类型', 'enum', '404', '404 | 403 | 500'],
        ['title', '异常的标题', 'string', 'Page not found', '-'],
        ['description', '异常的描述', 'string', 'Sorry, the page you visited does not exist.', '-'],
    ]">
</ApiTable>

## 异常 (Exception) 插槽

<ApiTable title="异常 (Exception) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['icon', '图标'],
        ['actions', '操作'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>