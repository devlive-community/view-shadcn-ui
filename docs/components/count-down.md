---
title: Shadcn CountDown
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnCountDown component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnCountDown :time="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)" />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)" />
</template>
```

:::

## Simple

::: raw

<CodeRunner title="Simple">
    <ShadcnCountDown :time="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)" simple />
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)" simple />
</template>
```

:::

## Count Down Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['time', 'The time of the count down', 'date', ''],
        ['simple', 'Whether to display the simple version', 'boolean', 'false'],
    ]">
</ApiTable>

## Count Down Events

<ApiTable title="Events"
    :headers="['Event', 'Description', 'Callback Parameters']"
    :columns="[
        ['on-complete', 'Triggered when the count down is finished', 'void'],
    ]">
</ApiTable>
