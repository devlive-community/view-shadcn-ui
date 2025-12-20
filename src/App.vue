<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnMarkdown - 液态玻璃效果（分屏模式）</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
          <ShadcnMarkdown v-model="markdownContent" mode="split" glass :dark="isDark"/>
        </div>
      </div>

      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnMarkdown - 编辑模式</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-purple-900 to-pink-900' : 'bg-gradient-to-r from-purple-400 to-pink-400']">
          <ShadcnMarkdown v-model="editContent" mode="edit" glass :dark="isDark"/>
        </div>
      </div>

      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnMarkdown - 预览模式</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-green-900 to-teal-900' : 'bg-gradient-to-r from-green-400 to-teal-400']">
          <ShadcnMarkdown v-model="previewContent" mode="preview" glass :dark="isDark"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnMarkdown } from "@/ui/markdown";

const isDark = ref(false)
const markdownContent = ref(`# Markdown 编辑器示例

这是一个基于 **marked** 的 Markdown 编辑器组件。

## 功能特性

- 支持**编辑**、**预览**和**分屏**三种模式
- 完整的 Markdown 语法支持
- 支持液态玻璃效果
- 支持暗黑/浅色主题

## 代码示例

\`\`\`javascript
function hello() {
  console.log('Hello World!')
}
\`\`\`

## 列表

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

- 无序列表 A
- 无序列表 B
- 无序列表 C`)

const editContent = ref(`# 编辑模式

在这里输入你的 Markdown 内容...`)

const previewContent = ref(`# 预览模式

这是一个**只读的预览模式**，展示渲染后的 Markdown 内容。

> 引用文本示例

支持各种 Markdown 语法，包括：

- **粗体**
- *斜体*
- \`代码\`
- [链接](https://example.com)`)
</script>