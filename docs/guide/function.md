---
title: 函数 (Function)
---

# 介绍

<br />

本文档主要用于描述 `fnToString` 函数和 `fnToFunction` 函数的一些功能和用法。

## fnToString

使用 `fnToString` 函数将函数转换为字符串。

<br />

::: raw

<CodeRunner title="fnToString">
    <ShadcnText>转换响应:</ShadcnText>
    <ShadcnText type="code">{ "formatter": "(value) => `${value}px`" }</ShadcnText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnText>Convert response:</ShadcnText>
  <ShadcnText type="code">{{ value }}</ShadcnText>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { fnToString } from 'view-shadcn-ui'

  const fn = { formatter: (value) => `${ value }px` }

  const value = ref({ formatter: fnToString(fn.formatter) })
</script>
```

:::

## fnToFunction

使用 `fnToFunction` 函数将字符串转换为函数。

<br />

::: raw

<CodeRunner title="fnToFunction" 
            warning="这里实际转换的效果是 { formatter: (value) => '${ value }px' } 但在 JSON 序列化时该函数会被忽略，所以结果变成了 {} ，这并不会影响函数的调用，而且需要在调用最后加上 ()，例如 (fnToFunction(configItem.formatter) ?? (() => undefined)) ()">
    <ShadcnText>转换响应:</ShadcnText>
    <ShadcnText type="code">{ formatter: (value) => `${ value }px` }</ShadcnText>
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnText>Convert response:</ShadcnText>
  <ShadcnText type="code">{{ value }}</ShadcnText>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { fnToFunction } from 'view-shadcn-ui'

  const fn = { "formatter": "(value) => `${value}px`" }

  const value = ref({ formatter: fnToFunction(fn.formatter) })
</script>
```

:::