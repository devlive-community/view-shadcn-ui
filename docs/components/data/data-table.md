---
title: 数据表格 (Data Table)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnDataTable` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法" codeKey="data-table-usage">
    <ShadcnDataTable :columns="columns" :data="data">
    </ShadcnDataTable>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnDataTable :columns="columns" :data="data">
    </ShadcnDataTable>
</template>
```

:::

## 尺寸 (size)

::: raw

<CodeRunner title="尺寸 (size)" codeKey="data-table-size">
  <div class="space-y-4">
    <div>
      <ShadcnDivider orientation="left">小尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns"
                       :data="data"
                       size="small">
      </ShadcnDataTable>
    </div>
    <div>
      <ShadcnDivider orientation="left">默认尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns" :data="data">
      </ShadcnDataTable>
    </div>
    <div>
      <ShadcnDivider orientation="left">大尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns"
                       :data="data" 
                       size="large">
      </ShadcnDataTable>
    </div>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="space-y-4">
    <div>
      <ShadcnDivider orientation="left">小尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns"
                       :data="data"
                       size="small">
      </ShadcnDataTable>
    </div>
    <div>
      <ShadcnDivider orientation="left">默认尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns" :data="data">
      </ShadcnDataTable>
    </div>
    <div>
      <ShadcnDivider orientation="left">大尺寸</ShadcnDivider>
      <ShadcnDataTable :columns="columns"
                       :data="data"
                       size="large">
      </ShadcnDataTable>
    </div>
  </div>
