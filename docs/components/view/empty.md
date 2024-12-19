---
title: Shadcn Empty
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnEmpty component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnEmpty />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnEmpty />
</template>
```

:::

## Custom Slot

::: raw

<CodeRunner title="Custom Slot">
  <ShadcnEmpty>
    <template #image>
      <ShadcnIcon icon="User" size="80"/>
    </template>
    <template #title>
      <h3 class="text-lg font-semibold">Custom Title</h3>
    </template>
    <template #description>
      <p>Custom Description</p>
    </template>
    <template #actions>
      <div class="flex gap-2">
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
      </div>
    </template>
  </ShadcnEmpty>
</CodeRunner>

:::

::: details Show code

```vue
<template>
  <ShadcnEmpty>
    <template #image>
      <ShadcnIcon icon="User" size="80"/>
    </template>

    <template #title>
      <h3 class="text-lg font-semibold">Custom Title</h3>
    </template>

    <template #description>
      <p>Custom Description</p>
    </template>

    <template #actions>
      <div class="flex gap-2">
        <ShadcnButton>Button 1</ShadcnButton>
        <ShadcnButton>Button 2</ShadcnButton>
      </div>
    </template>
  </ShadcnEmpty>
</template>
```

:::

## Empty Slots

<ApiTable title="Slots"
    :headers="['Slot', 'Description']"
    :columns="[
        ['image', 'Image slot'],
        ['title', 'Title slot'],
        ['description', 'Description slot'],
        ['actions', 'The actions of the empty']
    ]">
</ApiTable>
