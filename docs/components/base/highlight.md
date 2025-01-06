---
title: 高亮 (Highlight)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnHighlight` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法">
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

## 区分大小写 (case-sensitive)

::: raw

<CodeRunner title="区分大小写">
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

## 高亮 (Highlight) 属性

<ApiTable title="高亮 (Highlight) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['text', '需要高亮的原始文本内容', 'string', '-'],
        ['highlight', '高亮内容', 'string | string\[\]', '-'],
        ['case-sensitive', '高亮显示是否区分大小写', 'boolean', 'false'],
    ]">
</ApiTable>