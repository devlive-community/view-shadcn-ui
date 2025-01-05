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

## 宽度 (width)

::: raw

<CodeRunner title="宽度" codeKey="image-width">
    <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" width="300" />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" width="300" />
</template>
```

:::

## 高度 (height)

::: raw

<CodeRunner title="高度" codeKey="image-height">
    <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" height="300" />
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" height="300" />
</template>
```

:::

## 填充方式 (fit)

::: raw

<CodeRunner title="填充方式" codeKey="image-fit">
    <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" fit="cover"/>
    <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" fit="contain"/>
    <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" fit="fill"/>
    <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" fit="none"/>
    <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" fit="scale-down"/>
</CodeRunner>

:::

::: details 显示代码

```vue
<template>
  <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" fit="cover"/>
  <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" fit="contain"/>
  <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" fit="fill"/>
  <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" fit="none"/>
  <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" fit="scale-down"/>
</template>
```

:::

## Image 属性

<ApiTable title="属性"
    :headers="['属性', '描述', '类型', '默认值', '列表']"
    :columns="[
        ['src', '图片的路径', 'string', '-', '-'],
        ['alt', '图片的提示', 'string', '-', '-'],
        ['width', '图片的宽度', 'string | number', '200', '-'],
        ['height', '图片的高度', 'string | number', '200', '-'],
        ['fit', '图片的填充方式', 'enum', 'cover', 'cover | contain | fill | none | scale-down'],
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