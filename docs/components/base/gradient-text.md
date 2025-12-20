---
tite: 渐变文本 (Gradient Text)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnGradientText` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnGradientText :dark="darkMode">This is a gradient text</ShadcnGradientText>
    <br/>
    <ShadcnGradientText from="red" to="blue" deg="200" :dark="darkMode">This is a gradient text</ShadcnGradientText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnGradientText>This is a gradient text</ShadcnGradientText>
  <br/>
  <ShadcnGradientText from="red" to="blue" deg="200">This is a gradient text</ShadcnGradientText>
</template>
```

:::

## 配置 (options)

::: raw

<CodeRunner title="配置">
    <ShadcnGradientText options="45deg, red 0 50%, blue 50% 100%" :dark="darkMode">This is a gradient text</ShadcnGradientText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnGradientText options="45deg, red 0 50%, blue 50% 100%">This is a gradient text</ShadcnGradientText>
</template>
```

:::

## 液态玻璃效果 (glass)

::: raw

<div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-indigo-900 to-purple-900' : 'bg-gradient-to-r from-indigo-400 to-purple-400']">
<CodeRunner title="液态玻璃效果" class="bg-transparent">
  <div :class="['p-8 rounded-lg', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
    <div class="space-y-4">
      <div>
        <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">基础渐变文本</h4>
        <div class="space-y-2">
          <ShadcnGradientText from="#FF6B6B" to="#4ECDC4" :deg="90" background glass :dark="darkMode">
            渐变文本效果
          </ShadcnGradientText>
          <br/>
          <ShadcnGradientText from="#FFD93D" to="#FF6B9D" :deg="45" background glass :dark="darkMode">
            彩虹渐变文本
          </ShadcnGradientText>
        </div>
      </div>
      <div>
        <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">多色渐变</h4>
        <div class="space-y-2">
          <ShadcnGradientText options="90deg, #667eea 0%, #764ba2 50%, #f093fb 100%" background glass :dark="darkMode">
            三色渐变文本
          </ShadcnGradientText>
          <br/>
          <ShadcnGradientText options="135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%" background glass :dark="darkMode">
            五色渐变文本
          </ShadcnGradientText>
        </div>
      </div>
    </div>
  </div>
</CodeRunner>
</div>

:::

::: details 查看代码

```vue
<template>
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-indigo-900 to-purple-900' : 'bg-gradient-to-r from-indigo-400 to-purple-400']">
      <div :class="['p-8 rounded-lg', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
        <div class="space-y-4">
          <div>
            <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">基础渐变文本</h4>
            <div class="space-y-2">
              <ShadcnGradientText from="#FF6B6B" to="#4ECDC4" :deg="90" background glass :dark="darkMode">
                渐变文本效果
              </ShadcnGradientText>
              <br/>
              <ShadcnGradientText from="#FFD93D" to="#FF6B9D" :deg="45" background glass :dark="darkMode">
                彩虹渐变文本
              </ShadcnGradientText>
            </div>
          </div>
          <div>
            <h4 :class="['text-base font-semibold mb-2', darkMode ? 'text-gray-200' : 'text-gray-800']">多色渐变</h4>
            <div class="space-y-2">
              <ShadcnGradientText options="90deg, #667eea 0%, #764ba2 50%, #f093fb 100%" background glass :dark="darkMode">
                三色渐变文本
              </ShadcnGradientText>
              <br/>
              <ShadcnGradientText options="135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%" background glass :dark="darkMode">
                五色渐变文本
              </ShadcnGradientText>
            </div>
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

## 渐变文本 (Gradient Text) 属性

<ApiTable title="渐变文本 (Gradient Text) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['from', '渐变文本的起始颜色', 'string', 'red'],
        ['to', '渐变文本的结束颜色', 'string', 'blue'],
        ['deg', '渐变文本的程度', 'number', '100'],
        ['options', '渐变文本的选项，例如: <code>45deg, red 0 50%, blue 50% 100%</code>', 'string', '-'],
        ['background', '是否显示背景容器', 'boolean', 'false'],
        ['glass', '液态玻璃效果（仅在 background 为 true 时生效）', 'boolean', 'false'],
        ['dark', '暗黑模式', 'boolean', 'false'],
    ]">
</ApiTable>

## 渐变文本 (Gradient Text) 插槽

<ApiTable title="渐变文本 (Gradient Text) 插槽"
    :headers="['插槽', '描述']"
    :columns="[
        ['default', '文本插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>