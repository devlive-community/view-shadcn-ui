---
title: Function Utils
---

# Introduction

This document is mainly used to describe some features and usage of the function utils.

## fnToString

use `fnToString` function to convert function to string.

<br />

::: raw

<CodeRunner title="fnToString">
    <ShadcnText>Convert response:</ShadcnText>
    <ShadcnText type="code">{{ fnToStringValue }}</ShadcnText>
</CodeRunner>

:::

::: details Show code

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

use `fnToFunction` function to convert string to function.

<br />

::: raw

<CodeRunner title="fnToFunction" 
            warning="这里实际转换的的效果为 {formatter: (value) => `${ value }px` } 但是在 JSON 序列化的时候会忽略函数所以结果成为了 {} 不会影响该函数的调用，在调用的时候需要在末尾添加 ()，例如 (fnToFunction(configItem.formatter) ?? (() => undefined))()">
    <ShadcnText>Convert response:</ShadcnText>
    <ShadcnText type="code">{{ fnToFunctionValue }}</ShadcnText>
</CodeRunner>

:::

::: details Show code

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

<script setup lang="ts">
import { ref } from 'vue'
import { fnToString, fnToFunction } from 'view-shadcn-ui' 

const fn = { formatter: (value) => `${ value }px` }
const fnStr = { "formatter": "(value) => `${value}px`" }

const fnToStringValue = ref({ formatter: fnToString(fn.formatter) })
const fnToFunctionValue = ref({ formatter: fnToFunction(fnStr.formatter) })
</script>
