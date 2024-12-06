---
title: Shadcn CountDown
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnCountDown component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" />
</template>
```

:::

## Simple

::: raw

<CodeRunner title="Simple">
    <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" simple />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" simple />
</template>
```

:::

## Title

::: raw

<CodeRunner title="Title">
    <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" title="Count Down" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" title="Count Down" />
</template>
```

:::

## Toolbar

::: raw

<CodeRunner title="Toolbar">
    <ShadcnCountDown title="Count Down" toolbar :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnCountDown title="Count Down" toolbar :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)"/>
</template>
```

:::

## Warning Threshold

::: raw

<CodeRunner title="Warning Threshold">
    <ShadcnCountDown :time="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)" warning-threshold="2" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)" warning-threshold="2" />
</template>
```

:::

## Show Progress

::: raw

<CodeRunner title="Show Progress">
    <ShadcnCountDown :time="new Date(Date.now() + 20 * 1000)" show-progress />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 20 * 1000)" show-progress />
</template>
```

:::

## Count Down Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['progress', 'The progress of the count down, support <code>v-model:progress</code>', 'number', ''],
        ['time', 'The time of the count down', 'date', ''],
        ['simple', 'Whether to display the simple version', 'boolean', 'false'],
        ['title', 'The title of the count down, only valid when <code>simple</code> is false', 'string', ''],
        ['toolbar', 'Whether to display the toolbar', 'boolean', 'false'],
        ['warningThreshold', 'The warning threshold of the count down, only valid when <code>simple</code> is false', 'number', '5'],
        ['showProgress', 'Whether to display the progress bar', 'boolean', 'false'],
    ]">
</ApiTable>

## Count Down Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['title', 'Count down content'],
    ]">
</ApiTable>

## Count Down Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-complete', 'Triggered when the count down is finished', 'void'],
    ]">
</ApiTable>
