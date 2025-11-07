<template>
  <div class="table-container">
    <div class="mb-4 flex justify-end">
      <button @click="toggleDarkMode"
              :class="[
                'px-4 py-2 rounded-lg transition-colors',
                isDark
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              ]">
        {{ isDark ? '🌙 暗黑模式' : '☀️ 明亮模式' }}
      </button>
    </div>

    <DataTable :columns="columns"
               :data="datas"
               :height="500"
               :dark="isDark"
               :pagination="{ size: 10, options: [5, 10, 20, 50, 100] }"
               border>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ColumnProps } from "@/ui/data-table/types.ts";

interface TableData
{
  id: string
  title: string
  author: string
  description: string
  category: string
  date: string
  status: string
  views: number
  likes: number
  comments: number
  tags: string
  rating: number
  publisher: string
  language: string
  version: string
}

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

const columns = computed<ColumnProps[]>(() => [
  { key: 'id', label: 'ID', sortable: true, editable: true, resizable: true, fixed: 'left' },
  { key: 'title', label: '标题', editable: true, tooltip: true, fixed: 'left' },
  { key: 'author', label: '作者', editable: true, sortable: true },
  { key: 'description', label: '描述', width: '300', editable: true, tooltip: true, ellipsis: true },
  { key: 'category', label: '分类', sortable: true },
  { key: 'date', label: '发布日期', sortable: true, align: 'center' },
  { key: 'status', label: '状态', sortable: true, align: 'center' },
  {
    key: 'views',
    label: '浏览量',
    sortable: true,
    align: 'right',
    styleConfig: isDark.value ? {
      conditions: [
        {
          type: 'gt' as const,
          value: 1090,
          gradient: 'linear-gradient(270deg, rgba(30, 41, 59, 0), rgba(30, 41, 59, 1) 100%)',
          textColor: '#f87171',
          className: 'font-bold'
        },
        {
          type: 'between' as const,
          value: [120, 140],
          backgroundColor: '#422006',
          textColor: '#fbbf24'
        },
        {
          type: 'lte' as const,
          value: 120,
          backgroundColor: '#064e3b',
          textColor: '#34d399'
        }
      ],
      defaultBackgroundColor: '#1f2937'
    } : {
      conditions: [
        {
          type: 'gt' as const,
          value: 1090,
          gradient: 'linear-gradient(270deg, rgba(255, 239, 245, 0), rgba(255, 239, 245, 1) 100%)',
          textColor: '#dc2626',
          className: 'font-bold'
        },
        {
          type: 'between' as const,
          value: [120, 140],
          backgroundColor: '#fef3c7',
          textColor: '#d97706'
        },
        {
          type: 'lte' as const,
          value: 120,
          backgroundColor: '#d1fae5',
          textColor: '#059669'
        }
      ],
      defaultBackgroundColor: '#f3f4f6'
    } as any
  },
  { key: 'likes', label: '点赞数', sortable: true, align: 'right' },
  { key: 'comments', label: '评论数', sortable: true, align: 'right' },
  { key: 'tags', label: '标签', tooltip: true },
  { key: 'rating', label: '评分', sortable: true, align: 'center' },
  { key: 'publisher', label: '出版方', editable: true },
  { key: 'language', label: '语言', sortable: true, align: 'center', fixed: 'right' },
  { key: 'version', label: '版本', align: 'center', fixed: 'right' }
])

