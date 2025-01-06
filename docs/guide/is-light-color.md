---
title: 是否浅色 (isLightColor)
---

# 介绍

<br />

本文档主要用于描述 `isLightColor` 函数的一些功能和用法。

## 用法

```typescript
import { isLightColor } from 'view-shadcn-ui'

isLightColor('#fff') // => true
isLightColor('#000') // => false
```

## 参数

<ApiTable title="参数"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['color', '需要检查的颜色，格式为 HEX/RGB/HSL', 'string', '-'],
    ]">
</ApiTable>
