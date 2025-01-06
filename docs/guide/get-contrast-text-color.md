---
title: 获取对比文本颜色 (getContrastTextColor)
---

# 介绍

<br />

本文档主要用于描述 `getContrastTextColor` 函数的一些功能和用法。

## 用法

```typescript
import { getContrastTextColor } from 'view-shadcn-ui' 

getContrastTextColor('#fff') // => '#000'
getContrastTextColor('#000') // => '#fff'
```

## 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['color', '需要对比的颜色，格式为 HEX/RGB/HSL', 'string', '-'],
    ]">
</ApiTable>