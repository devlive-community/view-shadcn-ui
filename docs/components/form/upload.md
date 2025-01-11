---
title: 上传 (Upload)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnUpload` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" />
</template>
```

:::

## 多选 (multiple)

::: raw

<CodeRunner title="多选 (multiple)">
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" multiple />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" multiple />
</template>
```

:::

## 禁用 (disabled)

::: raw

<CodeRunner title="禁用 (disabled)">
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" disabled />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" disabled />
</template>
```

:::

## 上传 (Upload) 属性

<ApiTable title="上传 (Upload) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['accept', '接受文件类型，按英文逗号拆分', 'string', '*'],
        ['description', '组件的描述', 'string', ''],
        ['multiple', '是否支持多选', 'boolean', 'false'],
        ['disabled', '是否禁用', 'boolean', 'false'],
        ['action', '上传的地址', 'string', ''],
        ['headers', '上传的请求头', 'object', '{}'],
        ['data', '上传的数据', 'object', '{}'],
        ['name', '上传的文件名', 'string', 'file'],
        ['withCredentials', '是否随请求一起发送 Cookie 或授权信息', 'boolean', 'false'],
        ['beforeUpload', '上传之前的钩子', 'function', '-'],
    ]">
</ApiTable>

## 上传 (Upload) 插槽

<ApiTable title="上传 (Upload) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['title', '组件的标题'],
        ['description', '组件的描述'],
    ]">
</ApiTable>

## 上传 (Upload) 事件

<ApiTable title="上传 (Upload) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:files', '更改文件时触发', 'File\[\]'],
        ['on-change', '更改文件时触发', 'File\[\]'],
        ['on-success', '当文件上传成功时触发', 'File\[\]'],
        ['on-error', '当文件上传失败时触发', 'File\[\]'],
        ['on-progress', '文件上传时触发(上传进度)', 'ProgressEvent, File'],
    ]">
</ApiTable>