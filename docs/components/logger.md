---
title: Shadcn Logger
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnLogger component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnLogger :items="generateMockLogs(10)"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnLogger :items="items"/>
</template>
```

:::

## Highlight

::: raw

<CodeRunner title="Highlight">
    <ShadcnLogger :items="generateMockLogs(10)" :highlight-config="{ INFO: 'green', WARN: 'yellow', ERROR: 'red', DEBUG: 'blue', TRACE: 'cyan', FATAL: 'red' }"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnLogger :items="items" :highlight-config="{ INFO: 'green', WARN: 'yellow', ERROR: 'red', DEBUG: 'blue', TRACE: 'cyan', FATAL: 'red' }"/>
</template>
```

:::

## Height

::: raw

<CodeRunner title="Height">
    <ShadcnLogger :items="generateMockLogs(10)" :height="300"/>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnLogger :items="items" :height="200"/>
</template>
```

:::

## Logger Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['items', 'The items of the logger', 'array<string>', '\[\]'],
        ['highlightConfig', 'The highlight config of the logger', 'object', '{ WARN: \'rgb(234 179 8)\', ERROR: \'rgb(239 68 68)\', DEBUG: \'rgb(107 114 128)\', TRACE: \'rgb(156 163 175)\'}'],
        ['height', 'The height of the logger', 'string | number', '200']
    ]">
</ApiTable>

## Logger Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description', 'Props']"
    :columns="[
        ['content', 'The content of each item of the logger', 'item']
    ]">
</ApiTable>

<script setup lang="ts">
const generateMockLogs = (count: number = 100): string[] => {
  const generateTimestamp = (i: number) => {
    const date = new Date('2024-12-04T23:14:24.742Z')
    date.setSeconds(date.getSeconds() + i)
    return date.toISOString()
               .replace('T', ' ')
               .replace('Z', '')
               .replace(/\.\d+$/, `,${ Math.floor(Math.random() * 1000).toString().padStart(3, '0') }`)
  }

  const generateLevel = () => {
    const levels = ['INFO', 'WARN', 'ERROR', 'DEBUG', 'TRACE', 'FATAL']
    return levels[Math.floor(Math.random() * levels.length)]
  }

  const generateThread = () => {
    const prefixes = ['main', 'worker', 'async', 'pool', 'executor', 'scheduler']
    const suffix = Math.floor(Math.random() * 10)
    return `${ prefixes[Math.floor(Math.random() * prefixes.length)] }-${ suffix }`
  }

  const generateLogger = () => {
    const domains = ['com', 'io', 'org', 'net']
    const companies = ['zaxxer', 'edurt', 'apache', 'spring']
    const components = ['hikari', 'datacap', 'utils', 'core', 'service']
    const classes = ['DataSource', 'Configuration', 'Utils', 'Manager', 'Handler']

    return [
      domains[Math.floor(Math.random() * domains.length)],
      companies[Math.floor(Math.random() * companies.length)],
      components[Math.floor(Math.random() * components.length)],
      classes[Math.floor(Math.random() * classes.length)]
    ].join('.')
  }

  const generateFile = () => {
    const files = ['DataSource', 'Utils', 'Configuration', 'Manager', 'Handler', 'Service']
    const line = Math.floor(Math.random() * 500) + 1
    return `${ files[Math.floor(Math.random() * files.length)] }.java:${ line }`
  }

  const generateMessage = () => {
    const actions = ['Started', 'Completed', 'Failed', 'Processing', 'Initialized']
    const objects = ['connection', 'transaction', 'request', 'process', 'task']
    const details = [
      'with configuration from: /path/to/config',
      'in 2.5 seconds',
      'due to timeout',
      'with 3 retries',
      'successfully'
    ]

    return `${ actions[Math.floor(Math.random() * actions.length)] } ${
        objects[Math.floor(Math.random() * objects.length)] } ${
        details[Math.floor(Math.random() * details.length)] }`
  }

  return Array.from({ length: count }, (_, i) => {
    return `${ generateTimestamp(i) } ${ generateLevel() } [${ generateThread() }] ${ generateLogger() } [${ generateFile() }] ${ generateMessage() }`
  })
}
</script>
