---
title: getContrastTextColor
---

# Introduction

This document is mainly used to describe some features and usage of the getContrastTextColor utils.

## Usage

```typescript
import { getContrastTextColor } from '@/utils/common.ts'

getContrastTextColor('#fff') // => '#000'
getContrastTextColor('#000') // => '#fff'
```

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['color', 'The color to check', 'string', '-'],
    ]">
</ApiTable>
