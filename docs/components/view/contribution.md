---
title: 贡献图 (Contribution)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnContribution` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnContribution :data="data" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnContribution :data="data" />
</template>
```

:::

## 颜色 (color-scheme)

::: raw

<CodeRunner title="颜色 (color-scheme)">
    <ShadcnContribution :data="data" :colorScheme="colorScheme" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnContribution :data="data" :colorScheme="colorScheme" />
</template>
```

:::

## 统计的年数 (year-count)

::: raw

<CodeRunner title="统计的年数 (year-count)">
    <ShadcnContribution :data="data" :yearCount="1" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnContribution :data="data" :yearCount="1" />
</template>
```

:::

## 显示图例 (show-legend)

::: raw

<CodeRunner title="显示图例 (show-legend)">
    <ShadcnContribution :data="data" showLegend :dark="darkMode" />
    <ShadcnContribution :data="data" :showLegend="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnContribution :data="data" showLegend />
    <ShadcnContribution :data="data" :showLegend="false" />
</template>
```

:::

## 显示周 (show-week)

::: raw

<CodeRunner title="显示周 (show-week)">
    <ShadcnContribution :data="data" showWeek :dark="darkMode" />
    <ShadcnContribution :data="data" :showWeek="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnContribution :data="data" showWeek />
    <ShadcnContribution :data="data" :showWeek="false" />
</template>
```

:::

## 显示月 (show-month)

::: raw

<CodeRunner title="显示月 (show-month)">
    <ShadcnContribution :data="data" showMonth :dark="darkMode" />
    <ShadcnContribution :data="data" :showMonth="false" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnContribution :data="data" showMonth />
    <ShadcnContribution :data="data" :showMonth="false" />
</template>
```

:::

## 单元格尺寸 (cell-size)

::: raw

<CodeRunner title="单元格尺寸 (cell-size)">
    <ShadcnContribution :data="data" :cellSize="15" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnContribution :data="data" :cellSize="15" />
</template>
```

:::

## 单元格间距 (cell-gap)

::: raw

<CodeRunner title="单元格间距 (cell-gap)">
    <ShadcnContribution :data="data" :cellGap="4" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnContribution :data="data" :cellGap="4" />
</template>
```

:::

## 年 (year)

::: raw

<CodeRunner title="年 (year)">
    <ShadcnContribution :data="data" :year="2023" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnContribution :data="data" :year="2023" />
</template>
```

:::

## 贡献图 (Contribution) 属性

<ApiTable title="贡献图 (Contribution) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['data', '当前组件的数据', 'Array<ContributionOption>', '-', '-'],
        ['colorScheme', '颜色配置', 'Array<string>', '\[#ebedf0, #9be9a8, #40c463, #30a14e, #216e39\]', '-'],
        ['yearCount', '统计的年数', 'number', '1', '-'],
        ['showLegend', '是否显示图例', 'boolean', 'true', '-'],
        ['showWeek', '是否显示周', 'boolean', 'true', '-'],
        ['showMonth', '是否显示月', 'boolean', 'true', '-'],
        ['cellSize', '单元格尺寸', 'number', '16', '-'],
        ['cellGap', '单元格间距', 'number', '4', '-'],
        ['year', '当前年份', 'number', '-', '-']
    ]">
</ApiTable>

## 贡献图 (Contribution) 事件

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-select', '组件选择的单元格', 'value: ContributionOption']
    ]">
</ApiTable>

## 贡献图 (Contribution) 插槽

<ApiTable title="Slots"
    :headers="['插槽', '描述', '参数']" 
    :columns="[
        ['cell', '自定义单元格', 'ContributionCellSlotProps']
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const data = ref([
  { date: '2024-01-01', count: 2 },
  { date: '2024-01-02', count: 5 },
  { date: '2024-01-03', count: 8 },
  { date: '2024-01-04', count: 12 },
  { date: '2024-01-05', count: 3 },
  { date: '2024-01-06', count: 0 },
  { date: '2024-01-07', count: 6 }
])

const colorScheme = [
  '#ebedf0',
  '#bfd4f2',
  '#7fa8ed',
  '#4775c9',
  '#254e89'
]

const handleSelect = (data: any) => {
  console.log(`Selected date: ${ data.date }, contributions: ${ data.count }`)
}
</script>