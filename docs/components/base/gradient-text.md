---
tite: 渐变文本 (Gradient Text)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnGradientText` 组件的一些功能和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnGradientText>This is a gradient text</ShadcnGradientText>
    <br/>
    <ShadcnGradientText from="red" to="blue" deg="200">This is a gradient text</ShadcnGradientText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnGradientText>This is a gradient text</ShadcnGradientText>
  <br/>
  <ShadcnGradientText from="red" to="blue" deg="200">This is a gradient text</ShadcnGradientText>
</template>
```

:::

## 配置 (options)

::: raw

<CodeRunner title="配置">
    <ShadcnGradientText options="45deg, red 0 50%, blue 50% 100%">This is a gradient text</ShadcnGradientText>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnGradientText options="45deg, red 0 50%, blue 50% 100%">This is a gradient text</ShadcnGradientText>
</template>
```

:::

## 渐变文本 (Gradient Text) 属性

<ApiTable title="渐变文本 (Gradient Text) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['from', '渐变文本的起始颜色', 'string', 'red'],
        ['to', '渐变文本的结束颜色', 'string', 'blue'],
        ['deg', '渐变文本的程度', 'number', '100'],
        ['options', '渐变文本的选项，例如: <code>45deg, red 0 50%, blue 50% 100%</code>', 'string', '-'],
    ]">
</ApiTable>

## 渐变文本 (Gradient Text) 插槽

<ApiTable title="渐变文本 (Gradient Text) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '文本插槽'],
    ]">
</ApiTable>