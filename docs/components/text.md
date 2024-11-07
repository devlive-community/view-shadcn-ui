---
title: Shadcn Text
---

This document is mainly used to describe some features and usage of the ShadcnText component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnText type="default">Default</ShadcnText>
    <ShadcnText type="primary">Primary</ShadcnText>
    <ShadcnText type="success">Success</ShadcnText>
    <ShadcnText type="warning">Warning</ShadcnText>
    <ShadcnText type="error">Error</ShadcnText>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnText type="default">Default</ShadcnText>
    <ShadcnText type="primary">Primary</ShadcnText>
    <ShadcnText type="success">Success</ShadcnText>
    <ShadcnText type="warning">Warning</ShadcnText>
    <ShadcnText type="error">Error</ShadcnText>
</template>
```

:::

## Text Props

<ApiTable title="Text Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['type', 'The type of the text', 'enum', 'default', 'default | primary | success | warning | error'],
    ]">
</ApiTable>

## Text Slots

<ApiTable title="Text Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Text content'],
    ]">
</ApiTable>
