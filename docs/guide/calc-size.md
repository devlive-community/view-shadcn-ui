---
title: 计算尺寸 (calcSize)
---

# 介绍

<br />

本文档主要用于描述 `calcSize` 函数的一些功能和用法。

## 用法

```typescript
import { calcSize } from 'view-shadcn-ui'

calcSize(100) // => "100px"
calcSize('2rem') // => "2rem"
calcSize(100, { defaultUnit: 'rem' }) // => "100rem"
calcSize('auto') // => "auto"
```

## 参数

<ApiTable title="参数"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['defaultUnit', '默认单位', 'string', 'px'],
        ['allowNegative', '是否允许负值', 'boolean', 'true'],
        ['min', '最小值', 'number', 'Number.NEGATIVE_INFINITY'],
        ['max', '最大值', 'number', 'Number.POSITIVE_INFINITY'],
        ['decimals', '小数位数', 'number', '2'],
        ['fallback', 'fallback 值，计算失败时返回', 'string', 'auto'],
    ]">
</ApiTable>