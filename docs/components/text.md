---
title: Shadcn Text
---

This document is mainly used to describe some features and usage of the ShadcnText component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnText color-type="default">Default</ShadcnText>
    <ShadcnText color-type="primary">Primary</ShadcnText>
    <ShadcnText color-type="success">Success</ShadcnText>
    <ShadcnText color-type="warning">Warning</ShadcnText>
    <ShadcnText color-type="error">Error</ShadcnText>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnText color-type="default">Default</ShadcnText>
    <ShadcnText color-type="primary">Primary</ShadcnText>
    <ShadcnText color-type="success">Success</ShadcnText>
    <ShadcnText color-type="warning">Warning</ShadcnText>
    <ShadcnText color-type="error">Error</ShadcnText>
</template>
```

:::

## Color

::: raw

<CodeRunner title="Color">
      <ShadcnText color="#18A058">#18A058</ShadcnText>
      <ShadcnText color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText color="#EF4444">#EF4444</ShadcnText>
      <ShadcnText color="rgba(43, 79, 81, 1)">rgba(43, 79, 81, 1)</ShadcnText>
      <ShadcnText color="rgba(43, 79, 81, 0.5)">rgba(43, 79, 81, 0.5)</ShadcnText>
      <ShadcnText color="rgba(43, 22, 81, 0.5)">rgba(43, 22, 81, 0.5)</ShadcnText>
      <ShadcnText color="red">red</ShadcnText>
      <ShadcnText color="blue">blue</ShadcnText>
      <ShadcnText color="green">green</ShadcnText>
</CodeRunner>

:::

::: details Show code

```vue
<template>
      <ShadcnText color="#18A058">#18A058</ShadcnText>
      <ShadcnText color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText color="#EF4444">#EF4444</ShadcnText>
      <ShadcnText color="rgba(43, 79, 81, 1)">rgba(43, 79, 81, 1)</ShadcnText>
      <ShadcnText color="rgba(43, 79, 81, 0.5)">rgba(43, 79, 81, 0.5)</ShadcnText>
      <ShadcnText color="rgba(43, 22, 81, 0.5)">rgba(43, 22, 81, 0.5)</ShadcnText>
      <ShadcnText color="red">red</ShadcnText>
      <ShadcnText color="blue">blue</ShadcnText>
      <ShadcnText color="green">green</ShadcnText>
</template>
```

:::

## Text Props

<ApiTable title="Text Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['colorType', 'The color type of the text', 'enum', 'default', 'default | primary | success | warning | error'],
        ['color', 'The color of the text, if set colorType will be ignored', 'string', 'default', '-'],
    ]">
</ApiTable>

## Text Slots

<ApiTable title="Text Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Text content'],
    ]">
</ApiTable>
