---
title: 复制 (Copy)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnCopy` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnCopy text="Hello Shadcn UI"/>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCopy text="Hello Shadcn UI"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 提示 (tooltip)

::: raw

<CodeRunner title="提示">
    <div class="flex items-center gap-2">
        <span>显示提示</span>
        <ShadcnCopy text="Hello Shadcn UI"/>
    </div>
    <div class="flex items-center gap-2">
        <span>不显示提示</span>
        <ShadcnCopy text="Hello Shadcn UI" :tooltip="false"/>
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnCopy text="Hello Shadcn UI"/>
    <ShadcnCopy text="Hello Shadcn UI" :tooltip="false"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 位置 (position)

<CodeRunner title="位置">
    <div class="flex items-center gap-2">
        <span>顶部</span>
        <ShadcnCopy text="Position" position="top"/>
    </div>
    <div class="flex items-center gap-2">
        <span>底部</span>
        <ShadcnCopy text="Position" position="bottom"/>
    </div>
    <div class="flex items-center gap-2">
        <span>左侧</span>
        <ShadcnCopy text="Position" position="left"/>
    </div>
    <div class="flex items-center gap-2">
        <span>右侧</span>
        <ShadcnCopy text="Position" position="right"/>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnCopy text="Position" position="top"/>
    <ShadcnCopy text="Position" position="bottom"/>
    <ShadcnCopy text="Position" position="left"/>
    <ShadcnCopy text="Position" position="right"/>
</template>

<script setup lang="ts">
</script>
```

:::

## 复制 (Copy) 属性

<ApiTable title="复制 (Copy) 属性"
    :headers="['属性', '描述', '类似', '默认值', '依赖', '支持列表']"
    :columns="[
        ['text', '复制的文本内容', 'string', '-', '-', '-'],
        ['tooltip', '是否显示提示', 'boolean', 'true', '-', '-'],
        ['position', '提示的位置', 'enum', 'top', '-', 'top | bottom | left | right'],
    ]">
</ApiTable>

## 复制 (Copy) 事件

<ApiTable title="复制 (Copy) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-success', '复制成功时触发', 'event'],
        ['on-failed', '复制失败时触发', 'event'],
    ]">
</ApiTable>

## 复制 (Copy) 插槽

<ApiTable title="复制 (Copy) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['icon', '复制图标'],
    ]">
</ApiTable>