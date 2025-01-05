---
title: Shadcn Image
---

# 介绍

本文介绍了 ShadcnImage 组件的功能和用法。

## 源 (src)

::: raw

<CodeRunner title="源" codeKey="image-src">
    <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" />
</template>
```

:::

## 提示 (alt)

::: raw

<CodeRunner title="提示">
    <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" />
</template>
```

:::
## Image 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值', '列表']"
    :columns="[
        ['src', '图片的路径', 'string', '-', '-'],
        ['alt', '图片的提示', 'string', '-', '-']
    ]">
</ApiTable>

## Image 事件

<ApiTable title="事件"
    :headers="['事件', '描述', '参数']"
    :columns="[
        ['on-load', '加载时触发', '-'],
        ['on-error', '加载失败时触发', '-']
    ]">
</ApiTable>