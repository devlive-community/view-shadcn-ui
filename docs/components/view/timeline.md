---
title: Shadcn Timeline
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnTimeline component.

- ShadcnTimeline
- ShadcnTimelineItem

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnTimeline>
        <ShadcnTimelineItem title="Title 1">Content 1</ShadcnTimelineItem>
        <ShadcnTimelineItem title="Title 2">Content 2</ShadcnTimelineItem>
        <ShadcnTimelineItem title="Title 3">Content 3</ShadcnTimelineItem>
    </ShadcnTimeline>
</CodeRunner>

:::

::: details Show code

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

## Discussion

::: raw

<CodeRunner title="Discussion">
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

::: details Show code

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

## Split

::: raw

<CodeRunner title="Discussion">
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

::: details Show code

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

## Props

<ApiTable title="Timeline Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['split', 'The split of the timeline', 'Boolean', 'false'],
    ]">
</ApiTable>
