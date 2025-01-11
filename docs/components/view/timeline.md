---
title: 时间线 (Timeline)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTimeline` 组件的一些特性和用法。

## 用法

::: raw

<CodeRunner title="用法">
    <ShadcnTimeline>
        <ShadcnTimelineItem title="Title 1">Content 1</ShadcnTimelineItem>
        <ShadcnTimelineItem title="Title 2">Content 2</ShadcnTimelineItem>
        <ShadcnTimelineItem title="Title 3">Content 3</ShadcnTimelineItem>
    </ShadcnTimeline>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimeline>
        <ShadcnTimelineItem title="Title 1">Content 1</ShadcnTimelineItem>
        <ShadcnTimelineItem title="Title 2">Content 2</ShadcnTimelineItem>
        <ShadcnTimelineItem title="Title 3">Content 3</ShadcnTimelineItem>
    </ShadcnTimeline>
</template>

<script setup lang="ts">
</script>
```

:::

## 讨论布局 (discussion)

::: raw

<CodeRunner title="讨论布局 (discussion)">
    <ShadcnTimeline>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white shadow md:order-1">
            <svg class="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">opened</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a opened step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path class="fill-slate-300"
                    d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"/>
              <path class="fill-slate-500"
                    d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">completed</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a completed step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white shadow md:order-1">
            <svg class="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">closed</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a closed step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
    </ShadcnTimeline>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimeline>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white shadow md:order-1">
            <svg class="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">opened</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a opened step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path class="fill-slate-300"
                    d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"/>
              <path class="fill-slate-500"
                    d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">completed</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a completed step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white shadow md:order-1">
            <svg class="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">closed</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a closed step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
    </ShadcnTimeline>
</template>

<script setup lang="ts">
</script>
```

:::

## 拆分 (split)

::: raw

<CodeRunner title="拆分 (split)">
    <ShadcnTimeline split>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white shadow md:order-1">
            <svg class="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">opened</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a opened step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path class="fill-slate-300"
                    d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"/>
              <path class="fill-slate-500"
                    d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">completed</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a completed step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white shadow md:order-1">
            <svg class="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">closed</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a closed step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
    </ShadcnTimeline>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnTimeline split>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white shadow md:order-1">
            <svg class="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">opened</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a opened step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path class="fill-slate-300"
                    d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"/>
              <path class="fill-slate-500"
                    d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">completed</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a completed step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
      <ShadcnTimelineItem>
        <template #dot>
          <div class="flex items-center justify-center rounded-full bg-white shadow md:order-1">
            <svg class="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
            </svg>
          </div>
        </template>
        <div class="flex items-center mb-3">
          <div class="flex items-center space-x-4">
            <time class="font-caveat font-medium text-xl text-indigo-500">10:00 AM</time>
          </div>
          <div class="text-slate-500 ml-3">closed</div>
        </div>
        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
          This is a closed step, you can add more information here.
        </div>
      </ShadcnTimelineItem>
    </ShadcnTimeline>
</template>

<script setup lang="ts">
</script>
```

:::

## 时间线 (Timeline) 属性

<ApiTable title="时间线 (Timeline) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['split', '是否拆分，拆分后将分为左右两列', 'boolean', 'false'],
    ]">
</ApiTable>