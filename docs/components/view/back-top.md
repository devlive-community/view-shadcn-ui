---
title: 返回顶部 (Back Top)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnBackTop` 组件的一些特性和使用方法。

## 用法

::: raw

<CodeRunner title="用法">
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

## 返回顶部 (Back Top) 属性

<ApiTable title="返回顶部 (Back Top) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['visibilityHeight', '到达该高度后显示返回顶部按钮', 'number', '200'],
        ['right', '距离右侧的距离', 'number', '40'],
        ['bottom', '距离底部的距离', 'number', '40'],
        ['duration', '动画持续时间', 'number', '500'],
    ]">
</ApiTable>

## 返回顶部 (Back Top) 事件

<ApiTable title="返回顶部 (Back Top) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['click', '组件点击事件', 'event'],
    ]">
</ApiTable>
