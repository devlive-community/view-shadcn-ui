<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 浅色模式（分屏）</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
        <ShadcnMarkdown v-model="lightSplitContent" mode="split" glass/>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 暗黑模式（分屏）</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-900 to-indigo-900">
        <ShadcnMarkdown v-model="darkSplitContent" mode="split" glass dark/>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 编辑模式（紫色背景）</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400">
        <ShadcnMarkdown v-model="editContent" mode="edit" glass/>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 预览模式（绿色暗黑背景）</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-green-900 to-teal-900">
        <ShadcnMarkdown v-model="previewContent" mode="preview" glass dark/>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果 - 橙色渐变背景</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-orange-400 to-red-400">
        <ShadcnMarkdown v-model="richContent" mode="split" glass height="500px"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnMarkdown } from '@/ui/markdown'

const lightSplitContent = ref(`# 液态玻璃效果

这是一个支持**液态玻璃效果**的 Markdown 编辑器。

## 特性

- 毛玻璃背景模糊
- 饱和度增强
- 优雅的视觉效果`)

const darkSplitContent = ref(`# 暗黑模式液态玻璃

液态玻璃效果在**暗黑模式**下同样美观。

## 代码示例

\`\`\`typescript
interface User {
  name: string
  age: number
}
\`\`\``)

const editContent = ref(`# 编辑模式

在这里输入你的 Markdown 内容...

支持完整的 Markdown 语法！`)

const previewContent = ref(`# 预览模式

这是一个**只读的预览模式**。

> 引用文本示例

## 列表

- 项目 A
- 项目 B
- 项目 C`)

const richContent = ref(`# Markdown 完整功能展示

## 文本格式

支持**粗体**、*斜体*、\`行内代码\`和~~删除线~~。

## 代码块

\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10))
\`\`\`

## 引用

> 这是一个引用文本示例
> 可以有多行

## 链接和图片

访问 [GitHub](https://github.com) 了解更多。

## 有序列表

1. 第一项
2. 第二项
3. 第三项

## 无序列表

- 项目 A
  - 子项 A1
  - 子项 A2
- 项目 B
- 项目 C

## 表格

| 功能 | 支持 |
|------|------|
| 编辑 | ✅ |
| 预览 | ✅ |
| 分屏 | ✅ |
| 液态玻璃 | ✅ |`)
</script>
