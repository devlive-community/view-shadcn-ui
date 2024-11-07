---
tite: Shadcn Gradient Text
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnGradientText component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnGradientText>This is a gradient text</ShadcnGradientText>
    <br/>
    <ShadcnGradientText from="red" to="blue" deg="200">This is a gradient text</ShadcnGradientText>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnGradientText>This is a gradient text</ShadcnGradientText>
  <br/>
  <ShadcnGradientText from="red" to="blue" deg="200">This is a gradient text</ShadcnGradientText>
</template>
```

:::

## Options

::: raw

<CodeRunner title="Options">
    <ShadcnGradientText options="45deg, red 0 50%, blue 50% 100%">This is a gradient text</ShadcnGradientText>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnGradientText options="45deg, red 0 50%, blue 50% 100%">This is a gradient text</ShadcnGradientText>
</template>
```

:::

## Gradient Text Props

<ApiTable title="Gradient Text Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['from', 'The from color of the gradient text', 'string', 'red'],
        ['to', 'The to color of the gradient text', 'string', 'blue'],
        ['deg', 'The degree of the gradient text', 'Number', '100', '-'],
        ['options', 'The options of the gradient text, eg: <code>45deg, red 0 50%, blue 50% 100%</code>', 'string', '-', '-'],
    ]">
</ApiTable>

## Text Slots

<ApiTable title="Text Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Text content'],
    ]">
</ApiTable>
