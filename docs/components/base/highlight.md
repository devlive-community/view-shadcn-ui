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
      :highlight="['Vue3', 'awesome']" :dark="darkMode"/>
  <br/>
  <ShadcnHighlight text="The quick brown fox jumps over the lazy dog"
                   highlight="the" :dark="darkMode"/>
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
                   highlight="the" :dark="darkMode"/>
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

## 液态玻璃效果 (glass)

::: raw

<div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-amber-900 to-orange-900' : 'bg-gradient-to-r from-amber-400 to-orange-400']">
<CodeRunner title="液态玻璃效果" class="bg-transparent">
  <div :class="['p-8 rounded-lg', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
    <div class="space-y-4">
      <div>
        <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">单关键词高亮</h4>
        <p :class="[darkMode ? 'text-gray-300' : 'text-gray-700']">
          <ShadcnHighlight text="这是一个支持液态玻璃效果的文本高亮组件示例" highlight="液态玻璃" glass :dark="darkMode"/>
        </p>
      </div>
      <div>
        <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">多关键词高亮</h4>
        <p :class="[darkMode ? 'text-gray-300' : 'text-gray-700']">
          <ShadcnHighlight text="Vue 3 组件库支持暗黑模式和液态玻璃效果" :highlight="['Vue 3', '暗黑模式', '液态玻璃']" glass :dark="darkMode"/>
        </p>
      </div>
      <div>
        <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">英文示例</h4>
        <p :class="[darkMode ? 'text-gray-300' : 'text-gray-700']">
          <ShadcnHighlight text="Vue 3 is an awesome framework with glass effect support" :highlight="['Vue 3', 'awesome', 'glass effect']" glass :dark="darkMode"/>
        </p>
      </div>
    </div>
  </div>
</CodeRunner>
</div>

:::

::: details 查看代码

```vue
<template>
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-amber-900 to-orange-900' : 'bg-gradient-to-r from-amber-400 to-orange-400']">
      <div :class="['p-8 rounded-lg', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
        <div class="space-y-4">
          <div>
            <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">单关键词高亮</h4>
            <p :class="[darkMode ? 'text-gray-300' : 'text-gray-700']">
              <ShadcnHighlight text="这是一个支持液态玻璃效果的文本高亮组件示例" highlight="液态玻璃" glass :dark="darkMode"/>
            </p>
          </div>
          <div>
            <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">多关键词高亮</h4>
            <p :class="[darkMode ? 'text-gray-300' : 'text-gray-700']">
              <ShadcnHighlight text="Vue 3 组件库支持暗黑模式和液态玻璃效果" :highlight="['Vue 3', '暗黑模式', '液态玻璃']" glass :dark="darkMode"/>
            </p>
          </div>
          <div>
            <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">英文示例</h4>
            <p :class="[darkMode ? 'text-gray-300' : 'text-gray-700']">
              <ShadcnHighlight text="Vue 3 is an awesome framework with glass effect support" :highlight="['Vue 3', 'awesome', 'glass effect']" glass :dark="darkMode"/>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
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
        ['dark', '暗黑模式', 'boolean', 'false'],
        ['glass', '液态玻璃效果', 'boolean', 'false']
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>