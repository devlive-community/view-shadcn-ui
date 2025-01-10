---
title: 行 & 列 (Row & Col)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnRow` 和 `ShadcnCol` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnRow>
        <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
    </ShadcnRow>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRow>
        <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
    </ShadcnRow>
</template>

<script setup lang="ts">
</script>
```

:::

## 间隔 (gutter)

<CodeRunner title="间隔 (gutter)">
    <ShadcnRow :gutter="30">
        <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
    </ShadcnRow>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRow :gutter="30">
        <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
    </ShadcnRow>
</template>

<script setup lang="ts">
</script>
```

:::

## 垂直对齐 (align)

<CodeRunner title="垂直对齐 (align)">
    <div class="space-y-2">
        <ShadcnRow align="top">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
        <ShadcnRow align="middle">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
        <ShadcnRow align="bottom">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRow align="top">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow align="middle">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow align="bottom">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
</template>

<script setup lang="ts">
</script>
```

:::

## 水平对齐 (justify)

<CodeRunner title="水平对齐 (justify)">
    <div class="space-y-2">
        <ShadcnRow justify="start">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
        <ShadcnRow justify="center">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
        <ShadcnRow justify="end">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
        <ShadcnRow justify="between">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
        </ShadcnRow>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRow justify="start">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow justify="center">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow justify="end">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
    <ShadcnRow justify="between">
        <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
    </ShadcnRow>
</template>

<script setup lang="ts">
</script>
```

:::

## 自动换行 (wrap)

<CodeRunner title="自动换行 (wrap)">
    <div class="space-y-2 p-3">
        <ShadcnRow wrap :gutter="2">
            <ShadcnCol v-for="i in 40" class="bg-blue-200 h-12"/>
        </ShadcnRow>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRow wrap :gutter="2">
        <ShadcnCol v-for="i in 40" class="bg-blue-200"/>
    </ShadcnRow>
</template>

<script setup lang="ts">
</script>
```

:::

## 列数 (span)

<CodeRunner title="列数 (span)">
    <div class="space-y-2 p-3">
        <ShadcnRow>
            <ShadcnCol class="bg-blue-200 h-12" span="2"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-12" span="1"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-12" span="3"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-12" span="1"></ShadcnCol>
        </ShadcnRow>
        <ShadcnRow>
            <ShadcnCol class="bg-blue-200 h-12" span="8"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-12" span="3"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-12" span="3"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-12" span="1"></ShadcnCol>
        </ShadcnRow>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRow>
        <ShadcnCol class="bg-blue-200 h-12" span="2"></ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12" span="1"></ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12" span="3"></ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12" span="1"></ShadcnCol>
    </ShadcnRow>
</template>

<script setup lang="ts">
</script>
```

:::

## 列顺序 (order)

<CodeRunner title="列顺序 (order)">
    <div class="space-y-2 p-3">
        <ShadcnRow>
            <ShadcnCol class="bg-blue-200 h-12" order="2" span="3">1 | order 2</ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-12" order="1" span="3">2 | order 1</ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-12" order="3" span="3">3 | order 3</ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-12" order="4" span="3">4 | order 4</ShadcnCol>
        </ShadcnRow>
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnRow>
        <ShadcnCol class="bg-blue-200 h-12" order="2" span="3">1 | order 2</ShadcnCol>
        <ShadcnCol class="bg-blue-300 h-12" order="1" span="3">2 | order 1</ShadcnCol>
        <ShadcnCol class="bg-blue-400 h-12" order="3" span="3">3 | order 3</ShadcnCol>
        <ShadcnCol class="bg-blue-500 h-12" order="4" span="3">4 | order 4</ShadcnCol>
    </ShadcnRow>
</template>

<script setup lang="ts">
</script>
```

:::

## 行 (Row) 属性

<ApiTable title="行 (Row) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['gutter', '网格间距，单位 px，在左和右之间平均分配', 'number', '0', '-'],
        ['align', '布局下的垂直对齐', 'enum', '-', 'top | middle | bottom'],
        ['justify', '布局下的水平对齐', 'enum', '-', 'start | center | end | between | around | evenly | normal | stretch'],
        ['wrap', '是否自动换行', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 列 (Col) 属性

<ApiTable title="列 (Col) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['span', '网格的占位符数。可选值是 1 到 12 之间的整数。例如，如果同一 ShadcnRow 下的子元素超过 12，则会自动换行。', 'string | number', '1', '1 - 12'],
        ['order', '网格的顺序', 'string | number', '-', '-'],
    ]">
</ApiTable>