const data = ref<TableData[]>([
  {
    id: '1001',
    title: '深入理解 Vue.js 响应式系统的原理与实现',
    author: '张文豪',
    description: 'Vue.js 的响应式系统是其最核心的特性之一，本文将深入探讨其实现原理。从最基本的 Object.defineProperty 到 Proxy 的使用，从依赖收集到派发更新，从计算属性到监听器，我们会逐步分析响应式系统的每个环节。',
    category: '前端开发',
    date: '2024-01-15',
    status: '已发布',
    views: 15234,
    likes: 892,
    comments: 156,
    tags: 'Vue.js, 响应式, JavaScript',
    rating: 4.8,
    publisher: '技术出版社',
    language: '中文',
    version: 'v1.0'
  },
  {
    id: '1002',
    title: 'TypeScript 高级特性与实践指南',
    author: '李明',
    description: 'TypeScript 作为 JavaScript 的超集，为我们提供了强大的类型系统和面向对象编程的能力。本文将详细介绍 TypeScript 中的高级类型、泛型、装饰器等特性，并结合实际项目经验，探讨如何在大型项目中更好地应用这些特性。',
    category: '编程语言',
    date: '2024-01-20',
    status: '已发布',
    views: 23456,
    likes: 1243,
    comments: 234,
    tags: 'TypeScript, 类型系统, 泛型',
    rating: 4.9,
    publisher: '编程书店',
    language: '中文',
    version: 'v2.1'
  },
  {
    id: '1003',
    title: '现代前端工程化实践：从搭建到部署',
    author: '王建国',
    description: '随着前端项目的复杂度不断提升，工程化已经成为必不可少的环节。本文将从项目初始化开始，详细讲解现代前端工程化的各个方面，包括构建工具的选择与配置、代码规范的制定与执行、测试框架的搭建、CI/CD 流程的设计等。',
    category: '工程化',
    date: '2024-01-25',
    status: '已发布',
    views: 18765,
    likes: 967,
    comments: 189,
    tags: '工程化, Webpack, CI/CD',
    rating: 4.7,
    publisher: '开发者社区',
    language: '中文',
    version: 'v1.5'
  },
  {
    id: '1004',
    title: '微前端架构实践与性能优化',
    author: '赵云',
    description: '微前端作为一种新兴的架构模式，能够帮助我们更好地管理大型前端应用。本文将分享微前端的实践经验，包括框架选型、应用拆分策略、路由管理、通信机制等关键问题的解决方案。',
    category: '架构设计',
    date: '2024-01-30',
    status: '审核中',
    views: 12340,
    likes: 678,
    comments: 98,
    tags: '微前端, qiankun, 架构',
    rating: 4.6,
    publisher: '架构社区',
    language: '中文',
    version: 'v1.0'
  },
  {
    id: '1005',
    title: 'React 性能优化最佳实践',
    author: '陈思',
    description: '在 React 应用开发中，性能优化是一个永恒的主题。本文将深入探讨 React 应用的性能优化技巧，从组件渲染优化到状态管理，从代码分割到懒加载，从服务端渲染到缓存策略，我们会通过具体的案例来展示各种优化手段的效果和实现方法。',
    category: '性能优化',
    date: '2024-02-01',
    status: '已发布',
    views: 20987,
    likes: 1156,
    comments: 267,
    tags: 'React, 性能优化, SSR',
    rating: 4.9,
    publisher: 'React 中文网',
    language: '中文',
    version: 'v3.0'
  }
])

function generateRandomData(count: number = 100): TableData[]
{
  const result: TableData[] = []
  const statusList = ['已发布', '审核中', '草稿', '已下线']
  const categoryList = ['前端开发', '编程语言', '工程化', '架构设计', '性能优化', '算法', '数据库', '运维']
  const languageList = ['中文', '英文', '日文', '韩文']

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * data.value.length)
    const baseItem = data.value[randomIndex]

    result.push({
      id: String(1001 + i),
      title: baseItem.title,
      author: baseItem.author,
      description: baseItem.description,
      category: categoryList[Math.floor(Math.random() * categoryList.length)],
      date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      status: statusList[Math.floor(Math.random() * statusList.length)],
      views: Math.floor(Math.random() * 50000),
      likes: Math.floor(Math.random() * 2000),
      comments: Math.floor(Math.random() * 500),
      tags: baseItem.tags,
      rating: Number((Math.random() * 2 + 3).toFixed(1)),
      publisher: baseItem.publisher,
      language: languageList[Math.floor(Math.random() * languageList.length)],
      version: `v${Math.floor(Math.random() * 5)}.${Math.floor(Math.random() * 10)}`
    })
  }

  return result
}

const datas = ref<TableData[]>(generateRandomData(100))
</script>

<style scoped>
.table-container {
  padding: 20px;
  transition: background-color 0.3s ease;
}
</style>