---
title: 生成颜色色调 (generateColorShades)
---

# 介绍

<br />

本文档主要用于描述 `generateColorShades` 函数的一些功能和用法。

## 用法

```typescript
import { generateColorShades } from 'view-shadcn-ui'

generateColorShades('#fff')
```

## 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['color', '指定的颜色，支持 HEX/RGB/HSL 格式', 'string', '-'],
    ]">
</ApiTable>

## 返回值

<ApiTable title="返回值"
    :headers="['属性', '描述', '类型']"
    :columns="[
        ['base', '基础颜色', 'string'],
        ['hover', '悬停颜色', 'string'],
        ['border', '边框颜色', 'string'],
        ['light', '浅色', 'string'],
        ['dark', '深色', 'string'],
        ['disabled', '禁用颜色', 'string'],
        ['background', '背景颜色', 'string'],
    ]">
</ApiTable>