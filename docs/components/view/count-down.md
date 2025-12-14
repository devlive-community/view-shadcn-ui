---
title: 倒计时 (Count Down)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnCountDown` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)"  :dark="darkMode" />
</template>
```

:::

## 简洁 (simple)

::: raw

<CodeRunner title="简洁 (simple)">
    <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" simple  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" simple  :dark="darkMode" />
</template>
```

:::

## 标题 (title)

::: raw

<CodeRunner title="标题 (title)">
    <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" title="Count Down"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" title="Count Down"  :dark="darkMode" />
</template>
```

:::

## 工具栏 (toolbar)

::: raw

<CodeRunner title="工具栏 (toolbar)">
    <ShadcnCountDown title="Count Down" toolbar :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnCountDown title="Count Down" toolbar :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" :dark="darkMode" />
</template>
```

:::

## 预警阈值 (warning-threshold)

::: raw

<CodeRunner title="预警阈值 (warning-threshold)">
    <ShadcnCountDown :time="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)" warning-threshold="2"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)" warning-threshold="2"  :dark="darkMode" />
</template>
```

:::

## 显示进度 (show-progress)

::: raw

<CodeRunner title="显示进度 (show-progress)">
    <ShadcnCountDown :time="new Date(Date.now() + 20 * 1000)" show-progress  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 20 * 1000)" show-progress  :dark="darkMode" />
</template>
```

:::

## 自定义 (slots)

::: raw

<CodeRunner title="自定义 (slots)">
  <div class="space-y-2">
    <ShadcnCard title="Custom Time Block" :dark="darkMode">
      <ShadcnCountDown title="Activity events" :time="new Date(Date.now() + 6 * 1000)" :dark="darkMode">
        <template #days="{ value, isWarning }">
          <div class="flex flex-col items-center">
            <div class="text-5xl font-bold" :class="{ 'text-red-500': isWarning }">
              {{ value }}
            </div>
            <div class="text-sm">Days Left</div>
          </div>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>
    <ShadcnCard title="Custom Label" :dark="darkMode">
      <ShadcnCountDown title="Activity events" :time="new Date(Date.now() + 6 * 1000)" :dark="darkMode">
        <template #days-label>
          <span class="text-sm mt-2 text-blue-500">DAYS</span>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>
    <ShadcnCard title="Custom Full" :dark="darkMode">
      <ShadcnCountDown :time="new Date(Date.now() + 6 * 1000)" :dark="darkMode">
        <template #blocks="{ timeLeft, isWarning }">
          <div class="flex flex-col gap-2">
            <div class="text-2xl" :class="{ 'text-red-500': isWarning }">
              Time Left: {{ timeLeft.days }} D
            </div>
            <div class="flex gap-2">
              <span>{{ timeLeft.hours }} H</span>
              <span>{{ timeLeft.minutes }} M</span>
              <span>{{ timeLeft.seconds }} S</span>
            </div>
          </div>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="space-y-2">
    <ShadcnCard title="Custom Time Block" :dark="darkMode">
      <ShadcnCountDown title="Activity events" :time="new Date(Date.now() + 6 * 1000)" :dark="darkMode">
        <template #days="{ value, isWarning }">
          <div class="flex flex-col items-center">
            <div class="text-5xl font-bold" :class="{ 'text-red-500': isWarning }">
              {{ value }}
            </div>
            <div class="text-sm">Days Left</div>
          </div>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>

    <ShadcnCard title="Custom Label" :dark="darkMode">
      <ShadcnCountDown title="Activity events" :time="new Date(Date.now() + 6 * 1000)" :dark="darkMode">
        <template #days-label>
          <span class="text-sm mt-2 text-blue-500">DAYS</span>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>

    <ShadcnCard title="Custom Full" :dark="darkMode">
      <ShadcnCountDown :time="new Date(Date.now() + 6 * 1000)" :dark="darkMode">
        <template #blocks="{ timeLeft, isWarning }">
          <div class="flex flex-col gap-2">
            <div class="text-2xl" :class="{ 'text-red-500': isWarning }">
              Time Left: {{ timeLeft.days }} D
            </div>
            <div class="flex gap-2">
              <span>{{ timeLeft.hours }} H</span>
              <span>{{ timeLeft.minutes }} M</span>
              <span>{{ timeLeft.seconds }} S</span>
            </div>
          </div>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>
  </div>
</template>
```

:::

## 倒计时 (Count Down) 属性

<ApiTable title="倒计时 (Count Down) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['progress', '进度倒计时，支持 <code>v-model:progress</code>', 'number', '-'],
        ['time', '倒计时结束时间', 'date', '-'],
        ['simple', '简洁模式', 'boolean', 'false'],
        ['title', '倒计时的标题，仅在 <code>simple</code> 为 false 时有效', 'string', '-'],
        ['toolbar', '是否显示工具栏', 'boolean', 'false'],
        ['warningThreshold', '倒计时的警告阈值，仅在 <code>simple</code> 为 false 时有效', 'number', '5'],
        ['showProgress', '是否显示进度', 'boolean', 'false'],
    ]">
</ApiTable>

## 倒计时 (Count Down) 插槽

<ApiTable title="倒计时 (Count Down) 插槽"
    :headers="['插槽', '描述', '回调参数']"
    :columns="[
        ['title', '组件标题', '-'],
        ['blocks', '倒计时块', '{ timeLeft, isWarning, isCompleted, isPaused }'],
        ['days', '倒计时天数', '{ timeLeft, isWarning, isCompleted, isPaused }'],
        ['hours', '倒计时小时', '{ timeLeft, isWarning, isCompleted, isPaused }'],
        ['minutes', '倒计时分钟', '{ timeLeft, isWarning, isCompleted, isPaused }'],
        ['seconds', '倒计时秒数', '{ timeLeft, isWarning, isCompleted, isPaused }'],
        ['days-label', '倒计时天数标签', '-'],
        ['hours-label', '倒计时小时标签', '-'],
        ['minutes-label', '倒计时分钟标签', '-'],
        ['seconds-label', '倒计时秒数标签', '-']
    ]">
</ApiTable>

## 倒计时 (Count Down) 事件

<ApiTable title="倒计时 (Count Down) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-complete', '倒计时完成时触发', 'void'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>
