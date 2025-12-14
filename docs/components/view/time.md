---
title: 时间 (Time)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTime` 组件的特性和用法。本组件是基于 [Day.js](https://day.js.org/) 的封装,支持格式化、时区、相对时间和参考时间等功能。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnTime  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTime  :dark="darkMode" />
</template>
```

:::

## 格式化 (format)

::: raw

<CodeRunner title="格式化">
    <ShadcnTime format="YYYY-MM-DD"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnTime format="YYYY-MM-DD"  :dark="darkMode" />
</template>
```

:::

## 时区 (timezone)

::: raw

<CodeRunner title="时区">
    <ShadcnTime timezone="America/New_York"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnTime timezone="America/New_York"  :dark="darkMode" />
</template>
```

:::

## 相对时间 (relative)

::: raw

<CodeRunner title="相对时间">
    <ShadcnTime relative  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTime relative  :dark="darkMode" />
</template>
```

:::

## 参考时间 (referenceTime)

::: raw

<CodeRunner title="参考时间">
    <p class="text-sm text-gray-500 mb-1">相对于过去时间 (10分钟前): <ShadcnTime relative :reference-time="tenMinutesAgo" :dark="darkMode" /></p>
    <p class="text-sm text-gray-500 mb-1">相对于未来时间 (一小时后): <ShadcnTime relative :reference-time="oneHourLater" :dark="darkMode" /></p>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnTime relative :reference-time="tenMinutesAgo" :dark="darkMode" />
  <ShadcnTime relative :reference-time="oneHourLater" :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

  import { computed } from 'vue'

  const tenMinutesAgo = computed(() => {
    const date = new Date()
    date.setMinutes(date.getMinutes() - 10)
    return date
  })

  const oneHourLater = computed(() => {
    const date = new Date()
    date.setHours(date.getHours() + 1)
    return date
  })
</script>
```

:::

## 更新间隔 (interval)

::: raw

<CodeRunner title="更新间隔">
    <p class="text-sm text-gray-500 mb-1">自定义更新间隔 (5秒):
      <ShadcnTime relative :interval="5000" @on-change="handleIntervalChange" :dark="darkMode" />
      <div v-if="lastIntervalChange">
        上次更新: {{ lastIntervalChange }}
      </div>
    </p>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <p class="text-sm text-gray-500 mb-1">自定义更新间隔 (5秒):
    <ShadcnTime relative :interval="5000" @on-change="handleIntervalChange" :dark="darkMode" />
    <div v-if="lastIntervalChange">
      上次更新: {{ lastIntervalChange }}
    </div>
  </p>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

  import { ref } from 'vue'

  const lastIntervalChange = ref('')

  const handleIntervalChange = (time: Date) => {
    lastIntervalChange.value = new Date(time).toLocaleTimeString()
  }
</script>
```

:::

## 时间 (Time) 属性

<ApiTable title="时间 (Time) 属性"
:headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['format', '显示时间的格式字符串', 'string', 'HH:mm:ss'],
        ['timezone', '时区，格式为 America/New_York', 'string', 'undefined'],
        ['relative', '是否启用相对时间，默认是当前时间', 'boolean', 'false'],
        ['referenceTime', '相对时间显示的参考时间，只有启用相对时间生效', 'Date | string | number', '-'],
        ['interval', '更新间隔(毫秒)', 'number', '1000']
    ]">
</ApiTable>

## 时间 (Time) 事件

<ApiTable title="时间 (Time) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '时间更改时触发', 'time: Date']
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { computed, ref } from 'vue'

const lastIntervalChange = ref('')

const handleIntervalChange = (time: Date) => {
lastIntervalChange.value = new Date(time).toLocaleTimeString()
}

const tenMinutesAgo = computed(() => {
  const date = new Date()
  date.setMinutes(date.getMinutes() - 10)
  return date
})

const oneHourLater = computed(() => {
  const date = new Date()
  date.setHours(date.getHours() + 1)
  return date
})
</script>