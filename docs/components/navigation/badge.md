---
title: 徽章 (Badge)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnBadge` 组件的一些功能和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnBadge text="Badge" :dark="darkMode">Badge</ShadcnBadge>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnBadge text="Badge">Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <ShadcnBadge type="primary" text="Badge" :dark="darkMode">Primary</ShadcnBadge>
    <ShadcnBadge type="success" text="Badge" :dark="darkMode">Success</ShadcnBadge>
    <ShadcnBadge type="warning" text="Badge" :dark="darkMode">Warning</ShadcnBadge>
    <ShadcnBadge type="danger" text="Badge" :dark="darkMode">Danger</ShadcnBadge>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnBadge type="primary" text="Badge">Primary</ShadcnBadge>
    <ShadcnBadge type="success" text="Badge">Success</ShadcnBadge>
    <ShadcnBadge type="warning" text="Badge">Warning</ShadcnBadge>
    <ShadcnBadge type="danger" text="Badge">Danger</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## 文本 (text)

<CodeRunner title="文本 (text)">
    <ShadcnBadge text="Text" :dark="darkMode">Badge</ShadcnBadge>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnBadge text="Text">Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## 点 (dot)

<CodeRunner title="点 (dot)">
    <ShadcnBadge dot :dark="darkMode">Badge</ShadcnBadge>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnBadge dot>Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## 最大值 (max)

<CodeRunner title="最大值 (max)">
    <ShadcnBadge text="10" max="5" :dark="darkMode">Badge</ShadcnBadge>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnBadge text="10" max="5">Badge</ShadcnBadge>
</template>

<script setup lang="ts">
</script>
```

:::

## 液态玻璃效果 (glass)

液态玻璃效果通过半透明背景和背景模糊创建现代化的视觉效果，在彩色背景上表现最佳。

<CodeRunner title="液态玻璃效果 (glass)">
    <div class="space-y-6">
        <div class="relative">
            <div :class="['h-40 rounded-lg flex items-center justify-center gap-8', darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
                <ShadcnBadge glass :dark="darkMode" type="primary" text="5">
                    <div :class="['px-6 py-3 rounded-lg', darkMode ? 'bg-gray-800/50 text-gray-100' : 'bg-white/50 text-gray-900']">
                        Primary
                    </div>
                </ShadcnBadge>
                <ShadcnBadge glass :dark="darkMode" type="success" text="10">
                    <div :class="['px-6 py-3 rounded-lg', darkMode ? 'bg-gray-800/50 text-gray-100' : 'bg-white/50 text-gray-900']">
                        Success
                    </div>
                </ShadcnBadge>
                <ShadcnBadge glass :dark="darkMode" type="warning" text="99+">
                    <div :class="['px-6 py-3 rounded-lg', darkMode ? 'bg-gray-800/50 text-gray-100' : 'bg-white/50 text-gray-900']">
                        Warning
                    </div>
                </ShadcnBadge>
                <ShadcnBadge glass :dark="darkMode" type="danger" text="New">
                    <div :class="['px-6 py-3 rounded-lg', darkMode ? 'bg-gray-800/50 text-gray-100' : 'bg-white/50 text-gray-900']">
                        Danger
                    </div>
                </ShadcnBadge>
            </div>
        </div>
        <div class="relative">
            <div :class="['h-40 rounded-lg flex items-center justify-center gap-8', darkMode ? 'bg-gradient-to-r from-pink-900 to-rose-900' : 'bg-gradient-to-r from-pink-400 to-rose-400']">
                <ShadcnBadge glass :dark="darkMode" dot>
                    <div :class="['px-6 py-3 rounded-lg', darkMode ? 'bg-gray-800/50 text-gray-100' : 'bg-white/50 text-gray-900']">
                        Dot Badge
                    </div>
                </ShadcnBadge>
                <ShadcnBadge glass :dark="darkMode" text="10" max="5">
                    <div :class="['px-6 py-3 rounded-lg', darkMode ? 'bg-gray-800/50 text-gray-100' : 'bg-white/50 text-gray-900']">
                        Max 5
                    </div>
                </ShadcnBadge>
            </div>
        </div>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div class="space-y-6">
        <div class="relative">
            <div class="h-40 rounded-lg flex items-center justify-center gap-8 bg-gradient-to-r from-blue-400 to-indigo-400">
                <ShadcnBadge glass type="primary" text="5">
                    <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
                        Primary
                    </div>
                </ShadcnBadge>
                <ShadcnBadge glass type="success" text="10">
                    <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
                        Success
                    </div>
                </ShadcnBadge>
                <ShadcnBadge glass type="warning" text="99+">
                    <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
                        Warning
                    </div>
                </ShadcnBadge>
                <ShadcnBadge glass type="danger" text="New">
                    <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
                        Danger
                    </div>
                </ShadcnBadge>
            </div>
        </div>
        <div class="relative">
            <div class="h-40 rounded-lg flex items-center justify-center gap-8 bg-gradient-to-r from-pink-400 to-rose-400">
                <ShadcnBadge glass dot>
                    <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
                        Dot Badge
                    </div>
                </ShadcnBadge>
                <ShadcnBadge glass text="10" max="5">
                    <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
                        Max 5
                    </div>
                </ShadcnBadge>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
```

:::

## 徽章 (Badge) 属性

<ApiTable title="徽章 (Badge) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['type', '徽章类型', 'enum', 'primary', 'primary | success | warning | danger'],
        ['text', '徽章文本', 'string', '-', '-'],
        ['dot', '是否显示为点', 'boolean', 'false', '-'],
        ['max', '最大点数，只有文本是数字时生效', 'number', '-', '-'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 徽章 (Badge) 插槽

<ApiTable title="徽章 (Badge) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '默认插槽'],
        ['text', '文本插槽'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>