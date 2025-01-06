---
title: Shadcn BackTop
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnBackTop component.

## Usage

::: raw

<CodeRunner title="Usage">
  <div class="p-8">
    <div v-for="n in 3" :key="n" class="mb-8 p-4 bg-gray-100 rounded">
      <h2 class="text-xl font-bold mb-2">Section {{ n }}</h2>
      <p>This is test content。</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <ShadcnBackTop />
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="p-8">
    <div v-for="n in 20" :key="n" class="mb-8 p-4 bg-gray-100 rounded">
      <h2 class="text-xl font-bold mb-2">Section {{ n }}</h2>
      <p>This is test content。</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    
    <ShadcnBackTop />
  </div>
</template>
```

:::

## Condat

## BackTop Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['visibilityHeight', 'The visibility height of the back top', 'number', '200'],
        ['right', 'The right position of the back top', 'number', '40'],
        ['bottom', 'The bottom position of the back top', 'number', '40'],
        ['duration', 'The duration of the back top animation', 'number', '500'],
    ]">
</ApiTable>

## BackTop Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['click', 'Triggered when the back top is clicked', 'event'],
    ]">
</ApiTable>
