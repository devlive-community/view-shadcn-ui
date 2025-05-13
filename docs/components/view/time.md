---
title: 时间 (Time)
---

# 介绍

本文档主要用于描述 `ShadcnTime` 组件的特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnTime />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTime />
</template>
```

:::

## 格式化 (format)

::: raw

<CodeRunner title="格式化">
    <ShadcnTime format="YYYY-MM-DD" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnTime format="YYYY-MM-DD" />
</template>
```

:::

## 时区 (timezone)

::: raw

<CodeRunner title="时区">
    <ShadcnTime timezone="America/New_York" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTime timezone="America/New_York" />
</template>
```

:::

## 时间 (Time) 属性

<ApiTable title="时间 (Time) 属性"
:headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['format', 'format value', 'string', 'HH:mm:ss'],
        ['timezone', 'timezone value', 'string', 'undefined']
    ]">
</ApiTable>

## 时间 (Time) 事件

<ApiTable title="时间 (Time) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '时间更改时触发', 'time: Date']
    ]">
</ApiTable>
