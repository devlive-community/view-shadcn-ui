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
<ShadcnCountDown :time="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)" />
```

:::

## Count Down Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['time', 'The time of the count down', 'Date', ''],
    ]">
</ApiTable>
