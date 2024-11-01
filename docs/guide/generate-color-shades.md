---
title: generateColorShades
---

# Introduction

This document is mainly used to describe some features and usage of the generateColorShades utils.

## Usage

```typescript
import { generateColorShades } from '@/utils/common.ts'

generateColorShades('#fff')
```

## Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['color', 'The color to check', 'string', '-'],
    ]">
</ApiTable>

## Return

<ApiTable title="Return"
    :headers="['Attribute', 'Description', 'Type']"
    :columns="[
        ['base', 'The base color', 'string'],
        ['hover', 'The hover color', 'string'],
        ['border', 'The border color', 'string'],
        ['light', 'The light color', 'string'],
        ['dark', 'The dark color', 'string'],
        ['disabled', 'The disabled color', 'string'],
        ['background', 'The background color', 'string'],
    ]">
</ApiTable>
