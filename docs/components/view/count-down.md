---
title: Shadcn CountDown
---

# 介绍

This document is mainly used to describe some features and usage of the ShadcnCountDown component.

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnCountDown :time="new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)" />
</CodeRunner>

:::

::: details 查看代码

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

::: details 查看代码

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

::: details 查看代码

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

::: details 查看代码

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

::: details 查看代码

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

::: details 查看代码

```vue
<template>
  <ShadcnCountDown :time="new Date(Date.now() + 20 * 1000)" show-progress />
</template>
```

:::

## Custom Slots

::: raw

<CodeRunner title="Custom Slots">
  <div class="space-y-2">
    <ShadcnCard title="Custom Time Block">
      <ShadcnCountDown title="Activity events" :time="new Date(Date.now() + 6 * 1000)">
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
    <ShadcnCard title="Custom Label">
      <ShadcnCountDown title="Activity events" :time="new Date(Date.now() + 6 * 1000)">
        <template #days-label>
          <span class="text-sm mt-2 text-blue-500">DAYS</span>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>
    <ShadcnCard title="Custom Full">
      <ShadcnCountDown :time="new Date(Date.now() + 6 * 1000)">
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
    <ShadcnCard title="Custom Time Block">
      <ShadcnCountDown title="Activity events" :time="new Date(Date.now() + 6 * 1000)">
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

    <ShadcnCard title="Custom Label">
      <ShadcnCountDown title="Activity events" :time="new Date(Date.now() + 6 * 1000)">
        <template #days-label>
          <span class="text-sm mt-2 text-blue-500">DAYS</span>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>

    <ShadcnCard title="Custom Full">
      <ShadcnCountDown :time="new Date(Date.now() + 6 * 1000)">
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

## Count Down Props

<ApiTable title="Props"
    :headers="['属性', '描述', '类型', '默认值']"
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
    :headers="['Slot', 'Description', 'Params']"
    :columns="[
        ['title', 'Count down content', '-'],
        ['blocks', 'Count down blocks', '{ timeLeft, isWarning, isCompleted, isPaused }'],
        ['days', 'Days block content', '{ timeLeft, isWarning, isCompleted, isPaused }'],
        ['hours', 'Hours block content', '{ timeLeft, isWarning, isCompleted, isPaused }'],
        ['minutes', 'Minutes block content', '{ timeLeft, isWarning, isCompleted, isPaused }'],
        ['seconds', 'Seconds block content', '{ timeLeft, isWarning, isCompleted, isPaused }'],
        ['days-label', 'Days label content', '-'],
        ['hours-label', 'Hours label content', '-'],
        ['minutes-label', 'Minutes label content', '-'],
        ['seconds-label', 'Seconds label content', '-']
    ]">
</ApiTable>

## Count Down Events

<ApiTable title="Events"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-complete', 'Triggered when the count down is finished', 'void'],
    ]">
</ApiTable>
