---
title: Function Utility
---

# Introduction

This document is mainly used to describe some features and usage of the function utility.

## fnToString

use `fnToString` function to convert function to string.

<br />

::: raw

<CodeRunner title="fnToString">
    <ShadcnText>Convert response:</ShadcnText>
    <ShadcnText type="code">{ "formatter": "(value) => `${value}px`" }</ShadcnText>
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
            warning="The effect of the actual conversion here is { formatter: (value) => '${ value }px' } But the function will be ignored during JSON serialization, so the result becomes {} It will not affect the call of the function, and you need to add () at the end of the call, for example, (fnToFunction(configItem.formatter) ?? (() => undefined)) ()">
    <ShadcnText>Convert response:</ShadcnText>
    <ShadcnText type="code">{ formatter: (value) => `${ value }px` }</ShadcnText>
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
