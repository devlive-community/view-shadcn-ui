---
title: Shadcn Upload
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnUpload component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" />
</template>
```

:::

## Multiple

::: raw

<CodeRunner title="Multiple Upload">
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" multiple />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" multiple />
</template>
```

:::

## Disabled

::: raw

<CodeRunner title="Disabled Upload">
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" disabled />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnUpload action="//jsonplaceholder.typicode.com/posts/" disabled />
</template>
```

:::

## Upload Props

<ApiTable title="Upload Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['accept', 'Accept file types, split by ,', 'String', '*'],
        ['description', 'The description of the upload', 'String', ''],
        ['multiple', 'Whether to allow multiple selection', 'Boolean', 'false'],
        ['disabled', 'Whether the upload is disabled', 'Boolean', 'false'],
        ['action', 'The action of the upload', 'String', ''],
        ['headers', 'The headers of the upload', 'Object', '{}'],
        ['data', 'The data of the upload', 'Object', '{}'],
        ['name', 'The name of the upload', 'String', 'file'],
        ['withCredentials', 'Whether to send cookies with the request', 'Boolean', 'false'],
        ['beforeUpload', 'The before upload function', 'Function', '-'],
    ]">
</ApiTable>

## Upload Slots

<ApiTable title="Upload Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['title', 'The title of the upload'],
        ['description', 'The description of the upload'],
    ]">
</ApiTable>

## Upload Events

<ApiTable title="Upload Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['update:files', 'Triggered when the file is changed', 'File\[\]'],
        ['on-change', 'Triggered when the file is changed', 'File\[\]'],
        ['on-success', 'Triggered when the file is uploaded successfully', 'File\[\]'],
        ['on-error', 'Triggered when the file upload fails', 'File\[\]'],
        ['on-progress', 'Triggered when the file is uploading', 'ProgressEvent, File'],
    ]">
</ApiTable>
