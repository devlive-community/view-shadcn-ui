---
title: 获取悬停颜色 (getHoverColor)
---

# 介绍

<br />

本文档主要用于描述 `getHoverColor` 函数的一些功能和用法。

## 用法

```typescript
import { getHoverColor } from 'view-shadcn-ui' 

getHoverColor('#fff') // => '#000'
getHoverColor('#000') // => '#fff'
```

## 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['color', '指定的颜色，支持 HEX/RGB/HSL 格式', 'string', '-'],
    ]">
</ApiTable>