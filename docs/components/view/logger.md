---
title: 日志 (Logger)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnLogger` 组件的使用方法和特性。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnLogger :items="generateMockLogs(10)" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnLogger :items="items" :dark="darkMode" />
</template>
```

:::

## 高亮 (highlight)

::: raw

<CodeRunner title="高亮 (highlight)">
    <ShadcnLogger :items="generateMockLogs(10)" :highlight-config="{ INFO: 'green', WARN: 'yellow', ERROR: 'red', DEBUG: 'blue', TRACE: 'cyan', FATAL: 'red' }" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnLogger :items="items" :highlight-config="{ INFO: 'green', WARN: 'yellow', ERROR: 'red', DEBUG: 'blue', TRACE: 'cyan', FATAL: 'red' }" :dark="darkMode" />
</template>
```

:::

## 高度 (height)

::: raw

<CodeRunner title="高度 (height)">
    <ShadcnLogger :items="generateMockLogs(10)" :height="300" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnLogger :items="items" :height="200" :dark="darkMode" />
</template>
```

:::

## 工具栏 (toolbar)

::: raw

<CodeRunner title="工具栏 (toolbar)">
    <ShadcnLogger :items="generateMockLogs(10)" toolbar :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnLogger :items="items" toolbar :dark="darkMode" />
</template>
```

:::

## 忽略大小写 (case-sensitive)

::: raw

<CodeRunner title="忽略大小写 (case-sensitive)">
    <ShadcnLogger :items="generateMockLogs(10)" toolbar case-sensitive  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnLogger :items="items" toolbar case-sensitive :dark="darkMode" />
</template>
```

:::

## 日志 (Logger) 属性

<ApiTable title="日志 (Logger) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['items', '组件的数据', 'array<string>', '\[\]'],
        ['highlightConfig', '高亮配置', 'object', '{ WARN: \'rgb(234 179 8)\', ERROR: \'rgb(239 68 68)\', DEBUG: \'rgb(107 114 128)\', TRACE: \'rgb(156 163 175)\'}'],
        ['height', '组件的高度', 'string | number', '200'],
        ['toolbar', '是否显示工具栏', 'boolean', 'false'],
        ['caseSensitive', '是否忽略大小写', 'boolean', 'false'],
        ['customPatterns', '自定义正则表达式', 'object', '{  <br />timestamp: [/^(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2},\d{3})/], <br />level: [/\b(INFO|ERROR|WARN|DEBUG)\b/],  <br />thread: [/\[(pool-\d+-thread-\d+)\]/],  <br />file: [/\[([^[\]]+\.java:\d+)\]/] <br />}']
    ]">
</ApiTable>

## 日志 (Logger) 插槽

<ApiTable title="日志 (Logger) 插槽"
    :headers="['插槽', '描述', '回调参数']"
    :columns="[
        ['content', '日志内容', 'item']
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

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