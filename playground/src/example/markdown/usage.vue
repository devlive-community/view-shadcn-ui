<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">基础用法 - 预览模式</h3>
      <ShadcnMarkdown v-model="basicContent" mode="preview"/>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">编辑模式</h3>
      <ShadcnMarkdown v-model="editContent" mode="edit"/>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">分屏模式</h3>
      <ShadcnMarkdown v-model="splitContent" mode="split"/>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 rounded-lg bg-gray-900">
        <ShadcnMarkdown v-model="darkContent" mode="split" dark/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnMarkdown } from '@/ui/markdown'

const basicContent = ref(`# 欢迎使用 ShadcnMarkdown

这是一个基于 **marked** 的 Markdown 编辑器组件。

## 主要功能

- 支持三种显示模式：**预览**、**编辑**、**分屏**
- 完整的 Markdown 语法支持
- 暗黑/浅色主题
- 液态玻璃效果`)

const editContent = ref(`# 编辑模式

在这里输入你的 Markdown 内容...

## 支持的语法

- **粗体**
- *斜体*
- \`行内代码\`
- [链接](https://example.com)`)

const splitContent = ref(`# 分屏模式

左侧编辑，右侧实时预览。

## 代码示例

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`
}
\`\`\`

## 列表

1. 第一项
2. 第二项
3. 第三项`)

const darkContent = ref(`# 暗黑模式

支持在**暗黑模式**下优雅地编辑和预览 Markdown 内容。

> 这是一个引用文本

\`\`\`python
def hello():
    print("Hello, World!")
\`\`\``)
</script>
