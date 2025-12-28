---
title: 提示 (Tooltip)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTooltip` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnTooltip content="This is a tooltip" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTooltip content="This is a tooltip" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 延迟 (delay)

<CodeRunner title="延迟 (delay)">
    <ShadcnTooltip content="This is a tooltip" :delay="500" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTooltip content="This is a tooltip" :delay="500" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 位置 (position)

<CodeRunner title="位置 (position)">
    <ShadcnTooltip content="Position" position="top" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Top</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="bottom" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Bottom</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="left" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Left</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="right" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Right</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTooltip content="Position" position="top" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Top</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="bottom" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Bottom</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="left" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Left</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Position" position="right" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Right</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 箭头 (arrow)

<CodeRunner title="箭头 (arrow)">
    <ShadcnTooltip content="Hello Shadcn UI" arrow :dark="darkMode">
        <ShadcnButton :dark="darkMode">Arrow</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Hello Shadcn UI" :arrow="false" :dark="darkMode">
        <ShadcnButton :dark="darkMode">No Arrow</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTooltip content="Hello Shadcn UI" arrow :dark="darkMode">
        <ShadcnButton :dark="darkMode">Arrow</ShadcnButton>
    </ShadcnTooltip>
    <ShadcnTooltip content="Hello Shadcn UI" :arrow="false" :dark="darkMode">
        <ShadcnButton :dark="darkMode">No Arrow</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 宽度 (width)

<CodeRunner title="宽度 (width)">
    <ShadcnTooltip content="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." width="200" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnTooltip>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnTooltip content="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." width="200" :dark="darkMode">
        <ShadcnButton :dark="darkMode">Hover</ShadcnButton>
    </ShadcnTooltip>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

</script>
```

:::

## 液态玻璃效果 (glass)

<CodeRunner title="液态玻璃效果 (glass)">
    <div :class="['p-8 rounded-lg', darkMode ? 'bg-gradient-to-r from-cyan-900 to-blue-900' : 'bg-gradient-to-r from-cyan-400 to-blue-400']">
        <div :class="['p-6 rounded-lg space-y-6', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
            <div class="flex gap-4 items-center flex-wrap">
                <ShadcnTooltip glass :dark="darkMode" content="这是液态玻璃效果的提示框" position="top">
                    <ShadcnButton :dark="darkMode">上方提示</ShadcnButton>
                </ShadcnTooltip>
                <ShadcnTooltip glass :dark="darkMode" content="这是液态玻璃效果的提示框" position="bottom">
                    <ShadcnButton :dark="darkMode">下方提示</ShadcnButton>
                </ShadcnTooltip>
                <ShadcnTooltip glass :dark="darkMode" content="这是液态玻璃效果的提示框" position="left">
                    <ShadcnButton :dark="darkMode">左侧提示</ShadcnButton>
                </ShadcnTooltip>
                <ShadcnTooltip glass :dark="darkMode" content="这是液态玻璃效果的提示框" position="right">
                    <ShadcnButton :dark="darkMode">右侧提示</ShadcnButton>
                </ShadcnTooltip>
            </div>
            <div class="flex gap-4 items-center">
                <ShadcnTooltip glass :dark="darkMode" content="带箭头的液态玻璃效果提示框" arrow>
                    <ShadcnButton :dark="darkMode">带箭头提示</ShadcnButton>
                </ShadcnTooltip>
            </div>
        </div>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div class="p-8 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400">
        <div class="p-6 rounded-lg space-y-6 bg-white/50">
            <div class="flex gap-4 items-center flex-wrap">
                <ShadcnTooltip glass content="这是液态玻璃效果的提示框" position="top">
                    <ShadcnButton>上方提示</ShadcnButton>
                </ShadcnTooltip>
                <ShadcnTooltip glass content="这是液态玻璃效果的提示框" position="bottom">
                    <ShadcnButton>下方提示</ShadcnButton>
                </ShadcnTooltip>
                <ShadcnTooltip glass content="这是液态玻璃效果的提示框" position="left">
                    <ShadcnButton>左侧提示</ShadcnButton>
                </ShadcnTooltip>
                <ShadcnTooltip glass content="这是液态玻璃效果的提示框" position="right">
                    <ShadcnButton>右侧提示</ShadcnButton>
                </ShadcnTooltip>
            </div>
            <div class="flex gap-4 items-center">
                <ShadcnTooltip glass content="带箭头的液态玻璃效果提示框" arrow>
                    <ShadcnButton>带箭头提示</ShadcnButton>
                </ShadcnTooltip>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
```

:::

## 提示 (Tooltip) 属性

<ApiTable title="提示 (Tooltip) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['content', '内容文本', 'object', '-', '-'],
        ['delay', '延迟时间 (以毫秒为单位)', 'number', '0', '-'],
        ['position', '组件的位置', 'enum', 'top', 'top | bottom | left | right'],
        ['arrow', '是否显示箭头', 'boolean', 'true', '-'],
        ['maxWidth', '如果宽度为 auto，则提示工具的最大宽度', 'number | string', '200', '-'],
        ['dark', '是否为暗黑模式', 'boolean', 'false', '-'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 提示 (Tooltip) 插槽

<ApiTable title="提示 (Tooltip) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '提示器区域'],
        ['content', '提示内容区域'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>