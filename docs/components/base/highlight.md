---
title: Shadcn Highlight
---

# Inroduction

This document is mainly used to describe some features and usage of the ShadcnHighlight component.

## Usage

::: raw

<CodeRunner title="Usage">
  <ShadcnHighlight text="Vue3 is an awesome framework for building user interfaces"
      :highlight="['Vue3', 'awesome']"/>
  <br/>
  <ShadcnHighlight text="The quick brown fox jumps over the lazy dog"
                   highlight="the" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnHighlight text="Vue3 is an awesome framework for building user interfaces"
                   :highlight="['Vue3', 'awesome']"/>
  <br/>
  <ShadcnHighlight text="The quick brown fox jumps over the lazy dog"
                   highlight="the" />
</template>

<script setup lang="ts">
</script>
```

:::

## Case Sensitive

::: raw

<CodeRunner title="Case Sensitive">
  <ShadcnHighlight text="The quick brown fox jumps over the lazy dog"
                   case-sensitive
                   highlight="the" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnHighlight text="The quick brown fox jumps over the lazy dog"
                   case-sensitive
                   highlight="the" />
</template>

<script setup lang="ts">
</script>
```

:::

## Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类似', '默认值', '依赖', '支持列表']"
    :columns="[
        ['text', 'The content of the highlight', 'string', '-', '-', '-'],
        ['highlight', 'The highlight content', 'string | string[]', '-', '-', '-'],
        ['case-sensitive', 'Whether the highlight is case sensitive', 'boolean', 'false', '-', '-'],
    ]">
</ApiTable>
