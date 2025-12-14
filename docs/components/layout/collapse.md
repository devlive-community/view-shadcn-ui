---
title: 折叠 (Collapse)
---

# 介绍

<br />

本文档主要介绍 `ShadcnCollapse` 组件的一些特性和用法。

## 用法

:::raw

<CodeRunner title="用法">
    <ShadcnCollapse class="w-full" v-model="expandedItems" :dark="darkMode">
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

## 手风琴 (accordion)

:::raw

<CodeRunner title="手风琴 (accordion)">
    <ShadcnCollapse class="w-full" v-model="expandedItems" accordion :dark="darkMode">
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

## 折叠 (Collapse) 属性

<ApiTable title="折叠 (Collapse) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['modelValue', '当前选中的值', 'any\[\]', '-'],
        ['accordion', '手风琴模式', 'boolean', 'false'],
    ]">
</ApiTable>

## 折叠节点 (Collapse Item) 属性

<ApiTable title="折叠节点 (Collapse Item) 属性"
    :headers="['属性', '描述', '类型']"
    :columns="[
        ['title', '折叠项目的标题', 'string'],
        ['name', '折叠项的名称', 'string'],
    ]">
</ApiTable>

## 折叠 (Collapse) 插槽

<ApiTable title="折叠 (Collapse) 插槽"
    :headers="['属性', '描述', '类型']"
    :columns="[
        ['title', '折叠项目的标题', 'string'],
    ]">
</ApiTable>

## 折叠 (Collapse) 事件

<ApiTable title="折叠 (Collapse) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '选中项发生变化时触发', 'any\[\]'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'

const expandedItems = ref<string[]>([])

import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>