---
title: 骨架屏 (Skeleton)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnSkeleton` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnSkeleton :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSkeleton />
</template>

<script setup lang="ts">
</script>
```

:::

## 动画 (animation)

<CodeRunner title="动画 (animation)">
    <ShadcnSkeleton animation :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSkeleton animation />
</template>

<script setup lang="ts">
</script>
```

:::

## 排版 (paragraph)

<CodeRunner title="排版 (paragraph)">
    <ShadcnSkeleton :dark="darkMode" :paragraph=" { rows: 5, width: [100, 200, '300px', '50%', '62%'] }"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSkeleton :paragraph=" { rows: 5, width: [100, 200, '300px', '50%', '62%'] }"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <ShadcnSpace>
        <ShadcnSkeletonItem :dark="darkMode" animation type="circle"/>
        <ShadcnSkeletonItem :dark="darkMode" animation type="square"/>
        <ShadcnSkeletonItem :dark="darkMode" animation type="image"/>
    </ShadcnSpace>
    <br />
    <ShadcnSkeletonItem animation :dark="darkMode" type="rect"/>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSkeletonItem animation type="circle"/>
    <ShadcnSkeletonItem animation type="square"/>
    <ShadcnSkeletonItem animation type="rect"/>
    <ShadcnSkeletonItem animation type="image"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
    <ShadcnSpace>
        <ShadcnSkeletonItem animation type="image" :dark="darkMode" size="small"/>
        <ShadcnSkeletonItem animation type="image" :dark="darkMode" size="default"/>
        <ShadcnSkeletonItem animation type="image" :dark="darkMode" size="large"/>
    </ShadcnSpace>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSkeletonItem animation type="image" size="small"/>
    <ShadcnSkeletonItem animation type="image" size="default"/>
    <ShadcnSkeletonItem animation type="image" size="large"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 液态玻璃效果 (glass)

<CodeRunner title="液态玻璃效果 (glass)">
    <div :class="['p-8 rounded-lg', darkMode ? 'bg-gradient-to-r from-purple-900 to-pink-900' : 'bg-gradient-to-r from-purple-400 to-pink-400']">
        <div :class="['p-6 rounded-lg space-y-6', darkMode ? 'bg-gray-800/50' : 'bg-white/50']">
            <div>
                <h4 :class="['text-sm font-medium mb-3', darkMode ? 'text-gray-300' : 'text-gray-700']">基础骨架屏</h4>
                <ShadcnSkeleton glass :dark="darkMode" />
            </div>
            <div>
                <h4 :class="['text-sm font-medium mb-3', darkMode ? 'text-gray-300' : 'text-gray-700']">带动画效果</h4>
                <ShadcnSkeleton glass animation :dark="darkMode" />
            </div>
            <div>
                <h4 :class="['text-sm font-medium mb-3', darkMode ? 'text-gray-300' : 'text-gray-700']">不同形状</h4>
                <div class="flex gap-4 items-center">
                    <ShadcnSkeletonItem type="circle" size="large" glass :dark="darkMode"/>
                    <ShadcnSkeletonItem type="square" size="large" glass :dark="darkMode"/>
                    <ShadcnSkeletonItem type="rect" width="200px" size="large" glass :dark="darkMode"/>
                </div>
            </div>
            <div>
                <h4 :class="['text-sm font-medium mb-3', darkMode ? 'text-gray-300' : 'text-gray-700']">图片骨架屏</h4>
                <ShadcnSkeletonItem type="image" size="large" glass animation :dark="darkMode"/>
            </div>
        </div>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <div :class="['p-8 rounded-lg', 'bg-gradient-to-r from-purple-400 to-pink-400']">
        <div :class="['p-6 rounded-lg space-y-6', 'bg-white/50']">
            <div>
                <h4 class="text-sm font-medium mb-3 text-gray-700">基础骨架屏</h4>
                <ShadcnSkeleton glass />
            </div>
            <div>
                <h4 class="text-sm font-medium mb-3 text-gray-700">带动画效果</h4>
                <ShadcnSkeleton glass animation />
            </div>
            <div>
                <h4 class="text-sm font-medium mb-3 text-gray-700">不同形状</h4>
                <div class="flex gap-4 items-center">
                    <ShadcnSkeletonItem type="circle" size="large" glass />
                    <ShadcnSkeletonItem type="square" size="large" glass />
                    <ShadcnSkeletonItem type="rect" width="200px" size="large" glass />
                </div>
            </div>
            <div>
                <h4 class="text-sm font-medium mb-3 text-gray-700">图片骨架屏</h4>
                <ShadcnSkeletonItem type="image" size="large" glass animation />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
```

:::

## 骨架屏 (Skeleton) 属性

<ApiTable title="骨架屏 (Skeleton) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['rows', '骨架的行数', 'number | string', '4'],
        ['cols', '骨架的列数', 'number | string', '1'],
        ['animation', '是否显示动画', 'boolean', 'false'],
        ['paragraph', '骨架的排版', '{ rows: 5, width: \[100, 200, 300px, 50%, 62%\] }', '-'],
        ['dark', '是否为暗黑模式', 'boolean', 'false'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false'],
    ]">
</ApiTable>

## 骨架屏节点 (Skeleton Item) 属性

<ApiTable title="骨架屏节点 (Skeleton Item) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['animation', '是否显示动画', 'Boolean', 'false', '-'],
        ['width', '节点的宽度', 'Number | String', '-', '-'],
        ['type', '节点的类型', 'Enum', 'rect', 'circle | square | rect | image'],
        ['size', '节点的尺寸', 'Enum', 'default', 'small | default | large'],
        ['dark', '是否为暗黑模式', 'boolean', 'false', '-'],
        ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 骨架屏 (Skeleton) 插槽

<ApiTable title="骨架屏 (Skeleton) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['template', '骨架的模板'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>