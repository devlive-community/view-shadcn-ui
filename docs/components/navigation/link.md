---
title: 链接 (Link)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnLink` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法" warning="必须使用 vue-router">
  <ShadcnLink link="/link" :dark="darkMode">Router Link</ShadcnLink>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnLink link="/link">Router Link</ShadcnLink>
</template>

<script setup lang="ts">
</script>
```

:::

## 外部链接 (external)

::: raw

<CodeRunner title="外部链接 (external)">
  <ShadcnLink link="https://github.com/devlive-community/view-shadcn-ui" external :dark="darkMode">External Link</ShadcnLink>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnLink link="https://github.com/devlive-community/view-shadcn-ui" external>External Link</ShadcnLink>
</template>

<script setup lang="ts">
</script>
```

:::

## 打开方式 (target)

::: raw

<CodeRunner title="打开方式 (target)">
  <ShadcnLink link="https://github.com/devlive-community/view-shadcn-ui" external target="_blank" :dark="darkMode">Router Link</ShadcnLink>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnLink link="https://github.com/devlive-community/view-shadcn-ui" external target="_blank">Router Link</ShadcnLink>
</template>

<script setup lang="ts">
</script>
```

:::

## 链接 (Link) 属性

<ApiTable title="链接 (Link) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['link', '链接地址', 'string', '-', '-'],
        ['external', '是否为外部链接', 'boolean', 'false', '-'],
        ['target', '打开方式', 'string', '_self', '_self | _blank | _parent | _top']
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>