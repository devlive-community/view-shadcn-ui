---
title: isLightColor
---

# Introduction

This document is mainly used to describe some features and usage of the isLightColor utils.

## Usage

```typescript
import { isLightColor } from '@/utils/common.ts'

isLightColor('#fff') // => true
isLightColor('#000') // => false
```

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['color', 'The color to check', 'string', '-'],
    ]">
</ApiTable>
