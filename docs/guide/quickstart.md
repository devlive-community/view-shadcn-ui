---
title: 快速入门
---

# 快速入门

## 引用方式

View Shadcn UI 支持两种方式引入组件。

- 全局引入
- 按需引入

## 全局引入

View Shadcn UI 支持全局引入组件。 通常，入口文件 `main.ts` 中的配置如下：

```ts
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 引入 View Shadcn UI
import ViewShadcnUI from 'view-shadcn-ui'
app.use(ViewShadcnUI)
```

## 按需引入

View Shadcn UI 支持按需引入组件。

```ts
import { ShadcnButton } from 'view-shadcn-ui'
app.component('ShadcnButton', ShadcnButton)
```

## 特别提醒

无论是全局介绍还是按需引用，都无需在 main.ts 中添加 `import 'view-shadcn-ui/dist/view-shadcn-ui.min.css'`。默认情况下，该组件在编译过程中已导入样式。

## 组件使用

```vue
<template>
    <ShadcnButton>Button</ShadcnButton>
</template>

<script setup>
    import { ShadcnButton } from 'view-shadcn-ui'
</script>
```
