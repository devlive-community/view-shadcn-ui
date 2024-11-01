---
title: getHoverColor
---

# Introduction

This document is mainly used to describe some features and usage of the getHoverColor utils.

## Usage

```typescript
import { getHoverColor } from '@/utils/common.ts'

getHoverColor('#fff') // => '#000'
getHoverColor('#000') // => '#fff'
```

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['color', 'The color to check', 'string', '-'],
    ]">
</ApiTable>
