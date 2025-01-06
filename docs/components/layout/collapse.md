---
title: Shadcn Collapse
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnCollapse component.

- ShadcnCollapse
- ShadcnCollapseItem

## Usage

:::raw

<CodeRunner title="Usage">
    Default Value: {{ expandedItems }}
    <ShadcnCollapse class="w-full" v-model="expandedItems">
      <ShadcnCollapseItem title="Section 1" name="1">
        Content for section 1
      </ShadcnCollapseItem>
      <ShadcnCollapseItem title="Section 2" name="2">
        Content for section 2
      </ShadcnCollapseItem>
    </ShadcnCollapse>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnCollapse v-model="expandedItems">
    <ShadcnCollapseItem title="Section 1" name="1">
      Content for section 1
    </ShadcnCollapseItem>
    <ShadcnCollapseItem title="Section 2" name="2">
      Content for section 2
    </ShadcnCollapseItem>
  </ShadcnCollapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expandedItems = ref<string[]>([])
</script>
```

:::

## Accordion

:::raw

<CodeRunner title="Accordion">
    Default Value: {{ expandedItems }}
    <ShadcnCollapse class="w-full" v-model="expandedItems" accordion>
      <ShadcnCollapseItem title="Section 1" name="1">
        Content for section 1
      </ShadcnCollapseItem>
      <ShadcnCollapseItem title="Section 2" name="2">
        Content for section 2
      </ShadcnCollapseItem>
    </ShadcnCollapse>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnCollapse v-model="expandedItems" accordion>
    <ShadcnCollapseItem title="Section 1" name="1">
      Content for section 1
    </ShadcnCollapseItem>
    <ShadcnCollapseItem title="Section 2" name="2">
      Content for section 2
    </ShadcnCollapseItem>
  </ShadcnCollapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expandedItems = ref<string[]>([])
</script>
```

:::

## Collapse Props

<ApiTable title="Collapse Props"
    :headers="['属性', '描述', '类似', '默认值', '依赖', '支持列表']"
    :columns="[
        ['modelValue', 'You can use v-model to bind data in both directions', 'Any[]', '-', '-', '-'],
        ['accordion', 'Whether it is an accordion', 'boolean', 'false', '-', '-'],
    ]">
</ApiTable>

<br />

<ApiTable title="Collapse Item Props"
    :headers="['属性', '描述', '类似', '默认值', '依赖', '支持列表']"
    :columns="[
        ['title', 'The title of the collapse item', 'string', '-', '-', '-'],
        ['name', 'The name of the collapse item', 'string', '-', '-', '-'],
    ]">
</ApiTable>

## Collapse Slot

<ApiTable title="Collapse Item Slot"
    :headers="['属性', '描述', '类似', '默认值', '依赖', '支持列表']"
    :columns="[
        ['title', 'The title of the collapse item', 'string', '-', '-', '-'],
    ]">
</ApiTable>

## Collapse Events

<ApiTable title="Collapse Events"
    :headers="['Event', 'Description', 'Parameters']"
    :columns="[
        ['on-change', 'The event is triggered when the value changes', 'Any[]'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const expandedItems = ref<string[]>([])
</script>