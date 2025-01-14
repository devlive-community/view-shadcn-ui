<template>
  <div class="p-32 space-y-4">
    <ShadcnDataTable :columns="columns"
                     :data="[]"
                     size="small"
                     height="300"
                     row-selection="multipleRow"
                     :pagination="{ size: 20, options: [5, 10, 20, 50, 100] }"
                     :column-move="true"
                     @on-cell-click="handleCellClick"
                     @on-resizable="handleResizable"
                     @on-page-change="console.log('页码改变' + $event)"
                     @on-size-change="console.log('每页条数改变' + $event)"
                     @on-row-select="console.log('选中的数据条数 ' + $event?.selectedRows.length)"
                     @on-column-move="console.log('列移动 ' + JSON.stringify($event))">
    </ShadcnDataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setLocale } from '@/utils/locale.ts'

setLocale('zh-CN')

const columns = ref([
  { key: 'index', label: '#', sortable: true, width: 50, align: 'center' },
  { key: 'title', label: '标题' },
  { key: 'author', label: '作者', sortable: true, resizable: true },
  { key: 'description', label: '描述', width: 500, tooltip: true, resizable: true },
  { key: 'category', label: '分类', sortable: true, align: 'center' },
  { key: 'date', label: '发布日期', sortable: true }
])

const data = ref([
  {
    index: 1,
    title: '深入理解 Vue.js 响应式系统的原理与实现',
    author: '张文豪',
    description: 'Vue.js 的响应式系统是其最核心的特性之一，本文将深入探讨其实现原理。从最基本的 Object.defineProperty 到 Proxy 的使用，从依赖收集到派发更新，从计算属性到监听器，我们会逐步分析响应式系统的每个环节。同时也会讨论 Vue 3 中新的响应式系统的改进和优化，以及如何在实际开发中更好地利用响应式特性。',
    category: '前端开发',
    date: '2024-01-15'
  },
  {
    index: 2,
    title: 'TypeScript 高级特性与实践指南',
    author: '李明',
    description: 'TypeScript 作为 JavaScript 的超集，为我们提供了强大的类型系统和面向对象编程的能力。本文将详细介绍 TypeScript 中的高级类型、泛型、装饰器等特性，并结合实际项目经验，探讨如何在大型项目中更好地应用这些特性。我们还会分享一些在实际开发中遇到的类型设计难题及其解决方案，帮助开发者更好地理解和使用 TypeScript。',
    category: '编程语言',
    date: '2024-01-20'
  },
  {
    index: 3,
    title: '现代前端工程化实践：从搭建到部署',
    author: '王建国',
    description: '随着前端项目的复杂度不断提升，工程化已经成为必不可少的环节。本文将从项目初始化开始，详细讲解现代前端工程化的各个方面，包括构建工具的选择与配置、代码规范的制定与执行、测试框架的搭建、CI/CD 流程的设计等。通过实际案例，展示如何搭建一个完整的前端工程化体系，提高开发效率和代码质量。',
    category: '工程化',
    date: '2024-01-25'
  },
  {
    index: 4,
    title: '微前端架构实践与性能优化',
    author: '赵云',
    description: '微前端作为一种新兴的架构模式，能够帮助我们更好地管理大型前端应用。本文将分享微前端的实践经验，包括框架选型、应用拆分策略、路由管理、通信机制等关键问题的解决方案。同时，我们还会深入讨论微前端架构下的性能优化策略，包括资源加载优化、预加载策略、缓存管理等，帮助开发者构建高性能的微前端应用。',
    category: '架构设计',
    date: '2024-01-30'
  },
  {
    index: 5,
    title: 'React 性能优化最佳实践',
    author: '陈思',
    description: '在 React 应用开发中，性能优化是一个永恒的主题。本文将深入探讨 React 应用的性能优化技巧，从组件渲染优化到状态管理，从代码分割到懒加载，从服务端渲染到缓存策略，我们会通过具体的案例来展示各种优化手段的效果和实现方法。同时也会介绍一些性能检测和分析工具，帮助开发者更好地发现和解决性能问题。',
    category: '性能优化',
    date: '2024-02-01'
  }
])

for (let i = 0; i < 1000; i++) {
  const randomIndex = Math.floor(Math.random() * data.value.length)
  const item = { ...data.value[randomIndex] }
  item.index = data.value.length + 1
  data.value.push(item)
}

const handleCellClick = (playload: { rowIndex: number; col: string; row: any }) => {
  if (playload) {
    console.log(`点击了第 ${ playload.rowIndex + 1 } 行，${ playload.col } 列`)
  }
}

const handleResizable = (column: any, width: number) => {
  console.log(`调整了 ${ column.label } 列的宽度为 ${ width }`)
}
</script>