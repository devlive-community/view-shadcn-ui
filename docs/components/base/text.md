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

## Strong

::: raw

<CodeRunner title="Strong">
      <ShadcnText strong color="#18A058">#18A058</ShadcnText>
      <ShadcnText strong color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText strong color="#EF4444">#EF4444</ShadcnText>
</CodeRunner>

:::

::: details Show code

```vue
<template>
      <ShadcnText strong color="#18A058">#18A058</ShadcnText>
      <ShadcnText strong color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText strong color="#EF4444">#EF4444</ShadcnText>
</template>
```

:::

## Italic

::: raw

<CodeRunner title="Italic">
      <ShadcnText italic color="#18A058">#18A058</ShadcnText>
      <ShadcnText italic color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText italic color="#EF4444">#EF4444</ShadcnText>
</CodeRunner>

:::

::: details Show code

```vue
<template>
      <ShadcnText italic color="#18A058">#18A058</ShadcnText>
      <ShadcnText italic color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText italic color="#EF4444">#EF4444</ShadcnText>
</template>
```

:::

## Underline

::: raw

<CodeRunner title="Underline">
      <ShadcnText underline color="#18A058">#18A058</ShadcnText>
      <ShadcnText underline color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText underline color="#EF4444">#EF4444</ShadcnText>
</CodeRunner>

:::

::: details Show code

```vue
<template>
      <ShadcnText underline color="#18A058">#18A058</ShadcnText>
      <ShadcnText underline color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText underline color="#EF4444">#EF4444</ShadcnText>
</template>
```

:::

## Delete

::: raw

<CodeRunner title="Delete">
      <ShadcnText deleted color="#18A058">#18A058</ShadcnText>
      <ShadcnText deleted color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText deleted color="#EF4444">#EF4444</ShadcnText>
</CodeRunner>

:::

::: details Show code

```vue
<template>
      <ShadcnText deleted color="#18A058">#18A058</ShadcnText>
      <ShadcnText deleted color="#F59E0B">#F59E0B</ShadcnText>
      <ShadcnText deleted color="#EF4444">#EF4444</ShadcnText>
</template>
```

:::

## Type

::: raw

<CodeRunner title="Type">
    <div class="space-x-2">
        <ShadcnText type="code">Code</ShadcnText>
        <ShadcnText type="pre">Pre</ShadcnText>
        <ShadcnText type="p">P</ShadcnText>
        <ShadcnText type="small">Small</ShadcnText>
        <ShadcnText type="h1">H1</ShadcnText>
        <ShadcnText type="h2">H2</ShadcnText>
        <ShadcnText type="h3">H3</ShadcnText>
        <ShadcnText type="h4">H4</ShadcnText>
        <ShadcnText type="h5">H5</ShadcnText>
        <ShadcnText type="h6">H6</ShadcnText>
        <ShadcnText type="label">Label</ShadcnText>
        <ShadcnText type="span">Span</ShadcnText>
    </div>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <div class="space-x-2">
        <ShadcnText type="code">Code</ShadcnText>
        <ShadcnText type="pre">Pre</ShadcnText>
        <ShadcnText type="p">P</ShadcnText>
        <ShadcnText type="small">Small</ShadcnText> 
        <ShadcnText type="h1">H1</ShadcnText>
        <ShadcnText type="h2">H2</ShadcnText>
        <ShadcnText type="h3">H3</ShadcnText>
        <ShadcnText type="h4">H4</ShadcnText>
        <ShadcnText type="h5">H5</ShadcnText>
        <ShadcnText type="h6">H6</ShadcnText>
        <ShadcnText type="label">Label</ShadcnText>
        <ShadcnText type="span">Span</ShadcnText>
    </div>
</template>
```

:::

## Text Props

<ApiTable title="Text Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['colorType', 'The color type of the text', 'enum', 'default', 'default | primary | success | warning | error'],
        ['color', 'The color of the text, if set colorType will be ignored', 'string', 'default', '-'],
        ['strong', 'Whether the text is strong', 'boolean', 'false', '-'],
        ['italic', 'Whether the text is italic', 'boolean', 'false', '-'],
        ['underline', 'Whether the text is underlined', 'boolean', 'false', '-'],
        ['deleted', 'Whether the text is deleted', 'boolean', 'false', '-'],
        ['type', 'The type of the text', 'enum', 'p', 'p | code | pre | small | h1 | h2 | h3 | h4 | h5 | h6 | label | span'],
    ]">
</ApiTable>

## Text Slots

<ApiTable title="Text Slots"
    :headers="['Slot', 'Description']"
    :columns="[ 
        ['default', 'Text content'],
    ]">
</ApiTable>
