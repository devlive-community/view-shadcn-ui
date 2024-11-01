---
title: calcSize
---

# Introduction

This document is mainly used to describe some features and usage of the calcSize utils.

## Usage

```typescript
import { calcSize } from '@/utils/common.ts'

calcSize(100) // => "100px"
calcSize('2rem') // => "2rem"
calcSize(100, { defaultUnit: 'rem' }) // => "100rem"
calcSize('auto') // => "auto"
```

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['defaultUnit', 'The default unit of the size', 'string', 'px'],
        ['allowNegative', 'Whether to allow negative values', 'boolean', 'true'],
        ['min', 'The minimum value', 'number', 'Number.NEGATIVE_INFINITY'],
        ['max', 'The maximum value', 'number', 'Number.POSITIVE_INFINITY'],
        ['decimals', 'The number of decimal places', 'number', '2'],
        ['fallback', 'The fallback value', 'string', 'auto'],
    ]">
</ApiTable>