</template>
```

:::

## 高度 (height)

::: raw

<CodeRunner title="高度 (height)" codeKey="data-table-height">
    <ShadcnDataTable :columns="columns" :data="data" height="200">
    </ShadcnDataTable>
</CodeRunner>

:::

## 宽度 (width)

::: raw

<CodeRunner title="宽度 (width)" codeKey="data-table-width">
    <ShadcnDataTable :columns="columns" :data="data" width="400">
    </ShadcnDataTable>
</CodeRunner>

:::

## 列排序 (sort)

::: raw

<CodeRunner title="列排序 (sort)" codeKey="data-table-sort" warning="只需要在列上添加 sortable 属性即可，多列排序需要按住 Shift 键">
    <ShadcnDataTable :columns="sortColumns" :data="data">
    </ShadcnDataTable>
</CodeRunner>

:::

## 列省略 (ellipsis)

::: raw

<CodeRunner title="列省略 (ellipsis)" codeKey="data-table-ellipsis" warning="只需要在列上添加 ellipsis 属性即可，默认会显示省略号">
    <ShadcnDataTable :columns="ellipsisColumns" :data="data">
    </ShadcnDataTable>
</CodeRunner>

:::

## 列宽度 (width)

::: raw

<CodeRunner title="列宽度 (width)" codeKey="data-table-width" warning="只需要在列上添加 width 属性即可">
    <ShadcnDataTable :columns="widthColumns" :data="data">
    </ShadcnDataTable>
</CodeRunner>

:::

## 列提示 (tooltip)

::: raw

<CodeRunner title="列提示 (tooltip)" codeKey="data-table-tooltip" warning="只需要在列上添加 tooltip 属性即可">
    <ShadcnDataTable :columns="tooltipColumns" :data="data">
    </ShadcnDataTable>
</CodeRunner>

:::

## 列对齐方式 (align)

::: raw

<CodeRunner title="列对齐方式 (align)" codeKey="data-table-align" warning="只需要在列上添加 align 属性即可">
    <ShadcnDataTable :columns="alignColumns" :data="data">
    </ShadcnDataTable>
</CodeRunner>

:::

## 列宽度调整 (resizable)

::: raw

<CodeRunner title="列宽度调整 (resizable)" codeKey="data-table-resizable" warning="只需要在列上添加 resizable 属性即可">
    <ShadcnDataTable :columns="resizableColumns" :data="data">
    </ShadcnDataTable>
</CodeRunner>

:::

## 数据表格 (Data Table) 属性

<ApiTable title="数据表格 (Data Table) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['columns', '表格列数据', '\[\]', '\[\]', '-'],
        ['data', '表格数据', '\[\]', '\[\]', '-'],
        ['size', '表格尺寸', 'enum', 'default', 'default | small | large'],
        ['height', '表格高度，支持输入数字和字符串会自动计算，如果是数字的情况时，单位为 px', 'string | number', 'auto', '-'],
        ['width', '表格宽度，支持输入数字和字符串会自动计算，如果是数字的情况时，单位为 px', 'string | number', '100%', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="数据表格列 (Data Table Column) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['key', '列的 key 值', 'string', '-', '-'],
        ['label', '列的标签', 'string', '-', '-'],
        ['sort', '列的排序状态', 'enum', '-', 'asc | desc'],
        ['sortable', '列是否可排序', 'boolean', 'false', '-'],
        ['ellipsis', '列内容是否省略，超出时显示省略号', 'boolean', 'true', '-'],
        ['width', '宽度，支持输入数字和字符串会自动计算，如果是数字的情况时，单位为 px', 'string | number', 'auto', '-'],
        ['tooltip', '列内容是否显示提示', 'boolean', 'false', '-'],
        ['align', '对齐方式，可选值为', 'enum', 'left', 'left | right | center'],
        ['resizable', '列是否可调整宽度', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 数据表格 (Data Table) 事件

<ApiTable title="数据表格 (Data Table) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-sort', '当表格排序发生变化时触发', '排序列的列表'],
        ['on-cell-click', '当单元格被点击时触发', '行索引，列的 key 值，行数据'],
        ['on-resizable', '当列宽度发生变化时触发', '当前列的信息，调整后列的宽度'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { key: 'title', label: '标题' },
  { key: 'author', label: '作者' },
  { key: 'description', label: '描述' },
  { key: 'category', label: '分类' },
  { key: 'date', label: '发布日期' }
])

const sortColumns = ref([
  { key: 'title', label: '标题' },
  { key: 'author', label: '作者', sortable: true },
  { key: 'description', label: '描述' },
  { key: 'category', label: '分类', sortable: true },
  { key: 'date', label: '发布日期', sortable: true }
])

const ellipsisColumns = ref([
  { key: 'title', label: '标题' },
  { key: 'author', label: '作者' },
  { key: 'description', label: '描述', ellipsis: false },
  { key: 'category', label: '分类' },
  { key: 'date', label: '发布日期' }
])

const widthColumns = ref([
  { key: 'title', label: '标题', width: 100 },
  { key: 'author', label: '作者' },
  { key: 'description', label: '描述', width: 500 },
  { key: 'category', label: '分类' },
  { key: 'date', label: '发布日期' }
])

const tooltipColumns = ref([
  { key: 'title', label: '标题' },
  { key: 'author', label: '作者' },
  { key: 'description', label: '描述', tooltip: true },
  { key: 'category', label: '分类' },
  { key: 'date', label: '发布日期' }
])

const alignColumns = ref([
  { key: 'title', label: '标题' },
  { key: 'author', label: '作者' },
  { key: 'description', label: '描述' },
  { key: 'category', label: '分类' },
  { key: 'date', label: '发布日期', align: 'center' }
])

const resizableColumns = ref([
  { key: 'title', label: '标题' },
  { key: 'author', label: '作者' },
  { key: 'description', label: '描述' },
  { key: 'category', label: '分类' },
  { key: 'date', label: '发布日期', resizable: true }
])

const data = ref([
  {
    title: '深入理解 Vue.js 响应式系统的原理与实现',
    author: '张文豪',
    description: 'Vue.js 的响应式系统是其最核心的特性之一，本文将深入探讨其实现原理。从最基本的 Object.defineProperty 到 Proxy 的使用，从依赖收集到派发更新，从计算属性到监听器，我们会逐步分析响应式系统的每个环节。同时也会讨论 Vue 3 中新的响应式系统的改进和优化，以及如何在实际开发中更好地利用响应式特性。',
    category: '前端开发',
    date: '2024-01-15'
  },
  {
    title: 'TypeScript 高级特性与实践指南',
    author: '李明',
    description: 'TypeScript 作为 JavaScript 的超集，为我们提供了强大的类型系统和面向对象编程的能力。本文将详细介绍 TypeScript 中的高级类型、泛型、装饰器等特性，并结合实际项目经验，探讨如何在大型项目中更好地应用这些特性。我们还会分享一些在实际开发中遇到的类型设计难题及其解决方案，帮助开发者更好地理解和使用 TypeScript。',
    category: '编程语言',
    date: '2024-01-20'
  },
  {
    title: '现代前端工程化实践：从搭建到部署',
    author: '王建国',
    description: '随着前端项目的复杂度不断提升，工程化已经成为必不可少的环节。本文将从项目初始化开始，详细讲解现代前端工程化的各个方面，包括构建工具的选择与配置、代码规范的制定与执行、测试框架的搭建、CI/CD 流程的设计等。通过实际案例，展示如何搭建一个完整的前端工程化体系，提高开发效率和代码质量。',
    category: '工程化',
    date: '2024-01-25'
  },
  {
    title: '微前端架构实践与性能优化',
    author: '赵云',
    description: '微前端作为一种新兴的架构模式，能够帮助我们更好地管理大型前端应用。本文将分享微前端的实践经验，包括框架选型、应用拆分策略、路由管理、通信机制等关键问题的解决方案。同时，我们还会深入讨论微前端架构下的性能优化策略，包括资源加载优化、预加载策略、缓存管理等，帮助开发者构建高性能的微前端应用。',
    category: '架构设计',
    date: '2024-01-30'
  },
  {
    title: 'React 性能优化最佳实践',
    author: '陈思',
    description: '在 React 应用开发中，性能优化是一个永恒的主题。本文将深入探讨 React 应用的性能优化技巧，从组件渲染优化到状态管理，从代码分割到懒加载，从服务端渲染到缓存策略，我们会通过具体的案例来展示各种优化手段的效果和实现方法。同时也会介绍一些性能检测和分析工具，帮助开发者更好地发现和解决性能问题。',
    category: '性能优化',
    date: '2024-02-01'
  }
])

const handleChange = () => {
  console.log('表格数据发生变化')
}
</script>